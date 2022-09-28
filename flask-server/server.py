from flask import Flask, request, jsonify

app = Flask(__name__)

cam_list = [
    {
        "cctv": "CCTV BMO2 - E Camera 3",
        "id": 0,
        "ip": "10.1.73.20",
        "xcoordinate": "0.407222221",
        "ycoordinate": "0.546181858",
        "zcoordinate": "0.386315793"
    },
    {
        "cctv": "CCTV BMO2 - Blok [X]",
        "id": 1,
        "ip": "10.1.73.21",
        "xcoordinate": "0.407222222",
        "ycoordinate": "0.546181859",
        "zcoordinate": "0.386315794"
    },
    {
        "cctv": "CCTV BMO2 - 7West Camera 1",
        "id": 2,
        "ip": "10.1.73.22",
        "xcoordinate": "0.407222223",
        "ycoordinate": "0.546181860",
        "zcoordinate": "0.386315795"
    },
    {
        "cctv": "CCTV BMO2 - PIT E1",
        "id": 3,
        "ip": "10.1.73.23",
        "xcoordinate": "0.407222224",
        "ycoordinate": "0.546181861",
        "zcoordinate": "0.386315796"
    },
    {
        "cctv": "CCTV BMO2 - Low Wall Pit E",
        "id": 4,
        "ip": "10.1.73.24",
        "xcoordinate": "0.407222225",
        "ycoordinate": "0.546181862",
        "zcoordinate": "0.386315797"
    }
]

@app.route('/cam', methods=['GET', 'POST'])
def cams():
    if request.method == 'GET':
        if len(cam_list) > 0:
            return jsonify(cam_list)
        else:
            'Not Found', 404
    
    if request.method == 'POST':
        new_cctv = request.form['cctv']
        new_ip = request.form['ip']
        new_xcoordinate = request.form['xcoordinate']
        new_ycoordinate = request.form['ycoordinate']
        new_zcoordinate = request.form['zcoordinate']
        id = cam_list[-1]['id']+1

        new_obj = {
            'id' : id,
            'cctv' : new_cctv,
            'ip' : new_ip,
            'xcoordinate' : new_xcoordinate,
            'ycoordinate' : new_ycoordinate,
            'zcoordinate' : new_zcoordinate,
        }
        cam_list.append(new_obj)
        return jsonify(cam_list), 201


if __name__ == '__main__':
    app.run(debug=True)