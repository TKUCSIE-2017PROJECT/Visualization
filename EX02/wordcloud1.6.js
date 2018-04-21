    var G = { };
    var countG = 0;
function init(){ 
    $.get('HolidayAnalysisFormDcard/暑假07-01To07-07_145.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-08To07-14_107.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-15To07-21_97.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-22To07-28_69.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假07-29To08-04_79.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-05To08-11_42.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-12To08-18_47.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-19To08-25_42.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假08-26To09-01_58.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-02To09-08_47.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-09To09-15_26.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-16To09-22_20.json').done(function(json){
    G[countG] = json;
    countG++;
    });
    $.get('HolidayAnalysisFormDcard/暑假09-23To09-29_4.json').done(function(json){
    G[countG] = json;
    countG++;
    
    for(var all = 0;all < 12;all++){
        for(var week = 0;week < 13;week++){
            if(all == week ){week++;}
            for(var topwords = 0;topwords < G[all].hot_words.length;topwords++){
                for(var weektopwords = 0;weektopwords < G[week].hot_words.length;weektopwords++){
                   if(G[all].hot_words[topwords][0] == G[week].hot_words[weektopwords][0]){
                       G[all].hot_words[topwords][1] = (G[all].hot_words[topwords][1]+G[week].hot_words[weektopwords][1]);
                       //G[0].hot_words[topwords][1] = 5;
                       G[week].hot_words.splice(weektopwords,1);
                       weektopwords = weektopwords-1;
                   }  
                }
            console.log(G[week].hot_words.length);
            }
           console.log('one week after');
           console.log('學校'+G[all].hot_words.length);
        }
    }
        
        

        $(function(){
            var words = [];
            for(var weekcount = 0;weekcount < 13;weekcount++){
                for(var topcount = 0;topcount < G[weekcount].hot_words.length;topcount++){
                    words.push({
                        text: G[weekcount].hot_words[topcount][0],
                        weight: ((G[weekcount].hot_words[topcount][1])*10)
                    });
                }
            }

            $('#demo').jQCloud(words, {
                delay: 50,
                width: 1200,
                height: 500,
                autoResize: true,
                steps : 50,
                //最凸顯
                colors: ["#CC0066", "#CC0066", "#009999", "#009999", "#FFCC33", "#FFCC33", "#0099CC", "#0099CC", "#FF6666","#FF6666",
            "#FF33CC", "#FF33CC", "#FF6600", "#FF6600", "#009966", "#009966", "#CC6633", "#CC6633", "#FF6666","#FF6666",
            "#3399CC", "#3399CC", "#CC6600", "#CC6600", "#999999", "#999999", "#CCCC33", "#CCCC33", "#CCCC33","#CCCC33",
            "#FF9933", "#FF9933", "#CC9999", "#CC9999", "#CCCCFF", "#CCCCFF", "#FF9900", "#FF9900", "#0099CC","#0099CC",
            "#CCCC99", "#CCCC99", "#FF6666", "#FF6666", "#FFCC99", "#FFCC99", "#CC3399", "#CC3399", "#99CC33","#99CC33"
                ],
                fontSize: {
                    from: 0.08,
                    to: 0.02
                }
            });
            
            //文字雲特殊效果
            $(document).on('mouseenter','.jqcloud-word',function(){
                var font_size = parseFloat($(this).css("font-size"));
                var newSize = font_size + 10;
                $(this).css("font-size",newSize + 'px');
            }).on('mouseout','.jqcloud-word',function(){
                var font_size = parseFloat($(this).css("font-size"));
                var newSize = font_size - 10;
                $(this).css("font-size",newSize + 'px');
            });
              
        });
    
    });
}

    init();
