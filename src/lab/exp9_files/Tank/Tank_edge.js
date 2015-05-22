/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bridge',
                            type: 'image',
                            rect: ['-216px', '164px', '1123px', '548px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bridge.png",'0px','0px'],
                            transform: [[],['12'],['8','-3'],['1.09674','1.00621']]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['50px', '512px', '191px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.57503']]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['71px', '507px', '191px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.57503']]
                        },
                        {
                            id: 'Rectangle3Copy3',
                            type: 'rect',
                            rect: ['259px', '459px', '197px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.5068']]
                        },
                        {
                            id: 'Rectangle3Copy2',
                            type: 'rect',
                            rect: ['239px', '465px', '197px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.50681']]
                        },
                        {
                            id: 'Rectangle3Copy5',
                            type: 'rect',
                            rect: ['416px', '420px', '201px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.46056']]
                        },
                        {
                            id: 'Rectangle3Copy4',
                            type: 'rect',
                            rect: ['401px', '425px', '201px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.46056']]
                        },
                        {
                            id: 'Rectangle3Copy7',
                            type: 'rect',
                            rect: ['541px', '392px', '190px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.42754']]
                        },
                        {
                            id: 'Rectangle3Copy6',
                            type: 'rect',
                            rect: ['524px', '398px', '190px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['49'],[],['0.42754']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['522px', '315px', '115px', '49px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['49'],['-27','2'],['0.6462','0.57046']]
                        },
                        {
                            id: 'RectangleCopy9',
                            type: 'rect',
                            rect: ['236px', '370px', '110px', '49px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['52'],['-28','2'],['0.84343','0.10204']]
                        },
                        {
                            id: 'RectangleCopy10',
                            type: 'rect',
                            rect: ['41px', '408px', '110px', '49px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['50'],['-28','2'],['0.95501','0.10204']]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['410px', '337px', '95px', '51px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['49'],['-27','2'],['0.85392','0.54808']]
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['251px', '363px', '86px', '64px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['52'],['-27','2'],['1.07642','0.45084']]
                        },
                        {
                            id: 'RectangleCopy6',
                            type: 'rect',
                            rect: ['59px', '404px', '72px', '57px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['52'],['-25','2'],['1.45904','0.68657']]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['176px', '370px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy5',
                            type: 'rect',
                            rect: ['205px', '393px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-126'],['-20'],['0.52122']]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['190px', '382px', '163px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.61315']]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['189px', '395px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['215px', '404px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy4',
                            type: 'rect',
                            rect: ['225px', '418px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-12'],[],['0.39934']]
                        },
                        {
                            id: 'Rectangle2Copy17',
                            type: 'rect',
                            rect: ['376px', '341px', '119px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy16',
                            type: 'rect',
                            rect: ['329px', '361px', '258px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-128'],[],['0.31442']]
                        },
                        {
                            id: 'Rectangle2Copy15',
                            type: 'rect',
                            rect: ['389px', '353px', '108px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.61315']]
                        },
                        {
                            id: 'Rectangle2Copy14',
                            type: 'rect',
                            rect: ['393px', '364px', '119px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy13',
                            type: 'rect',
                            rect: ['400px', '375px', '119px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy12',
                            type: 'rect',
                            rect: ['387px', '385px', '167px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.39934']]
                        },
                        {
                            id: 'Rectangle2Copy11',
                            type: 'rect',
                            rect: ['-18px', '405px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy10',
                            type: 'rect',
                            rect: ['-11px', '430px', '211px', '4px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-126'],['-50'],['0.52122']]
                        },
                        {
                            id: 'Rectangle2Copy9',
                            type: 'rect',
                            rect: ['-4px', '418px', '163px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-13'],[],['0.61315']]
                        },
                        {
                            id: 'Rectangle2Copy8',
                            type: 'rect',
                            rect: ['-6px', '431px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy7',
                            type: 'rect',
                            rect: ['5px', '445px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy6',
                            type: 'rect',
                            rect: ['24px', '458px', '178px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.39934']]
                        },
                        {
                            id: 'Rectangle2Copy35',
                            type: 'rect',
                            rect: ['501px', '319px', '119px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy34',
                            type: 'rect',
                            rect: ['449px', '338px', '261px', '3px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-129'],[],['0.3108']]
                        },
                        {
                            id: 'Rectangle2Copy33',
                            type: 'rect',
                            rect: ['517px', '328px', '108px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.61315']]
                        },
                        {
                            id: 'Rectangle2Copy32',
                            type: 'rect',
                            rect: ['514px', '339px', '119px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy31',
                            type: 'rect',
                            rect: ['524px', '348px', '119px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-14'],[],['0.56035']]
                        },
                        {
                            id: 'Rectangle2Copy30',
                            type: 'rect',
                            rect: ['506px', '359px', '167px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-15'],[],['0.39934']]
                        },
                        {
                            id: 'TankCopy2',
                            type: 'image',
                            rect: ['715px', '207px', '220px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Tank.png",'0px','0px']
                        },
                        {
                            id: 'TankCopy',
                            type: 'image',
                            rect: ['715px', '206px', '220px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Tank.png",'0px','0px']
                        },
                        {
                            id: 'Tank',
                            type: 'image',
                            rect: ['715px', '210px', '220px', '110px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Tank.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle3Copy11',
                            type: 'rect',
                            rect: ['338px', '465px', '345px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['165'],['37'],['0.22604','1.10885']]
                        },
                        {
                            id: 'Rectangle3Copy12',
                            type: 'rect',
                            rect: ['269px', '489px', '304px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['165'],['37'],['0.3549','1.17369']]
                        },
                        {
                            id: 'Rectangle3Copy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['208px', '478px', '304px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['179'],['6'],['1.46889','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy17',
                            display: 'none',
                            type: 'rect',
                            rect: ['555px', '546px', '63px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['180'],['-4'],['2.36962','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy20',
                            display: 'none',
                            type: 'rect',
                            rect: ['625px', '478px', '63px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['180'],['16'],['-0.14748','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy19',
                            display: 'none',
                            type: 'rect',
                            rect: ['628px', '512px', '63px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['90'],['5'],['1.12829','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy14',
                            display: 'none',
                            type: 'rect',
                            rect: ['303px', '457px', '304px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['187'],['6'],['0.85055','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy15',
                            display: 'none',
                            type: 'rect',
                            rect: ['385px', '438px', '304px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['218'],['6'],['0.39237','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy16',
                            display: 'none',
                            type: 'rect',
                            rect: ['446px', '425px', '304px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['287'],['6'],['0.34556','-2.0373']]
                        },
                        {
                            id: 'Rectangle3Copy13',
                            type: 'rect',
                            rect: ['153px', '529px', '239px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['165'],['37'],['0.83567','-1.17369']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['3px', '22px', '679px', '65px', 'auto', 'auto'],
                            text: "Class AA Tracked and Wheeled Train of Vehicles (Class 70R)",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "normal", "underline", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            display: 'block',
                            type: 'text',
                            rect: ['22px', '87px', '653px', '51px', 'auto', 'auto'],
                            text: "The nose to tail spacing between two successive vehicles shall not be less than 90m",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy5',
                            display: 'none',
                            type: 'text',
                            rect: ['26px', '151px', '653px', '26px', 'auto', 'auto'],
                            text: "Click the tags below to induce damage in corresponding span:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(6,13,240,1.00)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy4',
                            display: 'none',
                            type: 'text',
                            rect: ['22px', '138px', '653px', '51px', 'auto', 'auto'],
                            text: "Click the tags below to induce damage in corresponding span:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(6,13,240,1.00)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy',
                            display: 'block',
                            type: 'text',
                            rect: ['41px', '348px', '110px', '28px', 'auto', 'auto'],
                            text: "Piezo sensors",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['334px', '533px', '105px', '28px', 'auto', 'auto'],
                            text: "Wires",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy3',
                            type: 'text',
                            rect: ['426px', '505px', '105px', '28px', 'auto', 'auto'],
                            text: "Battery",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text2Copy12',
                            display: 'none',
                            type: 'text',
                            rect: ['569px', '513px', '105px', '28px', 'auto', 'auto'],
                            text: "SHM Circuit",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'replay',
                            display: 'none',
                            type: 'image',
                            rect: ['255px', '203px', '229px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"replay.PNG",'0px','0px']
                        },
                        {
                            id: 'Rectangle3Copy10',
                            type: 'rect',
                            rect: ['530px', '430px', '218px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['165'],['37'],['0.87268']]
                        },
                        {
                            id: 'Rectangle3Copy9',
                            type: 'rect',
                            rect: ['415px', '486px', '141px', '6px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['46'],['-24'],['0.27735','0.46947']]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['489px', '501px', '15px', '3px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['482px', '505px', '26px', '41px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgb(0, 0, 0)","solid"],
                            transform: [[],[],[],['1','1.09756']]
                        },
                        {
                            id: 'Rectangle6Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['484px', '548px', '26px', '1px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle6',
                            display: 'none',
                            type: 'rect',
                            rect: ['484px', '547px', '26px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Arrow',
                            display: 'block',
                            type: 'image',
                            rect: ['73px', '372px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow3.png",'0px','0px'],
                            transform: [[],['453']]
                        },
                        {
                            id: 'ArrowCopy',
                            display: 'block',
                            type: 'image',
                            rect: ['462px', '526px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow3.png",'0px','0px'],
                            transform: [[],['390']]
                        },
                        {
                            id: 'ArrowCopy2',
                            display: 'block',
                            type: 'image',
                            rect: ['335px', '521px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow3.png",'0px','0px'],
                            transform: [[],['610']]
                        },
                        {
                            id: 'Rectangle7Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['161px', '177px', '110px', '28px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle7Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['27px', '177px', '110px', '28px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle7Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['296px', '177px', '110px', '28px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle7Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['427px', '177px', '110px', '28px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            display: 'none',
                            type: 'rect',
                            rect: ['-9px', '404px', '11px', '93px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-35'],[],['1','1.13402']]
                        },
                        {
                            id: 'Rectangle8Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['211px', '362px', '11px', '93px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-35'],[],['1','0.99439']]
                        },
                        {
                            id: 'Rectangle8Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['383px', '336px', '11px', '80px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-35'],[],['1','0.99439']]
                        },
                        {
                            id: 'Rectangle8Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['524px', '313px', '11px', '72px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-35'],[],['1','0.99439']]
                        },
                        {
                            id: 'Rectangle8Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['637px', '295px', '11px', '65px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-35'],[],['1','0.99439']]
                        },
                        {
                            id: 'Text5',
                            display: 'none',
                            type: 'text',
                            rect: ['55px', '413px', '80px', '26px', 'auto', 'auto'],
                            text: "SPAN1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            transform: [[],['-12']]
                        },
                        {
                            id: 'Text5Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['254px', '378px', '80px', '26px', 'auto', 'auto'],
                            text: "SPAN2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            transform: [[],['-12']]
                        },
                        {
                            id: 'Text5Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['413px', '349px', '80px', '26px', 'auto', 'auto'],
                            text: "SPAN3",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            transform: [[],['-12']]
                        },
                        {
                            id: 'Text5Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['543px', '322px', '80px', '26px', 'auto', 'auto'],
                            text: "SPAN4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [22, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            transform: [[],['-12']]
                        },
                        {
                            id: 'shmcircuit3',
                            display: 'none',
                            type: 'image',
                            rect: ['514px', '396px', '206px', '164px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"shmcircuit3.png",'0px','0px'],
                            transform: [[],[],[],['0.40776','0.40244']]
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['54px', '181px', '93px', '26px', 'auto', 'auto'],
                            text: "Span 1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['193px', '181px', '93px', '26px', 'auto', 'auto'],
                            text: "Span 2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['323px', '181px', '93px', '26px', 'auto', 'auto'],
                            text: "Span 3",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['456px', '181px', '93px', '26px', 'auto', 'auto'],
                            text: "Span 4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'cracks',
                            display: 'none',
                            type: 'image',
                            rect: ['65px', '383px', '71px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-15'],[],['1.71734']]
                        },
                        {
                            id: 'cracksCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '345px', '71px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-15'],[],['1.71733','0.83661']]
                        },
                        {
                            id: 'cracksCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['422px', '314px', '71px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-15'],[],['1.56375','0.72183']]
                        },
                        {
                            id: 'cracksCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['554px', '287px', '71px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-15'],[],['1.47959','0.50495']]
                        },
                        {
                            id: 'Ellipse',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['217px', '89px', '212px', '107px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,163,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy4',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['217px', '89px', '212px', '107px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,163,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy5',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['217px', '89px', '212px', '107px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,163,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy6',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['217px', '89px', '212px', '107px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(245,163,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text6Copy4',
                            display: 'none',
                            type: 'text',
                            rect: ['204px', '116px', '239px', '26px', 'auto', 'auto'],
                            text: "Click to Start <br>Structural Health Montoring <br>of the damage",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy8',
                            display: 'none',
                            type: 'text',
                            rect: ['204px', '116px', '239px', '26px', 'auto', 'auto'],
                            text: "Click to Start <br>Structural Health Montoring <br>of the damage",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy9',
                            display: 'none',
                            type: 'text',
                            rect: ['204px', '116px', '239px', '26px', 'auto', 'auto'],
                            text: "Click to Start <br>Structural Health Montoring <br>of the damage",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text6Copy10',
                            display: 'none',
                            type: 'text',
                            rect: ['204px', '116px', '239px', '26px', 'auto', 'auto'],
                            text: "Click to Start <br>Structural Health Montoring <br>of the damage",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'RoundRect',
                            display: 'none',
                            type: 'rect',
                            rect: ['175px', '74px', '391px', '78px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(108,221,247,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['229px', '101px', '325px', '51px', 'auto', 'auto'],
                            text: "RETURN TO MAIN MENU",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'replay2',
                            display: 'none',
                            type: 'image',
                            rect: ['235px', '206px', '246px', '216px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"replay.PNG",'0px','0px']
                        },
                        {
                            id: 'Rectangle9',
                            display: 'none',
                            type: 'rect',
                            rect: ['484px', '505px', '26px', '45px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['484px', '548px', '26px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy2',
                            type: 'rect',
                            rect: ['484px', '548px', '26px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['484px', '548px', '26px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [1,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['94px', '99px', '454px', '28px', 'auto', 'auto'],
                            text: "SHM of Span 1 is going on...",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "900", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['94px', '99px', '454px', '28px', 'auto', 'auto'],
                            text: "SHM of Span 2 is going on...",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "900", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['94px', '99px', '454px', '28px', 'auto', 'auto'],
                            text: "SHM of Span 3  is going on...",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "900", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['94px', '99px', '454px', '28px', 'auto', 'auto'],
                            text: "SHM of Span 4  is going on...",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "900", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '664px', '554px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 55000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1199",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1226",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1419",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid236",
                            "left",
                            18000,
                            13000,
                            "linear",
                            "${TankCopy2}",
                            '715px',
                            '-360px'
                        ],
                        [
                            "eid1155",
                            "top",
                            2095,
                            26605,
                            "linear",
                            "${Rectangle6Copy}",
                            '548px',
                            '505px'
                        ],
                        [
                            "eid1389",
                            "top",
                            30050,
                            4950,
                            "linear",
                            "${Rectangle6Copy}",
                            '505px',
                            '548px'
                        ],
                        [
                            "eid1220",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1225",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1428",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle7Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid253",
                            "background-color",
                            2055,
                            40,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid255",
                            "background-color",
                            3875,
                            50,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid256",
                            "background-color",
                            3925,
                            7200,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid257",
                            "background-color",
                            11125,
                            40,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid258",
                            "background-color",
                            11165,
                            1825,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid259",
                            "background-color",
                            12990,
                            45,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid260",
                            "background-color",
                            13035,
                            7090,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid261",
                            "background-color",
                            20125,
                            40,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid263",
                            "background-color",
                            20165,
                            1825,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid264",
                            "background-color",
                            21990,
                            40,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid265",
                            "background-color",
                            22030,
                            7095,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid432",
                            "background-color",
                            7855,
                            40,
                            "linear",
                            "${Rectangle3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid434",
                            "background-color",
                            9965,
                            35,
                            "linear",
                            "${Rectangle3}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid572",
                            "background-color",
                            10000,
                            6947,
                            "linear",
                            "${Rectangle3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid575",
                            "background-color",
                            16947,
                            40,
                            "linear",
                            "${Rectangle3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid583",
                            "background-color",
                            16987,
                            1956,
                            "linear",
                            "${Rectangle3}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid588",
                            "background-color",
                            18944,
                            40,
                            "linear",
                            "${Rectangle3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid625",
                            "background-color",
                            18984,
                            6947,
                            "linear",
                            "${Rectangle3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid630",
                            "background-color",
                            25931,
                            40,
                            "linear",
                            "${Rectangle3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid635",
                            "background-color",
                            25971,
                            1952,
                            "linear",
                            "${Rectangle3}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid640",
                            "background-color",
                            27923,
                            44,
                            "linear",
                            "${Rectangle3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1210",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1374",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1444",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle3Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1466",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Rectangle3Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1384",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1234",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1424",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1555",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1562",
                            "display",
                            41000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1556",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1557",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1558",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1559",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1151",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1153",
                            "display",
                            2095,
                            0,
                            "linear",
                            "${Rectangle6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid228",
                            "left",
                            0,
                            13000,
                            "linear",
                            "${Tank}",
                            '715px',
                            '-360px'
                        ],
                        [
                            "eid1355",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1441",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1446",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle3Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1459",
                            "display",
                            35636,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1465",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1471",
                            "display",
                            41750,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1485",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1491",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1495",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1499",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1503",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1269",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracks}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1455",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${cracks}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1456",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${cracks}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1303",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1437",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1445",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle3Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1336",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1440",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1447",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle3Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1107",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Arrow}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1109",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Arrow}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1201",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1227",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1421",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1270",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1468",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1469",
                            "display",
                            41000,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1507",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1478",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1476",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1481",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1482",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1543",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1520",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1521",
                            "display",
                            30144,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1547",
                            "display",
                            30250,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1522",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1523",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1524",
                            "display",
                            41750,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "top",
                            0,
                            9000,
                            "linear",
                            "${TankCopy}",
                            '206px',
                            '210px'
                        ],
                        [
                            "eid233",
                            "top",
                            9000,
                            13000,
                            "linear",
                            "${TankCopy}",
                            '210px',
                            '436px'
                        ],
                        [
                            "eid408",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid411",
                            "background-color",
                            7561,
                            40,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid413",
                            "background-color",
                            7601,
                            253,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid414",
                            "background-color",
                            7854,
                            40,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid435",
                            "background-color",
                            7894,
                            2063,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid439",
                            "background-color",
                            9957,
                            35,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid561",
                            "background-color",
                            9992,
                            4531,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid564",
                            "background-color",
                            14523,
                            39,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid567",
                            "background-color",
                            14562,
                            2017,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid568",
                            "background-color",
                            16579,
                            52,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid577",
                            "background-color",
                            16631,
                            298,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid579",
                            "background-color",
                            16929,
                            40,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid584",
                            "background-color",
                            16969,
                            1954,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid589",
                            "background-color",
                            18922,
                            40,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid611",
                            "background-color",
                            18962,
                            4521,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid614",
                            "background-color",
                            23483,
                            39,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid618",
                            "background-color",
                            23522,
                            2024,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid622",
                            "background-color",
                            25547,
                            45,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid626",
                            "background-color",
                            25591,
                            308,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid631",
                            "background-color",
                            25899,
                            40,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid636",
                            "background-color",
                            25939,
                            1950,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid641",
                            "background-color",
                            27889,
                            44,
                            "linear",
                            "${Rectangle3Copy12}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1203",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1228",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1423",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text5Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1387",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1273",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid849",
                            "top",
                            0,
                            18000,
                            "linear",
                            "${TankCopy2}",
                            '207px',
                            '210px'
                        ],
                        [
                            "eid237",
                            "top",
                            18000,
                            13000,
                            "linear",
                            "${TankCopy2}",
                            '210px',
                            '436px'
                        ],
                        [
                            "eid1383",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1261",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1265",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1429",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text6Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1462",
                            "top",
                            36000,
                            5000,
                            "linear",
                            "${Rectangle9}",
                            '505px',
                            '550px'
                        ],
                        [
                            "eid1473",
                            "top",
                            42000,
                            5000,
                            "linear",
                            "${Rectangle9}",
                            '505px',
                            '550px'
                        ],
                        [
                            "eid1479",
                            "top",
                            49000,
                            5000,
                            "linear",
                            "${Rectangle9}",
                            '505px',
                            '550px'
                        ],
                        [
                            "eid1108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1110",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1237",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1287",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1382",
                            "display",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1544",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1516",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1517",
                            "display",
                            30144,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1548",
                            "display",
                            35636,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1519",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1207",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1439",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1497",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${Rectangle3Copy16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1510",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle3Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1458",
                            "display",
                            35636,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1464",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1472",
                            "display",
                            41750,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1484",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1492",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1494",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1500",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1502",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1585",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1586",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1587",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1588",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1589",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1542",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1525",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1526",
                            "display",
                            30144,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1546",
                            "display",
                            30250,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1527",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1528",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1529",
                            "display",
                            41750,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1530",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1531",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "background-color",
                            3575,
                            45,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid271",
                            "background-color",
                            3620,
                            1828,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid272",
                            "background-color",
                            5448,
                            40,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid273",
                            "background-color",
                            5488,
                            7109,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid274",
                            "background-color",
                            12597,
                            40,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid275",
                            "background-color",
                            12637,
                            1878,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid276",
                            "background-color",
                            14515,
                            40,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid277",
                            "background-color",
                            14555,
                            7035,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid278",
                            "background-color",
                            21590,
                            45,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid279",
                            "background-color",
                            21634,
                            1813,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid280",
                            "background-color",
                            23448,
                            40,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid1385",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1415",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text6Copy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid301",
                            "background-color",
                            7855,
                            40,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid304",
                            "background-color",
                            7895,
                            2067,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid305",
                            "background-color",
                            9961,
                            35,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid306",
                            "background-color",
                            9996,
                            6948,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid307",
                            "background-color",
                            16945,
                            40,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid308",
                            "background-color",
                            16985,
                            1957,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid309",
                            "background-color",
                            18941,
                            40,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid310",
                            "background-color",
                            18981,
                            6948,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid311",
                            "background-color",
                            25930,
                            40,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid312",
                            "background-color",
                            25969,
                            1953,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid313",
                            "background-color",
                            27922,
                            44,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid1249",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1250",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1434",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle7Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1206",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1235",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1426",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle8Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1202",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1233",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1422",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1154",
                            "height",
                            2095,
                            26605,
                            "linear",
                            "${Rectangle6Copy}",
                            '1px',
                            '43px'
                        ],
                        [
                            "eid1388",
                            "height",
                            30050,
                            4950,
                            "linear",
                            "${Rectangle6Copy}",
                            '43px',
                            '0px'
                        ],
                        [
                            "eid1461",
                            "height",
                            36000,
                            5000,
                            "linear",
                            "${Rectangle9}",
                            '45px',
                            '0px'
                        ],
                        [
                            "eid1474",
                            "height",
                            42000,
                            5000,
                            "linear",
                            "${Rectangle9}",
                            '45px',
                            '0px'
                        ],
                        [
                            "eid1480",
                            "height",
                            49000,
                            5000,
                            "linear",
                            "${Rectangle9}",
                            '45px',
                            '0px'
                        ],
                        [
                            "eid430",
                            "background-color",
                            7855,
                            40,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid437",
                            "background-color",
                            9965,
                            35,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid573",
                            "background-color",
                            10000,
                            6947,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid576",
                            "background-color",
                            16947,
                            40,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid582",
                            "background-color",
                            16987,
                            1956,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid587",
                            "background-color",
                            18944,
                            40,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid624",
                            "background-color",
                            18984,
                            6947,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid629",
                            "background-color",
                            25931,
                            40,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid634",
                            "background-color",
                            25971,
                            1952,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid639",
                            "background-color",
                            27923,
                            44,
                            "linear",
                            "${Rectangle3Copy13}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1208",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1438",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1488",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle3Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1496",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${Rectangle3Copy15}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1509",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle3Copy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1221",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1238",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text2Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1272",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1504",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1508",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1505",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1262",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1266",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1427",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text6Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1260",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1264",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1431",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text6Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1216",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1224",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1432",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle7Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid229",
                            "top",
                            0,
                            13000,
                            "linear",
                            "${Tank}",
                            '210px',
                            '436px'
                        ],
                        [
                            "eid1212",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2Copy12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1243",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1209",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1416",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle3Copy14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1467",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Rectangle3Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1487",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle3Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "background-color",
                            2055,
                            40,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid392",
                            "background-color",
                            2170,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid391",
                            "background-color",
                            3385,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid387",
                            "background-color",
                            3575,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid388",
                            "background-color",
                            3620,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid382",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid547",
                            "background-color",
                            5500,
                            1500,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid782",
                            "background-color",
                            7000,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid783",
                            "background-color",
                            10250,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid786",
                            "background-color",
                            11000,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid797",
                            "background-color",
                            11250,
                            40,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid550",
                            "background-color",
                            12695,
                            1858,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid556",
                            "background-color",
                            14553,
                            39,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid592",
                            "background-color",
                            14593,
                            4388,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid596",
                            "background-color",
                            20198,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid598",
                            "background-color",
                            20250,
                            39,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid604",
                            "background-color",
                            20289,
                            3243,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid607",
                            "background-color",
                            23532,
                            39,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid643",
                            "background-color",
                            23572,
                            0,
                            "linear",
                            "${Rectangle3Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1)'
                        ],
                        [
                            "eid1198",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1231",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1418",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1200",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1232",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1420",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid431",
                            "background-color",
                            7855,
                            40,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid436",
                            "background-color",
                            9965,
                            35,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid571",
                            "background-color",
                            10000,
                            6947,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid574",
                            "background-color",
                            16947,
                            40,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid581",
                            "background-color",
                            16987,
                            1956,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid586",
                            "background-color",
                            18944,
                            40,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid623",
                            "background-color",
                            18984,
                            6947,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid628",
                            "background-color",
                            25931,
                            40,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid633",
                            "background-color",
                            25971,
                            1952,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid638",
                            "background-color",
                            27923,
                            44,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1259",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1263",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1433",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1457",
                            "display",
                            35636,
                            0,
                            "linear",
                            "${replay2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1463",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${replay2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1470",
                            "display",
                            41750,
                            0,
                            "linear",
                            "${replay2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1483",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${replay2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1489",
                            "display",
                            48000,
                            0,
                            "linear",
                            "${replay2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1493",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${replay2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1498",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${replay2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1501",
                            "display",
                            55000,
                            0,
                            "linear",
                            "${replay2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid412",
                            "background-color",
                            7561,
                            40,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid559",
                            "background-color",
                            7601,
                            6922,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid562",
                            "background-color",
                            14523,
                            39,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid565",
                            "background-color",
                            14562,
                            2017,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid570",
                            "background-color",
                            16579,
                            52,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid609",
                            "background-color",
                            16631,
                            6852,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid612",
                            "background-color",
                            23483,
                            39,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid615",
                            "background-color",
                            23522,
                            2024,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid619",
                            "background-color",
                            25547,
                            45,
                            "linear",
                            "${Rectangle3Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid376",
                            "background-color",
                            3575,
                            45,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid383",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid548",
                            "background-color",
                            5500,
                            7106,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid553",
                            "background-color",
                            12606,
                            40,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid551",
                            "background-color",
                            12646,
                            1877,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid555",
                            "background-color",
                            14523,
                            40,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid600",
                            "background-color",
                            14563,
                            7032,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid602",
                            "background-color",
                            21594,
                            45,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid603",
                            "background-color",
                            21639,
                            1813,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid606",
                            "background-color",
                            23452,
                            40,
                            "linear",
                            "${Rectangle3Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid232",
                            "left",
                            9000,
                            13000,
                            "linear",
                            "${TankCopy}",
                            '715px',
                            '-360px'
                        ],
                        [
                            "eid1211",
                            "display",
                            0,
                            0,
                            "linear",
                            "${shmcircuit3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1230",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${shmcircuit3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "background-color",
                            2055,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid397",
                            "background-color",
                            2170,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid395",
                            "background-color",
                            2305,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid415",
                            "background-color",
                            5460,
                            1985,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid417",
                            "background-color",
                            7445,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid419",
                            "background-color",
                            7561,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid418",
                            "background-color",
                            7815,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid420",
                            "background-color",
                            7855,
                            52,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid433",
                            "background-color",
                            7907,
                            2058,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid787",
                            "background-color",
                            9965,
                            35,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid789",
                            "background-color",
                            10185,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid788",
                            "background-color",
                            10250,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid790",
                            "background-color",
                            10370,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid792",
                            "background-color",
                            10500,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid793",
                            "background-color",
                            10600,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid545",
                            "background-color",
                            10645,
                            355,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid785",
                            "background-color",
                            11000,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid796",
                            "background-color",
                            11250,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid794",
                            "background-color",
                            14151,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid557",
                            "background-color",
                            14151,
                            2458,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid558",
                            "background-color",
                            16609,
                            52,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid578",
                            "background-color",
                            16661,
                            299,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid580",
                            "background-color",
                            16960,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid585",
                            "background-color",
                            17000,
                            1960,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid590",
                            "background-color",
                            18960,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid591",
                            "background-color",
                            19000,
                            88,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid593",
                            "background-color",
                            19088,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid595",
                            "background-color",
                            20198,
                            0,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid597",
                            "background-color",
                            20250,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid616",
                            "background-color",
                            20290,
                            5265,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid620",
                            "background-color",
                            25555,
                            44,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid627",
                            "background-color",
                            25600,
                            306,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid632",
                            "background-color",
                            25905,
                            40,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid637",
                            "background-color",
                            25946,
                            1938,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid642",
                            "background-color",
                            27883,
                            43,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid644",
                            "background-color",
                            27926,
                            1239,
                            "linear",
                            "${Rectangle3Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1150",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1152",
                            "display",
                            2095,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1390",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1)'
                        ],
                        [
                            "eid324",
                            "background-color",
                            2055,
                            40,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid325",
                            "background-color",
                            4000,
                            50,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid326",
                            "background-color",
                            11250,
                            40,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid328",
                            "background-color",
                            13115,
                            50,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid335",
                            "background-color",
                            13165,
                            7036,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid337",
                            "background-color",
                            20201,
                            40,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid339",
                            "background-color",
                            20240,
                            1812,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid341",
                            "background-color",
                            22053,
                            40,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid342",
                            "background-color",
                            22092,
                            7046,
                            "linear",
                            "${Rectangle3Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid318",
                            "background-color",
                            2055,
                            40,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid320",
                            "background-color",
                            4000,
                            50,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid327",
                            "background-color",
                            11250,
                            40,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid331",
                            "background-color",
                            13115,
                            45,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid334",
                            "background-color",
                            13160,
                            7041,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid336",
                            "background-color",
                            20201,
                            40,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid338",
                            "background-color",
                            20240,
                            1812,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid340",
                            "background-color",
                            22053,
                            40,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid343",
                            "background-color",
                            22092,
                            7046,
                            "linear",
                            "${Rectangle3Copy7}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1386",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text6Copy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1218",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1223",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1430",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Rectangle7Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1417",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1435",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid884",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replay}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1256",
                            "display",
                            31000,
                            0,
                            "linear",
                            "${replay}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1205",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text5Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1229",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text5Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1425",
                            "display",
                            30050,
                            0,
                            "linear",
                            "${Text5Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1271",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1486",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1490",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid353",
                            "background-color",
                            2055,
                            40,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid379",
                            "background-color",
                            2095,
                            1405,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid380",
                            "background-color",
                            3575,
                            424,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1)'
                        ],
                        [
                            "eid354",
                            "background-color",
                            3999,
                            50,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid355",
                            "background-color",
                            4049,
                            7176,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid356",
                            "background-color",
                            11224,
                            40,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid357",
                            "background-color",
                            11264,
                            1819,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid358",
                            "background-color",
                            13084,
                            45,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid359",
                            "background-color",
                            13129,
                            7067,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid360",
                            "background-color",
                            20194,
                            40,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid361",
                            "background-color",
                            20234,
                            1819,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid362",
                            "background-color",
                            22053,
                            40,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid363",
                            "background-color",
                            22093,
                            7072,
                            "linear",
                            "${Rectangle3Copy10}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid377",
                            "background-color",
                            3575,
                            45,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid384",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid546",
                            "background-color",
                            5500,
                            7106,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid552",
                            "background-color",
                            12606,
                            40,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid549",
                            "background-color",
                            12646,
                            1877,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid554",
                            "background-color",
                            14523,
                            40,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid599",
                            "background-color",
                            14563,
                            7032,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid601",
                            "background-color",
                            21594,
                            45,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid605",
                            "background-color",
                            21639,
                            1813,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid608",
                            "background-color",
                            23452,
                            40,
                            "linear",
                            "${Rectangle3Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid1569",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1578",
                            "display",
                            41000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1570",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1571",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1572",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1573",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid407",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid410",
                            "background-color",
                            7561,
                            40,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid560",
                            "background-color",
                            7601,
                            6922,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid563",
                            "background-color",
                            14523,
                            39,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid566",
                            "background-color",
                            14562,
                            2017,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid569",
                            "background-color",
                            16579,
                            52,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid610",
                            "background-color",
                            16631,
                            6852,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid613",
                            "background-color",
                            23483,
                            39,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid617",
                            "background-color",
                            23522,
                            2024,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid621",
                            "background-color",
                            25547,
                            45,
                            "linear",
                            "${Rectangle3Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid285",
                            "background-color",
                            5460,
                            40,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid287",
                            "background-color",
                            5500,
                            2045,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid288",
                            "background-color",
                            7545,
                            40,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid289",
                            "background-color",
                            7584,
                            6891,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid290",
                            "background-color",
                            14475,
                            39,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid291",
                            "background-color",
                            14514,
                            2015,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid292",
                            "background-color",
                            16529,
                            45,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid293",
                            "background-color",
                            16574,
                            6821,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid294",
                            "background-color",
                            23395,
                            39,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid295",
                            "background-color",
                            23434,
                            2015,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid296",
                            "background-color",
                            25449,
                            45,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid1515",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1541",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1532",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1533",
                            "display",
                            30144,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1545",
                            "display",
                            30250,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1534",
                            "display",
                            35750,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1535",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1536",
                            "display",
                            41750,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1537",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1538",
                            "display",
                            47000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1539",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1540",
                            "display",
                            54000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Tank_edgeActions.js");
})("EDGE-679572");
