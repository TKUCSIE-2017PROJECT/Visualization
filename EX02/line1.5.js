    var LG = new Object();
    var LGptt = new Object();
    var countLG = 0;
    var countLGptt = 0;
    
    $.get('work/0701.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0708.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0715.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0722.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0729.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0805.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0812.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0819.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0826.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0902.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0909.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0916.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('work/0923.json').done(function(json){
    LGptt[countLGptt] = json;    
    countLGptt++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-01To07-07_145.json').done(function(json){
    LG[countLG] = json;    
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-08To07-14_107.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-15To07-21_97.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-22To07-28_69.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-29To08-04_79.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-05To08-11_42.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-12To08-18_47.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-19To08-25_42.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-26To09-01_58.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-02To09-08_47.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-09To09-15_26.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-16To09-22_20.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    });
    $.getJSON('HolidayAnalysisFormDcard/暑假09-23To09-29_4.json').done(function(json){
    LG[countLG] = json;
    countLG++;
    line();
    //console.log('裡面'+LG[0].hot_words.length);
    //console.log('裡面'+LGptt[0].article_count);
    });
       
    function line(){
        var article_number_dcard = [];
        for(var articleC = 0;articleC < 13;articleC++){
            article_number_dcard.push(LG[articleC].total_article_number);
            //console.log(article_number_dcard[articleC]);
        }
        
        var article_number_ptt = [];
         for(var articleC2 = 0;articleC2 < 13;articleC2++){
            article_number_ptt.push(LGptt[articleC2].article_count);
            //console.log(article_number_ptt[articleC2]);
        }
        
        
        var MONTHS = ["0701-0707", "0708-0714", "0715-0721", "0722-0728", "0729-0804", "0805-0811", "0812-0818", "0819-0825", "0826-0901", "0902-0908", "0909-0915", "0916-0922","0923-0929"];
        var config = {
            type: 'line',
            data: {
                labels: ["0701-0707", "0708-0714", "0715-0721", "0722-0728", "0729-0804", "0805-0811", "0812-0818", "0819-0825", "0826-0901", "0902-0908", "0909-0915", "0916-0922","0923-0929"],
                datasets: [{
                    label: "「暑假」關鍵字",
                    backgroundColor: window.fillcolors.lightred,
                    borderColor: window.chartColors.red,
                    data: article_number_dcard,
                    fill: true,
                }, {
                    label: "Dcard淡江大學版",
                    fill: true,
                    backgroundColor: window.fillcolors.lightblue,
                    borderColor: window.chartColors.blue,
                    data: article_number_ptt,
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    fontSize:20,
                    text:'關於「暑假」的討論熱度'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: ''
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        //window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        //};
    }
