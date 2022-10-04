from flask import Flask, request, jsonify

app = Flask(__name__)

cam_list = [
    {
        "cctv": "CCTV BMO2 - E Camera 3",
        "id": 0,
        "no": 1,
        "ip": "10.1.73.20",
        "xcoordinate": "0.407222221",
        "ycoordinate": "0.546181858",
        "zcoordinate": "0.386315793"
    },
    {
        "cctv": "CCTV BMO2 - Blok [X]",
        "id": 1,
        "no": 1,
        "ip": "10.1.73.21",
        "xcoordinate": "0.407222222",
        "ycoordinate": "0.546181859",
        "zcoordinate": "0.386315794"
    },
    {
        "cctv": "CCTV BMO2 - 7West Camera 1",
        "id": 2,
        "no": 1,
        "ip": "10.1.73.22",
        "xcoordinate": "0.407222223",
        "ycoordinate": "0.546181860",
        "zcoordinate": "0.386315795"
    },
    {
        "cctv": "CCTV BMO2 - PIT E1",
        "id": 3,
        "no": 1,
        "ip": "10.1.73.23",
        "xcoordinate": "0.407222224",
        "ycoordinate": "0.546181861",
        "zcoordinate": "0.386315796"
    },
    {
        "cctv": "CCTV BMO2 - Low Wall Pit E",
        "id": 4,
        "no": 1,
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
        new_no = request.form['no']
        new_xcoordinate = request.form['xcoordinate']
        new_ycoordinate = request.form['ycoordinate']
        new_zcoordinate = request.form['zcoordinate']
        id = cam_list[-1]['id']+1

        new_obj = {
            'id': id,
            'cctv': new_cctv,
            'ip': new_ip,
            'no': new_no,
            'xcoordinate': new_xcoordinate,
            'ycoordinate': new_ycoordinate,
            'zcoordinate': new_zcoordinate,
        }
        cam_list.append(new_obj)
        return jsonify(cam_list), 201


notification_list = [
    {
        "cctv": "CCTV BMO2-7West Camera 1",
        "id": 0,
        "stats": "Butuh Validasi",
        "date": "Wed, 21 Sep 2022 04:50:27 GMT",
        "object": "HD"
    },
    {
        "cctv": "CCTV BMO2 - E Camera 3",
        "id": 1,
        "stats": "Butuh Validasi",
        "date": "Mon, 3 Oct 2022 10:26:54 GMT",
        "object": "Person"
    },
    {
        "cctv": "CCTV BMO2-7West Camera 1",
        "id": 2,
        "stats": "Butuh Validasi",
        "date": "Wed, 21 Sep 2022 04:50:27 GMT",
        "object": "LV"
    },
    {
        "cctv": "CCTV BMO2-7West Camera 1",
        "id": 0,
        "stats": "Butuh Validasi",
        "date": "Wed, 21 Sep 2022 04:50:27 GMT",
        "object": "HD"
    },
    {
        "cctv": "CCTV BMO2 - E Camera 3",
        "id": 1,
        "stats": "Butuh Validasi",
        "date": "Mon, 3 Oct 2022 10:26:54 GMT",
        "object": "Person"
    },
    {
        "cctv": "CCTV BMO2-7West Camera 1",
        "id": 2,
        "stats": "Butuh Validasi",
        "date": "Wed, 21 Sep 2022 04:50:27 GMT",
        "object": "LV"
    },
    {
        "cctv": "CCTV BMO2-7West Camera 1",
        "id": 0,
        "stats": "Butuh Validasi",
        "date": "Wed, 21 Sep 2022 04:50:27 GMT",
        "object": "HD"
    },
    {
        "cctv": "CCTV BMO2 - E Camera 3",
        "id": 1,
        "stats": "Butuh Validasi",
        "date": "Mon, 3 Oct 2022 10:26:54 GMT",
        "object": "Person"
    },
    {
        "cctv": "CCTV BMO2-7West Camera 1",
        "id": 2,
        "stats": "Butuh Validasi",
        "date": "Wed, 21 Sep 2022 04:50:27 GMT",
        "object": "LV"
    },
]


@app.route('/notification', methods=['GET', 'POST'])
def notifications():
    if request.method == 'GET':
        if len(notification_list) > 0:
            return jsonify(notification_list)
        else:
            'Not Found', 404

    if request.method == 'POST':
        new_date = request.form['date']
        new_object = request.form['object']
        new_cctv = request.form['cctv']
        id = notification_list[-1]['id']+1

        new_obj = {
            'id': id,
            'date': new_date,
            'object': new_object,
            'cctv': new_cctv,
        }
        notification_list.append(new_obj)
        return jsonify(notification_list), 201


if __name__ == '__main__':
    app.run(debug=True)
