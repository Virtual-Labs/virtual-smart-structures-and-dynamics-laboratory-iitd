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
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['478px', '438px', '22px', '44px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [2,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'bridge2',
                            type: 'image',
                            rect: ['-199px', '60px', '996px', '591px', 'auto', 'auto'],
                            opacity: '0.96',
                            fill: ["rgba(0,0,0,0)",im+"bridge.png",'0px','0px'],
                            transform: [[],['4'],['0','-2'],['1','1.01734']]
                        },
                        {
                            id: 'RoundRect3Copy2',
                            type: 'rect',
                            rect: ['55px', '303px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy',
                            type: 'rect',
                            rect: ['18px', '316px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy68',
                            display: 'none',
                            type: 'rect',
                            rect: ['18px', '316px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Text',
                            display: 'block',
                            type: 'text',
                            rect: ['43px', '139px', '277px', '30px', 'auto', 'auto'],
                            text: "Class A Train of Vehicles",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "underline", "", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy',
                            display: 'block',
                            type: 'text',
                            rect: ['167px', '9px', '277px', '41px', 'auto', 'auto'],
                            text: "Energy Harvesting Stage",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(6,13,240,1.00)", "normal", "underline", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text11',
                            display: 'none',
                            type: 'text',
                            rect: ['126px', '17px', '376px', '31px', 'auto', 'auto'],
                            text: "Structural Health Monitoring Stage",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(6,13,240,1)", "400", "underline solid rgb(6, 13, 240)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text5',
                            display: 'none',
                            type: 'text',
                            rect: ['191px', '105px', '277px', '19px', 'auto', 'auto'],
                            text: "SHM of span 3 is going on",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "700", "underline solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['499px', '219px', '10px', '9px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-47']]
                        },
                        {
                            id: 'Rectangle2Copy4',
                            type: 'rect',
                            rect: ['496px', '267px', '98px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],['-21']]
                        },
                        {
                            id: 'Rectangle2Copy16',
                            type: 'rect',
                            rect: ['382px', '317px', '105px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],[],['1.04586','-1.11275']]
                        },
                        {
                            id: 'Rectangle2Copy17',
                            type: 'rect',
                            rect: ['391px', '310px', '114px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],[],['0.9633']]
                        },
                        {
                            id: 'Rectangle2Copy11',
                            type: 'rect',
                            rect: ['507px', '260px', '100px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],['-2']]
                        },
                        {
                            id: 'Rectangle2Copy5',
                            type: 'rect',
                            rect: ['68px', '450px', '142px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35']]
                        },
                        {
                            id: 'Rectangle2Copy13',
                            type: 'rect',
                            rect: ['84px', '442px', '134px', '0px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35']]
                        },
                        {
                            id: 'Rectangle2Copy8',
                            type: 'rect',
                            rect: ['548px', '308px', '24px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-26'],['7'],['6.20003']]
                        },
                        {
                            id: 'Rectangle2Copy3',
                            type: 'rect',
                            rect: ['259px', '369px', '123px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],['-14']]
                        },
                        {
                            id: 'Rectangle2Copy14',
                            type: 'rect',
                            rect: ['78px', '441px', '140px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],[],['1.06286']]
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['47px', '169px', '268px', '43px', 'auto', 'auto'],
                            opacity: '1',
                            text: "The Nose to Tail distance between successive  trains shall not be less than 18.4 m.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "300", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text3Copy5',
                            display: 'none',
                            type: 'text',
                            rect: ['49px', '111px', '455px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Click the tags below to take the signature of bridge in corresponding spans for undamaged condition",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(6,13,240,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text14',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '127px', '403px', '20px', 'auto', 'auto'],
                            text: "Click the tags below to induce damage in corresponding spans:",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(6,13,240,1)", "400", "none solid rgb(6, 13, 240)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text3Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['14px', '320px', '120px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Piezo Sensors",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['410px', '466px', '120px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Battery",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text3Copy10',
                            display: 'none',
                            type: 'text',
                            rect: ['520px', '461px', '120px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "SHM Circuit",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['255px', '473px', '120px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Wires",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text3Copy4',
                            type: 'text',
                            rect: ['14px', '271px', '53px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "Sensors",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Rectangle5',
                            type: 'rect',
                            rect: ['55px', '201px', '0px', '142px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy36',
                            type: 'rect',
                            rect: ['364px', '232px', '23px', '64px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-48']]
                        },
                        {
                            id: 'Rectangle2Copy2',
                            type: 'rect',
                            rect: ['244px', '376px', '127px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['35'],['-21'],['0.9685']]
                        },
                        {
                            id: 'ArrowCopy2',
                            type: 'image',
                            rect: ['457px', '465px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px'],
                            transform: [[],['328']]
                        },
                        {
                            id: 'ArrowCopy3',
                            type: 'image',
                            rect: ['261px', '463px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px'],
                            transform: [[],['237']]
                        },
                        {
                            id: 'Arrow',
                            type: 'image',
                            rect: ['13px', '298px', '26px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px'],
                            transform: [[],['100']]
                        },
                        {
                            id: 'ArrowCopy',
                            type: 'image',
                            rect: ['41px', '292px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px'],
                            transform: [[],['62']]
                        },
                        {
                            id: 'ArrowCopy4',
                            display: 'none',
                            type: 'image',
                            rect: ['47px', '342px', '19px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Arrow.png",'0px','0px'],
                            transform: [[],['453']]
                        },
                        {
                            id: 'RectangleCopy47',
                            type: 'rect',
                            rect: ['59px', '352px', '23px', '75px', 'auto', 'auto'],
                            fill: ["rgba(85,243,90,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-47']]
                        },
                        {
                            id: 'Rectangle2Copy6',
                            type: 'rect',
                            rect: ['254px', '454px', '31px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-26'],['31'],['6.3027']]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['381px', '395px', '13px', '2px', 'auto', 'auto'],
                            fill: ["rgba(235,250,94,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-28'],['27'],['5.34736','0.93497']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['479px', '186px', '20px', '62px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-48'],[],['1.13043']]
                        },
                        {
                            id: 'Rectangle4Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '440px', '22px', '1px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '482px', '22px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['192px', '126px', '255px', '30px', 'auto', 'auto'],
                            text: "Return to Main Menu",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['449px', '360px', '13px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-27'],['13'],['6.52424','0.98644']]
                        },
                        {
                            id: 'Rectangle2Copy9',
                            display: 'block',
                            type: 'rect',
                            rect: ['407px', '407px', '95px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['37'],['-17']]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['483px', '435px', '15px', '3px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy23',
                            type: 'rect',
                            rect: ['232px', '283px', '23px', '73px', 'auto', 'auto'],
                            fill: ["rgba(16,239,23,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49']]
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['197px', '319px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['40'],[],['0.89279']]
                        },
                        {
                            id: 'Rectangle6Copy',
                            type: 'rect',
                            rect: ['215px', '335px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy2',
                            type: 'rect',
                            rect: ['205px', '327px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy3',
                            type: 'rect',
                            rect: ['197px', '317px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy4',
                            type: 'rect',
                            rect: ['186px', '310px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy5',
                            type: 'rect',
                            rect: ['177px', '302px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy23',
                            type: 'rect',
                            rect: ['23px', '389px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['43'],[],['0.89279']]
                        },
                        {
                            id: 'Rectangle6Copy22',
                            type: 'rect',
                            rect: ['42px', '406px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-47'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy21',
                            type: 'rect',
                            rect: ['32px', '397px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-46'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy20',
                            type: 'rect',
                            rect: ['22px', '387px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-48'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy19',
                            type: 'rect',
                            rect: ['12px', '379px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-48'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy18',
                            type: 'rect',
                            rect: ['3px', '371px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-46'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy11',
                            type: 'rect',
                            rect: ['329px', '264px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['42'],[],['0.89279']]
                        },
                        {
                            id: 'Rectangle6Copy10',
                            type: 'rect',
                            rect: ['345px', '277px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy9',
                            type: 'rect',
                            rect: ['336px', '270px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy8',
                            type: 'rect',
                            rect: ['329px', '261px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy7',
                            type: 'rect',
                            rect: ['320px', '255px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy6',
                            type: 'rect',
                            rect: ['312px', '248px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy17',
                            type: 'rect',
                            rect: ['441px', '216px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['41'],[],['0.73174']]
                        },
                        {
                            id: 'Rectangle6Copy16',
                            type: 'rect',
                            rect: ['456px', '231px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy15',
                            type: 'rect',
                            rect: ['448px', '225px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy14',
                            type: 'rect',
                            rect: ['441px', '217px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy13',
                            type: 'rect',
                            rect: ['432px', '211px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-49'],[],['0.34651']]
                        },
                        {
                            id: 'Rectangle6Copy12',
                            type: 'rect',
                            rect: ['424px', '203px', '95px', '2px', 'auto', 'auto'],
                            fill: ["rgba(119,119,119,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-48'],[],['0.34651']]
                        },
                        {
                            id: 'replay3',
                            display: 'none',
                            type: 'image',
                            rect: ['216px', '169px', '198px', '177px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"replay3.PNG",'0px','0px']
                        },
                        {
                            id: 'Rectangle7',
                            display: 'none',
                            type: 'rect',
                            rect: ['503px', '454px', '30px', '4px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['-32'],['-33'],['1.09728']]
                        },
                        {
                            id: 'Rectangle8',
                            display: 'none',
                            type: 'rect',
                            rect: ['48px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['128px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['209px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['289px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect4',
                            display: 'none',
                            type: 'rect',
                            rect: ['43px', '172px', '313px', '24px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(245,163,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text13',
                            display: 'none',
                            type: 'text',
                            rect: ['59px', '175px', '292px', '20px', 'auto', 'auto'],
                            text: "After taking readings, Click here to continue",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text4',
                            display: 'none',
                            type: 'text',
                            rect: ['53px', '149px', '55px', '7px', 'auto', 'auto'],
                            text: "SPAN 1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['136px', '149px', '55px', '7px', 'auto', 'auto'],
                            text: "SPAN 2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['217px', '150px', '55px', '7px', 'auto', 'auto'],
                            text: "SPAN 3",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text4Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['297px', '150px', '55px', '7px', 'auto', 'auto'],
                            text: "SPAN 4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle9',
                            display: 'none',
                            type: 'rect',
                            rect: ['112px', '348px', '100px', '7px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['34'],['-34'],['1.09816']]
                        },
                        {
                            id: 'Rectangle9Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['263px', '286px', '98px', '7px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['34'],['-34']]
                        },
                        {
                            id: 'Rectangle9Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['391px', '237px', '78px', '7px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['34'],['-34'],['1.09816']]
                        },
                        {
                            id: 'Rectangle9Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['492px', '197px', '72px', '7px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['34'],['-34'],['1.09816']]
                        },
                        {
                            id: 'Rectangle9Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['-72px', '424px', '102px', '7px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['34'],['-34'],['1.23']]
                        },
                        {
                            id: 'Text3Copy6',
                            display: 'none',
                            type: 'text',
                            rect: ['29px', '368px', '86px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "SPAN1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-24']]
                        },
                        {
                            id: 'Text3Copy7',
                            display: 'none',
                            type: 'text',
                            rect: ['197px', '300px', '86px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "SPAN2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-24']]
                        },
                        {
                            id: 'Text3Copy8',
                            display: 'none',
                            type: 'text',
                            rect: ['328px', '248px', '79px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "SPAN3",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-24']]
                        },
                        {
                            id: 'Text3Copy9',
                            display: 'none',
                            type: 'text',
                            rect: ['418px', '112px', '526px', '19px', 'auto', 'auto'],
                            opacity: '1',
                            text: "SPAN4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],['-24']]
                        },
                        {
                            id: 'Rectangle4Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '481px', '22px', '43px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['1','1.00023']]
                        },
                        {
                            id: 'Rectangle4Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '483px', '22px', '2px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['1','1.00023']]
                        },
                        {
                            id: 'cracks',
                            display: 'none',
                            type: 'image',
                            rect: ['-52px', '269px', '264px', '248px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-27'],[],['0.50757','0.40439']]
                        },
                        {
                            id: 'cracksCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['111px', '194px', '264px', '248px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-27'],[],['0.45454','0.35747']]
                        },
                        {
                            id: 'cracksCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['249px', '138px', '264px', '248px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-27'],[],['0.41596','0.30242']]
                        },
                        {
                            id: 'cracksCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['352px', '96px', '264px', '248px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cracks.png",'0px','0px'],
                            transform: [[],['-27'],[],['0.37879','0.25806']]
                        },
                        {
                            id: 'Text6',
                            display: 'none',
                            type: 'text',
                            rect: ['213px', '92px', '328px', '44px', 'auto', 'auto'],
                            text: "SHM of span 1 is going on...",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'RoundRect',
                            display: 'none',
                            type: 'rect',
                            rect: ['160px', '88px', '129px', '49px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(65,234,245,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text7',
                            display: 'none',
                            type: 'text',
                            rect: ['173px', '92px', '109px', '49px', 'auto', 'auto'],
                            text: "RETURN TO MAIN MENU",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle10',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '440px', '22px', '44px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text9',
                            display: 'none',
                            type: 'text',
                            rect: ['190px', '92px', '350px', '32px', 'auto', 'auto'],
                            text: "SHM of span 2 is going on...",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle11Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '439px', '22px', '44px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle12',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '440px', '22px', '44px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text10',
                            display: 'none',
                            type: 'text',
                            rect: ['169px', '90px', '277px', '44px', 'auto', 'auto'],
                            text: "SHM of span 4 is going on...",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [17, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "italic", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle11',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '482px', '22px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '482px', '22px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle12Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '482px', '22px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '440px', '22px', '43px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle4Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['480px', '482px', '22px', '3px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RoundRect3',
                            type: 'rect',
                            rect: ['172px', '260px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy4',
                            type: 'rect',
                            rect: ['130px', '275px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy3',
                            type: 'rect',
                            rect: ['92px', '290px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy9',
                            type: 'rect',
                            rect: ['250px', '230px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy8',
                            type: 'rect',
                            rect: ['213px', '244px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy7',
                            type: 'rect',
                            rect: ['357px', '193px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy6',
                            type: 'rect',
                            rect: ['325px', '204px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy5',
                            type: 'rect',
                            rect: ['287px', '218px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy19',
                            type: 'rect',
                            rect: ['478px', '148px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy18',
                            type: 'rect',
                            rect: ['384px', '182px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy30',
                            type: 'rect',
                            rect: ['164px', '388px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy29',
                            type: 'rect',
                            rect: ['130px', '402px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy33',
                            type: 'rect',
                            rect: ['86px', '421px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy11',
                            type: 'rect',
                            rect: ['48px', '439px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy28',
                            type: 'rect',
                            rect: ['297px', '326px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy27',
                            type: 'rect',
                            rect: ['249px', '350px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy26',
                            type: 'rect',
                            rect: ['216px', '364px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy25',
                            type: 'rect',
                            rect: ['544px', '216px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy14',
                            type: 'rect',
                            rect: ['521px', '226px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy32',
                            type: 'rect',
                            rect: ['566px', '205px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy31',
                            type: 'rect',
                            rect: ['587px', '195px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy24',
                            type: 'rect',
                            rect: ['327px', '314px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy10',
                            type: 'rect',
                            rect: ['357px', '301px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy23',
                            type: 'rect',
                            rect: ['441px', '262px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy22',
                            type: 'rect',
                            rect: ['411px', '277px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy21',
                            type: 'rect',
                            rect: ['382px', '288px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy20',
                            type: 'rect',
                            rect: ['492px', '240px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy12',
                            type: 'rect',
                            rect: ['471px', '249px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy17',
                            type: 'rect',
                            rect: ['577px', '111px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy16',
                            type: 'rect',
                            rect: ['543px', '124px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy15',
                            type: 'rect',
                            rect: ['508px', '137px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy34',
                            type: 'rect',
                            rect: ['414px', '172px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy35',
                            type: 'rect',
                            rect: ['441px', '161px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy69',
                            display: 'none',
                            type: 'rect',
                            rect: ['55px', '303px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy67',
                            display: 'none',
                            type: 'rect',
                            rect: ['172px', '260px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy66',
                            display: 'none',
                            type: 'rect',
                            rect: ['130px', '275px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy65',
                            display: 'none',
                            type: 'rect',
                            rect: ['92px', '290px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy64',
                            display: 'none',
                            type: 'rect',
                            rect: ['250px', '230px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy63',
                            display: 'none',
                            type: 'rect',
                            rect: ['213px', '244px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy62',
                            display: 'none',
                            type: 'rect',
                            rect: ['357px', '193px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy61',
                            display: 'none',
                            type: 'rect',
                            rect: ['325px', '204px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy60',
                            display: 'none',
                            type: 'rect',
                            rect: ['287px', '218px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy59',
                            display: 'none',
                            type: 'rect',
                            rect: ['478px', '148px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy58',
                            display: 'none',
                            type: 'rect',
                            rect: ['384px', '182px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy57',
                            display: 'none',
                            type: 'rect',
                            rect: ['164px', '388px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy56',
                            display: 'none',
                            type: 'rect',
                            rect: ['130px', '402px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy55',
                            display: 'none',
                            type: 'rect',
                            rect: ['86px', '421px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy54',
                            display: 'none',
                            type: 'rect',
                            rect: ['48px', '439px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy53',
                            display: 'none',
                            type: 'rect',
                            rect: ['297px', '326px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy52',
                            display: 'none',
                            type: 'rect',
                            rect: ['249px', '350px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy51',
                            display: 'none',
                            type: 'rect',
                            rect: ['216px', '364px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy50',
                            display: 'none',
                            type: 'rect',
                            rect: ['544px', '216px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy49',
                            display: 'none',
                            type: 'rect',
                            rect: ['521px', '226px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy48',
                            display: 'none',
                            type: 'rect',
                            rect: ['566px', '205px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy47',
                            display: 'none',
                            type: 'rect',
                            rect: ['587px', '195px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy46',
                            display: 'none',
                            type: 'rect',
                            rect: ['327px', '314px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy45',
                            display: 'none',
                            type: 'rect',
                            rect: ['357px', '301px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy44',
                            display: 'none',
                            type: 'rect',
                            rect: ['441px', '262px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy43',
                            display: 'none',
                            type: 'rect',
                            rect: ['411px', '277px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy42',
                            display: 'none',
                            type: 'rect',
                            rect: ['382px', '288px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy41',
                            display: 'none',
                            type: 'rect',
                            rect: ['492px', '240px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy40',
                            display: 'none',
                            type: 'rect',
                            rect: ['471px', '249px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy39',
                            display: 'none',
                            type: 'rect',
                            rect: ['577px', '111px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy38',
                            display: 'none',
                            type: 'rect',
                            rect: ['543px', '124px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy37',
                            display: 'none',
                            type: 'rect',
                            rect: ['508px', '137px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy36',
                            display: 'none',
                            type: 'rect',
                            rect: ['414px', '172px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'RoundRect3Copy13',
                            display: 'none',
                            type: 'rect',
                            rect: ['441px', '161px', '8px', '18px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [1,"rgb(0, 0, 0)","solid"]
                        },
                        {
                            id: 'Rectangle7Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['473px', '389px', '6px', '4px', 'auto', 'auto'],
                            fill: ["rgba(243,14,28,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],['10'],['-44'],['20']]
                        },
                        {
                            id: 'shmcircuit2',
                            display: 'none',
                            type: 'image',
                            rect: ['512px', '386px', '89px', '80px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"shmcircuit.png",'0px','0px']
                        },
                        {
                            id: 'Text8',
                            display: 'none',
                            type: 'text',
                            rect: ['43px', '67px', '150px', '68px', 'auto', 'auto'],
                            text: "Click the tags to take the signature of bridge in corresponding spans for damaged condition.",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle14',
                            display: 'none',
                            type: 'rect',
                            rect: ['210px', '67px', '70px', '31px', 'auto', 'auto'],
                            fill: ["rgba(65,234,245,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['210px', '105px', '70px', '31px', 'auto', 'auto'],
                            fill: ["rgba(65,234,245,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['210px', '142px', '70px', '31px', 'auto', 'auto'],
                            fill: ["rgba(65,234,245,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['210px', '179px', '70px', '31px', 'auto', 'auto'],
                            fill: ["rgba(65,234,245,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text12',
                            display: 'none',
                            type: 'text',
                            rect: ['222px', '73px', '45px', '19px', 'auto', 'auto'],
                            text: "Span 1",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(6, 13, 240)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text12Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['222px', '111px', '45px', '19px', 'auto', 'auto'],
                            text: "Span 2",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(6, 13, 240)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text12Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['222px', '150px', '45px', '19px', 'auto', 'auto'],
                            text: "Span 3",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(6, 13, 240)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text12Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['222px', '185px', '45px', '19px', 'auto', 'auto'],
                            text: "Span 4",
                            align: "justify",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1.00)", "400", "none solid rgb(6, 13, 240)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Rectangle13Copy26',
                            type: 'rect',
                            rect: ['55px', '320px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy22',
                            type: 'rect',
                            rect: ['172px', '277px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy28',
                            type: 'rect',
                            rect: ['130px', '292px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy27',
                            type: 'rect',
                            rect: ['92px', '307px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy33',
                            type: 'rect',
                            rect: ['250px', '247px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy32',
                            type: 'rect',
                            rect: ['213px', '261px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy31',
                            type: 'rect',
                            rect: ['357px', '210px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy30',
                            type: 'rect',
                            rect: ['325px', '221px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy29',
                            type: 'rect',
                            rect: ['287px', '235px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy43',
                            type: 'rect',
                            rect: ['478px', '165px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy42',
                            type: 'rect',
                            rect: ['384px', '199px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy54',
                            type: 'rect',
                            rect: ['164px', '405px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy53',
                            type: 'rect',
                            rect: ['130px', '419px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy57',
                            type: 'rect',
                            rect: ['86px', '438px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy',
                            type: 'rect',
                            rect: ['48px', '456px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy52',
                            type: 'rect',
                            rect: ['297px', '343px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy51',
                            type: 'rect',
                            rect: ['249px', '367px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy50',
                            type: 'rect',
                            rect: ['216px', '381px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy49',
                            type: 'rect',
                            rect: ['544px', '233px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy4',
                            type: 'rect',
                            rect: ['521px', '243px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy56',
                            type: 'rect',
                            rect: ['566px', '222px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy5',
                            type: 'rect',
                            rect: ['587px', '212px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy48',
                            type: 'rect',
                            rect: ['327px', '331px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13',
                            type: 'rect',
                            rect: ['357px', '318px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy47',
                            type: 'rect',
                            rect: ['441px', '279px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy46',
                            type: 'rect',
                            rect: ['411px', '294px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy45',
                            type: 'rect',
                            rect: ['382px', '305px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy44',
                            type: 'rect',
                            rect: ['492px', '257px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy2',
                            type: 'rect',
                            rect: ['471px', '266px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy41',
                            type: 'rect',
                            rect: ['577px', '128px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy40',
                            type: 'rect',
                            rect: ['543px', '141px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy39',
                            type: 'rect',
                            rect: ['508px', '154px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy6',
                            type: 'rect',
                            rect: ['414px', '189px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle13Copy7',
                            type: 'rect',
                            rect: ['441px', '178px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Truck24Copy3',
                            type: 'image',
                            rect: ['627px', '-53px', '388px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Truck24.PNG",'0px','0px']
                        },
                        {
                            id: 'Truck24Copy',
                            type: 'image',
                            rect: ['627px', '-53px', '388px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Truck24.PNG",'0px','0px']
                        },
                        {
                            id: 'Truck24',
                            type: 'image',
                            rect: ['627px', '-53px', '388px', '207px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Truck24.PNG",'0px','0px']
                        },
                        {
                            id: 'Rectangle13Copy25',
                            type: 'rect',
                            rect: ['18px', '333px', '10px', '7px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Replay',
                            display: 'none',
                            type: 'image',
                            rect: ['317px', '67px', '87px', '81px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Replay.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle15',
                            display: 'none',
                            type: 'rect',
                            rect: ['48px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle15Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['130px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle15Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['210px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle15Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['291px', '148px', '61px', '19px', 'auto', 'auto'],
                            fill: ["rgba(245,163,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text15',
                            display: 'none',
                            type: 'text',
                            rect: ['54px', '149px', '53px', '20px', 'auto', 'auto'],
                            text: "SPAN 1",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text15Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['136px', '149px', '53px', '20px', 'auto', 'auto'],
                            text: "SPAN 2",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text15Copy2',
                            display: 'none',
                            type: 'text',
                            rect: ['216px', '149px', '53px', '20px', 'auto', 'auto'],
                            text: "SPAN 3",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Text15Copy3',
                            display: 'none',
                            type: 'text',
                            rect: ['297px', '149px', '53px', '20px', 'auto', 'auto'],
                            text: "SPAN 4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '599px', '492px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 57000,
                    autoPlay: true,
                    data: [
                        [
                            "eid16290",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${Text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16291",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16390",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid16393",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid16003",
                            "color",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            'rgba(6,13,240,1.00)',
                            'rgba(6,13,240,1.00)'
                        ],
                        [
                            "eid15939",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15941",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16147",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text3Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16826",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16857",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16663",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy66}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16947",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy66}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17820",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy66}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17379",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy66}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17629",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy66}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15905",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15910",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16140",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16357",
                            "top",
                            2141,
                            18354,
                            "linear",
                            "${Rectangle4Copy4}",
                            '481px',
                            '440px'
                        ],
                        [
                            "eid16024",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16025",
                            "display",
                            2141,
                            0,
                            "linear",
                            "${Rectangle4Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16311",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle4Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16160",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Rectangle4Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16672",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16941",
                            "display",
                            17889,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16978",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17184",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17398",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17616",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17805",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16369",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16370",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Rectangle4Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16378",
                            "display",
                            56000,
                            0,
                            "linear",
                            "${Rectangle4Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16252",
                            "height",
                            44000,
                            5000,
                            "linear",
                            "${Rectangle12}",
                            '44px',
                            '0px'
                        ],
                        [
                            "eid16678",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy48}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16965",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy48}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17171",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy48}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17390",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy48}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17620",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy48}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16123",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9454",
                            "background-color",
                            0,
                            5126,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9478",
                            "background-color",
                            5126,
                            39,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9480",
                            "background-color",
                            5165,
                            585,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9515",
                            "background-color",
                            5750,
                            43,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9547",
                            "background-color",
                            5849,
                            325,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9582",
                            "background-color",
                            6250,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid4180",
                            "background-color",
                            6750,
                            487,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid4202",
                            "background-color",
                            7237,
                            58,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid4235",
                            "background-color",
                            8000,
                            45,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9593",
                            "background-color",
                            8560,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9627",
                            "background-color",
                            8604,
                            42,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9628",
                            "background-color",
                            9322,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9664",
                            "background-color",
                            9367,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9665",
                            "background-color",
                            9368,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11340",
                            "background-color",
                            13158,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11380",
                            "background-color",
                            13204,
                            931,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11382",
                            "background-color",
                            14135,
                            53,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11394",
                            "background-color",
                            14188,
                            610,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11418",
                            "background-color",
                            14798,
                            44,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11464",
                            "background-color",
                            14842,
                            317,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11466",
                            "background-color",
                            15159,
                            47,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid4500",
                            "background-color",
                            15250,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11478",
                            "background-color",
                            15705,
                            45,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11532",
                            "background-color",
                            15750,
                            500,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11545",
                            "background-color",
                            16250,
                            40,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13337",
                            "background-color",
                            16327,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11609",
                            "background-color",
                            16327,
                            673,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11621",
                            "background-color",
                            17049,
                            0,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11620",
                            "background-color",
                            17580,
                            45,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12273",
                            "background-color",
                            17625,
                            669,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12275",
                            "background-color",
                            18294,
                            51,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid15509",
                            "background-color",
                            18345,
                            3351,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16606",
                            "background-color",
                            28406,
                            1485,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(62,170,65,1)',
                            'rgba(62,170,65,1.00)'
                        ],
                        [
                            "eid16610",
                            "background-color",
                            29891,
                            60,
                            "linear",
                            "${RectangleCopy23}",
                            'rgba(62,170,65,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16175",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16191",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16206",
                            "display",
                            42750,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16209",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16220",
                            "display",
                            49750,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16223",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16235",
                            "display",
                            56750,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16709",
                            "display",
                            56798,
                            0,
                            "linear",
                            "${Text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16611",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracks}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16154",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${cracks}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16178",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${cracks}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16623",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${cracks}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16873",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16923",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16914",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16237",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Text10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16381",
                            "display",
                            56000,
                            0,
                            "linear",
                            "${Text10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16380",
                            "display",
                            56695,
                            0,
                            "linear",
                            "${Text10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9147",
                            "background-color",
                            0,
                            3500,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9167",
                            "background-color",
                            3500,
                            49,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9148",
                            "background-color",
                            3549,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9219",
                            "background-color",
                            3672,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9220",
                            "background-color",
                            3756,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9251",
                            "background-color",
                            3798,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9252",
                            "background-color",
                            3877,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9291",
                            "background-color",
                            3921,
                            228,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9304",
                            "background-color",
                            4149,
                            57,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9292",
                            "background-color",
                            4206,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9339",
                            "background-color",
                            4540,
                            500,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9341",
                            "background-color",
                            5040,
                            44,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8439",
                            "background-color",
                            5670,
                            448,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9387",
                            "background-color",
                            6365,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9406",
                            "background-color",
                            6950,
                            50,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8631",
                            "background-color",
                            7070,
                            584,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10615",
                            "background-color",
                            7654,
                            41,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10630",
                            "background-color",
                            8865,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10631",
                            "background-color",
                            9000,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9839",
                            "background-color",
                            9066,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9648",
                            "background-color",
                            9155,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9649",
                            "background-color",
                            9368,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid3391",
                            "background-color",
                            12500,
                            55,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10641",
                            "background-color",
                            12555,
                            609,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10664",
                            "background-color",
                            13164,
                            40,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10684",
                            "background-color",
                            13385,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid3434",
                            "background-color",
                            13430,
                            70,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10706",
                            "background-color",
                            13500,
                            65,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10688",
                            "background-color",
                            13565,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10716",
                            "background-color",
                            14088,
                            47,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10743",
                            "background-color",
                            14135,
                            515,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10757",
                            "background-color",
                            14650,
                            44,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10770",
                            "background-color",
                            14694,
                            647,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10793",
                            "background-color",
                            15341,
                            62,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10771",
                            "background-color",
                            15403,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10812",
                            "background-color",
                            15954,
                            46,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11606",
                            "background-color",
                            16000,
                            665,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12272",
                            "background-color",
                            16665,
                            42,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid12271",
                            "background-color",
                            18294,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11608",
                            "background-color",
                            18447,
                            0,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16604",
                            "background-color",
                            28406,
                            1485,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(62,170,65,1)',
                            'rgba(62,170,65,1.00)'
                        ],
                        [
                            "eid16608",
                            "background-color",
                            29891,
                            60,
                            "linear",
                            "${RectangleCopy36}",
                            'rgba(62,170,65,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16880",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text15Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16929",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text15Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16921",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text15Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14807",
                            "display",
                            0,
                            0,
                            "linear",
                            "${replay3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16213",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16333",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16226",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16194",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16201",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16624",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${cracksCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16405",
                            "width",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '455px',
                            '455px'
                        ],
                        [
                            "eid16665",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy63}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16950",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy63}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17817",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy63}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17381",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy63}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17631",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy63}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16680",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy49}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16964",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy49}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17170",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy49}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17391",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy49}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17621",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy49}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17808",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy49}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16111",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15902",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15915",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16898",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16139",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16661",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy69}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16944",
                            "display",
                            17889,
                            0,
                            "linear",
                            "${RoundRect3Copy69}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16945",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy69}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17816",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy69}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17385",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy69}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17627",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy69}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16364",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16365",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16377",
                            "display",
                            56000,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16676",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy39}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16974",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy39}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17180",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy39}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17402",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy39}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17614",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy39}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16397",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid16935",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle14Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16621",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle14Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16858",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16922",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16913",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9818",
                            "top",
                            9000,
                            13500,
                            "linear",
                            "${Truck24Copy}",
                            '-53px',
                            '391px'
                        ],
                        [
                            "eid15936",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15944",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16141",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16403",
                            "height",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '31px',
                            '31px'
                        ],
                        [
                            "eid16396",
                            "font-size",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid13415",
                            "background-color",
                            7295,
                            55,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13418",
                            "background-color",
                            7350,
                            561,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13419",
                            "background-color",
                            7911,
                            44,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13420",
                            "background-color",
                            7955,
                            350,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13423",
                            "background-color",
                            8305,
                            62,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13424",
                            "background-color",
                            8367,
                            383,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13427",
                            "background-color",
                            8750,
                            60,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13429",
                            "background-color",
                            8810,
                            557,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13430",
                            "background-color",
                            9367,
                            51,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13433",
                            "background-color",
                            9418,
                            717,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13434",
                            "background-color",
                            10135,
                            44,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13436",
                            "background-color",
                            10179,
                            491,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13439",
                            "background-color",
                            10670,
                            80,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13440",
                            "background-color",
                            10750,
                            665,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13443",
                            "background-color",
                            11415,
                            43,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13445",
                            "background-color",
                            11458,
                            4832,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13446",
                            "background-color",
                            16290,
                            37,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13449",
                            "background-color",
                            16327,
                            119,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13743",
                            "background-color",
                            16927,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13450",
                            "background-color",
                            16927,
                            57,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13453",
                            "background-color",
                            16984,
                            333,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13454",
                            "background-color",
                            17317,
                            51,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13457",
                            "background-color",
                            17368,
                            501,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13458",
                            "background-color",
                            17869,
                            32,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13461",
                            "background-color",
                            17901,
                            517,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13462",
                            "background-color",
                            18418,
                            29,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13465",
                            "background-color",
                            18447,
                            674,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13466",
                            "background-color",
                            19121,
                            36,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13468",
                            "background-color",
                            19157,
                            612,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13471",
                            "background-color",
                            19769,
                            36,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13472",
                            "background-color",
                            19805,
                            650,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13475",
                            "background-color",
                            20455,
                            40,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13477",
                            "background-color",
                            20495,
                            3162,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15716",
                            "background-color",
                            25350,
                            -30,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16822",
                            "background-color",
                            28406,
                            0,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16510",
                            "background-color",
                            29951,
                            49,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16502",
                            "background-color",
                            30000,
                            4953,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16516",
                            "background-color",
                            34953,
                            47,
                            "linear",
                            "${Rectangle2Copy5}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16939",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text12Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16620",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text12Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16932",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17813",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16615",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16399",
                            "top",
                            9000,
                            13500,
                            "linear",
                            "${Truck24Copy3}",
                            '-53px',
                            '391px'
                        ],
                        [
                            "eid16199",
                            "top",
                            37000,
                            5000,
                            "linear",
                            "${Rectangle10}",
                            '440px',
                            '484px'
                        ],
                        [
                            "eid16933",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle14Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16619",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle14Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15938",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15942",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16145",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16229",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16233",
                            "display",
                            56000,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16698",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${cracksCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16489",
                            "skewX",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '-44.27deg',
                            '-44.27deg'
                        ],
                        [
                            "eid16673",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy59}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16954",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy59}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17164",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy59}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17408",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy59}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17640",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy59}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17806",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy59}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16694",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy54}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16959",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy54}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17150",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy54}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17409",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy54}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17626",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy54}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16356",
                            "height",
                            2141,
                            18354,
                            "linear",
                            "${Rectangle4Copy4}",
                            '2px',
                            '43px'
                        ],
                        [
                            "eid16669",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16951",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17161",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy62}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17386",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy62}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17606",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy62}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16511",
                            "background-color",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16514",
                            "background-color",
                            34953,
                            47,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16520",
                            "background-color",
                            35000,
                            1940,
                            "linear",
                            "${Rectangle7}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16525",
                            "background-color",
                            36940,
                            60,
                            "linear",
                            "${Rectangle7}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16530",
                            "background-color",
                            37000,
                            4870,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16535",
                            "background-color",
                            41870,
                            73,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16540",
                            "background-color",
                            41943,
                            1989,
                            "linear",
                            "${Rectangle7}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16545",
                            "background-color",
                            43932,
                            68,
                            "linear",
                            "${Rectangle7}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16550",
                            "background-color",
                            44000,
                            4954,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16555",
                            "background-color",
                            48954,
                            46,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16560",
                            "background-color",
                            49000,
                            1944,
                            "linear",
                            "${Rectangle7}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16566",
                            "background-color",
                            50944,
                            56,
                            "linear",
                            "${Rectangle7}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16572",
                            "background-color",
                            51000,
                            4946,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16584",
                            "background-color",
                            56000,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16177",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Replay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16190",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Replay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16207",
                            "display",
                            42750,
                            0,
                            "linear",
                            "${Replay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16208",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${Replay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16221",
                            "display",
                            49750,
                            0,
                            "linear",
                            "${Replay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16224",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Replay}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16613",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Replay}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16679",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy50}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16963",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy50}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17169",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy50}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17392",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy50}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17622",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy50}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17807",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy50}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16671",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16942",
                            "display",
                            17889,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16977",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17183",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17399",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17612",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17804",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy36}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16404",
                            "top",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid16677",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy47}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16966",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy47}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17172",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy47}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17389",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy47}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17619",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy47}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15907",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15913",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16144",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14297",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14301",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15940",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16458",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16459",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16460",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16461",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1307",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid1410",
                            "background-color",
                            2141,
                            53,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid1457",
                            "background-color",
                            2194,
                            565,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid1493",
                            "background-color",
                            2759,
                            49,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8797",
                            "background-color",
                            2808,
                            296,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8836",
                            "background-color",
                            3104,
                            50,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8798",
                            "background-color",
                            3154,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8837",
                            "background-color",
                            3672,
                            84,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8862",
                            "background-color",
                            3756,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8881",
                            "background-color",
                            4206,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8913",
                            "background-color",
                            4250,
                            66,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8938",
                            "background-color",
                            4667,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8939",
                            "background-color",
                            4710,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8914",
                            "background-color",
                            4740,
                            205,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid8977",
                            "background-color",
                            4945,
                            55,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9050",
                            "background-color",
                            5465,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9051",
                            "background-color",
                            5517,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9073",
                            "background-color",
                            5590,
                            40,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9082",
                            "background-color",
                            6130,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9083",
                            "background-color",
                            6174,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9084",
                            "background-color",
                            6250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9134",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9135",
                            "background-color",
                            6365,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid2009",
                            "background-color",
                            11135,
                            49,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9920",
                            "background-color",
                            11800,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9871",
                            "background-color",
                            12150,
                            545,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1)'
                        ],
                        [
                            "eid9922",
                            "background-color",
                            12695,
                            55,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9923",
                            "background-color",
                            12750,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9949",
                            "background-color",
                            13250,
                            51,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid2312",
                            "background-color",
                            14000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid10079",
                            "background-color",
                            14601,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid10103",
                            "background-color",
                            15250,
                            91,
                            "linear",
                            "${Rectangle}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid15259",
                            "background-color",
                            15341,
                            3483,
                            "linear",
                            "${Rectangle}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16605",
                            "background-color",
                            28406,
                            1485,
                            "linear",
                            "${Rectangle}",
                            'rgba(62,170,65,1)',
                            'rgba(62,170,65,1.00)'
                        ],
                        [
                            "eid16609",
                            "background-color",
                            29891,
                            60,
                            "linear",
                            "${Rectangle}",
                            'rgba(62,170,65,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid8036",
                            "left",
                            0,
                            13500,
                            "linear",
                            "${Truck24}",
                            '627px',
                            '-476px'
                        ],
                        [
                            "eid16491",
                            "left",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '473px',
                            '473px'
                        ],
                        [
                            "eid16241",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16248",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16351",
                            "display",
                            41870,
                            0,
                            "linear",
                            "${Rectangle10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16934",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle14Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16616",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle14Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16202",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16203",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16204",
                            "display",
                            42750,
                            0,
                            "linear",
                            "${Text9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14571",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ArrowCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14572",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${ArrowCopy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16690",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy51}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16962",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy51}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17168",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy51}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17377",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy51}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17623",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy51}",
                            'none',
                            'none'
                        ],
                        [
                            "eid5391",
                            "background-color",
                            7295,
                            55,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9672",
                            "background-color",
                            7350,
                            561,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9691",
                            "background-color",
                            7911,
                            44,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9673",
                            "background-color",
                            7955,
                            0,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9703",
                            "background-color",
                            8305,
                            62,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid5490",
                            "background-color",
                            8750,
                            60,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5500",
                            "background-color",
                            8810,
                            572,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5522",
                            "background-color",
                            9382,
                            36,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid5545",
                            "background-color",
                            10135,
                            44,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9750",
                            "background-color",
                            10179,
                            491,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid9775",
                            "background-color",
                            10670,
                            80,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9780",
                            "background-color",
                            10750,
                            665,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid9814",
                            "background-color",
                            11415,
                            43,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11323",
                            "background-color",
                            11500,
                            0,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5645",
                            "background-color",
                            12290,
                            4001,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5680",
                            "background-color",
                            16290,
                            61,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11657",
                            "background-color",
                            16351,
                            584,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid11659",
                            "background-color",
                            16935,
                            57,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11693",
                            "background-color",
                            16991,
                            326,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid11705",
                            "background-color",
                            17317,
                            51,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid5773",
                            "background-color",
                            17869,
                            32,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5787",
                            "background-color",
                            17901,
                            517,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5809",
                            "background-color",
                            18418,
                            29,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid5832",
                            "background-color",
                            19121,
                            36,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5848",
                            "background-color",
                            19157,
                            612,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid5870",
                            "background-color",
                            19769,
                            36,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid5897",
                            "background-color",
                            20455,
                            40,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(243,14,28,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid15546",
                            "background-color",
                            20495,
                            3162,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16817",
                            "background-color",
                            24616,
                            3740,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16819",
                            "background-color",
                            28356,
                            50,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(16,239,23,1.00)',
                            'rgba(62,170,65,1.00)'
                        ],
                        [
                            "eid16607",
                            "background-color",
                            29891,
                            60,
                            "linear",
                            "${RectangleCopy47}",
                            'rgba(62,170,65,1.00)',
                            'rgba(16,239,23,1.00)'
                        ],
                        [
                            "eid16225",
                            "top",
                            51000,
                            0,
                            "linear",
                            "${cracksCopy2}",
                            '138px',
                            '138px'
                        ],
                        [
                            "eid16670",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy58}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16955",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy58}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17165",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy58}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17404",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy58}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17639",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy58}",
                            'block',
                            'block'
                        ],
                        [
                            "eid17803",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy58}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16391",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid16687",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy46}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16967",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy46}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17173",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy46}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17382",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy46}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17618",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy46}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16398",
                            "left",
                            9000,
                            13500,
                            "linear",
                            "${Truck24Copy3}",
                            '627px',
                            '-476px'
                        ],
                        [
                            "eid16267",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16312",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16360",
                            "display",
                            35903,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16246",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16249",
                            "display",
                            42000,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16218",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16255",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Rectangle11Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16668",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy61}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16952",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy61}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17162",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy61}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17387",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy61}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17605",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy61}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16505",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16691",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy57}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16956",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy57}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17153",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy57}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17405",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy57}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17638",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy57}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16693",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy55}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16958",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy55}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17151",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy55}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17407",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy55}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17636",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy55}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15906",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15914",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16142",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9817",
                            "left",
                            9000,
                            13500,
                            "linear",
                            "${Truck24Copy}",
                            '627px',
                            '-476px'
                        ],
                        [
                            "eid15898",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15917",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16886",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16137",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16493",
                            "top",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '389px',
                            '389px'
                        ],
                        [
                            "eid16240",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16250",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${Rectangle12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16937",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text12Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16617",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text12Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16269",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16242",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16251",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16254",
                            "display",
                            49000,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16232",
                            "display",
                            56000,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16682",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy40}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16973",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy40}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17179",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy40}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17403",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy40}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17615",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy40}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17801",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy40}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16938",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text12Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16618",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text12Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16688",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16960",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17166",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy53}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17383",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy53}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17625",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy53}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16879",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle15Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16930",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle15Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16920",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle15Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16666",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy64}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16949",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy64}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17818",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy64}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17410",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy64}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17603",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy64}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16483",
                            "rotateZ",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '10deg',
                            '10deg'
                        ],
                        [
                            "eid16685",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16971",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17177",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy42}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17394",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy42}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17608",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy42}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16268",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16313",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16243",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Rectangle11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16247",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16256",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${Rectangle11}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8037",
                            "top",
                            0,
                            13500,
                            "linear",
                            "${Truck24}",
                            '-53px',
                            '391px'
                        ],
                        [
                            "eid13414",
                            "background-color",
                            7295,
                            47,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13416",
                            "background-color",
                            7342,
                            569,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13417",
                            "background-color",
                            7911,
                            48,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13421",
                            "background-color",
                            7959,
                            346,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13422",
                            "background-color",
                            8305,
                            62,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13425",
                            "background-color",
                            8367,
                            383,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13426",
                            "background-color",
                            8750,
                            60,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13428",
                            "background-color",
                            8810,
                            557,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13431",
                            "background-color",
                            9367,
                            51,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13432",
                            "background-color",
                            9418,
                            717,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13435",
                            "background-color",
                            10135,
                            44,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13437",
                            "background-color",
                            10179,
                            491,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13438",
                            "background-color",
                            10670,
                            80,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13441",
                            "background-color",
                            10750,
                            665,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13442",
                            "background-color",
                            11415,
                            43,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13444",
                            "background-color",
                            11458,
                            4832,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13447",
                            "background-color",
                            16290,
                            37,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13448",
                            "background-color",
                            16327,
                            600,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13451",
                            "background-color",
                            16927,
                            57,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13452",
                            "background-color",
                            16984,
                            333,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13455",
                            "background-color",
                            17317,
                            51,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13456",
                            "background-color",
                            17368,
                            501,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13459",
                            "background-color",
                            17869,
                            32,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13460",
                            "background-color",
                            17901,
                            517,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13463",
                            "background-color",
                            18418,
                            29,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13464",
                            "background-color",
                            18447,
                            674,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13467",
                            "background-color",
                            19121,
                            36,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13469",
                            "background-color",
                            19157,
                            612,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13470",
                            "background-color",
                            19769,
                            36,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13473",
                            "background-color",
                            19805,
                            650,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13474",
                            "background-color",
                            20455,
                            40,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13476",
                            "background-color",
                            20495,
                            3162,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15744",
                            "background-color",
                            25350,
                            -30,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16497",
                            "background-color",
                            29951,
                            0,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16507",
                            "background-color",
                            29951,
                            49,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16501",
                            "background-color",
                            30000,
                            4953,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16515",
                            "background-color",
                            34953,
                            47,
                            "linear",
                            "${Rectangle2Copy14}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16486",
                            "scaleX",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '20',
                            '20'
                        ],
                        [
                            "eid16506",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${shmcircuit2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13080",
                            "background-color",
                            3500,
                            45,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13086",
                            "background-color",
                            3545,
                            604,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13088",
                            "background-color",
                            4149,
                            57,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13090",
                            "background-color",
                            4206,
                            294,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13092",
                            "background-color",
                            4500,
                            40,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13094",
                            "background-color",
                            4540,
                            500,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13132",
                            "background-color",
                            5040,
                            44,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13097",
                            "background-color",
                            5084,
                            506,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13136",
                            "background-color",
                            5590,
                            0,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13138",
                            "background-color",
                            5630,
                            40,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13099",
                            "background-color",
                            5670,
                            640,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13101",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13105",
                            "background-color",
                            6365,
                            533,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13112",
                            "background-color",
                            6950,
                            50,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13114",
                            "background-color",
                            7000,
                            654,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13115",
                            "background-color",
                            7654,
                            41,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13120",
                            "background-color",
                            7695,
                            4805,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13122",
                            "background-color",
                            12500,
                            55,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13125",
                            "background-color",
                            12555,
                            603,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13128",
                            "background-color",
                            13158,
                            46,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13140",
                            "background-color",
                            13204,
                            296,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13142",
                            "background-color",
                            13500,
                            65,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13144",
                            "background-color",
                            13565,
                            523,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13145",
                            "background-color",
                            14088,
                            47,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13148",
                            "background-color",
                            14135,
                            515,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13150",
                            "background-color",
                            14650,
                            44,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13152",
                            "background-color",
                            14694,
                            647,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13155",
                            "background-color",
                            15341,
                            62,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13159",
                            "background-color",
                            15403,
                            551,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13161",
                            "background-color",
                            15954,
                            46,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13167",
                            "background-color",
                            16000,
                            665,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13169",
                            "background-color",
                            16665,
                            42,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13173",
                            "background-color",
                            16707,
                            3434,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16547",
                            "background-color",
                            43932,
                            68,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16552",
                            "background-color",
                            44000,
                            4954,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16557",
                            "background-color",
                            48954,
                            46,
                            "linear",
                            "${Rectangle2Copy17}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15908",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15912",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16146",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16689",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy52}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16961",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy52}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17167",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy52}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17384",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy52}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17624",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy52}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16332",
                            "top",
                            44000,
                            0,
                            "linear",
                            "${Rectangle12Copy}",
                            '482px',
                            '482px'
                        ],
                        [
                            "eid16674",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16943",
                            "display",
                            17889,
                            0,
                            "linear",
                            "${RoundRect3Copy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16976",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17182",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17400",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17611",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy37}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12724",
                            "background-color",
                            2141,
                            53,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1)'
                        ],
                        [
                            "eid12717",
                            "background-color",
                            2194,
                            565,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13053",
                            "background-color",
                            2808,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13054",
                            "background-color",
                            2811,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13052",
                            "background-color",
                            2861,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12735",
                            "background-color",
                            3104,
                            50,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12736",
                            "background-color",
                            3154,
                            518,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12741",
                            "background-color",
                            3672,
                            84,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12742",
                            "background-color",
                            3756,
                            494,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12747",
                            "background-color",
                            4250,
                            66,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12748",
                            "background-color",
                            4316,
                            629,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12753",
                            "background-color",
                            4945,
                            55,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12755",
                            "background-color",
                            5000,
                            590,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12759",
                            "background-color",
                            5590,
                            40,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12760",
                            "background-color",
                            5630,
                            680,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12765",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12766",
                            "background-color",
                            6365,
                            4770,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12771",
                            "background-color",
                            11135,
                            49,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12772",
                            "background-color",
                            11184,
                            566,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12777",
                            "background-color",
                            11750,
                            50,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12779",
                            "background-color",
                            11800,
                            303,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12783",
                            "background-color",
                            12103,
                            47,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12784",
                            "background-color",
                            12150,
                            545,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12789",
                            "background-color",
                            12695,
                            55,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12791",
                            "background-color",
                            12750,
                            500,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12937",
                            "background-color",
                            13250,
                            51,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12931",
                            "background-color",
                            13385,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12801",
                            "background-color",
                            13467,
                            480,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12803",
                            "background-color",
                            14000,
                            547,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12942",
                            "background-color",
                            14547,
                            54,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12807",
                            "background-color",
                            14601,
                            649,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12808",
                            "background-color",
                            15250,
                            91,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12811",
                            "background-color",
                            15341,
                            3483,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16570",
                            "background-color",
                            50944,
                            56,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16576",
                            "background-color",
                            51000,
                            4946,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16588",
                            "background-color",
                            56000,
                            0,
                            "linear",
                            "${Rectangle2Copy8}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15890",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15927",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16155",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15900",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15916",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16894",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16138",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15897",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15918",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16882",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16136",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16683",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy44}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16969",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy44}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17175",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy44}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17396",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy44}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17610",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy44}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16825",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16856",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16980",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16504",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16457",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15896",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15922",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16881",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16149",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16196",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16409",
                            "left",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid15903",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15919",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16897",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16152",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16253",
                            "top",
                            44000,
                            5000,
                            "linear",
                            "${Rectangle12}",
                            '440px',
                            '484px'
                        ],
                        [
                            "eid13277",
                            "background-color",
                            5040,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13280",
                            "background-color",
                            5084,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13281",
                            "background-color",
                            5126,
                            39,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13275",
                            "background-color",
                            5165,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13286",
                            "background-color",
                            5750,
                            43,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13289",
                            "background-color",
                            5793,
                            381,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13292",
                            "background-color",
                            6174,
                            76,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13290",
                            "background-color",
                            6250,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13296",
                            "background-color",
                            6696,
                            54,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13299",
                            "background-color",
                            6750,
                            487,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13302",
                            "background-color",
                            7237,
                            58,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13300",
                            "background-color",
                            7295,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13306",
                            "background-color",
                            8000,
                            43,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13309",
                            "background-color",
                            8043,
                            561,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13312",
                            "background-color",
                            8604,
                            42,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13310",
                            "background-color",
                            8646,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13316",
                            "background-color",
                            9322,
                            45,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13319",
                            "background-color",
                            9367,
                            4768,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13322",
                            "background-color",
                            14135,
                            53,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13320",
                            "background-color",
                            14188,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13326",
                            "background-color",
                            14798,
                            44,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13329",
                            "background-color",
                            14842,
                            317,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13573",
                            "background-color",
                            15206,
                            499,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13576",
                            "background-color",
                            15705,
                            45,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13738",
                            "background-color",
                            15750,
                            500,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13741",
                            "background-color",
                            16250,
                            40,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13739",
                            "background-color",
                            16290,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13862",
                            "background-color",
                            16446,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13864",
                            "background-color",
                            16984,
                            65,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13366",
                            "background-color",
                            17097,
                            483,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13369",
                            "background-color",
                            17580,
                            45,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13367",
                            "background-color",
                            17625,
                            0,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13373",
                            "background-color",
                            18294,
                            51,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13376",
                            "background-color",
                            18345,
                            3283,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16526",
                            "background-color",
                            36940,
                            60,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16531",
                            "background-color",
                            37000,
                            4870,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16536",
                            "background-color",
                            41870,
                            73,
                            "linear",
                            "${Rectangle2Copy3}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16936",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17814",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16614",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13928",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13929",
                            "background-color",
                            7295,
                            47,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13623",
                            "background-color",
                            7398,
                            513,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13624",
                            "background-color",
                            7911,
                            44,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13625",
                            "background-color",
                            7955,
                            350,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13626",
                            "background-color",
                            8305,
                            62,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13627",
                            "background-color",
                            8367,
                            383,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13628",
                            "background-color",
                            8750,
                            60,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13629",
                            "background-color",
                            8810,
                            557,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13630",
                            "background-color",
                            9367,
                            51,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13631",
                            "background-color",
                            9418,
                            717,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13632",
                            "background-color",
                            10135,
                            44,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13633",
                            "background-color",
                            10179,
                            491,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13634",
                            "background-color",
                            10670,
                            80,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13635",
                            "background-color",
                            10750,
                            665,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13636",
                            "background-color",
                            11415,
                            43,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13637",
                            "background-color",
                            11458,
                            4832,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13638",
                            "background-color",
                            16290,
                            37,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13639",
                            "background-color",
                            16327,
                            600,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13640",
                            "background-color",
                            16927,
                            57,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13641",
                            "background-color",
                            16984,
                            333,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13642",
                            "background-color",
                            17317,
                            51,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13643",
                            "background-color",
                            17368,
                            501,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13644",
                            "background-color",
                            17869,
                            32,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13752",
                            "background-color",
                            17950,
                            0,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13645",
                            "background-color",
                            17950,
                            468,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13646",
                            "background-color",
                            18418,
                            29,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13647",
                            "background-color",
                            18447,
                            674,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13648",
                            "background-color",
                            19121,
                            36,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13649",
                            "background-color",
                            19157,
                            612,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13650",
                            "background-color",
                            19769,
                            36,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13651",
                            "background-color",
                            19805,
                            650,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13652",
                            "background-color",
                            20455,
                            40,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13653",
                            "background-color",
                            20495,
                            3162,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16509",
                            "background-color",
                            29951,
                            49,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16498",
                            "background-color",
                            30000,
                            4953,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16518",
                            "background-color",
                            34953,
                            47,
                            "linear",
                            "${Rectangle2Copy6}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16878",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text15Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16927",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text15Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16919",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text15Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13846",
                            "background-color",
                            5126,
                            39,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13548",
                            "background-color",
                            5250,
                            480,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13549",
                            "background-color",
                            5730,
                            63,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13550",
                            "background-color",
                            5793,
                            381,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13551",
                            "background-color",
                            6174,
                            76,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13552",
                            "background-color",
                            6250,
                            446,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13553",
                            "background-color",
                            6696,
                            54,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13554",
                            "background-color",
                            6750,
                            487,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13555",
                            "background-color",
                            7237,
                            58,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13556",
                            "background-color",
                            7295,
                            705,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13559",
                            "background-color",
                            8000,
                            43,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13560",
                            "background-color",
                            8098,
                            207,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13696",
                            "background-color",
                            8305,
                            62,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13700",
                            "background-color",
                            8604,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13562",
                            "background-color",
                            8646,
                            676,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13563",
                            "background-color",
                            9322,
                            46,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13564",
                            "background-color",
                            9368,
                            50,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13703",
                            "background-color",
                            9418,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13708",
                            "background-color",
                            10135,
                            44,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13710",
                            "background-color",
                            10179,
                            491,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13711",
                            "background-color",
                            10750,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13719",
                            "background-color",
                            11458,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13720",
                            "background-color",
                            11544,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13717",
                            "background-color",
                            14135,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13565",
                            "background-color",
                            14135,
                            53,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13566",
                            "background-color",
                            14188,
                            610,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13567",
                            "background-color",
                            14798,
                            44,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13568",
                            "background-color",
                            14842,
                            317,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13569",
                            "background-color",
                            15159,
                            47,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13578",
                            "background-color",
                            15206,
                            499,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13579",
                            "background-color",
                            15705,
                            45,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13580",
                            "background-color",
                            15750,
                            500,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13860",
                            "background-color",
                            16250,
                            40,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13582",
                            "background-color",
                            16333,
                            664,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13583",
                            "background-color",
                            16997,
                            52,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13584",
                            "background-color",
                            17049,
                            268,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13751",
                            "background-color",
                            17317,
                            51,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13865",
                            "background-color",
                            17451,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13866",
                            "background-color",
                            17500,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13867",
                            "background-color",
                            17580,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13586",
                            "background-color",
                            17625,
                            669,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13587",
                            "background-color",
                            18294,
                            51,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13588",
                            "background-color",
                            18345,
                            73,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13755",
                            "background-color",
                            18418,
                            29,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13753",
                            "background-color",
                            18447,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13868",
                            "background-color",
                            19121,
                            48,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13762",
                            "background-color",
                            19169,
                            600,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13766",
                            "background-color",
                            19769,
                            36,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16804",
                            "background-color",
                            19805,
                            650,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16806",
                            "background-color",
                            20455,
                            40,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15593",
                            "background-color",
                            23140,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15665",
                            "background-color",
                            23190,
                            0,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16508",
                            "background-color",
                            29951,
                            49,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16500",
                            "background-color",
                            30000,
                            4953,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16517",
                            "background-color",
                            34953,
                            47,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16522",
                            "background-color",
                            35000,
                            1940,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16527",
                            "background-color",
                            36940,
                            60,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16532",
                            "background-color",
                            37000,
                            4870,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16537",
                            "background-color",
                            41870,
                            73,
                            "linear",
                            "${Rectangle2Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16667",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy60}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16953",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy60}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17163",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy60}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17388",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy60}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17604",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy60}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15937",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15943",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16143",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16376",
                            "top",
                            51000,
                            5000,
                            "linear",
                            "${Rectangle4}",
                            '440px',
                            '482px'
                        ],
                        [
                            "eid16402",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16697",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy68}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16981",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy68}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17815",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy68}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16681",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy41}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16972",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy41}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17178",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy41}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17393",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy41}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17617",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy41}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17802",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect3Copy41}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13278",
                            "background-color",
                            5040,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13279",
                            "background-color",
                            5084,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13282",
                            "background-color",
                            5126,
                            39,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13276",
                            "background-color",
                            5165,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13285",
                            "background-color",
                            5750,
                            43,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13287",
                            "background-color",
                            5793,
                            381,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13291",
                            "background-color",
                            6174,
                            76,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13288",
                            "background-color",
                            6250,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13295",
                            "background-color",
                            6696,
                            54,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13297",
                            "background-color",
                            6750,
                            487,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13301",
                            "background-color",
                            7237,
                            58,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13298",
                            "background-color",
                            7295,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13305",
                            "background-color",
                            8000,
                            43,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13307",
                            "background-color",
                            8043,
                            561,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13311",
                            "background-color",
                            8604,
                            42,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13308",
                            "background-color",
                            8646,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13315",
                            "background-color",
                            9322,
                            45,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13317",
                            "background-color",
                            9367,
                            4768,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13321",
                            "background-color",
                            14135,
                            53,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13318",
                            "background-color",
                            14188,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13325",
                            "background-color",
                            14798,
                            44,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13327",
                            "background-color",
                            14842,
                            317,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13570",
                            "background-color",
                            15206,
                            499,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13577",
                            "background-color",
                            15705,
                            45,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13736",
                            "background-color",
                            15750,
                            500,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13740",
                            "background-color",
                            16250,
                            40,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13737",
                            "background-color",
                            16290,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13861",
                            "background-color",
                            16446,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13863",
                            "background-color",
                            16984,
                            65,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13364",
                            "background-color",
                            17097,
                            483,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13368",
                            "background-color",
                            17580,
                            45,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13365",
                            "background-color",
                            17625,
                            0,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13372",
                            "background-color",
                            18294,
                            51,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13374",
                            "background-color",
                            18345,
                            3351,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16528",
                            "background-color",
                            36940,
                            60,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16533",
                            "background-color",
                            37000,
                            4870,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16538",
                            "background-color",
                            41870,
                            73,
                            "linear",
                            "${Rectangle2Copy2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15901",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15920",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16893",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16151",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16325",
                            "top",
                            30000,
                            5000,
                            "linear",
                            "${Rectangle11Copy}",
                            '439px',
                            '476px'
                        ],
                        [
                            "eid17145",
                            "top",
                            35000,
                            134,
                            "linear",
                            "${Rectangle11Copy}",
                            '476px',
                            '478px'
                        ],
                        [
                            "eid17146",
                            "top",
                            35134,
                            562,
                            "linear",
                            "${Rectangle11Copy}",
                            '478px',
                            '482px'
                        ],
                        [
                            "eid17148",
                            "top",
                            35696,
                            151,
                            "linear",
                            "${Rectangle11Copy}",
                            '482px',
                            '483px'
                        ],
                        [
                            "eid17149",
                            "top",
                            35847,
                            56,
                            "linear",
                            "${Rectangle11Copy}",
                            '483px',
                            '482px'
                        ],
                        [
                            "eid16166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16167",
                            "display",
                            2141,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16181",
                            "display",
                            23563,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16180",
                            "display",
                            25090,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16179",
                            "display",
                            27750,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16271",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16168",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Rectangle4Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16876",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text15Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16925",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text15Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16917",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text15Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15904",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15929",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16859",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16153",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16270",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle10Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16245",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${Rectangle10Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16272",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${Rectangle10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16200",
                            "display",
                            41943,
                            0,
                            "linear",
                            "${Rectangle10Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16692",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy56}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16957",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy56}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17152",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy56}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17406",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy56}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17637",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy56}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16324",
                            "height",
                            30000,
                            5903,
                            "linear",
                            "${Rectangle11Copy}",
                            '44px',
                            '1px'
                        ],
                        [
                            "eid17102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16979",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16176",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16192",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16205",
                            "display",
                            42750,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16210",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16219",
                            "display",
                            49750,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16222",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16236",
                            "display",
                            56750,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16710",
                            "display",
                            56798,
                            0,
                            "linear",
                            "${RoundRect}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16612",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${RoundRect}",
                            'none',
                            'block'
                        ],
                        [
                            "eid15899",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15921",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16885",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16150",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16512",
                            "background-color",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16513",
                            "background-color",
                            34953,
                            47,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16519",
                            "background-color",
                            35000,
                            1940,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16524",
                            "background-color",
                            36940,
                            60,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16529",
                            "background-color",
                            37000,
                            4870,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16534",
                            "background-color",
                            41870,
                            73,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16539",
                            "background-color",
                            41943,
                            1989,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16544",
                            "background-color",
                            43932,
                            68,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16549",
                            "background-color",
                            44000,
                            4954,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16554",
                            "background-color",
                            48954,
                            46,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16559",
                            "background-color",
                            49000,
                            1944,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16565",
                            "background-color",
                            50944,
                            56,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16571",
                            "background-color",
                            51000,
                            4946,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16583",
                            "background-color",
                            56000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16157",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16174",
                            "display",
                            36000,
                            0,
                            "linear",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16931",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16622",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Text8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13079",
                            "background-color",
                            3500,
                            45,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13085",
                            "background-color",
                            3545,
                            604,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13087",
                            "background-color",
                            4149,
                            57,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13089",
                            "background-color",
                            4206,
                            294,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13091",
                            "background-color",
                            4500,
                            40,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13093",
                            "background-color",
                            4540,
                            500,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13133",
                            "background-color",
                            5040,
                            44,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13096",
                            "background-color",
                            5084,
                            506,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13135",
                            "background-color",
                            5590,
                            0,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13137",
                            "background-color",
                            5630,
                            40,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13098",
                            "background-color",
                            5670,
                            640,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13100",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13106",
                            "background-color",
                            6365,
                            533,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13111",
                            "background-color",
                            6950,
                            50,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13113",
                            "background-color",
                            7000,
                            654,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13116",
                            "background-color",
                            7654,
                            41,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13119",
                            "background-color",
                            7695,
                            4805,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13121",
                            "background-color",
                            12500,
                            55,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13126",
                            "background-color",
                            12555,
                            603,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13127",
                            "background-color",
                            13158,
                            46,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13139",
                            "background-color",
                            13204,
                            296,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13141",
                            "background-color",
                            13500,
                            65,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13143",
                            "background-color",
                            13565,
                            523,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13146",
                            "background-color",
                            14088,
                            47,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13147",
                            "background-color",
                            14135,
                            515,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13149",
                            "background-color",
                            14650,
                            44,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13153",
                            "background-color",
                            14694,
                            647,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13154",
                            "background-color",
                            15341,
                            62,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13158",
                            "background-color",
                            15403,
                            551,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13160",
                            "background-color",
                            15954,
                            46,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13166",
                            "background-color",
                            16000,
                            665,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13168",
                            "background-color",
                            16665,
                            42,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13172",
                            "background-color",
                            16707,
                            3434,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16546",
                            "background-color",
                            43932,
                            68,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16551",
                            "background-color",
                            44000,
                            4954,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16556",
                            "background-color",
                            48954,
                            46,
                            "linear",
                            "${Rectangle2Copy16}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16198",
                            "height",
                            37000,
                            5000,
                            "linear",
                            "${Rectangle10}",
                            '44px',
                            '0px'
                        ],
                        [
                            "eid16662",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy65}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16948",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy65}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17819",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy65}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17378",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy65}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17630",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy65}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15909",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle9Copy4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15911",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Rectangle9Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16148",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle9Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16474",
                            "width",
                            30000,
                            0,
                            "linear",
                            "${Rectangle7Copy}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid16877",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle15Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16928",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle15Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16918",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle15Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12726",
                            "background-color",
                            2141,
                            53,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1)'
                        ],
                        [
                            "eid12715",
                            "background-color",
                            2194,
                            565,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13050",
                            "background-color",
                            2808,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13051",
                            "background-color",
                            2811,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12732",
                            "background-color",
                            2861,
                            243,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12733",
                            "background-color",
                            3104,
                            50,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12738",
                            "background-color",
                            3154,
                            518,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12739",
                            "background-color",
                            3672,
                            84,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12744",
                            "background-color",
                            3756,
                            494,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12745",
                            "background-color",
                            4250,
                            66,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12750",
                            "background-color",
                            4316,
                            629,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12751",
                            "background-color",
                            4945,
                            55,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12756",
                            "background-color",
                            5000,
                            590,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12757",
                            "background-color",
                            5590,
                            40,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12762",
                            "background-color",
                            5630,
                            680,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12763",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12768",
                            "background-color",
                            6365,
                            4770,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12769",
                            "background-color",
                            11135,
                            49,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12774",
                            "background-color",
                            11184,
                            566,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12775",
                            "background-color",
                            11750,
                            50,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12780",
                            "background-color",
                            11800,
                            303,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12781",
                            "background-color",
                            12103,
                            47,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12785",
                            "background-color",
                            12150,
                            545,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12788",
                            "background-color",
                            12695,
                            55,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12792",
                            "background-color",
                            12750,
                            500,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12939",
                            "background-color",
                            13250,
                            51,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12933",
                            "background-color",
                            13385,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12799",
                            "background-color",
                            13467,
                            480,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12934",
                            "background-color",
                            13947,
                            53,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12804",
                            "background-color",
                            14000,
                            547,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12940",
                            "background-color",
                            14547,
                            54,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12805",
                            "background-color",
                            14601,
                            649,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12810",
                            "background-color",
                            15250,
                            91,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12813",
                            "background-color",
                            15341,
                            3483,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16569",
                            "background-color",
                            50944,
                            56,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16575",
                            "background-color",
                            51000,
                            4946,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16587",
                            "background-color",
                            56000,
                            0,
                            "linear",
                            "${Rectangle2Copy4}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16375",
                            "height",
                            51000,
                            5000,
                            "linear",
                            "${Rectangle4}",
                            '43px',
                            '1px'
                        ],
                        [
                            "eid12903",
                            "background-color",
                            2141,
                            53,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12904",
                            "background-color",
                            2194,
                            565,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12906",
                            "background-color",
                            2808,
                            296,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12909",
                            "background-color",
                            3104,
                            50,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12910",
                            "background-color",
                            3203,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12911",
                            "background-color",
                            3250,
                            422,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12913",
                            "background-color",
                            3756,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13082",
                            "background-color",
                            4149,
                            57,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13084",
                            "background-color",
                            4250,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12914",
                            "background-color",
                            4250,
                            66,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12915",
                            "background-color",
                            4316,
                            629,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12917",
                            "background-color",
                            5000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13134",
                            "background-color",
                            5040,
                            44,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13095",
                            "background-color",
                            5590,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12918",
                            "background-color",
                            5590,
                            40,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12919",
                            "background-color",
                            5630,
                            680,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12920",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12921",
                            "background-color",
                            6365,
                            585,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13104",
                            "background-color",
                            6950,
                            50,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13103",
                            "background-color",
                            7000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13118",
                            "background-color",
                            7654,
                            41,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13117",
                            "background-color",
                            11135,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12922",
                            "background-color",
                            11135,
                            49,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12923",
                            "background-color",
                            11184,
                            566,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12924",
                            "background-color",
                            11750,
                            50,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12925",
                            "background-color",
                            11800,
                            303,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12926",
                            "background-color",
                            12103,
                            47,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12927",
                            "background-color",
                            12150,
                            545,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12929",
                            "background-color",
                            12750,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13124",
                            "background-color",
                            13158,
                            46,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13129",
                            "background-color",
                            13204,
                            46,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13131",
                            "background-color",
                            13250,
                            51,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12930",
                            "background-color",
                            13301,
                            84,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1)'
                        ],
                        [
                            "eid12943",
                            "background-color",
                            13385,
                            562,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13850",
                            "background-color",
                            14000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13017",
                            "background-color",
                            14088,
                            47,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13151",
                            "background-color",
                            14547,
                            54,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13055",
                            "background-color",
                            14650,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13156",
                            "background-color",
                            15250,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13059",
                            "background-color",
                            15341,
                            62,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13162",
                            "background-color",
                            15403,
                            551,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13164",
                            "background-color",
                            15954,
                            46,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13163",
                            "background-color",
                            16000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13171",
                            "background-color",
                            16665,
                            29,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid15275",
                            "background-color",
                            16694,
                            2138,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16548",
                            "background-color",
                            43932,
                            68,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16553",
                            "background-color",
                            44000,
                            4954,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16558",
                            "background-color",
                            48954,
                            46,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16561",
                            "background-color",
                            49000,
                            1944,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16567",
                            "background-color",
                            50944,
                            56,
                            "linear",
                            "${Rectangle2}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16573",
                            "background-color",
                            51000,
                            4946,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16585",
                            "background-color",
                            56000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16664",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy67}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16946",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy67}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17821",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy67}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17380",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy67}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17628",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy67}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16392",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '139px',
                            '139px'
                        ],
                        [
                            "eid14557",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14576",
                            "display",
                            2141,
                            0,
                            "linear",
                            "${Rectangle4Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12725",
                            "background-color",
                            2141,
                            53,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1)'
                        ],
                        [
                            "eid12719",
                            "background-color",
                            2194,
                            565,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13047",
                            "background-color",
                            2808,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13048",
                            "background-color",
                            2811,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13049",
                            "background-color",
                            2861,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12734",
                            "background-color",
                            3104,
                            50,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12737",
                            "background-color",
                            3154,
                            518,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12740",
                            "background-color",
                            3672,
                            84,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12743",
                            "background-color",
                            3756,
                            494,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12746",
                            "background-color",
                            4250,
                            66,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12749",
                            "background-color",
                            4316,
                            629,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12752",
                            "background-color",
                            4945,
                            55,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12754",
                            "background-color",
                            5000,
                            590,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12758",
                            "background-color",
                            5590,
                            40,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12761",
                            "background-color",
                            5630,
                            680,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12764",
                            "background-color",
                            6310,
                            55,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12767",
                            "background-color",
                            6365,
                            4770,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12770",
                            "background-color",
                            11135,
                            49,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12773",
                            "background-color",
                            11184,
                            566,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12776",
                            "background-color",
                            11750,
                            50,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12778",
                            "background-color",
                            11800,
                            303,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12782",
                            "background-color",
                            12103,
                            47,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12786",
                            "background-color",
                            12150,
                            545,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12787",
                            "background-color",
                            12695,
                            55,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12790",
                            "background-color",
                            12750,
                            500,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12938",
                            "background-color",
                            13250,
                            51,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12932",
                            "background-color",
                            13385,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12800",
                            "background-color",
                            13467,
                            480,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12802",
                            "background-color",
                            14000,
                            547,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12941",
                            "background-color",
                            14547,
                            54,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12806",
                            "background-color",
                            14601,
                            649,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12809",
                            "background-color",
                            15250,
                            91,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12812",
                            "background-color",
                            15341,
                            3483,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16568",
                            "background-color",
                            50944,
                            56,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16574",
                            "background-color",
                            51000,
                            4946,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16586",
                            "background-color",
                            56000,
                            0,
                            "linear",
                            "${Rectangle2Copy11}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16675",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16975",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17181",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17401",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17613",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy38}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16686",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy45}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16968",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy45}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17174",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy45}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17397",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy45}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17607",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy45}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13046",
                            "background-color",
                            2141,
                            53,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12949",
                            "background-color",
                            2250,
                            509,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12951",
                            "background-color",
                            2808,
                            296,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12952",
                            "background-color",
                            3104,
                            50,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12953",
                            "background-color",
                            3154,
                            518,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12955",
                            "background-color",
                            3756,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13081",
                            "background-color",
                            4149,
                            57,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12956",
                            "background-color",
                            4250,
                            66,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12957",
                            "background-color",
                            4316,
                            629,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13686",
                            "background-color",
                            5000,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13688",
                            "background-color",
                            5040,
                            44,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13844",
                            "background-color",
                            5084,
                            42,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13847",
                            "background-color",
                            5126,
                            39,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13848",
                            "background-color",
                            5590,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12961",
                            "background-color",
                            5630,
                            680,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12962",
                            "background-color",
                            6365,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid14198",
                            "background-color",
                            6696,
                            54,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13692",
                            "background-color",
                            6950,
                            50,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13694",
                            "background-color",
                            8000,
                            43,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13697",
                            "background-color",
                            8043,
                            262,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13699",
                            "background-color",
                            8305,
                            62,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13702",
                            "background-color",
                            9322,
                            45,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13704",
                            "background-color",
                            9367,
                            51,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13709",
                            "background-color",
                            10135,
                            44,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13712",
                            "background-color",
                            10179,
                            491,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13715",
                            "background-color",
                            10670,
                            80,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13716",
                            "background-color",
                            11135,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12964",
                            "background-color",
                            11184,
                            566,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12965",
                            "background-color",
                            11750,
                            50,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12966",
                            "background-color",
                            11800,
                            303,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12967",
                            "background-color",
                            12103,
                            47,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12968",
                            "background-color",
                            12150,
                            545,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12970",
                            "background-color",
                            12750,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13721",
                            "background-color",
                            13158,
                            46,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid12971",
                            "background-color",
                            13250,
                            51,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12972",
                            "background-color",
                            13301,
                            646,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13851",
                            "background-color",
                            14000,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13853",
                            "background-color",
                            14088,
                            47,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13724",
                            "background-color",
                            14135,
                            53,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13854",
                            "background-color",
                            14547,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid12976",
                            "background-color",
                            14601,
                            649,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13855",
                            "background-color",
                            15341,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13856",
                            "background-color",
                            15403,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13730",
                            "background-color",
                            15705,
                            45,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13735",
                            "background-color",
                            15909,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13726",
                            "background-color",
                            15954,
                            46,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13729",
                            "background-color",
                            16190,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13857",
                            "background-color",
                            16250,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13858",
                            "background-color",
                            16290,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13859",
                            "background-color",
                            16333,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13728",
                            "background-color",
                            16500,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13165",
                            "background-color",
                            16707,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13745",
                            "background-color",
                            16984,
                            65,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13748",
                            "background-color",
                            17049,
                            268,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13750",
                            "background-color",
                            17317,
                            51,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13756",
                            "background-color",
                            17368,
                            926,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13759",
                            "background-color",
                            18294,
                            51,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13757",
                            "background-color",
                            18418,
                            29,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid13869",
                            "background-color",
                            19121,
                            48,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13764",
                            "background-color",
                            19169,
                            600,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid13767",
                            "background-color",
                            19769,
                            36,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16798",
                            "background-color",
                            19805,
                            288,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1)',
                            'rgba(243,14,28,1.00)'
                        ],
                        [
                            "eid16801",
                            "background-color",
                            20495,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(243,14,28,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16802",
                            "background-color",
                            21573,
                            0,
                            "linear",
                            "${Rectangle2Copy9}",
                            'rgba(235,250,94,1.00)',
                            'rgba(235,250,94,1.00)'
                        ],
                        [
                            "eid16684",
                            "display",
                            0,
                            0,
                            "linear",
                            "${RoundRect3Copy43}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16940",
                            "display",
                            17889,
                            0,
                            "linear",
                            "${RoundRect3Copy43}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16970",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${RoundRect3Copy43}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17176",
                            "display",
                            37000,
                            0,
                            "linear",
                            "${RoundRect3Copy43}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17395",
                            "display",
                            44000,
                            0,
                            "linear",
                            "${RoundRect3Copy43}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17609",
                            "display",
                            51000,
                            0,
                            "linear",
                            "${RoundRect3Copy43}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16875",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle15Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16926",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle15Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16916",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle15Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16874",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${Rectangle15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16924",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${Rectangle15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16915",
                            "display",
                            57000,
                            0,
                            "linear",
                            "${Rectangle15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14819",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15973",
                            "display",
                            28406,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14585",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14586",
                            "display",
                            2141,
                            0,
                            "linear",
                            "${Rectangle4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16038",
                            "display",
                            29500,
                            0,
                            "linear",
                            "${Rectangle4Copy}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Train%20Vehicle_edgeActions.js");
})("EDGE-1375703");
