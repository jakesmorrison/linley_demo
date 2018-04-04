from django.shortcuts import render
import subprocess
import pandas as pd
import json
from django.http import JsonResponse
import random

# Create your views here.

csv_path = "/home/micron/perf/demo.csv"
csv_path_2 = "/home/micron/perf/hammerdb.txt"

last_data = 0
def demo(request):
    context = {}
    return (render(request, 'demo/linely_demo.html', context))

def get_data_demo(request):
    # Get first value from file (header).
    cmd = "head -1 "+ csv_path
    first_data = subprocess.check_output('{}'.format(cmd), shell=True)
    first_data = first_data.decode("utf-8").replace("\n", "0").replace('"', "")
    first_data = first_data.split(",")

    # Get last value from file (most recent data).
    cmd = "tail -1 "+ csv_path
    last_data = subprocess.check_output('{}'.format(cmd), shell=True)
    last_data = last_data.decode("utf-8").replace("\n", "0")
    last_data = last_data.split(",")
    last_data = [int(x) for x in last_data]


    # Put into dataframe and rename columns.
    df = pd.DataFrame(data=last_data)
    df = df.transpose()
    df.columns = first_data

    # Node (processor socket).
    N_val = "0"
    # HomeAgent or Group of Memory Channels.
    H_val = "1"
    # Channel Number within Home Agent.
    C_val = "1"

    # Calculating values needed for plotting.
    # read_bw = (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[1]-Read"] * 64)
    # write_bw = (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[2]-Write"] * 64)
    read_bw = (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[1]-Read"] * 4) / (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[Fixed]-Clks"])
    write_bw = (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[2]-Write"] * 4) / (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[Fixed]-Clks"])
    # read_bw = (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[1]-Read"])
    # write_bw = (df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[2]-Write"])

    errors = float(df["iMC:N" + N_val + "_H" + H_val + "_C" + C_val + "[4]-Errs"].tolist()[0])

    # # Calculating SET per second.
    # cmd = "tail -1 "+ csv_path_2+"redis-perf-set.csv"
    # db_set = subprocess.check_output('{}'.format(cmd), shell=True)
    # db_set = db_set.decode("utf-8")
    # db_set = db_set.split(",")[1].strip()
    # db_set = float(db_set.replace('\"',""))
    #
    #
    # # Calculating SET per second.
    # cmd = "tail -1 "+ csv_path_2+"redis-perf-get.csv"
    # db_get = subprocess.check_output('{}'.format(cmd), shell=True)
    # db_get = db_get.decode("utf-8")
    # db_get = db_get.split(",")[1].strip()
    # db_get = float(db_get.replace('\"',""))

    # try:
    #     cmd = "redis-benchmark -q -c 50 -d 2 -n 5000 -t SET --csv"
    #     db_set = subprocess.check_output('{}'.format(cmd), shell=True)
    #     db_set = db_set.decode("utf-8")
    #     db_set = db_set.split(",")[1].strip()
    #     db_set = float(db_set.replace('\"', ""))
    #     last_data = db_set
    # except:
    #     db_set = last_data

    # cmd = "redis-benchmark -q -c 50 -d 2 -n 10000 -t GET --csv"
    # db_get = subprocess.check_output('{}'.format(cmd), shell=True)
    # db_get = db_get.decode("utf-8")
    # db_get = db_get.split(",")[1].strip()
    # db_get = float(db_get.replace('\"', ""))


    # Get db value from file (tail).
    cmd = "tail -1 "+ csv_path_2
    db_set = subprocess.check_output('{}'.format(cmd), shell=True)
    db_set = int(db_set.strip())


    context = {
        'read_bw': 100*float(read_bw),
        'write_bw': 100*float(write_bw),
        'tps': db_set/1000,
        'errors': int(errors)
    }
    return JsonResponse(json.loads(json.dumps(context)))