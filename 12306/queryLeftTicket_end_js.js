/*
修改点:
1、5秒间隔查询改为1秒间隔查询
*/
var station_names = "@bjb|北京北|VAP|beijingbei|bjb|0@bjd|北京东|BOP|beijingdong|bjd|1@bji|北京|BJP|beijing|bj|2@bjn|北京南|VNP|beijingnan|bjn|3@bjx|北京西|BXP|beijingxi|bjx|4@gzn|广州南|IZQ|guangzhounan|gzn|5@cqb|重庆北|CUW|chongqingbei|cqb|6@cqi|重庆|CQW|chongqing|cq|7@cqn|重庆南|CRW|chongqingnan|cqn|8@gzd|广州东|GGQ|guangzhoudong|gzd|9@sha|上海|SHH|shanghai|sh|10@shn|上海南|SNH|shanghainan|shn|11@shq|上海虹桥|AOH|shanghaihongqiao|shhq|12@shx|上海西|SXH|shanghaixi|shx|13@tjb|天津北|TBP|tianjinbei|tjb|14@tji|天津|TJP|tianjin|tj|15@tjn|天津南|TIP|tianjinnan|tjn|16@tjx|天津西|TXP|tianjinxi|tjx|17@cch|长春|CCT|changchun|cc|18@ccn|长春南|CET|changchunnan|ccn|19@ccx|长春西|CRT|changchunxi|ccx|20@cdd|成都东|ICW|chengdudong|cdd|21@cdn|成都南|CNW|chengdunan|cdn|22@cdu|成都|CDW|chengdu|cd|23@csh|长沙|CSQ|changsha|cs|24@csn|长沙南|CWQ|changshanan|csn|25@fzh|福州|FZS|fuzhou|fz|26@fzn|福州南|FYS|fuzhounan|fzn|27@gya|贵阳|GIW|guiyang|gy|28@gzh|广州|GZQ|guangzhou|gz|29@heb|哈尔滨|HBB|haerbin|heb|30@hed|哈尔滨东|VBB|harbindong|hebd|31@hex|哈尔滨西|VAB|haerbinxi|hebx|32@hfe|合肥|HFH|hefei|hf|33@hhd|呼和浩特东|NDC|huhehaotedong|hhhtd|34@hht|呼和浩特|HHC|hohhot|hhht|35@hkd|海口东|HMQ|haikoudong|hkd|36@hko|海口|VUQ|haikou|hk|37@hzd|杭州东|HGH|hangzhoudong|hzd|38@hzh|杭州|HZH|hangzhou|hz|39@hzn|杭州南|XHH|hangzhounan|hzn|40@jna|济南|JNK|jinan|jn|41@jnd|济南东|JAK|jinandong|jnd|42@jnx|济南西|JGK|jinanxi|jnx|43@kmi|昆明|KMM|kunming|km|44@kmx|昆明西|KXM|kunmingxi|kmx|45@lsa|拉萨|LSO|lasa|ls|46@lzd|兰州东|LVJ|lanzhoudong|lzd|47@lzh|兰州|LZJ|lanzhou|lz|48@lzx|兰州西|LAJ|lanzhouxi|lzx|49@nch|南昌|NCG|nanchang|nc|50@nji|南京|NJH|nanjing|nj|51@njn|南京南|NKH|nanjingnan|njn|52@nni|南宁|NNZ|nanning|nn|53@sjb|石家庄北|VVP|shijiazhuangbei|sjzb|54@sjz|石家庄|SJP|shijiazhuang|sjz|55@sya|沈阳|SYT|shenyang|sy|56@syb|沈阳北|SBT|shenyangbei|syb|57@syd|沈阳东|SDT|shenyangdong|syd|58@tyb|太原北|TBV|taiyuanbei|tyb|59@tyd|太原东|TDV|taiyuandong|tyd|60@tyu|太原|TYV|taiyuan|ty|61@wha|武汉|WHN|wuhan|wh|62@wjx|王家营西|KNM|wangjiayingxi|wjyx|63@wlq|乌鲁木齐|WMR|wulumuqi|wlmq|64@xab|西安北|EAY|xianbei|xab|65@xan|西安|XAY|xian|xa|66@xan|西安南|CAY|xiannan|xan|67@xnx|西宁西|XXO|xiningxi|xnx|68@ych|银川|YIJ|yinchuan|yc|69@zzh|郑州|ZZF|zhengzhou|zz|70@aes|阿尔山|ART|aershan|aes|71@aka|安康|AKY|ankang|ak|72@aks|阿克苏|ASR|akesu|aks|73@alh|阿里河|AHX|alihe|alh|74@alk|阿拉山口|AKR|alashankou|alsk|75@api|安平|APT|anping|ap|76@aqi|安庆|AQH|anqing|aq|77@ash|安顺|ASW|anshun|as|78@ash|鞍山|AST|anshan|as|79@aya|安阳|AYF|anyang|ay|80@ban|北安|BAB|beian|ba|81@bbu|蚌埠|BBH|bengbu|bb|82@bch|白城|BCT|baicheng|bc|83@bha|北海|BHZ|beihai|bh|84@bhe|白河|BEL|baihe|bh|85@bji|白涧|BAP|baijian|bj|86@bji|宝鸡|BJY|baoji|bj|87@bji|滨江|BJB|binjiang|bj|88@bkt|博克图|BKX|bugt|bkt|89@bse|百色|BIZ|baise|bs|90@bss|白山市|HJL|baishanshi|bss|91@bta|北台|BTT|beitai|bt|92@btd|包头东|BDC|baotoudong|btd|93@bto|包头|BTC|baotou|bt|94@bts|北屯市|BXR|beitunshi|bts|95@bxi|本溪|BXT|benxi|bx|96@byb|白云鄂博|BEC|bayanobo|byeb|97@byx|白银西|BXJ|baiyinxi|byx|98@bzh|亳州|BZH|bozhou|bz|99@cbi|赤壁|CBN|chibi|cb|100@cde|常德|VGQ|changde|cd|101@cde|承德|CDP|chengde|cd|102@cdi|长甸|CDT|changdian|cd|103@cfe|赤峰|CFD|chifeng|cf|104@cli|茶陵|CDG|chaling|cl|105@cna|苍南|CEH|cangnan|cn|106@cpi|昌平|CPP|changping|cp|107@cre|崇仁|CRG|chongren|cr|108@ctu|昌图|CTT|changtu|ct|109@ctz|长汀镇|CDB|changtingzhen|ctz|110@cxi|崇信|CIJ|chongxin|cx|111@cxi|曹县|CXK|caoxian|cx|112@cxi|楚雄|COM|chuxiong|cx|113@cxt|陈相屯|CXT|chenxiangtun|cxt|114@czb|长治北|CBF|changzhibei|czb|115@czh|长征|CZJ|changzheng|cz|116@czh|池州|IYH|chizhou|cz|117@czh|常州|CZH|changzhou|cz|118@czh|郴州|CZQ|chenzhou|cz|119@czh|长治|CZF|changzhi|cz|120@czh|沧州|COP|cangzhou|cz|121@czu|崇左|CZZ|chongzuo|cz|122@dab|大安北|RNT|daanbei|dab|123@dch|大成|DCT|dacheng|dc|124@ddo|丹东|DUT|dandong|dd|125@dfh|东方红|DFB|dongfanghong|dfh|126@dgd|东莞东|DMQ|dongguandong|dgd|127@dhs|大虎山|DHD|dahushan|dhs|128@dhu|敦煌|DHJ|dunhuang|dh|129@dhu|敦化|DHL|dunhua|dh|130@dhu|德惠|DHT|dehui|dh|131@djc|东京城|DJB|dongjingcheng|djc|132@dji|大涧|DFP|dajian|dj|133@djy|都江堰|DDW|dujiangyan|djy|134@dlb|大连北|DFT|dalianbei|dlb|135@dli|大理|DKM|dali|dl|136@dli|大连|DLT|dalian|dl|137@dna|定南|DNG|dingnan|dn|138@dqi|大庆|DZX|daqing|dq|139@dsh|东胜|DOC|dongsheng|ds|140@dsq|大石桥|DQT|dashiqiao|dsq|141@dto|大同|DTV|datong|dt|142@dyi|东营|DPK|dongying|dy|143@dys|大杨树|DUX|dayangshu|dys|144@dyu|都匀|RYW|duyun|dy|145@dzh|邓州|DOF|dengzhou|dz|146@dzh|达州|RXW|dazhou|dz|147@dzh|德州|DZP|dezhou|dz|148@ejn|额济纳|EJC|ejina|ejn|149@eli|二连|RLC|erlian|el|150@esh|恩施|ESN|enshi|es|151@fcg|防城港|FEZ|fangchenggang|fcg|152@fdi|福鼎|FES|fuding|fd|153@fld|风陵渡|FLV|fenglingdu|fld|154@fli|涪陵|FLW|fuling|fl|155@flj|富拉尔基|FRX|fulaerji|flej|156@fsb|抚顺北|FET|fushunbei|fsb|157@fsh|佛山|FSQ|foshan|fs|158@fxi|阜新|FXD|fuxin|fx|159@fya|阜阳|FYH|fuyang|fy|160@gem|格尔木|GRO|geermu|gem|161@gha|广汉|GHW|guanghan|gh|162@gji|古交|GJV|gujiao|gj|163@glb|桂林北|GBZ|guilinbei|glb|164@gli|古莲|GRX|gulian|gl|165@gli|桂林|GLZ|guilin|gl|166@gsh|固始|GXN|gushi|gs|167@gsh|广水|GSN|guangshui|gs|168@gta|干塘|GNJ|gantang|gt|169@gyu|广元|GYW|guangyuan|gy|170@gzb|广州北|GBQ|guangzhoubei|gzb|171@gzh|赣州|GZG|ganzhou|gz|172@gzl|公主岭|GLT|gongzhuling|gzl|173@gzn|公主岭南|GBT|gongzhulingnan|gzln|174@han|淮安|AUH|huaian|ha|175@hbe|鹤北|HMB|hebei|hb|176@hbe|淮北|HRH|huaibei|hb|177@hbi|淮滨|HVN|huaibin|hb|178@hbi|河边|HBV|hebian|hb|179@hch|潢川|KCN|huangchuan|hc|180@hch|韩城|HCY|hancheng|hc|181@hda|邯郸|HDP|handan|hd|182@hdz|横道河子|HDB|hengdaohezi|hdhz|183@hga|鹤岗|HGB|hegang|hg|184@hgt|皇姑屯|HTT|huanggutun|hgt|185@hgu|红果|HEM|hongguo|hg|186@hhe|黑河|HJB|heihe|hh|187@hhu|怀化|HHQ|huaihua|hh|188@hko|汉口|HKN|hankou|hk|189@hld|葫芦岛|HLD|huludao|hld|190@hle|海拉尔|HRX|hailaer|hle|191@hll|霍林郭勒|HWD|huolinguole|hlgl|192@hlu|海伦|HLB|hailun|hl|193@hma|侯马|HMV|houma|hm|194@hmi|哈密|HMR|hami|hm|195@hna|淮南|HAH|huainan|hn|196@hna|桦南|HNB|huanan|hn|197@hnx|海宁西|EUH|hainingxi|hnx|198@hqi|鹤庆|HQM|heqing|hq|199@hrb|怀柔北|HBP|huairoubei|hrb|200@hro|怀柔|HRP|huairou|hr|201@hsd|黄石东|OSN|huangshidong|hsd|202@hsh|华山|HSY|huashan|hs|203@hsh|黄石|HSN|huangshi|hs|204@hsh|黄山|HKH|huangshan|hs|205@hsh|衡水|HSP|hengshui|hs|206@hya|衡阳|HYQ|hengyang|hy|207@hzh|贺州|HXZ|hezhou|hz|208@hzh|汉中|HOY|hanzhong|hz|209@hzh|惠州|HCQ|huizhou|hz|210@jan|吉安|VAG|jian|ja|211@jan|集安|JAL|jian|ja|212@jbc|江边村|JBG|jiangbiancun|jbc|213@jch|晋城|JCF|jincheng|jc|214@jcj|金城江|JJZ|jinchengjiang|jcj|215@jdz|景德镇|JCG|jingdezhen|jdz|216@jfe|嘉峰|JFF|jiafeng|jf|217@jgq|加格达奇|JGX|jagdaqi|jgdq|218@jgs|井冈山|JGG|jinggangshan|jgs|219@jhe|蛟河|JHL|jiaohe|jh|220@jhn|金华南|RNH|jinhuanan|jhn|221@jhx|金华西|JBH|jinhuaxi|jhx|222@jji|九江|JJG|jiujiang|jj|223@jli|吉林|JLL|jilin|jl|224@jme|荆门|JMN|jingmen|jm|225@jms|佳木斯|JMB|jiamusi|jms|226@jni|济宁|JIK|jining|jn|227@jnn|集宁南|JAC|jiningnan|jnn|228@jqu|酒泉|JQJ|jiuquan|jq|229@jsh|江山|JUH|jiangshan|js|230@jsh|吉首|JIQ|jishou|js|231@jta|九台|JTL|jiutai|jt|232@jts|镜铁山|JVJ|jingtieshan|jts|233@jxi|鸡西|JXB|jixi|jx|234@jxi|蓟县|JKP|jixian|jx|235@jxx|绩溪县|JRH|jixixian|jxx|236@jyg|嘉峪关|JGJ|jiayuguan|jyg|237@jyo|江油|JFW|jiangyou|jy|238@jzh|锦州|JZD|jinzhou|jz|239@jzh|金州|JZT|jinzhou|jz|240@kel|库尔勒|KLR|kuerle|kel|241@kfe|开封|KFF|kaifeng|kf|242@kla|岢岚|KLV|kelan|kl|243@kli|凯里|KLW|kaili|kl|244@ksh|喀什|KSR|kashi|ks|245@ksn|昆山南|KNH|kunshannan|ksn|246@ktu|奎屯|KTR|kuitun|kt|247@kyu|开原|KYT|kaiyuan|ky|248@lan|六安|UAH|luan|la|249@lba|灵宝|LBF|lingbao|lb|250@lcg|芦潮港|UCH|luchaogang|lcg|251@lch|隆昌|LCW|longchang|lc|252@lch|陆川|LKZ|luchuan|lc|253@lch|利川|LCN|lichuan|lc|254@lch|临川|LCG|linchuan|lc|255@lch|潞城|UTP|lucheng|lc|256@lda|鹿道|LDL|ludao|ld|257@ldi|娄底|LDQ|loudi|ld|258@lfe|临汾|LFV|linfen|lf|259@lgz|良各庄|LGP|lianggezhuang|lgz|260@lhe|临河|LHC|linhe|lh|261@lhe|漯河|LON|luohe|lh|262@lhu|绿化|LWJ|lvhua|lh|263@lhu|隆化|UHP|longhua|lh|264@lji|丽江|LHM|lijiang|lj|265@lji|临江|LQL|linjiang|lj|266@lji|龙井|LJL|longjing|lj|267@lli|吕梁|LHV|lvliang|ll|268@lli|醴陵|LLG|liling|ll|269@lln|柳林南|LKV|liulinnan|lln|270@lpi|滦平|UPP|luanping|lp|271@lps|六盘水|UMW|liupanshui|lps|272@lqi|灵丘|LVV|lingqiu|lq|273@lsh|旅顺|LST|lvshun|ls|274@lxi|陇西|LXJ|longxi|lx|275@lxi|澧县|LEQ|lixian|lx|276@lxi|兰溪|LWH|lanxi|lx|277@lxi|临西|UEP|linxi|lx|278@lya|耒阳|LYQ|leiyang|ly|279@lya|洛阳|LYF|luoyang|ly|280@lya|龙岩|LYS|longyan|ly|281@lyd|洛阳东|LDF|luoyangdong|lyd|282@lyd|连云港东|UKH|lianyungangdong|lygd|283@lyi|临沂|LVK|linyi|ly|284@lym|洛阳龙门|LLF|luoyanglongmen|lylm|285@lyu|柳园|DHR|liuyuan|ly|286@lyu|凌源|LYD|lingyuan|ly|287@lyu|辽源|LYL|liaoyuan|ly|288@lzh|立志|LZX|lizhi|lz|289@lzh|柳州|LZZ|liuzhou|lz|290@lzh|辽中|LZD|liaozhong|lz|291@mch|麻城|MCN|macheng|mc|292@mdh|免渡河|MDX|mianduhe|mdh|293@mdj|牡丹江|MDB|mudanjiang|mdj|294@meg|莫尔道嘎|MRX|mordaga|medg|295@mgu|满归|MHX|mangui|mg|296@mgu|明光|MGH|mingguang|mg|297@mhe|漠河|MVX|mohe|mh|298@mji|梅江|MKQ|meijiang|mj|299@mmd|茂名东|MDQ|maomingdong|mmd|300@mmi|茂名|MMZ|maoming|mm|301@msh|密山|MSB|mishan|ms|302@msj|马三家|MJT|masanjia|msj|303@mwe|麻尾|VAW|mawei|mw|304@mya|绵阳|MYW|mianyang|my|305@mzh|梅州|MOQ|meizhou|mz|306@mzl|满洲里|MLX|manzhouli|mzl|307@nbd|宁波东|NVH|ningbodong|nbd|308@nch|南岔|NCB|nancha|nc|309@nch|南充|NCW|nanchong|nc|310@nda|南丹|NDZ|nandan|nd|311@ndm|南大庙|NMP|nandamiao|ndm|312@nfe|南芬|NFT|nanfen|nf|313@nhe|讷河|NHX|nehe|nh|314@nji|嫩江|NGX|nenjiang|nj|315@nji|内江|NJW|neijiang|nj|316@npi|南平|NPS|nanping|np|317@nto|南通|NUH|nantong|nt|318@nya|南阳|NFF|nanyang|ny|319@nzs|碾子山|NZX|nianzishan|nzs|320@pds|平顶山|PEN|pingdingshan|pds|321@pji|盘锦|PVD|panjin|pj|322@pli|平凉|PIJ|pingliang|pl|323@pln|平凉南|POJ|pingliangnan|pln|324@pqu|平泉|PQP|pingquan|pq|325@psh|坪石|PSQ|pingshi|ps|326@pxi|萍乡|PXG|pingxiang|px|327@pxi|凭祥|PXZ|pingxiang|px|328@pxx|郫县西|PCW|pixianxi|pxx|329@pzh|攀枝花|PRW|panzhihua|pzh|330@qch|蕲春|QRN|qichun|qc|331@qcs|青城山|QSW|qingchengshan|qcs|332@qda|青岛|QDK|qingdao|qd|333@qhc|清河城|QYP|qinghecheng|qhc|334@qji|黔江|QNW|qianjiang|qj|335@qji|曲靖|QJM|qujing|qj|336@qjz|前进镇|QEB|qianjinzhen|qjz|337@qqe|齐齐哈尔|QHX|qiqihaer|qqhe|338@qth|七台河|QTB|qitaihe|qth|339@qxi|沁县|QVV|qinxian|qx|340@qzd|泉州东|QRS|quanzhoudong|qzd|341@qzh|泉州|QYS|quanzhou|qz|342@qzh|衢州|QEH|quzhou|qz|343@ran|融安|RAZ|rongan|ra|344@rjg|汝箕沟|RQJ|rujigou|rqg|345@rji|瑞金|RJG|ruijin|rj|346@rzh|日照|RZK|rizhao|rz|347@scp|双城堡|SCB|shuangchengpu|scb|348@sfh|绥芬河|SFB|suifenhe|sfh|349@sgd|韶关东|SGQ|shaoguandong|sgd|350@shg|山海关|SHD|shanhaiguan|shg|351@shu|绥化|SHB|suihua|sh|352@sjf|三间房|SFX|sanjianfang|sjf|353@sjt|苏家屯|SXT|sujiatun|sjt|354@sla|舒兰|SLL|shulan|sl|355@smi|三明|SMS|sanming|sm|356@smu|神木|OMY|shenmu|sm|357@smx|三门峡|SMF|sanmenxia|smx|358@sna|商南|ONY|shangnan|sn|359@sni|遂宁|NIW|suining|sn|360@spi|四平|SPT|siping|sp|361@sqi|商丘|SQF|shangqiu|sq|362@sra|上饶|SRG|shangrao|sr|363@ssh|韶山|SSQ|shaoshan|ss|364@sso|宿松|OAH|susong|ss|365@sto|汕头|OTQ|shantou|st|366@swu|邵武|SWS|shaowu|sw|367@sxi|涉县|OEP|shexian|sx|368@sya|三亚|SEQ|sanya|sy|369@sya|邵阳|SYQ|shaoyang|sy|370@sya|十堰|SNN|shiyan|sy|371@sys|双鸭山|SSB|shuangyashan|sys|372@syu|松原|VYT|songyuan|sy|373@szh|深圳|SZQ|shenzhen|sz|374@szh|苏州|SZH|suzhou|sz|375@szh|随州|SZN|suizhou|sz|376@szh|宿州|OXH|suzhou|sz|377@szh|朔州|SUV|shuozhou|sz|378@szx|深圳西|OSQ|shenzhenxi|szx|379@tba|塘豹|TBQ|tangbao|tb|380@teq|塔尔气|TVX|tarqi|teq|381@tgu|潼关|TGY|tongguan|tg|382@tgu|塘沽|TGP|tanggu|tg|383@the|塔河|TXX|tahe|th|384@thu|通化|THL|tonghua|th|385@tla|泰来|TLX|tailai|tl|386@tlf|吐鲁番|TFR|tulufan|tlf|387@tli|通辽|TLD|tongliao|tl|388@tli|铁岭|TLT|tieling|tl|389@tlz|陶赖昭|TPT|taolaizhao|tlz|390@tme|图们|TML|tumen|tm|391@tre|铜仁|RDQ|tongren|tr|392@tsb|唐山北|FUP|tangshanbei|tsb|393@tsf|田师府|TFT|tianshifu|tsf|394@tsh|泰山|TAK|taishan|ts|395@tsh|天水|TSJ|tianshui|ts|396@tsh|唐山|TSP|tangshan|ts|397@typ|通远堡|TYT|tongyuanpu|tyb|398@tys|太阳升|TQT|taiyangsheng|tys|399@tzh|泰州|UTH|taizhou|tz|400@tzi|桐梓|TZW|tongzi|tz|401@tzx|通州西|TAP|tongzhouxi|tzx|402@wch|五常|WCB|wuchang|wc|403@wch|武昌|WCN|wuchang|wc|404@wfd|瓦房店|WDT|wafangdian|wfd|405@wha|威海|WKK|weihai|wh|406@whu|芜湖|WHH|wuhu|wh|407@whx|乌海西|WXC|wuhaixi|whx|408@wjt|吴家屯|WJT|wujiatun|wjt|409@wlo|武隆|WLW|wulong|wl|410@wlt|乌兰浩特|WWT|ulanhot|wlht|411@wna|渭南|WNY|weinan|wn|412@wsh|威舍|WSM|weishe|ws|413@wts|歪头山|WIT|waitoushan|wts|414@wwe|武威|WUJ|wuwei|ww|415@wwn|武威南|WWJ|wuweinan|wwn|416@wxi|无锡|WXH|wuxi|wx|417@wxi|乌西|WXR|wuxi|wx|418@wyl|乌伊岭|WPB|wuyiling|wyl|419@wys|武夷山|WAS|wuyishan|wys|420@wyu|万源|WYY|wanyuan|wy|421@wzh|万州|WYW|wanzhou|wz|422@wzh|梧州|WZZ|wuzhou|wz|423@wzh|温州|RZH|wenzhou|wz|424@wzn|温州南|VRH|wenzhounan|wzn|425@xch|西昌|ECW|xichang|xc|426@xch|许昌|XCF|xuchang|xc|427@xcn|西昌南|ENW|xichangnan|xcn|428@xfa|香坊|XFB|xiangfang|xf|429@xga|轩岗|XGV|xuangang|xg|430@xgu|兴国|EUG|xingguo|xg|431@xha|宣汉|XHY|xuanhan|xh|432@xhu|新会|EFQ|xinhui|xh|433@xhu|新晃|XLQ|xinhuang|xh|434@xlt|锡林浩特|XTC|xilinhaote|xlht|435@xlx|兴隆县|EXP|xinglongxian|xlx|436@xmb|厦门北|XKS|xiamenbei|xmb|437@xme|厦门|XMS|xiamen|xm|438@xmq|厦门高崎|XBS|xiamengaoqi|xmgq|439@xsh|秀山|ETW|xiushan|xs|440@xsh|小市|XST|xiaoshi|xs|441@xta|向塘|XTG|xiangtang|xt|442@xwe|宣威|XWM|xuanwei|xw|443@xxi|新乡|XXF|xinxiang|xx|444@xya|信阳|XUN|xinyang|xy|445@xya|咸阳|XYY|xianyang|xy|446@xya|襄阳|XFN|xiangyang|xy|447@xyc|熊岳城|XYT|xiongyuecheng|xyc|448@xyi|兴义|XRZ|xingyi|xy|449@xyi|新沂|VIH|xinyi|xy|450@xyu|新余|XUG|xinyu|xy|451@xzh|徐州|XCH|xuzhou|xz|452@yan|延安|YWY|yanan|ya|453@ybi|宜宾|YBW|yibin|yb|454@ybn|亚布力南|YWB|yabulinan|ybln|455@ybs|叶柏寿|YBD|yebaishou|ybs|456@ycd|宜昌东|HAN|yichangdong|ycd|457@ych|永川|YCW|yongchuan|yc|458@ych|宜春|YCG|yichun|yc|459@ych|宜昌|YCN|yichang|yc|460@ych|盐城|AFH|yancheng|yc|461@ych|运城|YNV|yuncheng|yc|462@ych|伊春|YCB|yichun|yc|463@yci|榆次|YCV|yuci|yc|464@ycu|杨村|YBP|yangcun|yc|465@yes|伊尔施|YET|yirshi|yes|466@yga|燕岗|YGW|yangang|yg|467@yji|永济|YIV|yongji|yj|468@yji|延吉|YJL|yanji|yj|469@yko|营口|YKT|yingkou|yk|470@yks|牙克石|YKX|yakeshi|yks|471@yli|阎良|YNY|yanliang|yl|472@yli|玉林|YLZ|yulin|yl|473@yli|榆林|ALY|yulin|yl|474@ymp|一面坡|YPB|yimianpo|ymp|475@yni|伊宁|YMR|yining|yn|476@ypg|阳平关|YAY|yangpingguan|ypg|477@ypi|玉屏|YZW|yuping|yp|478@ypi|原平|YPV|yuanping|yp|479@yqi|延庆|YNP|yanqing|yq|480@yqq|阳泉曲|YYV|yangquanqu|yqq|481@yqu|玉泉|YQB|yuquan|yq|482@yqu|阳泉|AQP|yangquan|yq|483@ysh|玉山|YNG|yushan|ys|484@ysh|营山|NUW|yingshan|ys|485@ysh|燕山|AOP|yanshan|ys|486@ysh|榆树|YRT|yushu|ys|487@yta|鹰潭|YTG|yingtan|yt|488@yta|烟台|YAK|yantai|yt|489@yth|伊图里河|YEX|yitulihe|ytlh|490@ytx|玉田县|ATP|yutianxian|ytx|491@ywu|义乌|YWH|yiwu|yw|492@yxi|阳新|YON|yangxin|yx|493@yxi|义县|YXD|yixian|yx|494@yya|益阳|AEQ|yiyang|yy|495@yya|岳阳|YYQ|yueyang|yy|496@yzh|永州|AOQ|yongzhou|yz|497@yzh|扬州|YLH|yangzhou|yz|498@zbo|淄博|ZBK|zibo|zb|499@zcd|镇城底|ZDV|zhenchengdi|zcd|500@zgo|自贡|ZGW|zigong|zg|501@zha|珠海|ZHQ|zhuhai|zh|502@zhb|珠海北|ZIQ|zhuhaibei|zhb|503@zji|湛江|ZJZ|zhanjiang|zj|504@zji|镇江|ZJH|zhenjiang|zj|505@zjj|张家界|DIQ|zhangjiajie|zjj|506@zjk|张家口|ZKP|zhangjiakou|zjk|507@zjn|张家口南|ZMP|zhangjiakounan|zjkn|508@zko|周口|ZKN|zhoukou|zk|509@zlm|哲里木|ZLC|zhelimu|zlm|510@zlt|扎兰屯|ZTX|zhalantun|zlt|511@zmd|驻马店|ZDN|zhumadian|zmd|512@zqi|肇庆|ZVQ|zhaoqing|zq|513@zsz|周水子|ZIT|zhoushuizi|zsz|514@zto|昭通|ZDW|zhaotong|zt|515@zwe|中卫|ZWJ|zhongwei|zw|516@zya|资阳|ZYW|ziyang|zy|517@zyi|遵义|ZIW|zunyi|zy|518@zzh|枣庄|ZEK|zaozhuang|zz|519@zzh|资中|ZZW|zizhong|zz|520@zzh|株洲|ZZQ|zhuzhou|zz|521@zzx|枣庄西|ZFK|zaozhuangxi|zzx|522@aax|昂昂溪|AAX|angangxi|aax|523@ach|阿城|ACB|acheng|ac|524@ada|安达|ADX|anda|ad|525@adi|安定|ADP|anding|ad|526@agu|安广|AGT|anguang|ag|527@ahe|艾河|AHP|aihe|ah|528@ahu|安化|PKQ|anhua|ah|529@ajc|艾家村|AJJ|aijiacun|ajc|530@aji|鳌江|ARH|aojiang|aj|531@aji|安家|AJB|anjia|aj|532@aji|阿金|AJD|ajin|aj|533@akt|阿克陶|AER|aketao|akt|534@aky|安口窑|AYY|ankouyao|aky|535@alg|敖力布告|ALD|aolibugao|albg|536@alo|安龙|AUZ|anlong|al|537@als|阿龙山|ASX|alongshan|als|538@alu|安陆|ALN|anlu|al|539@ame|阿木尔|JTX|amuer|ame|540@anz|阿南庄|AZM|ananzhuang|anz|541@aqx|安庆西|APH|anqingxi|aqx|542@asx|鞍山西|AXT|anshanxi|asx|543@ata|安塘|ATV|antang|at|544@atb|安亭北|ASH|antingbei|atb|545@ats|阿图什|ATR|atushi|ats|546@atu|安图|ATL|antu|at|547@axi|安溪|AXS|anxi|ax|548@bao|博鳌|BWQ|boao|ba|549@bbg|白壁关|BGV|baibiguan|bbg|550@bbn|蚌埠南|BMH|bengbunan|bbn|551@bch|巴楚|BCR|bachu|bc|552@bch|板城|BUP|bancheng|bc|553@bdh|北戴河|BEP|beidaihe|bdh|554@bdi|保定|BDP|baoding|bd|555@bdi|宝坻|BPP|baodi|bd|556@bdl|八达岭|ILP|badaling|bdl|557@bdo|巴东|BNN|badong|bd|558@bgu|柏果|BGM|baiguo|bg|559@bha|布海|BUT|buhai|bh|560@bhd|白河东|BIY|baihedong|bhd|561@bho|贲红|BVC|benhong|bh|562@bhs|宝华山|BWH|baohuashan|bhs|563@bhx|白河县|BEY|baihexian|bhx|564@bjg|白芨沟|BJJ|baijigou|bjg|565@bjg|碧鸡关|BJM|bijiguan|bjg|566@bji|北滘|IBQ|beijiao|b|567@bji|碧江|BLQ|bijiang|bj|568@bjp|白鸡坡|BBM|baijipo|bjp|569@bjs|笔架山|BSB|bijiashan|bjs|570@bjt|八角台|BTD|bajiaotai|bjt|571@bka|保康|BKD|baokang|bk|572@bkp|白奎堡|BKB|baikuipu|bkb|573@bla|白狼|BAT|bailang|bl|574@bla|百浪|BRZ|bailang|bl|575@ble|博乐|BOR|bole|bl|576@blg|宝拉格|BQC|baolage|blg|577@bli|巴林|BLX|balin|bl|578@bli|宝林|BNB|baolin|bl|579@bli|北流|BOZ|beiliu|bl|580@bli|勃利|BLB|boli|bl|581@blk|布列开|BLR|buliekai|blk|582@bls|宝龙山|BND|baolongshan|bls|583@bmc|八面城|BMD|bamiancheng|bmc|584@bmq|班猫箐|BNM|banmaoqing|bmj|585@bmt|八面通|BMB|bamiantong|bmt|586@bmz|北马圈子|BRP|beimajuanzi|bmqz|587@bpn|北票南|RPD|beipiaonan|bpn|588@bqi|白旗|BQP|baiqi|bq|589@bql|宝泉岭|BQB|baoquanling|bql|590@bqu|白泉|BQL|baiquan|bq|591@bsh|白沙|BSW|baisha|bs|592@bsh|巴山|BAY|bashan|bs|593@bsj|白水江|BSY|baishuijiang|bsj|594@bsp|白沙坡|BPM|baishapo|bsp|595@bss|白石山|BAL|baishishan|bss|596@bsz|白水镇|BUM|baishuizhen|bsz|597@bti|坂田|BTQ|bantian|bt|598@bto|泊头|BZP|botou|bt|599@btu|北屯|BYP|beitun|bt|600@bxh|本溪湖|BHT|benxihu|bxh|601@bxi|博兴|BXK|boxing|bx|602@bxt|八仙筒|VXD|baxiantong|bxt|603@byg|白音察干|BYC|bayanqagan|bycg|604@byh|背荫河|BYB|beiyinhe|byh|605@byi|北营|BIV|beiying|by|606@byl|巴彦高勒|BAC|bayangol|bygl|607@byl|白音他拉|BID|baiyintala|bytl|608@byq|鲅鱼圈|BYT|bayuquan|byq|609@bys|白银市|BNJ|baiyinshi|bys|610@bys|白音胡硕|BCD|baiyinhushuo|byhs|611@bzh|巴中|IEW|bazhong|bz|612@bzh|霸州|RMP|bazhou|bz|613@bzh|北宅|BVP|beizhai|bz|614@cbb|赤壁北|CIN|chibibei|cbb|615@cbg|查布嘎|CBC|chabuga|cbg|616@cch|长城|CEJ|changcheng|cc|617@cch|长冲|CCM|changchong|cc|618@cdd|承德东|CCP|chengdedong|cdd|619@cfx|赤峰西|CID|chifengxi|cfx|620@cga|嵯岗|CAX|cuogang|cg|621@cga|柴岗|CGT|chaigang|cg|622@cge|长葛|CEF|changge|cg|623@cgp|柴沟堡|CGV|chaigoupu|cgb|624@cgu|城固|CGY|chenggu|cg|625@cgy|陈官营|CAJ|chenguanying|cgy|626@cgz|成高子|CZB|chenggaozi|cgz|627@cha|草海|WBW|caohai|ch|628@che|柴河|CHB|chaihe|ch|629@che|册亨|CHZ|ceheng|ch|630@chk|草河口|CKT|caohekou|chk|631@chk|崔黄口|CHP|cuihuangkou|chk|632@chu|巢湖|CIH|chaohu|ch|633@cjg|蔡家沟|CJT|caijiagou|cjg|634@cjh|成吉思汗|CJX|qinggishan|cjsh|635@cji|岔江|CAM|chajiang|cj|636@cjp|蔡家坡|CJY|caijiapo|cjp|637@cko|沧口|CKK|cangkou|ck|638@cle|昌乐|CLK|changle|cl|639@clg|超梁沟|CYP|chaolianggou|clg|640@cli|慈利|CUQ|cili|cl|641@cli|昌黎|CLP|changli|cl|642@clz|长岭子|CLT|changlingzi|clz|643@cmi|晨明|CMB|chenming|cm|644@cno|长农|CNJ|changnong|cn|645@cpb|昌平北|VBP|changpingbei|cpb|646@cpi|常平|DAQ|changping|cp|647@cpl|长坡岭|CPM|changpoling|cpl|648@cqi|辰清|CQB|chenqing|cq|649@csh|楚山|CSB|chushan|cs|650@csh|长寿|EFW|changshou|cs|651@csh|磁山|CSP|cishan|cs|652@csh|苍石|CST|cangshi|cs|653@csh|草市|CSL|caoshi|cs|654@csq|察素齐|CSC|chasuqi|csq|655@cst|长山屯|CVT|changshantun|cst|656@cti|长汀|CES|changting|ct|657@ctx|昌图西|CPT|changtuxi|ctx|658@cwa|春湾|CQQ|chunwan|cw|659@cxi|磁县|CIP|cixian|cx|660@cxi|岑溪|CNZ|cenxi|cx|661@cxi|辰溪|CXQ|chenxi|cx|662@cxi|磁西|CRP|cixi|cx|663@cxn|长兴南|CFH|changxingnan|cxn|664@cya|磁窑|CYK|ciyao|cy|665@cya|朝阳|CYD|chaoyang|cy|666@cya|春阳|CAL|chunyang|cy|667@cya|城阳|CEK|chengyang|cy|668@cyc|创业村|CEX|chuangyecun|cyc|669@cyc|朝阳川|CYL|chaoyangchuan|cyc|670@cyd|朝阳地|CDD|chaoyangdi|cyd|671@cyu|长垣|CYF|changyuan|cy|672@cyz|朝阳镇|CZL|chaoyangzhen|cyz|673@czb|滁州北|CUH|chuzhoubei|czb|674@czb|常州北|ESH|changzhoubei|czb|675@czh|滁州|CXH|chuzhou|cz|676@czh|潮州|CKQ|chaozhou|cz|677@czh|常庄|CVK|changzhuang|cz|678@czl|曹子里|CFP|caozili|czl|679@czw|车转湾|CWM|chezhuanwan|czw|680@czx|郴州西|ICQ|chenzhouxi|czx|681@czx|沧州西|CBP|cangzhouxi|czx|682@dan|德安|DAG|dean|da|683@dan|大安|RAT|daan|da|684@dan|东安|DAZ|dongan|da|685@dba|大坝|DBJ|daba|db|686@dba|大板|DBC|daban|db|687@dba|大巴|DBD|daba|db|688@dba|到保|RBT|daobao|db|689@dbi|定边|DYJ|dingbian|db|690@dbj|东边井|DBB|dongbianjing|dbj|691@dbs|德伯斯|RDT|debosi|dbs|692@dcg|打柴沟|DGJ|dachaigou|dcg|693@dch|德昌|DVW|dechang|dc|694@dda|滴道|DDB|didao|dd|695@dde|大德|DEM|dade|dd|696@ddg|大磴沟|DKJ|dadenggou|ddg|697@ded|刀尔登|DRD|daoerdeng|ded|698@dee|得耳布尔|DRX|derbur|debe|699@dfa|东方|UFQ|dongfang|df|700@dfe|丹凤|DGY|danfeng|df|701@dfe|东丰|DIL|dongfeng|df|702@dge|都格|DMM|duge|dg|703@dgt|大官屯|DTT|daguantun|dgt|704@dgu|大关|RGW|daguan|dg|705@dgu|东光|DGP|dongguang|dg|706@dha|东海|DHB|donghai|dh|707@dhc|大灰厂|DHP|dahuichang|dhc|708@dhq|大红旗|DQD|dahongqi|dhq|709@dhx|东海县|DQH|donghaixian|dhx|710@dhx|德惠西|DXT|dehuixi|dhx|711@djg|达家沟|DJT|dajiagou|djg|712@dji|东津|DKB|dongjin|dj|713@dji|杜家|DJL|dujia|dj|714@djz|大旧庄|DJM|dajiuzhuang|djz|715@dkt|大口屯|DKP|dakoutun|dkt|716@dla|东来|RVD|donglai|dl|717@dlh|德令哈|DHO|delingha|dlh|718@dlh|大陆号|DLC|daluhao|dlh|719@dli|带岭|DLB|dailing|dl|720@dli|大林|DLD|dalin|dl|721@dlq|达拉特旗|DIC|dalateqi|dltq|722@dlt|独立屯|DTX|dulitun|dlt|723@dlu|豆罗|DLV|douluo|dl|724@dlx|达拉特西|DNC|dalatexi|dltx|725@dmc|东明村|DMD|dongmingcun|dmc|726@dmh|洞庙河|DEP|dongmiaohe|dmh|727@dmx|东明县|DNF|dongmingxian|dmx|728@dni|大拟|DNZ|dani|dn|729@dpf|大平房|DPD|dapingfang|dpf|730@dps|大盘石|RPP|dapanshi|dps|731@dpu|大埔|DPI|dapu|dp|732@dpu|大堡|DVT|dapu|db|733@dqh|大其拉哈|DQX|daqilaha|dqlh|734@dqi|道清|DML|daoqing|dq|735@dqs|对青山|DQB|duiqingshan|dqs|736@dqx|德清西|MOH|deqingxi|dqx|737@dqx|大庆西|RHX|daqingxi|dqx|738@dsh|东升|DRQ|dongsheng|ds|739@dsh|独山|RWW|dushan|ds|740@dsh|砀山|DKH|dangshan|ds|741@dsh|登沙河|DWT|dengshahe|dsh|742@dsp|读书铺|DPM|dushupu|dsp|743@dst|大石头|DSL|dashitou|dst|744@dsx|东胜西|DYC|dongshengxi|dsx|745@dsz|大石寨|RZT|dashizhai|dsz|746@dta|东台|DBH|dongtai|dt|747@dta|定陶|DQK|dingtao|dt|748@dta|灯塔|DGT|dengta|dt|749@dtb|大田边|DBM|datianbian|dtb|750@dth|东通化|DTL|dongtonghua|dth|751@dtu|丹徒|RUH|dantu|dt|752@dtu|大屯|DNT|datun|dt|753@dwa|东湾|DRJ|dongwan|dw|754@dwk|大武口|DFJ|dawukou|dwk|755@dwp|低窝铺|DWJ|diwopu|dwp|756@dwt|大王滩|DZZ|dawangtan|dwt|757@dwz|大湾子|DFM|dawanzi|dwz|758@dxg|大兴沟|DXL|daxinggou|dxg|759@dxi|大兴|DXX|daxing|dx|760@dxi|定西|DSJ|dingxi|dx|761@dxi|甸心|DXM|dianxin|dx|762@dxi|东乡|DXG|dongxiang|dx|763@dxi|代县|DKV|daixian|dx|764@dxi|定襄|DXV|dingxiang|dx|765@dxu|东戌|RXP|dongxu|dx|766@dxz|东辛庄|DXD|dongxinzhuang|dxz|767@dya|丹阳|DYH|danyang|dy|768@dya|大雁|DYX|dayan|dy|769@dya|德阳|DYW|deyang|dy|770@dya|当阳|DYN|dangyang|dy|771@dyb|丹阳北|EXH|danyangbei|dyb|772@dyd|大英东|IAW|dayingdong|dyd|773@dyd|东淤地|DBV|dongyudi|dyd|774@dyi|大营|DYV|daying|dy|775@dyu|定远|EWH|dingyuan|dy|776@dyu|岱岳|RYV|daiyue|dy|777@dyu|大元|DYZ|dayuan|dy|778@dyz|大营镇|DJP|dayingzhen|dyz|779@dyz|大营子|DZD|dayingzi|dyz|780@dzc|大战场|DTJ|dazhanchang|dzc|781@dzd|德州东|DIP|dezhoudong|dzd|782@dzh|低庄|DVQ|dizhuang|dz|783@dzh|东镇|DNV|dongzhen|dz|784@dzh|道州|DFZ|daozhou|dz|785@dzh|东至|DCH|dongzhi|dz|786@dzh|东庄|DZV|dongzhuang|dz|787@dzh|兑镇|DWV|duizhen|dz|788@dzh|豆庄|ROP|douzhuang|dz|789@dzh|定州|DXP|dingzhou|dz|790@dzy|大竹园|DZY|dazhuyuan|dzy|791@dzz|大杖子|DAP|dazhangzi|dzz|792@dzz|豆张庄|RZP|douzhangzhuang|dzz|793@ebi|峨边|EBW|ebian|eb|794@edm|二道沟门|RDP|erdaogoumen|edgm|795@edw|二道湾|RDX|erdaowan|edw|796@elo|二龙|RLD|erlong|el|797@elt|二龙山屯|ELA|erlongshantun|elst|798@eme|峨眉|EMW|emei|em|799@emh|二密河|RML|ermihe|emh|800@eyi|二营|RYJ|erying|ey|801@ezh|鄂州|ECN|ezhou|ez|802@fan|福安|FAS|fuan|fa|803@fch|防城|FAZ|fangcheng|fc|804@fch|丰城|FCG|fengcheng|fc|805@fcn|丰城南|FNG|fengchengnan|fcn|806@fdo|肥东|FIH|feidong|fd|807@fer|发耳|FEM|faer|fe|808@fha|富海|FHX|fuhai|fh|809@fha|福海|FHR|fuhai|fh|810@fhc|凤凰城|FHT|fenghuangcheng|fhc|811@fhu|奉化|FHH|fenghua|fh|812@fji|富锦|FIB|fujin|fj|813@fjt|范家屯|FTT|fanjiatun|fjt|814@flt|福利屯|FTB|fulitun|flt|815@flz|丰乐镇|FZB|fenglezhen|flz|816@fna|阜南|FNH|funan|fn|817@fni|阜宁|AKH|funing|fn|818@fni|抚宁|FNP|funing|fn|819@fqi|福清|FQS|fuqing|fq|820@fqu|福泉|VMW|fuquan|fq|821@fsc|丰水村|FSJ|fengshuicun|fsc|822@fsh|丰顺|FUQ|fengshun|fs|823@fsh|繁峙|FSV|fanshi|fs|824@fsh|抚顺|FST|fushun|fs|825@fsk|福山口|FKP|fushankou|fsk|826@fsu|扶绥|FSZ|fusui|fs|827@ftu|冯屯|FTX|fengtun|ft|828@fty|浮图峪|FYP|futuyu|fty|829@fxd|富县东|FDY|fuxiandong|fxd|830@fxi|凤县|FXY|fengxian|fx|831@fxi|富县|FEY|fuxian|fx|832@fxi|费县|FXK|feixian|fx|833@fya|凤阳|FUH|fengyang|fy|834@fya|汾阳|FAV|fenyang|fy|835@fyb|扶余北|FBT|fuyubei|fyb|836@fyi|分宜|FYG|fenyi|fy|837@fyu|富源|FYM|fuyuan|fy|838@fyu|扶余|FYT|fuyu|fy|839@fyu|富裕|FYX|fuyu|fy|840@fzb|抚州北|FBG|fuzhoubei|fzb|841@fzh|凤州|FZY|fengzhou|fz|842@fzh|丰镇|FZC|fengzhen|fz|843@fzh|范镇|VZK|fanzhen|fz|844@gan|固安|GFP|guan|ga|845@gan|广安|VJW|guangan|ga|846@gbd|高碑店|GBP|gaobeidian|gbd|847@gbz|沟帮子|GBD|goubangzi|gbz|848@gcd|甘草店|GDJ|gancaodian|gcd|849@gch|谷城|GCN|gucheng|gc|850@gch|藁城|GEP|gaocheng|gc|851@gcu|高村|GCV|gaocun|gc|852@gcz|古城镇|GZB|guchengzhen|gcz|853@gde|广德|GRH|guangde|gd|854@gdi|贵定|GTW|guiding|gd|855@gdn|贵定南|IDW|guidingnan|gdn|856@gdo|古东|GDV|gudong|gd|857@gga|贵港|GGZ|guigang|gg|858@gga|官高|GVP|guangao|gg|859@ggm|葛根庙|GGT|gegenmiao|ggm|860@ggo|干沟|GGL|gangou|gg|861@ggu|甘谷|GGJ|gangu|gg|862@ggz|高各庄|GGP|gaogezhuang|ggz|863@ghe|甘河|GAX|ganhe|gh|864@ghe|根河|GEX|genhe|gh|865@gjd|郭家店|GDT|guojiadian|gjd|866@gjz|孤家子|GKT|gujiazi|gjz|867@gla|古浪|GLJ|gulang|gl|868@gla|皋兰|GEJ|gaolan|gl|869@glf|高楼房|GFM|gaoloufang|glf|870@glh|归流河|GHT|guiliuhe|glh|871@gli|关林|GLF|guanlin|gl|872@glu|甘洛|VOW|ganluo|gl|873@glz|郭磊庄|GLP|guoleizhuang|glz|874@gmi|高密|GMK|gaomi|gm|875@gmz|公庙子|GMC|gongmiaozi|gmz|876@gnh|工农湖|GRT|gongnonghu|gnh|877@gns|广宁寺|GNT|guangningsi|gns|878@gnw|广南卫|GNM|guangnanwei|gnw|879@gpi|高平|GPF|gaoping|gp|880@gqb|甘泉北|GEY|ganquanbei|gqb|881@gqc|共青城|GAG|gongqingcheng|gqc|882@gqk|甘旗卡|GQD|ganqika|gqk|883@gqu|甘泉|GQY|ganquan|gq|884@gqz|高桥镇|GZD|gaoqiaozhen|gqz|885@gsh|赶水|GSW|ganshui|gs|886@gsh|灌水|GST|guanshui|gs|887@gsk|孤山口|GSP|gushankou|gsk|888@gso|果松|GSL|guosong|gs|889@gsz|高山子|GSD|gaoshanzi|gsz|890@gsz|嘎什甸子|GXD|gashidianzi|gsdz|891@gta|高台|GTJ|gaotai|gt|892@gta|高滩|GAY|gaotan|gt|893@gti|古田|GTS|gutian|gt|894@gti|官厅|GTP|guanting|gt|895@gto|广通|GOM|guangtong|gt|896@gtx|官厅西|KEP|guantingxi|gtx|897@gxi|贵溪|GXG|guixi|gx|898@gya|涡阳|GYH|guoyang|gy|899@gyi|巩义|GXF|gongyi|gy|900@gyi|高邑|GIP|gaoyi|gy|901@gyn|巩义南|GYF|gongyinan|gyn|902@gyu|固原|GUJ|guyuan|gy|903@gyu|菇园|GYL|guyuan|gy|904@gyz|公营子|GYD|gongyingzi|gyz|905@gze|光泽|GZS|guangze|gz|906@gzh|古镇|GNQ|guzhen|gz|907@gzh|瓜州|GZJ|guazhou|gz|908@gzh|高州|GSQ|gaozhou|gz|909@gzh|固镇|GEH|guzhen|gz|910@gzh|盖州|GXT|gaizhou|gz|911@gzj|官字井|GOT|guanzijing|gzj|912@gzp|革镇堡|GZT|gezhenpu|gzb|913@gzs|冠豸山|GSS|guanzhishan|gzs|914@gzx|盖州西|GAT|gaizhouxi|gzx|915@han|红安|HWN|hongan|ha|916@han|淮安南|AMH|huaiannan|han|917@hax|红安西|VXN|honganxi|hax|918@hax|海安县|HIH|haianxian|hax|919@hba|黄柏|HBL|huangbai|hb|920@hbe|海北|HEB|haibei|hb|921@hbi|鹤壁|HAF|hebi|hb|922@hch|华城|VCQ|huacheng|hc|923@hch|合川|WKW|hechuan|hc|924@hch|河唇|HCZ|hechun|hc|925@hch|汉川|HCN|hanchuan|hc|926@hch|海城|HCT|haicheng|hc|927@hct|黑冲滩|HCJ|heichongtan|hct|928@hcu|黄村|HCP|huangcun|hc|929@hcx|海城西|HXT|haichengxi|hcx|930@hde|化德|HGC|huade|hd|931@hdo|洪洞|HDV|hongdong|hd|932@hfe|横峰|HFG|hengfeng|hf|933@hfw|韩府湾|HXJ|hanfuwan|hfw|934@hgu|汉沽|HGP|hangu|hg|935@hgy|黄瓜园|HYM|huangguayuan|hgy|936@hgz|红光镇|IGW|hongguangzhen|hgz|937@hhe|浑河|HHT|hunhe|hh|938@hhg|红花沟|VHD|honghuagou|hhg|939@hht|黄花筒|HUD|huanghuatong|hht|940@hjd|贺家店|HJJ|hejiadian|hjd|941@hji|和静|HJR|hejing|hj|942@hji|红江|HFM|hongjiang|hj|943@hji|黑井|HIM|heijing|hj|944@hji|获嘉|HJF|huojia|hj|945@hji|河津|HJV|hejin|hj|946@hji|涵江|HJS|hanjiang|hj|947@hji|华家|HJT|huajia|hj|948@hjx|河间西|HXP|hejianxi|hjx|949@hjz|花家庄|HJM|huajiazhuang|hjz|950@hkn|河口南|HKJ|hekounan|hkn|951@hko|黄口|KOH|huangkou|hk|952@hko|湖口|HKG|hukou|hk|953@hla|呼兰|HUB|hulan|hl|954@hlb|葫芦岛北|HPD|huludaobei|hldb|955@hlh|浩良河|HHB|haolianghe|hlh|956@hlh|哈拉海|HIT|halahai|hlh|957@hli|鹤立|HOB|heli|hl|958@hli|桦林|HIB|hualin|hl|959@hli|黄陵|ULY|huangling|hl|960@hli|海林|HRB|hailin|hl|961@hli|虎林|VLB|hulin|hl|962@hli|寒岭|HAT|hanling|hl|963@hlo|和龙|HLL|helong|hl|964@hlo|海龙|HIL|hailong|hl|965@hls|哈拉苏|HAX|harus|hls|966@hlt|呼鲁斯太|VTJ|hulstai|hlst|967@hlz|火连寨|HLT|huolianzhai|hlz|968@hme|黄梅|VEH|huangmei|hm|969@hmt|蛤蟆塘|HMT|hamatang|gmt|970@hmy|韩麻营|HYP|hanmaying|hmy|971@hnh|黄泥河|HHL|huangnihe|hnh|972@hni|海宁|HNH|haining|hn|973@hno|惠农|HMJ|huinong|hn|974@hpi|和平|VAQ|heping|hp|975@hpz|花棚子|HZM|huapengzi|hpz|976@hqi|花桥|VQH|huaqiao|hq|977@hqi|宏庆|HEY|hongqing|hq|978@hre|怀仁|HRV|huairen|hr|979@hro|华容|HRN|huarong|hr|980@hsb|华山北|HDY|huashanbei|hsb|981@hsd|黄松甸|HDL|huangsongdian|hsd|982@hsg|和什托洛盖|VSR|heshituoluogai|hstlg|983@hsh|红山|VSB|hongshan|hs|984@hsh|汉寿|VSQ|hanshou|hs|985@hsh|衡山|HSQ|hengshan|hs|986@hsh|黑水|HOT|heishui|hs|987@hsh|惠山|VCH|huishan|hs|988@hsh|虎什哈|HHP|hushiha|hsh|989@hsp|红寺堡|HSJ|hongsipu|hsb|990@hst|虎石台|HUT|hushitai|hst|991@hsw|海石湾|HSO|haishiwan|hsw|992@hsx|衡山西|HEQ|hengshanxi|hsx|993@hsx|红砂岘|VSJ|hongshaxian|hsj|994@hta|黑台|HQB|heitai|ht|995@hta|桓台|VTK|huantai|ht|996@hti|和田|VTR|hetian|ht|997@hto|会同|VTQ|huitong|ht|998@htz|海坨子|HZT|haituozi|htz|999@hwa|黑旺|HWK|heiwang|hw|1000@hwa|海湾|RWH|haiwan|hw|1001@hxi|红星|VXB|hongxing|hx|1002@hxi|徽县|HYY|huixian|hx|1003@hxl|红兴隆|VHB|hongxinglong|hxl|1004@hxt|换新天|VTB|huanxintian|hxt|1005@hxt|红岘台|HTJ|hongxiantai|hxt|1006@hya|红彦|VIX|hongyan|hy|1007@hya|合阳|HAY|heyang|hy|1008@hya|海阳|HYK|haiyang|hy|1009@hyd|衡阳东|HVQ|hengyangdong|hyd|1010@hyi|华蓥|HUW|huaying|hy|1011@hyi|汉阴|HQY|hanyin|hy|1012@hyt|黄羊滩|HGJ|huangyangtan|hyt|1013@hyu|汉源|WHW|hanyuan|hy|1014@hyu|湟源|HNO|huangyuan|hy|1015@hyu|河源|VIQ|heyuan|hy|1016@hyu|花园|HUN|huayuan|hy|1017@hyz|黄羊镇|HYJ|huangyangzhen|hyz|1018@hzh|湖州|VZH|huzhou|hz|1019@hzh|化州|HZZ|huazhou|hz|1020@hzh|黄州|VON|huangzhou|hz|1021@hzh|霍州|HZV|huozhou|hz|1022@hzx|惠州西|VXQ|huizhouxi|hzx|1023@jba|巨宝|JRT|jubao|jb|1024@jbi|靖边|JIY|jingbian|jb|1025@jbt|金宝屯|JBD|jinbaotun|jbt|1026@jcb|晋城北|JEF|jinchengbei|jcb|1027@jch|金昌|JCJ|jinchang|jc|1028@jch|鄄城|JCK|juancheng|jc|1029@jch|交城|JNV|jiaocheng|jc|1030@jch|建昌|JFD|jianchang|jc|1031@jde|峻德|JDB|junde|jd|1032@jdi|井店|JFP|jingdian|jd|1033@jdo|鸡东|JOB|jidong|jd|1034@jdu|江都|UDH|jiangdu|jd|1035@jgs|鸡冠山|JST|jiguanshan|jgs|1036@jgt|金沟屯|VGP|jingoutun|jgt|1037@jha|静海|JHP|jinghai|jh|1038@jhe|金河|JHX|jinhe|jh|1039@jhe|锦河|JHB|jinhe|jh|1040@jhe|锦和|JHQ|jinhe|jh|1041@jhe|精河|JHR|jinghe|jh|1042@jhn|精河南|JIR|jinghenan|jhn|1043@jhu|江华|JHZ|jianghua|jh|1044@jhu|建湖|AJH|jianhu|jh|1045@jjg|纪家沟|VJD|jijiagou|jjg|1046@jji|晋江|JJS|jinjiang|jj|1047@jji|江津|JJW|jiangjin|jj|1048@jji|姜家|JJB|jiangjia|jj|1049@jke|金坑|JKT|jinkeng|jk|1050@jli|芨岭|JLJ|jiling|jl|1051@jmc|金马村|JMM|jinmacun|jmc|1052@jme|角美|JES|jiaomei|jm|1053@jme|江门|JWQ|jiangmen|jm|1054@jna|莒南|JOK|junan|jn|1055@jna|井南|JNP|jingnan|jn|1056@jou|建瓯|JVS|jianou|jo|1057@jpe|经棚|JPC|jingpeng|jp|1058@jqi|江桥|JQX|jiangqiao|jq|1059@jsa|九三|SSX|jiusan|js|1060@jsb|金山北|EGH|jinshanbei|jsb|1061@jsh|京山|JCN|jingshan|js|1062@jsh|建始|JRN|jianshi|js|1063@jsh|嘉善|JSH|jiashan|js|1064@jsh|稷山|JVV|jishan|js|1065@jsh|吉舒|JSL|jishu|js|1066@jsh|建设|JET|jianshe|js|1067@jsh|甲山|JOP|jiashan|js|1068@jsj|建三江|JIB|jiansanjiang|jsj|1069@jsn|嘉善南|EAH|jiashannan|jsn|1070@jst|金山屯|JTB|jinshantun|jst|1071@jst|江所田|JOM|jiangsuotian|jst|1072@jta|景泰|JTJ|jingtai|jt|1073@jwe|吉文|JWX|jiwen|jw|1074@jxi|进贤|JUG|jinxian|jx|1075@jxi|莒县|JKK|juxian|jx|1076@jxi|嘉祥|JUK|jiaxiang|jx|1077@jxi|介休|JXV|jiexiu|jx|1078@jxi|井陉|JJP|jingxing|jx|1079@jxi|嘉兴|JXH|jiaxing|jx|1080@jxn|嘉兴南|EPH|jiaxingnan|jxn|1081@jxz|夹心子|JXT|jiaxinzi|jxz|1082@jya|简阳|JYW|jianyang|jy|1083@jya|揭阳|JRQ|jieyang|jy|1084@jya|建阳|JYS|jianyang|jy|1085@jya|姜堰|UEH|jiangyan|jy|1086@jye|巨野|JYK|juye|jy|1087@jyo|江永|JYZ|jiangyong|jy|1088@jyu|靖远|JYJ|jingyuan|jy|1089@jyu|缙云|JYH|jinyun|jy|1090@jyu|江源|SZL|jiangyuan|jy|1091@jyu|济源|JYF|jiyuan|jy|1092@jyx|靖远西|JXJ|jingyuanxi|jyx|1093@jzb|胶州北|JZK|jiaozhoubei|jzb|1094@jzd|焦作东|WEF|jiaozuodong|jzd|1095@jzh|靖州|JEQ|jingzhou|jz|1096@jzh|荆州|JBN|jingzhou|jz|1097@jzh|金寨|JZH|jinzhai|jz|1098@jzh|晋州|JXP|jinzhou|jz|1099@jzh|胶州|JXK|jiaozhou|jz|1100@jzn|锦州南|JOD|jinzhounan|jzn|1101@jzu|焦作|JOF|jiaozuo|jz|1102@jzw|旧庄窝|JVP|jiuzhuangwo|jzw|1103@jzz|金杖子|JYD|jinzhangzi|jzz|1104@kan|开安|KAT|kaian|ka|1105@kch|库车|KCR|kuche|kc|1106@kch|康城|KCP|kangcheng|kc|1107@kde|库都尔|KDX|huder|kde|1108@kdi|宽甸|KDT|kuandian|kd|1109@kdo|克东|KOB|kedong|kd|1110@kji|开江|KAW|kaijiang|kj|1111@kjj|康金井|KJB|kangjinjing|kjj|1112@klq|喀喇其|KQX|kalaqi|klq|1113@klu|开鲁|KLC|kailu|kl|1114@kly|克拉玛依|KHR|kelamayi|klmy|1115@kqi|口前|KQL|kouqian|kq|1116@ksh|奎山|KAB|kuishan|ks|1117@ksh|昆山|KSH|kunshan|ks|1118@ksh|克山|KSB|keshan|ks|1119@kto|开通|KTT|kaitong|kt|1120@kxl|康熙岭|KXZ|kangxiling|kxl|1121@kyh|克一河|KHX|keyihe|kyh|1122@kyx|开原西|KXT|kaiyuanxi|kyx|1123@kzh|康庄|KZP|kangzhuang|kz|1124@lbi|来宾|UBZ|laibin|lb|1125@lbi|老边|LLT|laobian|lb|1126@lbx|灵宝西|LPF|lingbaoxi|lbx|1127@lch|龙川|LUQ|longchuan|lc|1128@lch|乐昌|LCQ|lechang|lc|1129@lch|黎城|UCP|licheng|lc|1130@lch|聊城|UCK|liaocheng|lc|1131@lcu|蓝村|LCK|lancun|lc|1132@ldo|林东|LRC|lindong|ld|1133@ldu|乐都|LDO|ledu|ld|1134@ldx|梁底下|LDP|liangdixia|ldx|1135@ldz|六道河子|LVP|liudaohezi|ldhz|1136@lfa|鲁番|LVM|lufan|lf|1137@lfa|廊坊|LJP|langfang|lf|1138@lfa|落垡|LOP|luofa|lf|1139@lfb|廊坊北|LFP|langfangbei|lfb|1140@lfe|禄丰|LFM|lufeng|lf|1141@lfu|老府|UFD|laofu|lf|1142@lga|兰岗|LNB|langang|lg|1143@lgd|龙骨甸|LGM|longgudian|lgd|1144@lgo|芦沟|LOM|lugou|lg|1145@lgo|龙沟|LGJ|longgou|lg|1146@lgu|拉古|LGB|lagu|lg|1147@lha|临海|UFH|linhai|lh|1148@lha|林海|LXX|linhai|lh|1149@lha|拉哈|LHX|laha|lh|1150@lha|凌海|JID|linghai|lh|1151@lhe|柳河|LNL|liuhe|lh|1152@lhe|六合|KLH|luhe|lh|1153@lhu|龙华|LHP|longhua|lh|1154@lhy|滦河沿|UNP|luanheyan|lhy|1155@lhz|六合镇|LEX|liuhezhen|lhz|1156@ljd|亮甲店|LRT|liangjiadian|ljd|1157@ljd|刘家店|UDT|liujiadian|ljd|1158@ljh|刘家河|LVT|liujiahe|ljh|1159@lji|连江|LKS|lianjiang|lj|1160@lji|李家|LJB|lijia|lj|1161@lji|罗江|LJW|luojiang|lj|1162@lji|廉江|LJZ|lianjiang|lj|1163@lji|庐江|UJH|lujiang|lj|1164@lji|两家|UJT|liangjia|lj|1165@lji|龙江|LJX|longjiang|lj|1166@lji|龙嘉|UJL|longjia|lj|1167@ljk|莲江口|LHB|lianjiangkou|ljk|1168@ljl|蔺家楼|ULK|linjialou|ljl|1169@ljp|李家坪|LIJ|lijiaping|ljp|1170@lka|兰考|LKF|lankao|lk|1171@lko|林口|LKB|linkou|lk|1172@lkp|路口铺|LKQ|lukoupu|lkp|1173@lla|老莱|LAX|laolai|ll|1174@lli|拉林|LAB|lalin|ll|1175@lli|陆良|LRM|luliang|ll|1176@lli|龙里|LLW|longli|ll|1177@lli|零陵|UWZ|lingling|ll|1178@lli|临澧|LWQ|linli|ll|1179@lli|兰棱|LLB|lanling|ll|1180@llo|卢龙|UAP|lulong|ll|1181@lmd|喇嘛甸|LMX|lamadian|lmd|1182@lmd|里木店|LMB|limudian|lmd|1183@lme|洛门|LMJ|luomen|lm|1184@lna|龙南|UNG|longnan|ln|1185@lpi|梁平|UQW|liangping|lp|1186@lpi|罗平|LPM|luoping|lp|1187@lpl|落坡岭|LPP|luopoling|lpl|1188@lps|六盘山|UPJ|liupanshan|lps|1189@lps|乐平市|LPG|lepingshi|lps|1190@lqi|临清|UQK|linqing|lq|1191@lqs|龙泉寺|UQJ|longquansi|lqs|1192@lsc|乐善村|LUM|leshancun|lsc|1193@lsd|冷水江东|UDQ|lengshuijiangdong|lsjd|1194@lsg|连山关|LGT|lianshanguan|lsg|1195@lsg|流水沟|USP|liushuigou|lsg|1196@lsh|陵水|LIQ|lingshui|ls|1197@lsh|乐山|UTW|leshan|ls|1198@lsh|罗山|LRN|luoshan|ls|1199@lsh|鲁山|LAF|lushan|ls|1200@lsh|丽水|USH|lishui|ls|1201@lsh|梁山|LMK|liangshan|ls|1202@lsh|灵石|LSV|lingshi|ls|1203@lsh|露水河|LUL|lushuihe|lsh|1204@lsh|庐山|LSG|lushan|ls|1205@lsp|林盛堡|LBT|linshengpu|lsp|1206@lst|柳树屯|LSD|liushutun|lst|1207@lsz|梨树镇|LSB|lishuzhen|lsz|1208@lsz|龙山镇|LAS|longshanzhen|lsz|1209@lsz|李石寨|LET|lishizhai|lsz|1210@lta|黎塘|LTZ|litang|lt|1211@lta|轮台|LAR|luntai|lt|1212@lta|芦台|LTP|lutai|lt|1213@ltb|龙塘坝|LBM|longtangba|ltb|1214@ltu|濑湍|LVZ|laituan|lt|1215@ltx|骆驼巷|LTJ|luotuoxiang|ltx|1216@lwa|李旺|VLJ|liwang|lw|1217@lwd|莱芜东|LWK|laiwudong|lwd|1218@lws|狼尾山|LRJ|langweishan|lws|1219@lwu|灵武|LNJ|lingwu|lw|1220@lwx|莱芜西|UXK|laiwuxi|lwx|1221@lxi|朗乡|LXB|langxiang|lx|1222@lxi|陇县|LXY|longxian|lx|1223@lxi|临湘|LXQ|linxiang|lx|1224@lxi|莱西|LXK|laixi|lx|1225@lxi|林西|LXC|linxi|lx|1226@lxi|滦县|UXP|luanxian|lx|1227@lya|略阳|LYY|lueyang|ly|1228@lya|莱阳|LYK|laiyang|ly|1229@lya|辽阳|LYT|liaoyang|ly|1230@lyb|临沂北|UYK|linyibei|lyb|1231@lyd|凌源东|LDD|lingyuandong|lyd|1232@lyg|连云港|UIH|lianyungang|lyg|1233@lyh|老羊壕|LYC|laoyanghao|lyh|1234@lyi|临颍|LNF|linying|ly|1235@lyi|老营|LXL|laoying|ly|1236@lyo|龙游|LMH|longyou|ly|1237@lyu|罗源|LVS|luoyuan|ly|1238@lyu|林源|LYX|linyuan|ly|1239@lyu|涟源|LAQ|lianyuan|ly|1240@lyu|涞源|LYP|laiyuan|ly|1241@lyx|耒阳西|LPQ|leiyangxi|lyx|1242@lze|临泽|LEJ|linze|lz|1243@lzg|龙爪沟|LZT|longzhaogou|lzg|1244@lzh|雷州|UAQ|leizhou|lz|1245@lzh|六枝|LIW|liuzhi|lz|1246@lzh|鹿寨|LIZ|luzhai|lz|1247@lzh|来舟|LZS|laizhou|lz|1248@lzh|龙镇|LZA|longzhen|lz|1249@lzh|拉鲊|LEM|lazha|lz|1250@man|明安|MAC|mingan|ma|1251@mas|马鞍山|MAH|maanshan|mas|1252@mba|毛坝|MBY|maoba|mb|1253@mbg|毛坝关|MGY|maobaguan|mbg|1254@mcb|麻城北|MBN|machengbei|mcb|1255@mch|渑池|MCF|mianchi|mc|1256@mch|明城|MCL|mingcheng|mc|1257@mch|庙城|MAP|miaocheng|mc|1258@mcn|渑池南|MNF|mianchinan|mcn|1259@mcp|茅草坪|KPM|maocaoping|mcp|1260@mdh|猛洞河|MUQ|mengdonghe|mdh|1261@mds|磨刀石|MOB|modaoshi|mds|1262@mdu|弥渡|MDF|midu|md|1263@mes|帽儿山|MRB|maoershan|mes|1264@mga|明港|MGN|minggang|mg|1265@mhk|梅河口|MHL|meihekou|mhk|1266@mhu|马皇|MHZ|mahuang|mh|1267@mjg|孟家岗|MGB|mengjiagang|mjg|1268@mla|美兰|MHQ|meilan|ml|1269@mld|汨罗东|MQQ|miluodong|mld|1270@mlh|马莲河|MHB|malianhe|mlh|1271@mli|茅岭|MLZ|maoling|ml|1272@mli|庙岭|MLL|miaoling|ml|1273@mli|茂林|MLD|maolin|ml|1274@mli|穆棱|MLB|muling|ml|1275@mli|马林|MID|malin|ml|1276@mlo|马龙|MGM|malong|ml|1277@mlo|汨罗|MLQ|miluo|ml|1278@mlt|木里图|MUD|mulitu|mlt|1279@mml|密马龙|MMM|mimalong|mml|1280@mnh|玛纳斯湖|MNR|manasihu|mnsh|1281@mni|冕宁|UGW|mianning|mn|1282@mpa|沐滂|MPQ|mupang|mp|1283@mqh|马桥河|MQB|maqiaohe|mqh|1284@mqi|闽清|MQS|minqing|mq|1285@mqu|民权|MQF|minquan|mq|1286@msh|明水河|MUT|mingshuihe|msh|1287@msh|麻山|MAB|mashan|ms|1288@msh|眉山|MSW|meishan|ms|1289@msw|漫水湾|MKW|manshuiwan|msw|1290@msz|茂舍祖|MOM|maoshezu|msz|1291@msz|米沙子|MST|mishazi|msz|1292@mtz|庙台子|MZB|miaotaizi|mtz|1293@mxi|美溪|MEB|meixi|mx|1294@mxi|勉县|MVY|mianxian|mx|1295@mya|麻阳|MVQ|mayang|my|1296@myc|牧羊村|MCM|muyangcun|myc|1297@myi|米易|MMW|miyi|my|1298@myu|麦园|MYS|maiyuan|my|1299@myu|墨玉|MUR|moyu|my|1300@myu|密云|MUP|miyun|my|1301@mzh|庙庄|MZJ|miaozhuang|mz|1302@mzh|米脂|MEY|mizhi|mz|1303@mzh|明珠|MFQ|mingzhu|mz|1304@nan|宁安|NAB|ningan|na|1305@nan|农安|NAT|nongan|na|1306@nbs|南博山|NBK|nanboshan|nbs|1307@nch|南仇|NCK|nanchou|nc|1308@ncs|南城司|NSP|nanchengsi|ncs|1309@ncu|宁村|NCZ|ningcun|nc|1310@nde|宁德|NES|ningde|nd|1311@ngc|南观村|NGP|nanguancun|ngc|1312@ngd|南宫东|NFP|nangongdong|ngd|1313@ngl|南关岭|NLT|nanguanling|ngl|1314@ngu|宁国|NNH|ningguo|ng|1315@nha|宁海|NHH|ninghai|nh|1316@nhc|南河川|NHJ|nanhechuan|nhc|1317@nhu|南华|NHS|nanhua|nh|1318@nhz|泥河子|NHD|nihezi|nhz|1319@nji|宁家|NVT|ningjia|nj|1320@nji|牛家|NJB|niujia|nj|1321@nji|南靖|NJS|nanjing|nj|1322@nji|能家|NJD|nengjia|nj|1323@nko|南口|NKP|nankou|nk|1324@nkq|南口前|NKT|nankouqian|nkq|1325@nla|南朗|NNQ|nanlang|nl|1326@nli|乃林|NLD|nailin|nl|1327@nlk|尼勒克|NIR|nileke|nlk|1328@nlu|那罗|ULZ|naluo|nl|1329@nlx|宁陵县|NLF|ninglingxian|nlx|1330@nma|奈曼|NMD|naiman|nm|1331@nmi|宁明|NMZ|ningming|nm|1332@nmu|南木|NMX|nanmu|nm|1333@npn|南平南|NNS|nanpingnan|npn|1334@npu|那铺|NPZ|napu|np|1335@nqi|南桥|NQD|nanqiao|nq|1336@nqu|那曲|NQO|naqu|nq|1337@nqu|暖泉|NQJ|nuanquan|nq|1338@nta|南台|NTT|nantai|nt|1339@nto|南头|NOQ|nantou|nt|1340@nwu|宁武|NWV|ningwu|nw|1341@nwz|南湾子|NWP|nanwanzi|nwz|1342@nxb|南翔北|NEH|nanxiangbei|nxb|1343@nxi|宁乡|NXQ|ningxiang|nx|1344@nxi|内乡|NXF|neixiang|nx|1345@nxt|牛心台|NXT|niuxintai|nxt|1346@nyu|南峪|NUP|nanyu|ny|1347@nzg|娘子关|NIP|niangziguan|nzg|1348@nzh|南召|NAF|nanzhao|nz|1349@nzm|南杂木|NZT|nanzamu|nzm|1350@pan|平安|PAL|pingan|pa|1351@pan|蓬安|PAW|pengan|pa|1352@pay|平安驿|PNO|pinganyi|pay|1353@paz|磐安镇|PAJ|pananzhen|paz|1354@paz|平安镇|PZT|pinganzhen|paz|1355@pcd|蒲城东|PEY|puchengdong|pcd|1356@pch|蒲城|PCY|pucheng|pc|1357@pde|裴德|PDB|peide|pd|1358@pdi|偏店|PRP|piandian|pd|1359@pdx|平顶山西|BFF|pingdingshanxi|pdsx|1360@pdx|坡底下|PXJ|podixia|pdx|1361@pet|瓢儿屯|PRT|piaoertun|pet|1362@pfa|平房|PFB|pingfang|pf|1363@pga|平岗|PGL|pinggang|pg|1364@pgu|平关|PGM|pingguan|pg|1365@pgu|盘关|PAM|panguan|pg|1366@pgu|平果|PGZ|pingguo|pg|1367@phb|徘徊北|PHP|paihuibei|phb|1368@phk|平河口|PHM|pinghekou|phk|1369@pjb|盘锦北|PBD|panjinbei|pjb|1370@pjd|潘家店|PDP|panjiadian|pjd|1371@pko|皮口|PKT|pikou|pk|1372@pld|普兰店|PLT|pulandian|pld|1373@pli|偏岭|PNT|pianling|pl|1374@plu|平罗|SZJ|pingluo|plu|1375@psh|平山|PSB|pingshan|ps|1376@psh|彭山|PSW|pengshan|ps|1377@psh|皮山|PSR|pishan|ps|1378@psh|彭水|PHW|pengshui|ps|1379@psh|磐石|PSL|panshi|ps|1380@psh|平社|PSV|pingshe|ps|1381@pta|平台|PVT|pingtai|pt|1382@pti|平田|PTM|pingtian|pt|1383@pti|莆田|PTS|putian|pt|1384@ptq|葡萄菁|PTW|putaoqing|ptj|1385@pwa|普湾|PWT|puwan|pw|1386@pwa|平旺|PWV|pingwang|pw|1387@pxg|平型关|PGV|pingxingguan|pxg|1388@pxi|普雄|POW|puxiong|px|1389@pya|平洋|PYX|pingyang|py|1390@pya|彭阳|PYJ|pengyang|py|1391@pya|平遥|PYV|pingyao|py|1392@pyi|平邑|PIK|pingyi|py|1393@pyp|平原堡|PPJ|pingyuanpu|pyp|1394@pyu|平原|PYK|pingyuan|py|1395@pyu|平峪|PYP|pingyu|py|1396@pze|彭泽|PZG|pengze|pz|1397@pzh|邳州|PJH|pizhou|pz|1398@pzh|平庄|PZD|pingzhuang|pz|1399@pzi|泡子|POD|paozi|pz|1400@pzn|平庄南|PND|pingzhuangnan|pzn|1401@qan|乾安|QOT|qianan|qa|1402@qan|庆安|QAB|qingan|qa|1403@qan|迁安|QQP|qianan|qa|1404@qdb|祁东北|QRQ|qidongbei|qd|1405@qdi|七甸|QDM|qidian|qd|1406@qfd|曲阜东|QAK|qufudong|qfd|1407@qfe|庆丰|QFT|qingfeng|qf|1408@qft|奇峰塔|QVP|qifengta|qft|1409@qfu|曲阜|QFK|qufu|qf|1410@qfy|勤丰营|QFM|qinfengying|qfy|1411@qha|琼海|QYQ|qionghai|qh|1412@qhd|秦皇岛|QTP|qinhuangdao|qhd|1413@qhe|千河|QUY|qianhe|qh|1414@qhe|清河|QIP|qinghe|qh|1415@qhm|清河门|QHD|qinghemen|qhm|1416@qhy|清华园|QHP|qinghuayuan|qhy|1417@qji|渠旧|QJZ|qujiu|qj|1418@qji|綦江|QJW|qijiang|qj|1419@qji|潜江|QJN|qianjiang|qj|1420@qji|全椒|INH|quanjiao|qj|1421@qji|秦家|QJB|qinjia|qj|1422@qjp|祁家堡|QBT|qijiapu|qjb|1423@qjx|清涧县|QNY|qingjianxian|qjx|1424@qjz|秦家庄|QZV|qinjiazhuang|qjz|1425@qlh|七里河|QLD|qilihe|qlh|1426@qli|渠黎|QLZ|quli|ql|1427@qli|秦岭|QLY|qinling|ql|1428@qls|青龙山|QGH|qinglongshan|qls|1429@qls|青龙寺|QSM|qinglongsi|qls|1430@qme|祁门|QIH|qimen|qm|1431@qmt|前磨头|QMP|qianmotou|qmt|1432@qsh|青山|QSB|qingshan|qs|1433@qsh|确山|QSN|queshan|qs|1434@qsh|清水|QUJ|qingshui|qs|1435@qsh|前山|QXQ|qianshan|qs|1436@qsy|戚墅堰|QYH|qishuyan|qsy|1437@qti|青田|QVH|qingtian|qt|1438@qto|桥头|QAT|qiaotou|qt|1439@qtx|青铜峡|QTJ|qingtongxia|qtx|1440@qwe|前卫|QWD|qianwei|qw|1441@qwt|前苇塘|QWP|qianweitang|qwt|1442@qxi|渠县|QRW|quxian|qx|1443@qxi|祁县|QXV|qixian|qx|1444@qxi|青县|QXP|qingxian|qx|1445@qxi|桥西|QXJ|qiaoxi|qx|1446@qxu|清徐|QUV|qingxu|qx|1447@qxy|旗下营|QXC|qixiaying|qxy|1448@qya|千阳|QOY|qianyang|qy|1449@qya|沁阳|QYF|qinyang|qy|1450@qya|泉阳|QYL|quanyang|qy|1451@qyb|祁阳北|QVQ|qiyangbei|qy|1452@qyi|七营|QYJ|qiying|qy|1453@qys|庆阳山|QSJ|qingyangshan|qys|1454@qyu|清远|QBQ|qingyuan|qy|1455@qyu|清原|QYT|qingyuan|qy|1456@qzd|钦州东|QDZ|qinzhoudong|qzd|1457@qzh|全州|QZZ|quanzhou|qz|1458@qzh|钦州|QRZ|qinzhou|qz|1459@qzs|青州市|QZK|qingzhoushi|qzs|1460@ran|瑞安|RAH|ruian|ra|1461@rch|荣昌|RCW|rongchang|rc|1462@rch|瑞昌|RCG|ruichang|rc|1463@rga|如皋|RBH|rugao|rg|1464@rgu|容桂|RUQ|ronggui|rg|1465@rqi|任丘|RQP|renqiu|rq|1466@rsh|乳山|ROK|rushan|rs|1467@rsh|融水|RSZ|rongshui|rs|1468@rsh|热水|RSD|reshui|rs|1469@rxi|容县|RXZ|rongxian|rx|1470@rya|饶阳|RVP|raoyang|ry|1471@rya|汝阳|RYF|ruyang|ry|1472@ryh|绕阳河|RHD|raoyanghe|ryh|1473@rzh|汝州|ROF|ruzhou|rz|1474@sba|石坝|OBJ|shiba|sb|1475@sbc|上板城|SBP|shangbancheng|sbc|1476@sbi|施秉|AQW|shibing|sb|1477@sbn|上板城南|OBP|shangbanchengnan|sbcn|1478@sby|世博园|ZWT|shiboyuan|sby|1479@scb|双城北|SBB|shuangchengbei|scb|1480@sch|商城|SWN|shangcheng|sc|1481@sch|莎车|SCR|shache|sc|1482@sch|顺昌|SCS|shunchang|sc|1483@sch|舒城|OCH|shucheng|sc|1484@sch|神池|SMV|shenchi|sc|1485@sch|沙城|SCP|shacheng|sc|1486@sch|石城|SCT|shicheng|sc|1487@scz|山城镇|SCL|shanchengzhen|scz|1488@sda|山丹|SDJ|shandan|sd|1489@sde|顺德|ORQ|shunde|sd|1490@sde|绥德|ODY|suide|sd|1491@sdo|邵东|SOQ|shaodong|sd|1492@sdo|水洞|SIL|shuidong|sd|1493@sdu|商都|SXC|shangdu|sd|1494@sdu|十渡|SEP|shidu|sd|1495@sdw|四道湾|OUD|sidaowan|sdw|1496@sdy|顺德学院|OJQ|shundexueyuan|sdxy|1497@sfa|绅坊|OLH|shenfang|sf|1498@sfe|双丰|OFB|shuangfeng|sf|1499@sft|四方台|STB|sifangtai|sft|1500@sfu|水富|OTW|shuifu|sf|1501@sgk|三关口|OKJ|sanguankou|sgk|1502@sgl|桑根达来|OGC|sanggendalai|sgdl|1503@sgu|韶关|SNQ|shaoguan|sg|1504@sgz|上高镇|SVK|shanggaozhen|sgz|1505@sha|上杭|JBS|shanghang|sh|1506@sha|沙海|SED|shahai|sh|1507@she|松河|SBM|songhe|sh|1508@she|沙河|SHP|shahe|sh|1509@shk|沙河口|SKT|shahekou|shk|1510@shl|赛汗塔拉|SHC|saihantai|shtl|1511@shs|沙河市|VOP|shaheshi|shs|1512@shs|沙后所|SSD|shahousuo|shs|1513@sht|山河屯|SHL|shanhetun|sht|1514@shx|三河县|OXP|sanhexian|shx|1515@shy|四合永|OHD|siheyong|shy|1516@shz|三汇镇|OZW|sanhuizhen|shz|1517@shz|双河镇|SEL|shuanghezhen|shz|1518@shz|石河子|SZR|shihezi|shz|1519@shz|三合庄|SVP|sanhezhuang|shz|1520@sjd|三家店|ODP|sanjiadian|sjd|1521@sjh|水家湖|SQH|shuijiahu|sjh|1522@sjh|沈家河|OJJ|shenjiahe|sjh|1523@sjh|松江河|SJL|songjianghe|sjh|1524@sji|尚家|SJB|shangjia|sj|1525@sji|孙家|SUB|sunjia|sj|1526@sji|沈家|OJB|shenjia|sj|1527@sji|松江|SAH|songjiang|sj|1528@sjk|三江口|SKD|sanjiangkou|sjk|1529@sjl|司家岭|OLK|sijialing|sjl|1530@sjn|松江南|IMH|songjiangnan|sjn|1531@sjn|石景山南|SRP|shijingshannan|sjsn|1532@sjt|邵家堂|SJJ|shaojiatang|sjt|1533@sjx|三江县|SOZ|sanjiangxian|sjx|1534@sjz|三家寨|SMM|sanjiazhai|sjz|1535@sjz|十家子|SJD|shijiazi|sjz|1536@sjz|松江镇|OZL|songjiangzhen|sjz|1537@sjz|施家嘴|SHM|shijiazui|sjz|1538@sjz|深井子|SWT|shenjingzi|sjz|1539@sld|什里店|OMP|shilidian|sld|1540@sle|疏勒|SUR|shule|sl|1541@slh|疏勒河|SHJ|shulehe|slh|1542@slh|舍力虎|VLD|shelihu|slh|1543@sli|石磷|SPB|shilin|sl|1544@sli|绥棱|SIB|suiling|sl|1545@sli|石岭|SOL|shiling|sl|1546@sli|石林|SLM|shilin|sl|1547@sln|石林南|LNM|shilinnan|sln|1548@slo|石龙|SLQ|shilong|sl|1549@slq|萨拉齐|SLC|salaqi|slq|1550@slu|索伦|SNT|suolun|sl|1551@slu|商洛|OLY|shangluo|sl|1552@slz|沙岭子|SLP|shalingzi|slz|1553@smb|石门县北|VFQ|shimenxianbei|smxb|1554@smn|三门峡南|SCF|sanmenxianan|smxn|1555@smx|三门县|OQH|sanmenxian|smx|1556@smx|石门县|OMQ|shimenxian|smx|1557@smx|三门峡西|SXF|sanmenxiaxi|smxx|1558@sni|肃宁|SYP|suning|sn|1559@son|宋|SOB|song|s|1560@spa|双牌|SBZ|shuangpai|sp|1561@spd|四平东|PPT|sipingdong|spd|1562@spi|遂平|SON|suiping|sp|1563@spt|沙坡头|SFJ|shapotou|spt|1564@sqn|商丘南|SPF|shangqiunan|sqn|1565@squ|水泉|SID|shuiquan|sq|1566@sqx|石泉县|SXY|shiquanxian|sqx|1567@sqz|石桥子|SQT|shiqiaozi|sqz|1568@src|石人城|SRB|shirencheng|src|1569@sre|石人|SRL|shiren|sr|1570@ssh|山市|SQB|shanshi|ss|1571@ssh|神树|SWB|shenshu|ss|1572@ssh|鄯善|SSR|shanshan|ss|1573@ssh|三水|SJQ|sanshui|ss|1574@ssh|泗水|OSK|sishui|ss|1575@ssh|石山|SAD|shishan|ss|1576@ssh|松树|SFT|songshu|ss|1577@ssh|首山|SAT|shoushan|ss|1578@ssj|三十家|SRD|sanshijia|ssj|1579@ssp|三十里堡|SST|sanshilipu|sslb|1580@ssz|松树镇|SSL|songshuzhen|ssz|1581@sta|松桃|MZQ|songtao|st|1582@sth|索图罕|SHX|suotuhan|sth|1583@stj|三堂集|SDH|santangji|stj|1584@sto|石头|OTB|shitou|st|1585@sto|神头|SEV|shentou|st|1586@stu|沙沱|SFM|shatuo|st|1587@swa|上万|SWP|shangwan|sw|1588@swu|孙吴|SKB|sunwu|sw|1589@swx|沙湾县|SXR|shawanxian|swx|1590@sxi|遂溪|SXZ|suixi|sx|1591@sxi|沙县|SAS|shaxian|sx|1592@sxi|绍兴|SOH|shaoxing|sx|1593@sxi|歙县|OVH|shexian|sx|1594@sxi|石岘|SXL|shixian|sj|1595@sxp|上西铺|SXM|shangxipu|sxp|1596@sxz|石峡子|SXJ|shixiazi|sxz|1597@sya|绥阳|SYB|suiyang|sy|1598@sya|沭阳|FMH|shuyang|sy|1599@sya|寿阳|SYV|shouyang|sy|1600@sya|水洋|OYP|shuiyang|sy|1601@syc|三阳川|SYJ|sanyangchuan|syc|1602@syd|上腰墩|SPJ|shangyaodun|syd|1603@syi|三营|OEJ|sanying|sy|1604@syi|顺义|SOP|shunyi|sy|1605@syj|三义井|OYD|sanyijing|syj|1606@syp|三源浦|SYL|sanyuanpu|syp|1607@syu|三原|SAY|sanyuan|sy|1608@syu|上虞|BDH|shangyu|sy|1609@syu|上园|SUD|shangyuan|sy|1610@syu|水源|OYJ|shuiyuan|sy|1611@syz|桑园子|SAJ|sangyuanzi|syz|1612@szb|绥中北|SND|suizhongbei|szb|1613@szb|苏州北|OHH|suzhoubei|szb|1614@szd|宿州东|SRH|suzhoudong|szd|1615@szd|深圳东|BJQ|shenzhendong|szd|1616@szh|深州|OZP|shenzhou|sz|1617@szh|孙镇|OZY|sunzhen|sz|1618@szh|绥中|SZD|suizhong|sz|1619@szh|尚志|SZB|shangzhi|sz|1620@szh|师庄|SNM|shizhuang|sz|1621@szi|松滋|SIN|songzi|sz|1622@szo|师宗|SEM|shizong|sz|1623@szq|苏州园区|KAH|suzhouyuanqu|szyq|1624@szq|苏州新区|ITH|suzhouxinqu|szxq|1625@tan|泰安|TMK|taian|ta|1626@tan|台安|TID|taian|ta|1627@tay|通安驿|TAJ|tonganyi|tay|1628@tba|桐柏|TBF|tongbai|tb|1629@tbe|通北|TBB|tongbei|tb|1630@tch|汤池|TCX|tangchi|tc|1631@tch|桐城|TTH|tongcheng|tc|1632@tch|郯城|TZK|tancheng|tc|1633@tch|铁厂|TCL|tiechang|tc|1634@tcu|桃村|TCK|taocun|tc|1635@tda|通道|TRQ|tongdao|td|1636@tdo|田东|TDZ|tiandong|td|1637@tga|天岗|TGL|tiangang|tg|1638@tgl|土贵乌拉|TGC|togrogul|tgwl|1639@tgo|通沟|TOL|tonggou|tg|1640@tgu|太谷|TGV|taigu|tg|1641@tha|塔哈|THX|taha|th|1642@tha|棠海|THM|tanghai|th|1643@the|唐河|THF|tanghe|th|1644@the|泰和|THG|taihe|th|1645@thu|太湖|TKH|taihu|th|1646@tji|团结|TIX|tuanjie|tj|1647@tjj|谭家井|TNJ|tanjiajing|tjj|1648@tjt|陶家屯|TOT|taojiatun|tjt|1649@tjw|唐家湾|PDQ|tangjiawan|tjw|1650@tjz|统军庄|TZP|tongjunzhuang|tjz|1651@tka|泰康|TKX|taikang|tk|1652@tld|吐列毛杜|TMD|tuliemaodu|tlmd|1653@tlh|图里河|TEX|tulihe|tlh|1654@tli|亭亮|TIZ|tingliang|tl|1655@tli|田林|TFZ|tianlin|tl|1656@tli|铜陵|TJH|tongling|tl|1657@tli|铁力|TLB|tieli|tl|1658@tlx|铁岭西|PXT|tielingxi|tlx|1659@tme|天门|TMN|tianmen|tm|1660@tmn|天门南|TNN|tianmennan|tmn|1661@tms|太姥山|TLS|taimushan|tms|1662@tmt|土牧尔台|TRC|tomortei|tmet|1663@tmz|土门子|TCJ|tumenzi|tmz|1664@tna|潼南|TVW|tongnan|tn|1665@tna|洮南|TVT|taonan|tn|1666@tpc|太平川|TIT|taipingchuan|tpc|1667@tpz|太平镇|TEB|taipingzhen|tpz|1668@tqi|图强|TQX|tuqiang|tq|1669@tqi|台前|TTK|taiqian|tq|1670@tql|天桥岭|TQL|tianqiaoling|tql|1671@tqz|土桥子|TQJ|tuqiaozi|tqz|1672@tsc|汤山城|TCT|tangshancheng|tsc|1673@tsh|桃山|TAB|taoshan|ts|1674@tsz|塔石嘴|TIM|tashizui|tsz|1675@ttu|通途|TUT|tongtu|tt|1676@twh|汤旺河|THB|tangwanghe|twh|1677@txi|同心|TXJ|tongxin|tx|1678@txi|土溪|TSW|tuxi|tx|1679@txi|桐乡|TCH|tongxiang|tx|1680@tya|田阳|TRZ|tianyang|ty|1681@tyi|桃映|TKQ|taoying|ty|1682@tyi|天义|TND|tianyi|ty|1683@tyi|汤阴|TYF|tangyin|ty|1684@tyl|驼腰岭|TIL|tuoyaoling|tyl|1685@tys|太阳山|TYJ|taiyangshan|tys|1686@tyu|汤原|TYB|tangyuan|ty|1687@tyy|塔崖驿|TYP|tayanyi|tyy|1688@tzd|滕州东|TEK|tengzhoudong|tzd|1689@tzh|台州|TZH|taizhou|tz|1690@tzh|天祝|TZJ|tianzhu|tz|1691@tzh|滕州|TXK|tengzhou|tz|1692@tzh|天镇|TZV|tianzhen|tz|1693@tzl|桐子林|TEW|tongzilin|tzl|1694@tzs|天柱山|QWH|tianzhushan|tzs|1695@wan|文安|WBP|wenan|wa|1696@wan|武安|WAP|wuan|wa|1697@waz|王安镇|WVP|wanganzhen|waz|1698@wca|旺苍|WEW|wangcang|wc|1699@wcg|五叉沟|WCT|wuchagou|wcg|1700@wch|文昌|WEQ|wenchang|wc|1701@wch|温春|WDB|wenchun|wc|1702@wdc|五大连池|WRB|wudalianchi|wdlc|1703@wde|文登|WBK|wendeng|wd|1704@wdg|五道沟|WDL|wudaogou|wdg|1705@wdh|五道河|WHP|wudaohe|wdh|1706@wdi|文地|WNZ|wendi|wd|1707@wdo|卫东|WVT|weidong|wd|1708@wds|武当山|WRN|wudangshan|wds|1709@wdu|望都|WDP|wangdu|wd|1710@weh|乌尔旗汗|WHX|orqohan|weqh|1711@wfa|潍坊|WFK|weifang|wf|1712@wft|万发屯|WFB|wanfatun|wft|1713@wfu|王府|WUT|wangfu|wf|1714@wfx|瓦房店西|WXT|wafangdianxi|wfdx|1715@wga|王岗|WGB|wanggang|wg|1716@wgo|武功|WGY|wugong|wg|1717@wgo|湾沟|WGL|wangou|wg|1718@wgt|吴官田|WGM|wuguantian|wgt|1719@wha|乌海|WVC|wuhai|wh|1720@whe|苇河|WHB|weihe|wh|1721@whu|卫辉|WHF|weihui|wh|1722@wjc|吴家川|WCJ|wujiachuan|wjc|1723@wji|五家|WUB|wujia|wj|1724@wji|威箐|WAM|weiqing|wq|1725@wji|午汲|WJP|wuji|wj|1726@wji|渭津|WJL|weijin|wj|1727@wjw|王家湾|WJJ|wangjiawan|wjw|1728@wke|倭肯|WQB|woken|wk|1729@wks|五棵树|WKT|wukeshu|wks|1730@wlb|五龙背|WBT|wulongbei|wlb|1731@wld|乌兰哈达|WLC|ulanhad|wlhd|1732@wle|万乐|WEB|wanle|wl|1733@wlg|瓦拉干|WVX|walagan|wlg|1734@wli|温岭|VHH|wenling|wl|1735@wli|五莲|WLK|wulian|wl|1736@wlq|乌拉特前旗|WQC|uradqranqi|wltqq|1737@wls|乌拉山|WSC|wulashan|wls|1738@wlt|卧里屯|WLX|wolitun|wlt|1739@wnb|渭南北|WBY|weinanbei|wnb|1740@wne|乌奴耳|WRX|onor|wne|1741@wni|万宁|WNQ|wanning|wn|1742@wni|万年|WWG|wannian|wn|1743@wnn|渭南南|WVY|weinannan|wnn|1744@wnz|渭南镇|WNJ|weinanzhen|wnz|1745@wpi|沃皮|WPT|wopi|wp|1746@wpu|吴堡|WUY|wupu|wb|1747@wqi|吴桥|WUP|wuqiao|wq|1748@wqi|汪清|WQL|wangqing|wq|1749@wqi|武清|WWP|wuqing|wq|1750@wqu|温泉|WQM|wenquan|wq|1751@wsh|武山|WSJ|wushan|ws|1752@wsh|文水|WEV|wenshui|ws|1753@wsz|魏善庄|WSP|weishanzhuang|wsz|1754@wto|王瞳|WTP|wangtong|wt|1755@wts|五台山|WSV|wutaishan|wts|1756@wtz|王团庄|WZJ|wangtuanzhuang|wtz|1757@wwu|五五|WVR|wuwu|ww|1758@wxd|无锡东|WGH|wuxidong|wxd|1759@wxi|卫星|WVB|weixing|wx|1760@wxi|闻喜|WXV|wenxi|wx|1761@wxi|武乡|WVV|wuxiang|wx|1762@wxq|无锡新区|IFH|wuxixinqu|wxxq|1763@wxu|武穴|WXN|wuxue|wx|1764@wxu|吴圩|WYZ|wuxu|wy|1765@wya|王杨|WYB|wangyang|wy|1766@wyi|五营|WWB|wuying|wy|1767@wyi|武义|RYH|wuyi|wy|1768@wyt|瓦窑田|WIM|wayaotian|wjt|1769@wyu|五原|WYC|wuyuan|wy|1770@wzg|苇子沟|WZL|weizigou|wzg|1771@wzh|韦庄|WZY|weizhuang|wz|1772@wzh|五寨|WZV|wuzhai|wz|1773@wzt|王兆屯|WZB|wangzhaotun|wzt|1774@wzz|微子镇|WQP|weizizhen|wzz|1775@wzz|魏杖子|WKD|weizhangzi|wzz|1776@xan|新安|EAM|xinan|xa|1777@xan|兴安|XAZ|xingan|xa|1778@xax|新安县|XAF|xinanxian|xax|1779@xba|新保安|XAP|xinbaoan|xba|1780@xbc|下板城|EBP|xiabancheng|xbc|1781@xbl|西八里|XLP|xibali|xbl|1782@xch|宣城|ECH|xuancheng|xc|1783@xch|兴城|XCD|xingcheng|xc|1784@xcu|小村|XEM|xiaocun|xc|1785@xcy|新绰源|XRX|xinchuoyuan|xcy|1786@xcz|下城子|XCB|xiachengzi|xcz|1787@xcz|新城子|XCT|xinchengzi|xcz|1788@xde|喜德|EDW|xide|xd|1789@xdj|小得江|EJM|xiaodejiang|xdj|1790@xdm|西大庙|XMP|xidamiao|xdm|1791@xdo|小董|XEZ|xiaodong|xd|1792@xdo|小东|XOD|xiaodong|xdo|1793@xdp|西斗铺|XPC|xidoupu|xdp|1794@xfe|息烽|XFW|xifeng|xf|1795@xfe|信丰|EFG|xinfeng|xf|1796@xfe|襄汾|XFV|xiangfen|xf|1797@xga|新干|EGG|xingan|xg|1798@xga|孝感|XGN|xiaogan|xg|1799@xgc|西固城|XUJ|xigucheng|xgc|1800@xgy|夏官营|XGJ|xiaguanying|xgy|1801@xgz|西岗子|NBB|xigangzi|xgz|1802@xhe|襄河|XXB|xianghe|xh|1803@xhe|新和|XIR|xinhe|xh|1804@xhe|宣和|XWJ|xuanhe|xh|1805@xhj|斜河涧|EEP|xiehejian|xhj|1806@xht|新华屯|XAX|xinhuatun|xht|1807@xhu|新华|XHB|xinhua|xh|1808@xhu|新化|EHQ|xinhua|xh|1809@xhu|宣化|XHP|xuanhua|xh|1810@xhx|兴和西|XEC|xinghexi|xhx|1811@xhy|小河沿|XYD|xiaoheyan|xhy|1812@xhy|下花园|XYP|xiahuayuan|xhy|1813@xhz|小河镇|EKY|xiaohezhen|xhz|1814@xji|徐家|XJB|xujia|xj|1815@xji|峡江|EJG|xiajiang|xj|1816@xji|新绛|XJV|xinjiang|xj|1817@xji|辛集|ENP|xinji|xj|1818@xji|新江|XJM|xinjiang|xj|1819@xjk|西街口|EKM|xijiekou|xjk|1820@xjt|许家屯|XJT|xujiatun|xjt|1821@xjt|许家台|XTJ|xujiatai|xjt|1822@xjz|谢家镇|XMT|xiejiazhen|xjz|1823@xka|兴凯|EKB|xingkai|xk|1824@xla|小榄|EAQ|xiaolan|xl|1825@xla|香兰|XNB|xianglan|xl|1826@xld|兴隆店|XDD|xinglongdian|xld|1827@xle|新乐|ELP|xinle|xl|1828@xli|新林|XPX|xinlin|xl|1829@xli|小岭|XLB|xiaoling|xl|1830@xli|新李|XLJ|xinli|xl|1831@xli|西林|XYB|xilin|xl|1832@xli|西柳|GCT|xiliu|xl|1833@xli|仙林|XPH|xianlin|xl|1834@xlt|新立屯|XLD|xinlitun|xlt|1835@xlx|小路溪|XLM|xiaoluxi|xlx|1836@xlz|兴隆镇|XZB|xinglongzhen|xlz|1837@xlz|新立镇|XGT|xinlizhen|xlz|1838@xmi|新民|XMD|xinmin|xm|1839@xms|西麻山|XMB|ximashan|xms|1840@xmt|下马塘|XAT|xiamatang|xmt|1841@xna|孝南|XNV|xiaonan|xn|1842@xnb|咸宁北|XRN|xianningbei|xnb|1843@xni|兴宁|ENQ|xingning|xn|1844@xni|咸宁|XNN|xianning|xn|1845@xpi|西平|XPN|xiping|xp|1846@xpi|兴平|XPY|xingping|xp|1847@xpt|新坪田|XPM|xinpingtian|xpt|1848@xpu|霞浦|XOS|xiapu|xp|1849@xpu|溆浦|EPQ|xupu|xp|1850@xpu|犀浦|XIW|xipu|xp|1851@xqi|新青|XQB|xinqing|xq|1852@xqi|新邱|XQD|xinqiu|xq|1853@xqp|兴泉堡|XQJ|xingquanpu|xqp|1854@xrq|仙人桥|XRL|xianrenqiao|xrq|1855@xsg|小寺沟|ESP|xiaosigou|xsg|1856@xsh|杏树|XSB|xingshu|xs|1857@xsh|夏石|XIZ|xiashi|xs|1858@xsh|浠水|XZN|xishui|xs|1859@xsh|下社|XSV|xiashe|xs|1860@xsh|徐水|XSP|xushui|xs|1861@xsh|小哨|XAM|xiaoshao|xs|1862@xsp|新松浦|XOB|xinsongpu|xsp|1863@xst|杏树屯|XDT|xingshutun|xst|1864@xsw|许三湾|XSJ|xusanwan|xsw|1865@xta|湘潭|XTQ|xiangtan|xt|1866@xta|邢台|XTP|xingtai|xt|1867@xtx|仙桃西|XAN|xiantaoxi|xtx|1868@xtz|下台子|EIP|xiataizi|xtz|1869@xwe|徐闻|XJQ|xuwen|xw|1870@xwp|新窝铺|EPD|xinwopu|xwp|1871@xwu|修武|XWF|xiuwu|xw|1872@xxi|新县|XSN|xinxian|xx|1873@xxi|息县|ENN|xixian|xx|1874@xxi|西乡|XQY|xixiang|xx|1875@xxi|湘乡|XXQ|xiangxiang|xx|1876@xxi|西峡|XIF|xixia|xx|1877@xxi|孝西|XOV|xiaoxi|xx|1878@xxj|小新街|XXM|xiaoxinjie|xxj|1879@xxx|新兴县|XGQ|xinxingxian|xxx|1880@xxz|西小召|XZC|xixiaozhao|xxz|1881@xxz|小西庄|XXP|xiaoxizhuang|xxz|1882@xya|向阳|XDB|xiangyang|xy|1883@xya|旬阳|XUY|xunyang|xy|1884@xyb|旬阳北|XBY|xunyangbei|xyb|1885@xyd|襄阳东|XWN|xiangyangdong|xyd|1886@xye|兴业|SNZ|xingye|xy|1887@xyg|小雨谷|XHM|xiaoyugu|xyg|1888@xyi|信宜|EEQ|xinyi|xy|1889@xyj|小月旧|XFM|xiaoyuejiu|xyj|1890@xyq|小扬气|XYX|xiaoyangqi|xyq|1891@xyu|祥云|EXM|xiangyun|xy|1892@xyu|襄垣|EIF|xiangyuan|xy|1893@xyx|夏邑县|EJH|xiayixian|xyx|1894@xyy|新友谊|EYB|xinyouyi|xyy|1895@xyz|新阳镇|XZJ|xinyangzhen|xyz|1896@xzd|徐州东|UUH|xuzhoudong|xzd|1897@xzf|新帐房|XZX|xinzhangfang|xzf|1898@xzh|悬钟|XRP|xuanzhong|xz|1899@xzh|新肇|XZT|xinzhao|xz|1900@xzh|忻州|XXV|xinzhou|xz|1901@xzi|汐子|XZD|xizi|xz|1902@xzm|西哲里木|XRD|xizhelimu|xzlm|1903@xzz|新杖子|ERP|xinzhangzi|xzz|1904@yan|姚安|YAC|yaoan|ya|1905@yan|依安|YAX|yian|ya|1906@yan|永安|YAS|yongan|ya|1907@yax|永安乡|YNB|yonganxiang|yax|1908@ybc|渔坝村|YBM|yubacun|ybc|1909@ybl|亚布力|YBB|yabuli|ybl|1910@ybs|元宝山|YUD|yuanbaoshan|ybs|1911@yca|羊草|YAB|yangcao|yc|1912@ycd|秧草地|YKM|yangcaodi|ycd|1913@ych|阳澄湖|AIH|yangchenghu|ych|1914@ych|迎春|YYB|yingchun|yc|1915@ych|叶城|YER|yecheng|yc|1916@ych|盐池|YKJ|yanchi|yc|1917@ych|砚川|YYY|yanchuan|yc|1918@ych|阳春|YQQ|yangchun|yc|1919@ych|宜城|YIN|yicheng|yc|1920@ych|应城|YHN|yingcheng|yc|1921@ych|禹城|YCK|yucheng|yc|1922@ych|晏城|YEK|yancheng|yc|1923@ych|羊场|YED|yangchang|yc|1924@ych|阳城|YNF|yangcheng|yc|1925@ych|阳岔|YAL|yangcha|yc|1926@ych|郓城|YPK|yuncheng|yc|1927@ych|雁翅|YAP|yanchi|yc|1928@ycl|云彩岭|ACP|yuncailing|ycl|1929@ycx|虞城县|IXH|yuchengxian|ycx|1930@ycz|营城子|YCT|yingchengzi|ycz|1931@yde|永登|YDJ|yongdeng|yd|1932@yde|英德|YDQ|yingde|yd|1933@ydi|尹地|YDM|yindi|yd|1934@ydi|永定|YGS|yongding|yd|1935@yds|雁荡山|YGH|yandangshan|yds|1936@ydu|于都|YDG|yudu|yd|1937@ydu|园墩|YAJ|yuandun|yd|1938@ydx|英德西|IIQ|yingdexi|ydx|1939@yfu|永福|YFZ|yongfu|yf|1940@yfy|永丰营|YYM|yongfengying|yfy|1941@yga|杨岗|YRB|yanggang|yg|1942@yga|阳高|YOV|yanggao|yg|1943@ygu|阳谷|YIK|yanggu|yg|1944@yha|友好|YOB|youhao|yh|1945@yha|余杭|EVH|yuhang|yh|1946@yhc|沿河城|YHP|yanhecheng|yhc|1947@yhu|岩会|AEP|yanhui|yh|1948@yjh|羊臼河|YHM|yangjiuhe|yjh|1949@yji|永嘉|URH|yongjia|yj|1950@yji|营街|YAM|yingjie|yj|1951@yji|盐津|AEW|yanjin|yj|1952@yji|余江|YHG|yujiang|yj|1953@yji|叶集|YCH|yeji|yj|1954@yji|燕郊|AJP|yanjiao|yj|1955@yji|姚家|YAT|yaojia|yj|1956@yjj|岳家井|YGJ|yuejiajing|yjj|1957@yjp|一间堡|YJT|yijianpu|yjb|1958@yjs|英吉沙|YIR|yingjisha|yjs|1959@yjs|云居寺|AFP|yunjusi|yjs|1960@yjz|燕家庄|AZK|yanjiazhuang|yjz|1961@yka|永康|RFH|yongkang|yk|1962@ykd|营口东|YGT|yingkoudong|ykd|1963@yla|银浪|YJX|yinlang|yl|1964@yla|永郎|YLW|yonglang|yl|1965@ylb|宜良北|YSM|yiliangbei|ylb|1966@yld|永乐店|YDY|yongledian|yld|1967@ylh|伊拉哈|YLX|yilaha|ylh|1968@yli|伊林|YLB|yilin|yl|1969@yli|彝良|ALW|yiliang|yl|1970@yli|杨林|YLM|yanglin|yl|1971@ylp|余粮堡|YLD|yuliangpu|ylb|1972@ylq|杨柳青|YQP|yangliuqing|ylq|1973@ylt|月亮田|YUM|yueliangtian|ylt|1974@ylw|亚龙湾|TWQ|yalongwan|ylw|1975@ylz|杨陵镇|YSY|yanglingzhen|ylz|1976@yma|义马|YMF|yima|ym|1977@yme|玉门|YXJ|yumen|ym|1978@yme|云梦|YMN|yunmeng|ym|1979@ymo|元谋|YMM|yuanmou|ym|1980@ymp|阳明堡|YVV|yangmingpu|ymp|1981@yms|一面山|YST|yimianshan|yms|1982@yna|沂南|YNK|yinan|yn|1983@yna|宜耐|YVM|yinai|yn|1984@ynd|伊宁东|YNR|yiningdong|ynd|1985@ypl|一平浪|YIM|yipinglang|ypl|1986@yps|营盘水|YZJ|yingpanshui|yps|1987@ypu|羊堡|ABM|yangpu|yp|1988@ypw|营盘湾|YPC|yingpanwan|ypw|1989@yqb|阳泉北|YPP|yangquanbei|yqb|1990@yqi|乐清|UPH|yueqing|yq|1991@yqi|焉耆|YSR|yanqi|yq|1992@yqi|源迁|AQK|yuanqian|yq|1993@yqt|姚千户屯|YQT|yaoqianhutun|yqht|1994@yqu|阳曲|YQV|yangqu|yq|1995@ysg|榆树沟|YGP|yushugou|ysg|1996@ysh|月山|YBF|yueshan|ys|1997@ysh|玉石|YSJ|yushi|ys|1998@ysh|偃师|YSF|yanshi|ys|1999@ysh|沂水|YUK|yishui|ys|2000@ysh|榆社|YSV|yushe|ys|2001@ysh|窑上|ASP|yaoshang|ys|2002@ysh|元氏|YSP|yuanshi|ys|2003@ysl|杨树岭|YAD|yangshuling|ysl|2004@ysp|野三坡|AIP|yesanpo|ysp|2005@yst|榆树屯|YSX|yushutun|yst|2006@yst|榆树台|YUT|yushutai|yst|2007@ysz|鹰手营子|YIP|yingshouyingzi|ysyz|2008@yta|源潭|YTQ|yuantan|yt|2009@ytp|牙屯堡|YTZ|yatunpu|ytb|2010@yts|烟筒山|YSL|yantongshan|yts|2011@ytt|烟筒屯|YUX|yantongtun|ytt|2012@yws|羊尾哨|YWM|yangweishao|yws|2013@yxi|越西|YHW|yuexi|yx|2014@yxi|攸县|YOG|youxian|yx|2015@yxi|玉溪|YXM|yuxi|yx|2016@yxi|永修|ACG|yongxiu|yx|2017@yya|酉阳|AFW|youyang|yy|2018@yya|余姚|YYH|yuyao|yy|2019@yyd|弋阳东|YIG|yiyangdong|yyd|2020@yyd|岳阳东|YIQ|yueyangdong|yyd|2021@yyi|阳邑|ARP|yangyi|yy|2022@yyu|鸭园|YYL|yayuan|yy|2023@yyz|鸳鸯镇|YYJ|yuanyangzhen|yyz|2024@yzb|燕子砭|YZY|yanzibian|yzb|2025@yzh|宜州|YSZ|yizhou|yz|2026@yzh|仪征|UZH|yizheng|yz|2027@yzh|兖州|YZK|yanzhou|yz|2028@yzi|迤资|YQM|yizi|yz|2029@yzw|羊者窝|AEM|yangzhewo|wzw|2030@yzz|杨杖子|YZD|yangzhangzi|yzz|2031@zan|镇安|ZEY|zhenan|za|2032@zan|治安|ZAD|zhian|za|2033@zba|招柏|ZBP|zhaobai|zb|2034@zbw|张百湾|ZUP|zhangbaiwan|zbw|2035@zch|枝城|ZCN|zhicheng|zc|2036@zch|子长|ZHY|zichang|zc|2037@zch|诸城|ZQK|zhucheng|zc|2038@zch|邹城|ZIK|zoucheng|zc|2039@zch|赵城|ZCV|zhaocheng|zc|2040@zda|章党|ZHT|zhangdang|zd|2041@zdo|肇东|ZDB|zhaodong|zd|2042@zfp|照福铺|ZFM|zhaofupu|zfp|2043@zgt|章古台|ZGD|zhanggutai|zgt|2044@zgu|赵光|ZGB|zhaoguang|zg|2045@zhe|中和|ZHX|zhonghe|zh|2046@zhm|中华门|VNH|zhonghuamen|zhm|2047@zjb|枝江北|ZIN|zhijiangbei|zjb|2048@zjc|钟家村|ZJY|zhongjiacun|zjc|2049@zjg|朱家沟|ZUB|zhujiagou|zjg|2050@zjg|紫荆关|ZYP|zijingguan|zjg|2051@zji|周家|ZOB|zhoujia|zj|2052@zji|诸暨|ZDH|zhuji|zj|2053@zjn|镇江南|ZEH|zhenjiangnan|zjn|2054@zjt|周家屯|ZOD|zhoujiatun|zjt|2055@zjt|郑家屯|ZJD|zhengjiatun|zjt|2056@zjw|褚家湾|CWJ|zhujiawan|cjw|2057@zjx|湛江西|ZWQ|zhanjiangxi|zjx|2058@zjy|朱家窑|ZUJ|zhujiayao|zjy|2059@zjz|曾家坪子|ZBW|caojiapingzi|zjpz|2060@zla|张兰|ZLV|zhanglan|zla|2061@zla|镇赉|ZLT|zhenlai|zl|2062@zli|枣林|ZIV|zaolin|zl|2063@zlt|扎鲁特|ZLD|zhalute|zlt|2064@zlx|扎赉诺尔西|ZXX|jalainurxi|zlnex|2065@zmt|樟木头|ZOQ|zhangmutou|zmt|2066@zmu|中牟|ZGF|zhongmu|zm|2067@znd|中宁东|ZDJ|zhongningdong|znd|2068@zni|中宁|VNJ|zhongning|zn|2069@znn|中宁南|ZNJ|zhongningnan|znn|2070@zpi|镇平|ZPF|zhenping|zp|2071@zpi|漳平|ZPS|zhangping|zp|2072@zpu|泽普|ZPR|zepu|zp|2073@zqi|枣强|ZVP|zaoqiang|zq|2074@zqi|张桥|ZQY|zhangqiao|zq|2075@zqi|章丘|ZTK|zhangqiu|zq|2076@zrh|朱日和|ZRC|zhurihe|zrh|2077@zrl|泽润里|ZLM|zerunli|zrl|2078@zsb|中山北|ZGQ|zhongshanbei|zsb|2079@zsd|樟树东|ZOG|zhangshudong|zsd|2080@zsh|中山|ZSQ|zhongshan|zs|2081@zsh|柞水|ZSY|zhashui|zs|2082@zsh|钟山|ZSZ|zhongshan|zs|2083@zsh|樟树|ZSG|zhangshu|zs|2084@zwo|珠窝|ZOP|zhuwo|zw|2085@zwt|张维屯|ZWB|zhangweitun|zwt|2086@zwu|彰武|ZWD|zhangwu|zw|2087@zxi|棕溪|ZOY|zongxi|zx|2088@zxi|钟祥|ZTN|zhongxiang|zx|2089@zxi|资溪|ZXS|zixi|zx|2090@zxi|镇西|ZVT|zhenxi|zx|2091@zxi|张辛|ZIP|zhangxin|zx|2092@zxq|正镶白旗|ZXC|zhengxiangbaiqi|zxbq|2093@zya|紫阳|ZVY|ziyang|zy|2094@zya|枣阳|ZYN|zaoyang|zy|2095@zyb|竹园坝|ZAW|zhuyuanba|zyb|2096@zye|张掖|ZYJ|zhangye|zy|2097@zyu|镇远|ZUW|zhenyuan|zy|2098@zyx|朱杨溪|ZXW|zhuyangxi|zyx|2099@zzd|漳州东|GOS|zhangzhoudong|zzd|2100@zzh|漳州|ZUS|zhangzhou|zz|2101@zzh|壮志|ZUX|zhuangzhi|zz|2102@zzh|子洲|ZZY|zizhou|zz|2103@zzh|中寨|ZZM|zhongzhai|zz|2104@zzh|涿州|ZXP|zhuozhou|zz|2105@zzi|咋子|ZAL|zhazi|zz|2106@zzs|卓资山|ZZC|zhuozishan|zzs|2107@zzx|株洲西|ZAQ|zhuzhouxi|zzx|2108@ayd|安阳东|ADF|anyangdong|ayd|2109@bdd|保定东|BMP|baodingdong|bdd|2110@bha|滨海|FHP|binhai|bh|2111@bhb|滨海北|FCP|binhaibei|bhb|2112@cxi|长兴|CBH|changxing|cx|2113@cya|长阳|CYN|changyang|cy|2114@deh|东二道河|DRB|dongerdaohe|dedh|2115@dju|大苴|DIM|daju|dj|2116@dqg|大青沟|DSD|daqinggou|dqg|2117@dqi|德清|DRH|deqing|dq|2118@dzd|定州东|DOP|dingzhoudong|dzd|2119@fch|富川|FDZ|fuchuan|fc|2120@fyu|抚远|FYB|fuyuan|fy|2121@fzh|抚州|FZG|fuzhou|fz|2122@gbd|高碑店东|GMP|gaobeidiandong|gbdd|2123@gju|革居|GEM|geju|gj|2124@gmc|光明城|IMQ|guangmingcheng|gmc|2125@gyx|高邑西|GNP|gaoyixi|gyx|2126@hbd|鹤壁东|HFF|hebidong|hbd|2127@hcg|寒葱沟|HKB|hanconggou|hcg|2128@hdd|邯郸东|HPP|handandong|hdd|2129@hfc|合肥北城|COH|hefeibeicheng|hfbc|2130@hhe|洪河|HPB|honghe|hh|2131@hme|虎门|IUQ|humen|hm|2132@hmn|哈密南|HLR|haminan|hmn|2133@hnd|淮南东|HOH|huainandong|hnd|2134@jlb|军粮城北|JMP|junliangchengbei|jlcb|2135@jle|将乐|JLS|jiangle|jl|2136@jnb|建宁县北|JCS|jianningxianbei|jnxb|2137@jni|江宁|JJH|jiangning|jn|2138@jrx|句容西|JWH|jurongxi|jrx|2139@jsh|建水|JSM|jianshui|js|2140@klu|库伦|KLD|kulun|kl|2141@ldy|离堆公园|INW|liduigongyuan|ldgy|2142@lhe|滦河|UDP|luanhe|lh|2143@lhx|漯河西|LBN|luohexi|lhx|2144@lsh|溧水|LDH|lishui|ls|2145@lya|溧阳|LEH|liyang|ly|2146@mgd|明港东|MDN|minggangdong|mgd|2147@mzb|蒙自北|MBM|mengzibei|mzb|2148@nch|南城|NDG|nancheng|nc|2149@ncx|南昌西|NXG|nanchangxi|ncx|2150@nfe|南丰|NFG|nanfeng|nf|2151@qfe|前锋|QFB|qianfeng|qf|2152@qsh|庆盛|QSQ|qingsheng|qs|2153@smb|三明北|SHS|sanmingbei|smb|2154@sxb|绍兴北|SLH|shaoxingbei|sxb|2155@syb|上虞北|SSH|shangyubei|syb|2156@szb|深圳北|IOQ|shenzhenbei|szb|2157@tha|通海|TAM|tonghai|th|2158@thx|通化县|TXL|tonghuaxian|thx|2159@tni|泰宁|TNS|taining|tn|2160@wns|五女山|WET|wunvshan|wns|2161@wws|瓦屋山|WAH|wawushan|wws|2162@xcd|许昌东|XVF|xuchangdong|xcd|2163@xfe|西丰|XFT|xifeng|xf|2164@xgb|孝感北|XJN|xiaoganbei|xgb|2165@xtd|邢台东|EDP|xingtaidong|xtd|2166@xxd|新乡东|EGF|xinxiangdong|xxd|2167@xyc|西阳村|XQF|xiyangcun|xyc|2168@xyd|信阳东|OYN|xinyangdong|xyd|2169@ybl|迎宾路|YFW|yingbinlu|ybl|2170@yge|雨格|VTM|yuge|yg|2171@yta|永泰|YTS|yongtai|yt|2172@yxi|尤溪|YXS|youxi|yx|2173@yxi|宜兴|YUH|yixing|yx|2174@yyb|余姚北|CTH|yuyaobei|yyb|2175@zdc|正定机场|ZHP|zhengdingjichang|zdjc|2176@zji|织金|IZW|zhijin|zj|2177@zmx|驻马店西|ZLN|zhumadianxi|zmdx|2178@zqi|庄桥|ZQH|zhuangqiao|zq|2179@zzd|涿州东|ZAP|zhuozhoudong|zzd|2180@zzd|卓资东|ZDC|zhuozidong|zzd|2181@zzd|郑州东|ZAF|zhengzhoudong|zzd|2182";
var favorite_names = "@bji|北京|BJP|0@sha|上海|SHH|1@tji|天津|TJP|2@cqi|重庆|CQW|3@csh|长沙|CSQ|4@cch|长春|CCT|5@cdu|成都|CDW|6@fzh|福州|FZS|7@gzh|广州|GZQ|8@gya|贵阳|GIW|9@hht|呼和浩特|HHC|10@heb|哈尔滨|HBB|11@hfe|合肥|HFH|12@hzh|杭州|HZH|13@hko|海口|VUQ|14@jna|济南|JNK|15@kmi|昆明|KMM|16@lsa|拉萨|LSO|17@lzh|兰州|LZJ|18@nni|南宁|NNZ|19@nji|南京|NJH|20@nch|南昌|NCG|21@sya|沈阳|SYT|22@sjz|石家庄|SJP|23@tyu|太原|TYV|24@wlq|乌鲁木齐|WMR|25@wha|武汉|WHN|26@xnx|西宁西|XXO|27@xan|西安|XAY|28@ych|银川|YIJ|29@zzh|郑州|ZZF|30";
autoSearchTime = 1000;
(function(x) {
    jQuery.extend({ht_getcookie: function(O) {
            var N = document.cookie.indexOf(O);
            var M = document.cookie.indexOf(";", N);
            return N == -1 ? "" : unescape(document.cookie.substring(N + O.length + 1, (M > N ? M : document.cookie.length)))
        },ht_setcookie: function(S, R, Q, P, N, O) {
            var M = new Date();
            M.setTime(M.getTime() + Q * 1000);
            document.cookie = escape(S) + "=" + escape(R) + (M ? "; expires=" + M.toGMTString() : "") + (P ? "; path=" + P : "; path=/") + (N ? "; domain=" + N : "") + (O ? "; secure" : "")
        },textFocus: function(O) {
            var N, M, O = O === undefined ? 0 : parseInt(O);
            this.each(function() {
                if (!this.setSelectionRange) {
                    N = this.createTextRange();
                    O === 0 ? N.collapse(false) : N.move("character", O);
                    N.select()
                } else {
                    M = this.value.length;
                    O === 0 ? this.setSelectionRange(M, M) : this.setSelectionRange(O, O)
                }
                this.focus()
            });
            return this
        }});
    var s = [];
    var y = [];
    var z = [];
    var A = [];
    var r = 0;
    var t = 0;
    var v = 0;
    var J = 0;
    var K = false;
    var f = false;
    var B = false;
    var u = 0;
    var C = null;
    var i = -1;
    var e = [];
    var d = [];
    var c = [];
    var b = [];
    var L = [];
    var p = [];
    var o = [];
    var m = [];
    var l = [];
    var k = [];
    var E = [];
    var a = false;
    var F = true;
    var q = 30;
    var g = "简码/汉字";
    var j = "简码/汉字";
    var n = "inp-txt_select";
    var h = "inp-txt";
    var w = false;
    var D = null;
    var I = null;
    var G = false;
    var H = x.ht_getcookie("hj_favcity");
    x.stationFor12306 = {bindInputs: [],get_initInputValue: function() {
            return g
        },get_initTopInputValue: function() {
            return j
        },city_Bind: function(N) {
            if (N.length == 0) {
                return
            }
            var M = "";
            x.each(N, function(O) {
                if (H == N[O][2]) {
                    M += "<div class='cityline' id='citem_" + O + "' cturn='" + N[O][6] + "'><span class='ralign'><b>" + N[O][1] + "</b></span></div>\n"
                } else {
                    M += "<div class='cityline' id='citem_" + O + "' cturn='" + N[O][6] + "'><span class='ralign'>" + N[O][1] + "</span></div>\n"
                }
            });
            x("#panel_cities").html(M);
            x(".cityline").mouseover(function() {
                x.stationFor12306.city_shiftSelect(this)
            }).click(function() {
                x.stationFor12306.city_confirmSelect();
                z = x.stationFor12306.filterCity("");
                x.stationFor12306.city_showlist(0)
            });
            x.stationFor12306.city_shiftSelect(x("#citem_0"))
        },city_changeSelectIndex: function(M) {
            var N = v + M;
            if (N == -1) {
                x.stationFor12306.city_showlist(u - 1);
                x.stationFor12306.city_shiftSelect(x("#citem_" + (A.length - 1)))
            } else {
                if (N == A.length) {
                    x.stationFor12306.city_showlist(u + 1);
                    x.stationFor12306.city_shiftSelect(x("#citem_0"))
                } else {
                    x.stationFor12306.city_shiftSelect(x("#citem_" + N))
                }
            }
        },city_confirmSelect: function() {
            C.val(J[1]);
            curObjCode.val(J[2]);
            if (w) {
                x.stationFor12306.setStationInCookies(J[1], J[2])
            }
            x("#form_cities").css("display", "none");
            x("#form_cities2").css("display", "none");
            x("#form_cities3").css("display", "none");
            i = -1;
            t = 0;
            x.stationFor12306.setStationStyle();
            if (F) {
                x.stationFor12306.LoadJS(J[2])
            }
            if (D) {
                D(C, curObjCode)
            }
        },city_shiftSelect: function(N) {
            if (r != N) {
                if (r != 0) {
                    x(r).removeClass("citylineover").addClass("cityline").css("backgroundColor", "white")
                }
                if (N != 0) {
                    try {
                        r = N;
                        var M = x(r).removeClass("cityline").addClass("citylineover").css("backgroundColor", "#c8e3fc");
                        v = Number(M.attr("id").split("_")[1]);
                        J = s[Number(M.attr("cturn"))];
                        x("#cityid").val(J[2])
                    } catch (O) {
                    }
                }
            }
        },city_shiftSelectInLi: function(M) {
            if (t != M) {
                if (t != 0) {
                    x(t).removeClass("ac_over").addClass("ac_odd")
                }
                if (M != 0) {
                    try {
                        t = M;
                        x(t).removeClass("ac_odd").addClass("ac_over")
                    } catch (N) {
                    }
                }
            }
        },js: function(N) {
            var M;
            for (M = 1; M <= 7; M++) {
                if (M == N) {
                    x("#ul_list" + M).css("display", "block");
                    x("#nav_list" + M).addClass("action");
                    if (M == 1 || M == 7) {
                        x("#flip_cities2").css("display", "none")
                    }
                    if (M > 1 && M < 7) {
                        var P = x.stationFor12306.tHtmlGetCityName(N - 1, -1, 0);
                        if (P > q) {
                            var O = Math.ceil((P + 1) / q);
                            if (O > 1) {
                                x.stationFor12306.pageDesigh(O, 0, M)
                            }
                            x("#flip_cities2").css("display", "block")
                        } else {
                            x("#flip_cities2").css("display", "none")
                        }
                    } else {
                        C.focus()
                    }
                } else {
                    x("#ul_list" + M).css("display", "none");
                    x("#nav_list" + M).removeClass("action")
                }
            }
            if (1 != N) {
                x(".ac_even").on("mouseover", function() {
                    x.stationFor12306.city_shiftSelectInLi(this)
                }).on("click", function() {
                    C.val(x(this).text());
                    curObjCode.val(x(this).attr("data"));
                    if (w) {
                        x.stationFor12306.setStationInCookies(x(this).text(), x(this).attr("data"))
                    }
                    x("#form_cities2").css("display", "none");
                    i = -1;
                    t = 0;
                    x.stationFor12306.setStationStyle();
                    if (F) {
                        x.stationFor12306.LoadJS(x(this).attr("data"))
                    }
                    if (D) {
                        D(C, curObjCode)
                    }
                })
            }
        },tHtmlGetCityName: function(N, M, P) {
            switch (N) {
                case 0:
                    if (M == -1) {
                        return y.length
                    }
                    if (M == -2) {
                        return y
                    }
                    return y[M];
                    break;
                case 1:
                    if (M == -1) {
                        return e.length
                    }
                    if (M == -2) {
                        return e
                    }
                    if (e.length > q) {
                        var O = Math.ceil((e.length + 1) / q);
                        if (O > 1) {
                            p = e.slice(q * (P), Math.min(q * (P + 1), e.length));
                            return p[M]
                        }
                    }
                    return e[M];
                    break;
                case 2:
                    if (M == -1) {
                        return d.length
                    }
                    if (M == -2) {
                        return d
                    }
                    if (d.length > q) {
                        var O = Math.ceil((d.length + 1) / q);
                        if (O > 1) {
                            o = d.slice(q * (P), Math.min(q * (P + 1), d.length));
                            return o[M]
                        }
                    }
                    return d[M];
                    break;
                case 3:
                    if (M == -1) {
                        return c.length
                    }
                    if (M == -2) {
                        return c
                    }
                    if (c.length > q) {
                        var O = Math.ceil((c.length + 1) / q);
                        if (O > 1) {
                            m = c.slice(q * (P), Math.min(q * (P + 1), c.length));
                            return m[M]
                        }
                    }
                    return c[M];
                    break;
                case 4:
                    if (M == -1) {
                        return b.length
                    }
                    if (M == -2) {
                        return b
                    }
                    if (b.length > q) {
                        var O = Math.ceil((b.length + 1) / q);
                        if (O > 1) {
                            l = b.slice(q * (P), Math.min(q * (P + 1), b.length));
                            return l[M]
                        }
                    }
                    return b[M];
                    break;
                case 5:
                    if (M == -1) {
                        return L.length
                    }
                    if (M == -2) {
                        return L
                    }
                    if (L.length > q) {
                        var O = Math.ceil((L.length + 1) / q);
                        if (O > 1) {
                            k = L.slice(q * (P), Math.min(q * (P + 1), L.length));
                            return k[M]
                        }
                    }
                    return L[M];
                    break;
                default:
                    return "error";
                    break
            }
        },closeShowCity: function() {
            x("#form_cities2").css("display", "none");
            i = -1;
            t = 0;
            x.each(x.stationFor12306.bindInputs, function(Q, P) {
                var O = "#" + P;
                var N = "#" + P + "Text";
                var M = x(N).val();
                if ("" == M) {
                    x(N).val(g);
                    x.stationFor12306.from_to_station_class_gray(x(N));
                    x(O).val("")
                }
            })
        },showAllCity: function() {
            var T = "";
            var N = "342px";
            if (w) {
                N = "400px"
            }
            T = '<div class="com_hotresults" id="thetable" style="width:' + N + '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
            if (w) {
                T = T + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
            }
            T = T + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">A－E</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">F－J</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">K－O</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">P－T</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">U－Z</li></ul>';
            if (w) {
                T += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
                var U = x.stationFor12306.getStationInCookies();
                var Q = U.length;
                if (Q > 2) {
                    G = true;
                    for (var V = 0; V < Q; V++) {
                        T += '<li class="ac_even"   title="' + U[V][0] + '" data="' + U[V][1] + '">' + U[V][0] + "</li>"
                    }
                }
                T += "</ul>"
            }
            T += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
            var P = x.stationFor12306.tHtmlGetCityName(0, -1, 0);
            var S = "";
            if (!w) {
                S = " openLi"
            }
            for (var V = 0; V < P; V++) {
                T += '<li class="ac_even' + S + '"   title="' + x.stationFor12306.tHtmlGetCityName(0, V, 0)[1] + '" data="' + x.stationFor12306.tHtmlGetCityName(0, V, 0)[2] + '">' + x.stationFor12306.tHtmlGetCityName(0, V, 0)[1] + "</li>"
            }
            T += "</ul>";
            for (var W = 2; W <= 6; W++) {
                var R = W - 1;
                var M = x.stationFor12306.tHtmlGetCityName(R, -1, 0);
                if (M > q) {
                    var O = Math.ceil((M + 1) / q);
                    if (O > 1) {
                        T += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 170px;display:none;" id="ul_list' + W + '">';
                        x.stationFor12306.pageDesigh(O, 0, W)
                    }
                    x("#flip_cities2").css("display", "block")
                } else {
                    T += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' + W + '">';
                    x("#flip_cities2").css("display", "none");
                    var S = "";
                    if (!w) {
                        S = " openLi"
                    }
                    for (var V = 0; V < x.stationFor12306.tHtmlGetCityName(R, -1, 0); V++) {
                        T += '<li class="ac_even' + S + '"   title="' + x.stationFor12306.tHtmlGetCityName(R, V, 0)[1] + '" data="' + x.stationFor12306.tHtmlGetCityName(R, V, 0)[2] + '">' + x.stationFor12306.tHtmlGetCityName(R, V, 0)[1] + "</li>"
                    }
                }
                T += "</ul>"
            }
            T += '<div id="flip_cities2"> 翻页控制区</div>';
            T += "</div>";
            x("#panel_cities2").html(T);
            x("#thetable").on("click", function() {
                if (x("#form_cities2").css("display") == "block") {
                    if (i == 1 | i == 0) {
                        i == -1
                    }
                    C.select()
                }
            });
            x("#form_cities").on("click", function() {
                if (x("#form_cities").css("display") == "block") {
                    if (i == 1 | i == 0) {
                        i == -1
                    }
                    C.select()
                }
            });
            x(".ac_even").on("mouseover", function() {
                x.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function() {
                C.val(x(this).text());
                curObjCode.val(x(this).attr("data"));
                if (w) {
                    x.stationFor12306.setStationInCookies(x(this).text(), x(this).attr("data"))
                }
                x("#form_cities2").css("display", "none");
                i = -1;
                t = 0;
                x.stationFor12306.setStationStyle();
                if (F) {
                    x.stationFor12306.LoadJS(x(this).attr("data"))
                }
                if (D) {
                    D(C, curObjCode)
                }
            });
            x("#flip_cities2").css("display", "none");
            return s
        },LoadJS: function(O) {
            if (((typeof (mm_addjs) != "undefined")) && ("" != mm_addjs) && (mm_addjs == 1)) {
                var N = document.getElementsByTagName("HEAD").item(0);
                var M = document.createElement("SCRIPT");
                M.src = mm_srcjs + O + ".js";
                M.type = "text/javascript";
                N.appendChild(M)
            }
        },pageDesigh: function(R, T, S) {
            var P = "";
            if (R > 1) {
                if (T == -1) {
                    T = (R - 1)
                } else {
                    if (T == R) {
                        T = 0
                    }
                }
                E = x.stationFor12306.tHtmlGetCityName(S - 1, -2, 0).slice(q * (T), Math.min(q * (T + 1), x.stationFor12306.tHtmlGetCityName(S - 1, -2, 0).length));
                var Q = "";
                if (!w) {
                    Q = " openLi"
                }
                for (var N = 0; N < E.length; N++) {
                    var O = E[N];
                    P += '<li class="ac_even' + Q + '"   title="' + O[1] + '" data="' + O[2] + '">' + O[1] + "</li>"
                }
                x("#ul_list" + S).html(P);
                var M = (T == 0) ? "&laquo;&nbsp;上一页" : "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + R + "," + (T - 1) + "," + S + ");return false;'>&laquo;&nbsp;上一页</a>";
                M += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
                M += (T == R - 1) ? "下一页&nbsp;&raquo;" : "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" + R + "," + (T + 1) + "," + S + ")'>下一页&nbsp;&raquo;</a>";
                x("#flip_cities2").html(M);
                if (i == 1 | i == 0 | i == 2) {
                    i == -1
                }
                if (C) {
                    C.select()
                }
            } else {
            }
            x(".ac_even").on("mouseover", function() {
                x.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function() {
                C.val(x(this).text());
                curObjCode.val(x(this).attr("data"));
                if (w) {
                    x.stationFor12306.setStationInCookies(x(this).text(), x(this).attr("data"))
                }
                x("#form_cities2").css("display", "none");
                i = -1;
                t = 0;
                x.stationFor12306.setStationStyle();
                if (F) {
                    x.stationFor12306.LoadJS(x(this).attr("data"))
                }
                if (D) {
                    D(C, curObjCode)
                }
            })
        },filterCity: function(P) {
            if (P.length == 0) {
                x("#top_cities").html(j);
                return s
            }
            var N = [];
            var M = /[^A-z]/.test(P);
            for (var O = 0; O < s.length; O++) {
                if (x.stationFor12306.isMatchCity(s[O], P, M)) {
                    N.push(s[O])
                }
            }
            if (N.length > 0) {
                x("#top_cities").html('按"<font color=red>' + P + '</font>"检索：');
                return N
            } else {
                x("#top_cities").html("无法匹配:<font color=red>" + P + "</font>");
                return []
            }
        },replaceChar: function(M, O, N) {
            return M.substr(0, O) + N + M.substr(O + 1, M.length - 1)
        },isMatchCity: function(R, U, O) {
            var U = U.toLowerCase();
            var N = [R[4].toLowerCase(), R[1], R[3].toLowerCase()];
            var T = -1;
            var Q = -1;
            if (O) {
                U = U.split("");
                for (var P = 0; P < U.length; P++) {
                    var W = N[1].indexOf(U[P]);
                    if (W > T && W <= P) {
                        N[1] = x.stationFor12306.replaceChar(N[1], W, "-");
                        T = W
                    } else {
                        return false
                    }
                }
            } else {
                U = U.split("");
                var M = true;
                var S = true;
                for (var P = 0; P < U.length; P++) {
                    var W = N[0].indexOf(U[P]);
                    if (W > T && W <= P) {
                        N[0] = x.stationFor12306.replaceChar(N[0], W, "-");
                        T = W
                    } else {
                        M = false;
                        break
                    }
                }
                for (var P = 0; P < U.length; P++) {
                    var V = N[2].indexOf(U[P]);
                    if (V > Q && V <= P) {
                        N[2] = x.stationFor12306.replaceChar(N[2], V, "-");
                        Q = V
                    } else {
                        S = false;
                        break
                    }
                }
                if ((M == false) && (S == false)) {
                    return false
                }
            }
            return true
        },city_showlist: function(O) {
            if (z.length > 6) {
                var N = Math.ceil((z.length + 1) / 6);
                if (O == -1) {
                    O = (N - 1)
                } else {
                    if (O == N) {
                        O = 0
                    }
                }
                A = z.slice(6 * (O), Math.min(6 * (O + 1), z.length));
                x.stationFor12306.city_Bind(A);
                var M = (O == 0) ? "<span style='float:left;'>&laquo;&nbsp;向前</span>" : "<a style='float:left;cursor:pointer' href='' class='cityflip' onclick='$.stationFor12306.city_showlist(" + (O - 1) + ");return false;'>&laquo;&nbsp;向前</a>";
                M += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                M += (O == N - 1) ? "<span style='float:right;'>向后&nbsp;&raquo;</span>" : "<a style='float:right;cursor:pointer' href='' class='cityflip' onclick='$.stationFor12306.city_showlist(" + (O + 1) + ");return false;'>向后&nbsp;&raquo;</a>";
                x("#flip_cities").html(M);
                x("#flip_cities").css("display", "block")
            } else {
                O = 0;
                A = z;
                x.stationFor12306.city_Bind(A);
                x("#flip_cities").css("display", "none")
            }
            u = O;
            if (x("#form_cities").css("display") == "block") {
                a = true;
                C.focus()
            }
        },fixDivBugInIE6: function(M) {
            try {
                M.bgiframe();
                if (M.width() > x("> ul", M).width()) {
                    M.css("overflow", "hidden")
                } else {
                    x("> iframe.bgiframe", M).width(x("> ul", M).width());
                    M.css("overflow", "scroll")
                }
                if (M.height() > x("> ul", M).height()) {
                    M.css("overflow", "hidden")
                } else {
                    x("> iframe.bgiframe", M).height(x("> ul", M).height());
                    M.css("overflow", "scroll")
                }
            } catch (N) {
            }
        },clearStation: function(M) {
            i = -1;
            var O = C.val();
            var P = curObjCode.val();
            if (O == "" || P == "") {
                C.val("");
                curObjCode.val("")
            } else {
                var N = O + "|" + P;
                if (typeof (station_names) != "undefined") {
                    if (station_names.indexOf(N) == -1) {
                        C.val("");
                        curObjCode.val("")
                    } else {
                        if ("click" == M) {
                            C.select();
                            if (x("#form_cities").is(":hidden")) {
                                x("#form_cities2").css("display", "block")
                            }
                        }
                    }
                } else {
                    C.val("");
                    curObjCode.val("")
                }
            }
        },MapCityID: function(N) {
            for (var M = 0; M < s.length; M++) {
                if (s[M][1] == N) {
                    return s[M][2]
                }
            }
            return 0
        },MapCityName: function(M) {
            for (var N = 0; N < s.length; N++) {
                if (s[N][2] == M) {
                    return s[N][1]
                }
            }
            return ""
        },SetISPos: function(Q) {
            if (I) {
                I(x("#form_cities"), x("#form_cities2"))
            } else {
                x("#form_cities").css("left", Q.position().left);
                x("#form_cities").css("top", Q.position().top + Q.height() + 12);
                x("#form_cities2").css("left", Q.position().left);
                x("#form_cities2").css("top", Q.position().top + Q.height() + 12)
            }
            var P = Q.offset().top;
            var M = x("#search_div");
            var N = x("#choice_div");
            M.css("top", P);
            N.css("top", P);
            var O = Q.offset().left;
            M.css("left", O);
            N.css("left", O)
        },myHandlerFg: function(M) {
            if (M == null) {
                M.keyCode = 9
            } else {
                if (!M.which && M.which == 13) {
                    M.preventDefault()
                } else {
                    if (M.which && M.keyCode == 13) {
                        M.which = 9
                    }
                }
            }
        },myHandler2: function(M) {
            if (M == null) {
                M = window.event;
                M.returnValue = false
            } else {
                if (M.which && M.which == 13) {
                    var O = document.getElementById("Upload_Data3");
                    if (document.createEvent) {
                        var N = document.createEvent("MouseEvents");
                        N.initEvent("click", true, false);
                        O.dispatchEvent(N)
                    } else {
                        if (document.createEventObject) {
                            O.fireEvent("onclick")
                        }
                    }
                } else {
                    if (!M.which && M.which == 13) {
                        M.preventDefault()
                    }
                }
            }
        },from_to_station_class_plain: function(M) {
            if (h && h != "") {
                M.removeClass(h)
            }
            if (n && n != "") {
                M.addClass(n)
            }
        },from_to_station_class_gray: function(M) {
            if (n && n != "") {
                M.removeClass(n)
            }
            if (h && h != "") {
                M.addClass(h)
            }
        },setStationStyle: function() {
            var M = C.val();
            if (M == "") {
                C.val(g);
                x.stationFor12306.from_to_station_class_gray(C);
                curObjCode.val("")
            } else {
                x.stationFor12306.from_to_station_class_plain(C)
            }
        },setCurValue: function() {
            C.val(J[1]);
            curObjCode.val(J[2])
        },bindEvent: function(M) {
            var O = "#" + M;
            var N = "#" + M + "Text";
            x(N).keydown(function(Q) {
                C = x(N);
                curObjCode = x(O);
                i = 0;
                a = true;
                F = true;
                x("#form_cities2").css("display", "none");
                t = 0;
                var P = x(N).width();
                if (-[1, ]) {
                    P = P - 4
                }
                x("#form_cities").css("width", P);
                x("#form_cities").css("display", "block");
                x(".AbcSearch li").removeClass("action");
                x(".popcitylist").css("display", "none");
                if (G && w) {
                    x("#ul_list7").css("display", "block");
                    x("#nav_list7").addClass("action")
                } else {
                    x("#nav_list1").addClass("action");
                    x("#ul_list1").css("display", "block")
                }
                x("#flip_cities2").css("display", "none");
                x(".ac_even").removeClass("ac_over").addClass("ac_odd");
                Q = Q || window.event;
                if (Q.keyCode == 40) {
                    x.stationFor12306.city_changeSelectIndex(1);
                    x("#form_cities").css("display", "block");
                    x.stationFor12306.SetISPos(C);
                    x.stationFor12306.setCurValue()
                } else {
                    if (Q.keyCode == 38) {
                        x.stationFor12306.city_changeSelectIndex(-1);
                        x.stationFor12306.setCurValue();
                        x("#form_cities").css("display", "block");
                        x.stationFor12306.SetISPos(C)
                    } else {
                        if (Q.keyCode == 13) {
                            x.stationFor12306.city_confirmSelect();
                            if (document.addEventListener) {
                                document.addEventListener("keypress", x.stationFor12306.myHandlerFg, true)
                            } else {
                                evt = window.event;
                                evt.keyCode = 9
                            }
                        }
                    }
                }
            }).focus(function() {
                F = true;
                if (a) {
                    x("#form_cities2").css("display", "none");
                    t = 0;
                    a = false;
                    i = -1
                } else {
                    if (i == -1) {
                        x(".AbcSearch li").removeClass("action");
                        x(".popcitylist").css("display", "none");
                        x("#flip_cities2").css("display", "none");
                        if (G && w) {
                            x("#ul_list7").css("display", "block");
                            x("#nav_list7").addClass("action")
                        } else {
                            x("#nav_list1").addClass("action");
                            x("#ul_list1").css("display", "block")
                        }
                        x(".ac_even").removeClass("ac_over").addClass("ac_odd");
                        x("#form_cities2").css("display", "block")
                    }
                }
                C = x(N);
                curObjCode = x(O);
                i = 0;
                K = true;
                x.stationFor12306.SetISPos(C)
            }).blur(function() {
                C = x(N);
                curObjCode = x(O);
                i = 0;
                a = false;
                F = true;
                if (!f && !B) {
                    x.stationFor12306.clearStation("blur");
                    K = false;
                    x("#form_cities").css("display", "none");
                    x("#form_cities2").css("display", "none");
                    i = -1;
                    t = 0;
                    z = x.stationFor12306.filterCity("");
                    x.stationFor12306.city_showlist(0);
                    x.stationFor12306.setStationStyle()
                }
            }).keyup(function(P) {
                C = x(N);
                curObjCode = x(O);
                i = 0;
                a = true;
                P = P || window.event;
                if (P.keyCode != 40 && P.keyCode != 38 && P.keyCode != 37 && P.keyCode != 39 && P.keyCode != 13 && P.keyCode != 9) {
                    z = x.stationFor12306.filterCity(C.val());
                    x.stationFor12306.city_showlist(0)
                }
            }).click(function() {
                x.stationFor12306.clearStation("click")
            });
            x.stationFor12306.bindInputs.push(M)
        },getStationInCookies: function() {
            var O = [];
            var N = x.ht_getcookie("_city_name_save_station");
            if (N) {
                var M = N.split(",");
                if (M && M.length > 0) {
                    x.each(M, function(S, R) {
                        var P = R.split("#");
                        var Q = [];
                        Q[0] = P[0];
                        Q[1] = P[1];
                        O[S] = Q
                    })
                }
            }
            return O
        },setStationInCookies: function(W, N) {
            var T = x.stationFor12306.getStationInCookies();
            var Q = [];
            var X = T.length;
            var P = true;
            var Y = 10;
            for (var R = 0; R < X; R++) {
                if (T[R][0] == W && T[R][1] == N) {
                    P = false
                }
                Q.push(T[R])
            }
            if (P) {
                Q.push([W, N])
            }
            var S = Q;
            var O = "";
            var U = S.length;
            var R = 0;
            if (U > Y) {
                R = 1
            }
            var M = R;
            if (U > 1) {
                x("#ul_list7").html("");
                G = true
            }
            var V = "";
            for (; R < U; R++) {
                if (R > M) {
                    O += ","
                }
                O += S[R][0] + "#" + S[R][1];
                if (G && w) {
                    V += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' + S[R][0] + '" data="' + S[R][1] + '">' + S[R][0] + "</li>"
                }
            }
            if (G && w) {
                x("#ul_list7").html(V)
            }
            x.ht_setcookie("_city_name_save_station", O, 365 * 24 * 60 * 60)
        },li_click: function(M) {
            C.val(x(M).text());
            curObjCode.val(x(M).attr("data"));
            if (w) {
                x.stationFor12306.setStationInCookies(x(M).text(), x(M).attr("data"))
            }
            x("#form_cities2").css("display", "none");
            i = -1;
            t = 0;
            x.stationFor12306.setStationStyle();
            if (F) {
                x.stationFor12306.LoadJS(x(M).attr("data"))
            }
            if (D) {
                D(C, curObjCode)
            }
        },init: function(R, S) {
            if (typeof (S) != "undefined") {
                if (typeof (S._init_input) != "undefined") {
                    g = S._init_input
                }
                if (typeof (S._top_4_initInput) != "undefined") {
                    j = S._top_4_initInput
                }
                if (typeof (S.confirmCallBack) != "undefined") {
                    D = S.confirmCallBack
                }
                if (typeof (S._selected_class) != "undefined") {
                    n = S._selected_class
                }
                if (typeof (S._unselected_class) != "undefined") {
                    h = S._unselected_class
                }
                if (typeof (S._12306_openFavorite) != "undefined") {
                    w = S._12306_openFavorite
                }
                if (typeof (S.position) != "undefined") {
                    I = S.position
                }
            }
            if (typeof (station_names) != "undefined") {
                var O = station_names.split("@");
                for (var N = 0; N < O.length; N++) {
                    var Q = O[N];
                    var P = Q.toString().charAt(0);
                    if (P == "a" || P == "b" || P == "c" || P == "d" || P == "e") {
                        e.push(Q.split("|"))
                    }
                    if (P == "f" || P == "g" || P == "h" || P == "i" || P == "j") {
                        d.push(Q.split("|"))
                    }
                    if (P == "k" || P == "l" || P == "m" || P == "n" || P == "o") {
                        c.push(Q.split("|"))
                    }
                    if (P == "p" || P == "q" || P == "r" || P == "s" || P == "t") {
                        b.push(Q.split("|"))
                    }
                    if (P == "u" || P == "v" || P == "w" || P == "x" || P == "y" || P == "z") {
                        L.push(Q.split("|"))
                    }
                    if (Q.length > 0) {
                        Q = Q.split("|");
                        if (H != "" && Q[2] == H) {
                            favcity = Q;
                            s.unshift(Q);
                            if (N > 6) {
                                s.push(Q)
                            }
                        } else {
                            s.push(Q)
                        }
                    }
                }
                for (var N = 0; N < s.length; N++) {
                    s[N].push(N)
                }
            }
            if (typeof (favorite_names) != "undefined") {
                var M = favorite_names.split("@");
                for (var N = 0; N < M.length; N++) {
                    var Q = M[N];
                    if (Q.length > 0) {
                        Q = Q.split("|");
                        y.push(Q)
                    }
                }
                for (var N = 0; N < y.length; N++) {
                    y[N].push(N)
                }
            }
            z = x.stationFor12306.filterCity("");
            x.stationFor12306.city_showlist(0);
            x.stationFor12306.showAllCity();
            a = false;
            x.stationFor12306.fixDivBugInIE6(x("#form_cities"));
            x.stationFor12306.fixDivBugInIE6(x("#form_cities2"));
            if (R && R.length > 0) {
                x.each(R, function(U, T) {
                    x.stationFor12306.bindEvent(T)
                })
            }
            x("#form_cities").mousedown(function() {
                f = true
            }).mouseup(function() {
                f = false
            });
            x("#form_cities2").mousedown(function() {
                B = true
            }).mouseup(function() {
                B = false
            })
        }}
})(jQuery);
(function() {
    $.stopStation = function(a) {
        var b = this;
        b.init = function() {
            b.options = $.extend({}, $.stopStation.defaultOptions, a);
            if (null == b.options.url || null == b.options.getSearchDate) {
                throw "error options,url can not be null"
            }
            b.options.mouseOnPanel = 0;
            if (!$("#" + b.options.showDivId)[0]) {
                var d = [];
                var c = -1;
                d[++c] = '<div class="station" style="display:none;" id="' + b.options.showDivId + '"><b></b>';
                d[++c] = '<div class="station-info" id="' + b.options.showTitleId + '"></div>';
                d[++c] = '<div class="station-hd"><span class="zx">站序</span><span class="zm">站名</span><span class="dzsj">到站时间</span>';
                d[++c] = '<span class="cfsj">出发时间</span><span class="tlsj">停留时间</span>';
                d[++c] = '<a id="_stopStation_close_id" class="close" title="关闭" href="javascript:" </a></div>';
                d[++c] = '<div class="station-bd"><table><tbody id="' + b.options.showTableId + '"></tbody></table></div></div>';
                $(d.join("")).appendTo($("body:eq(0)"));
                $("#_stopStation_close_id").on("click", b.close)
            }
            $("#" + b.options.showDivId).css("z-index", "20001");
            if (b.options.mouseOutClose) {
                $("#" + b.options.showDivId).on("mouseenter", function(e) {
                    b.options.mouseOnPanel = 1
                }).on("mouseleave", function() {
                    b.options.mouseOnPanel = 0;
                    $("#" + b.options.showDivId).hide().appendTo($("body:eq(0)"));
                    $("#" + b.options.showTableId).html("")
                })
            }
        };
        b.close = function() {
            $("#" + $.stopStation.defaultOptions.showDivId).closest("tr").removeAttr("style");
            $("#" + $.stopStation.defaultOptions.showDivId).removeAttr("style");
            b.options.mouseOnPanel = 0;
            $("#" + $.stopStation.defaultOptions.showDivId).hide().appendTo($("body:eq(0)"));
            $("#" + $.stopStation.defaultOptions.showTableId).html("")
        };
        b.open = function(f, j, h, e, i, c) {
            $("#" + $.stopStation.defaultOptions.showDivId).closest("tr").removeAttr("style");
            $("#" + $.stopStation.defaultOptions.appendTo + f).closest("tr").attr("style", "z-index:1111");
            $("#" + $.stopStation.defaultOptions.showDivId).attr("style", "z-index:20001");
            if (a.timer) {
                clearTimeout(a.timer)
            }
            var g = a.getSearchDate();
            if (i && "" != i && null != i) {
                var d = formatDate(i);
                if ("-" != d) {
                    g = formatDate(i)
                } else {
                    g = a.getSearchDate()
                }
            } else {
                g = a.getSearchDate()
            }
            $.ajax({url: a.url,type: "get",isTakeParam: false,data: {train_no: j,from_station_telecode: h,to_station_telecode: e,depart_date: g},success: function(n) {
                    var q = n.data.data;
                    if (q && q.length > 0) {
                        var o = [];
                        var r = -1;
                        for (var m = 0; m < q.length; m++) {
                            var l = q[m];
                            if (m == 0) {
                                var s = null;
                                s = l.train_class_name;
                                if ("0" == c || "2" == c || "4" == c) {
                                    c = "无空调"
                                } else {
                                    c = "有空调"
                                }
                                if (!s) {
                                    s = "&nbsp;&nbsp;"
                                }
                                $("#" + $.stopStation.defaultOptions.showTitleId).html('<span class="item1">' + l.station_train_code + '次      </span><span class="item2">' + l.start_station_name + "<em>--></em>" + l.end_station_name + '</span><span class="item3">' + s + '</span><span class="item4">' + c + "</span>").find("span").css("color", "#333")
                            }
                            var p = "";
                            if (!l.isEnabled) {
                                p = " style='color: #999;' "
                            }
                            o[++r] = '<tr><td width="50" class="tc" ' + p + ">" + l.station_no + "</td>";
                            o[++r] = '<td width="75" ' + p + ">" + l.station_name + "</td>";
                            o[++r] = '<td width="75" ' + p + ">" + l.arrive_time + "</td>";
                            o[++r] = '<td width="75" ' + p + ">" + l.start_time + "</td>";
                            o[++r] = "<td " + p + ">" + l.stopover_time + "</td></tr>"
                        }
                        $("#" + $.stopStation.defaultOptions.showTableId).html(o.join(""));
                        $("#" + $.stopStation.defaultOptions.showDivId).appendTo($("#" + $.stopStation.defaultOptions.appendTo + f)).show()
                    }
                }})
        };
        b.init();
        myStopStation = b;
        return b
    };
    $.fn.stopStation = function() {
        return (new $.stopStation(Array.prototype.slice.call(arguments)[0]))
    };
    $.stopStation.defaultOptions = {url: null,mouseOutClose: false,showDivId: "train_div_",showTableId: "train_table_",showTitleId: "train_span_",appendTo: "train_num_",getSearchDate: null}
})();
var myStopStation = function() {
};
var formatDate = function(b) {
    if (b && (b.length == 8)) {
        var c = b.substring(0, 4);
        var d = b.substring(4, 6);
        var a = b.substring(6, 8);
        return c + "-" + d + "-" + a
    } else {
        return "-"
    }
};
var checkusermdId;
var showTrainStop;
var hideTrainStop;
var showTicketPrice;
var isInitQueryInput = false;
var isInitStationDiv = false;
var isInitJsrenderTemplate = false;
var isInitDateRange = false;
var tickets_info;
var location_code;
var md5Str;
var leftTicketStr;
var isAsync;
var countDown = null;
var ischeckAutoSubmitCode = true;
(function() {
    var a;
    var aE = null;
    var bb;
    var a0;
    var E;
    var S;
    var bD;
    var bq;
    var l = false;
    var bw = 0;
    var ah;
    var aO;
    var q;
    var Q;
    var bI;
    var aL = new Array();
    var bn = new Array();
    var bv = new Array();
    var L = new Array();
    var bi = new Array();
    var B;
    var am = new Array();
    tickets_info = new Array();
    var aF = true, bx = true, aA = true, ai = "starttime";
    var al = true;
    var a7 = [];
    var aR = [];
    var bp = [];
    var at;
    var y = [];
    var bo = "";
    var bB = "";
    var aJ = "";
    $(document).ready(function() {
        e();
        M();
        r();
        P();
        x();
        aj();
        aH();
        a5();
        clickCheckBoxName();
        ba();
        bs();
        ac();
        T();
        by();
        t();
        az();
        ay();
        be();
        $("#float").headerFloat();
        $(window).scroll(function() {
            if (aE != null && (!aE.isHidden())) {
                $("#floatTable").hide();
                $(window).scrollTop(a)
            }
        });
        $.stopStation({url: ctx + "czxx/queryByTrainNo",getSearchDate: function() {
                return train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
            }});
        aN();
        bM();
        bz();
        k();
        I();
        R();
        bo = $("#fromStationText").val();
        bB = $("#toStationText").val();
        $("#showOnlyTicA").bind("click", function() {
            $("#filterTic").attr("checked", "checked");
            aS();
            $jpopup.startOrHiden()
        });
        at = $.autoSubmit();
        var bP = $("#train_date").val();
        var bO = $("#back_train_date").val();
        if (bO == "") {
            $("#back_train_date").val(bP)
        } else {
            $("#back_train_date").val(bO)
        }
    });
    function R() {
        if (rqChecked.length == 0) {
            if (train_tour_flag == "fc") {
                rqChecked.push($("#back_train_date").val())
            } else {
                rqChecked.push($("#train_date").val())
            }
        }
    }
    function bz() {
        if (ClickWho == "0X00") {
            $("#sf1").attr("disabled", "true");
            $("#sf1_label").addClass("color999");
            $("#sf2").attr("checked", "true");
            $("#query_ticket").removeClass().addClass("btn92s")
        } else {
            if (ClickWho == "00" || ClickWho == "ADULT") {
                $("#sf2").attr("disabled", "true");
                $("#sf2_label").addClass("color999");
                $("#query_ticket").removeClass().addClass("btn92s")
            } else {
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }
        if (isstudentDate) {
            $("#sf2").attr("disabled", "true");
            $("#sf2_label").addClass("color999");
            $("#query_ticket").removeClass().addClass("btn92s")
        }
    }
    function U() {
        if (!isInitStationDiv) {
            c();
            isInitStationDiv = true
        }
        if (!isInitJsrenderTemplate) {
            ad();
            isInitJsrenderTemplate = true
        }
    }
    function aN() {
        $("#fromStationText").mouseover(U);
        $("#toStationText").mouseover(U);
        $("#dc").mouseover(U);
        $("#wf").mouseover(U);
        $("#dc_label").mouseover(U);
        $("#wf_label").mouseover(U);
        $("#train_date").mouseover(U);
        $("#back_train_date").mouseover(U);
        $("#date_range").mouseover(U)
    }
    function ak(bO) {
        ar();
        var bS = bi.length;
        if ($("#query_ticket").html() == "停止查询") {
            if (bS > 0 && au) {
                $("#auto_query").removeAttr("disabled");
                if ($("#dc").is(":checked")) {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#query_ticket").html("查询");
                $("#query_ticket").unbind("click");
                bj();
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>");
                if (!$("#autoSubmit").is(":checked")) {
                    clearInterval(aC);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == "fc") {
                            var bP = "成功查到" + $("#back_train_date").val() + "的" + bi[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        } else {
                            var bP = "成功查到" + $("#train_date").val() + "的" + bi[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        }
                        if (bS == 1) {
                            bP = bP + "车。"
                        } else {
                            bP = bP + "等" + bS + "趟车。"
                        }
                        $("#filterRes").html(bP)
                    }
                }
                jPlayer("play")
            } else {
                if (countDown) {
                    clearInterval(countDown)
                }
                var bT = autoSearchTime / 1000;
                $("#filterTicDiv").html("<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + bT + "</font>秒<strong>");
                countDown = window.setInterval(function() {
                    var bU = "<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>";
                    if (bT == 0) {
                        bT = autoSearchTime / 1000
                    }
                    bT = bT - 1;
                    if (bT == 4) {
                        bU = bU + "&nbsp;&nbsp;&nbsp;&nbsp;"
                    }
                    if (bT == 3) {
                        bU = bU + "&nbsp;&nbsp;&nbsp;"
                    }
                    if (bT == 2) {
                        bU = bU + "&nbsp;&nbsp;"
                    }
                    if (bT == 1) {
                        bU = bU + "&nbsp;"
                    }
                    bU = bU + bT;
                    bU += "</font>秒<strong>";
                    $("#filterTicDiv").html(bU)
                }, 1000);
                $("#filterTic").hide()
            }
        }
        var bR = new Array();
        bR.push('<tbody id="queryLeftTable">');
        for (var bQ = 0; bQ < bO.length; bQ++) {
            bR.push('<tr id="ticket_');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('" class="');
            bR.push(bQ % 2 ? '">' : 'bgc">');
            bR.push('<td colspan="4" width="370">');
            bR.push('<div class="ticket-info clearfix" id="train_num_');
            bR.push(bQ);
            bR.push('">');
            bR.push('<div class="train" id="ticket_');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('_train">');
            bR.push('<div><a title="点击查看停靠站信息" href="javascript:" id="');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.from_station_telecode);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.to_station_telecode);
            bR.push('" class="number"  onclick="myStopStation.open(\'');
            bR.push(bQ);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.from_station_telecode);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.to_station_telecode);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.start_train_date);
            bR.push("','");
            bR.push(bO[bQ].queryLeftNewDTO.train_seat_feature);
            bR.push("');\">");
            bR.push(bO[bQ].queryLeftNewDTO.station_train_code);
            bR.push("</a>");
            if (bO[bQ].queryLeftNewDTO.is_support_card != 0) {
                bR.push(' <span class="i-card" title="可凭二代身份证直接进出站"></span>')
            }
            bR.push("</div>");
            bR.push('<span id="');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.from_station_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.to_station_no);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.yp_info);
            bR.push("_");
            bR.push(bO[bQ].queryLeftNewDTO.seat_types);
            bR.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>');
            bR.push("</div>");
            bR.push('<div class="cdz">');
            if (bO[bQ].queryLeftNewDTO.from_station_telecode != null && bO[bQ].queryLeftNewDTO.from_station_telecode == bO[bQ].queryLeftNewDTO.start_station_telecode) {
                bR.push('<strong class="start-s">');
                bR.push(bO[bQ].queryLeftNewDTO.from_station_name);
                bR.push("</strong>")
            } else {
                bR.push("<strong>");
                bR.push(bO[bQ].queryLeftNewDTO.from_station_name);
                bR.push("</strong>")
            }
            if (bO[bQ].queryLeftNewDTO.to_station_telecode != null && bO[bQ].queryLeftNewDTO.to_station_telecode == bO[bQ].queryLeftNewDTO.end_station_telecode) {
                bR.push('<strong class="end-s">');
                bR.push(bO[bQ].queryLeftNewDTO.to_station_name);
                bR.push("</strong>")
            } else {
                bR.push("<strong>");
                bR.push(bO[bQ].queryLeftNewDTO.to_station_name);
                bR.push("</strong>")
            }
            bR.push("</div>");
            bR.push('<div class="cds">');
            bR.push('<strong class="start-t">');
            bR.push(bO[bQ].queryLeftNewDTO.start_time);
            bR.push("</strong>");
            bR.push('<strong class="color999">');
            bR.push(bO[bQ].queryLeftNewDTO.arrive_time);
            bR.push("</strong>");
            bR.push("</div>");
            bR.push('<div  class="ls" ');
            bR.push('id="');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('_ls">');
            bR.push("<strong>");
            bR.push(bO[bQ].queryLeftNewDTO.lishi);
            bR.push("</strong>");
            bR.push("<span>");
            bR.push(changeArriveDate(bO[bQ].queryLeftNewDTO.start_time, bO[bQ].queryLeftNewDTO.lishi));
            bR.push("到达</span>");
            bR.push("</div>");
            bR.push("</div>");
            bR.push("</td>");
            bA(bR, bO[bQ].queryLeftNewDTO.swz_num, "SWZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "91");
            bA(bR, bO[bQ].queryLeftNewDTO.tz_num, "TZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "P1");
            bA(bR, bO[bQ].queryLeftNewDTO.zy_num, "ZY_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "M1");
            bA(bR, bO[bQ].queryLeftNewDTO.ze_num, "ZE_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "O1");
            bA(bR, bO[bQ].queryLeftNewDTO.gr_num, "GR_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "61");
            bA(bR, bO[bQ].queryLeftNewDTO.rw_num, "RW_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "41");
            bA(bR, bO[bQ].queryLeftNewDTO.yw_num, "YW_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "31");
            bA(bR, bO[bQ].queryLeftNewDTO.rz_num, "RZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "21");
            bA(bR, bO[bQ].queryLeftNewDTO.yz_num, "YZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "11");
            bA(bR, bO[bQ].queryLeftNewDTO.wz_num, "WZ_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "W1");
            bA(bR, bO[bQ].queryLeftNewDTO.qt_num, "QT_", bO[bQ].queryLeftNewDTO.train_no, bO[bQ].queryLeftNewDTO.yp_ex, "");
            if ("Y" == bO[bQ].queryLeftNewDTO.canWebBuy) {
                bR.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="submitOrderRequest(\'');
                bR.push(bO[bQ].secretStr);
                bR.push("','");
                bR.push(bO[bQ].queryLeftNewDTO.start_time);
                bR.push("')\">");
                bR.push(buttonText());
                bR.push("</a>");
                bR.push("</td>")
            } else {
                bR.push('<td align="center" width="80" class="no-br">');
                bR.push(bO[bQ].buttonTextInfo);
                bR.push("</td>")
            }
            bR.push("</tr>");
            bR.push('<tr id="price_');
            bR.push(bO[bQ].queryLeftNewDTO.train_no);
            bR.push('" style="display:none;"></tr>')
        }
        bR.push("</tbody>");
        $("#queryLeftTable").replaceWith(bR.join(""))
    }
    function bA(bT, bS, bR, bQ, bU, bP) {
        var bV = bU ? bU.indexOf(bP) : -1;
        var bO = false;
        if (bV > -1 && (bV % 2) == 0) {
            bO = true
        }
        if ("有" == bS) {
            if (bR == "SWZ_" || bR == "TZ_") {
                bT.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
                bT.push(bR);
                bT.push(bQ);
                bT.push('">');
                if (bO) {
                    bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                } else {
                    bT.push(bS)
                }
                bT.push("</td>")
            } else {
                if (bR == "ZY_" || bR == "ZE_") {
                    bT.push('<td width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                } else {
                    bT.push('<td width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                }
            }
        } else {
            if (isNum(bS) > 0) {
                if (bR == "SWZ_" || bR == "TZ_" || bR == "ZY_" || bR == "ZE_") {
                    bT.push('<td width="46" align="center" style="cursor: pointer;" class="t-num" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    bT.push("<div>");
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                } else {
                    bT.push('<td width="46" align="center" style="cursor: pointer;" class="t-num" onclick="showTicketPrice(this)" id="');
                    bT.push(bR);
                    bT.push(bQ);
                    bT.push('">');
                    if (bO) {
                        bT.push('<div class="sale" title="本席别票价打折">' + bS + '<span class="i-mark">折</span></div>')
                    } else {
                        bT.push(bS)
                    }
                    bT.push("</td>")
                }
            } else {
                bT.push(' <td width="46" align="center" style="cursor: pointer;" onclick="showTicketPrice(this)"  id="');
                bT.push(bR);
                bT.push(bQ);
                bT.push('">');
                bT.push(bS);
                bT.push("</td>")
            }
        }
    }
    function g(bP, bO) {
        ishaveCheckId = false;
        for (i = 0; i < bP.length; i++) {
            if (bP[i][0] == bO) {
                bP[i][1] = $("#".concat($("#".concat(bO)).attr("for"))).is(":checked");
                ishaveCheckId = true
            }
        }
        if (!ishaveCheckId) {
            bP[bP.length] = [bO, true]
        }
    }
    function bl() {
        d(bb);
        d(a0);
        d(E)
    }
    function d(bO) {
        for (i = 0; i < bO.length; i++) {
            if (bO[i][1]) {
                $("#".concat(bO[i][0]).concat("_check")).attr("checked", true)
            }
        }
    }
    function u(bP) {
        var bO = new Date();
        var bQ = bP.split("-");
        bO.setFullYear(parseInt(bQ[0]), parseInt(bQ[1] - 1, 10), parseInt(bQ[2], 10));
        if (bQ.length >= 6) {
            bO.setHours(bQ[3], bQ[4], bQ[5])
        }
        return bO
    }
    Date.prototype.format = function(bP) {
        var bQ = {"M+": this.getMonth() + 1,"d+": this.getDate(),"h+": this.getHours(),"m+": this.getMinutes(),"s+": this.getSeconds(),"q+": Math.floor((this.getMonth() + 3) / 3),S: this.getMilliseconds()};
        if (/(y+)/.test(bP)) {
            bP = bP.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var bO in bQ) {
            if (new RegExp("(" + bO + ")").test(bP)) {
                bP = bP.replace(RegExp.$1, RegExp.$1.length == 1 ? bQ[bO] : ("00" + bQ[bO]).substr(("" + bQ[bO]).length))
            }
        }
        return bP
    };
    function aq(bQ, bP) {
        var bO = new Date(Date.parse(bQ.replace(/-/g, "/")));
        bO.setDate(bO.getDate() + bP);
        return G(bO)
    }
    function G(bP) {
        var bQ = bP.getFullYear();
        var bS = bP.getMonth() + 1;
        var bR = bP.getDate();
        var bO = bQ + "-" + bS + "-" + bR;
        return bO
    }
    function bd() {
        var bQ = $("#train_date").val();
        var bP = $("#back_train_date").val();
        var bO = false;
        if ($("#wf").is(":checked")) {
            if (u(bQ) <= u(bP)) {
                bO = true
            }
        } else {
            return true
        }
        return bO
    }
    function bG() {
        var bR = $.jc_getFromStation();
        if (bR) {
            var bQ = bR.split(",");
            if (bQ && bQ.length == 2) {
                $("#fromStationText").val(bQ[0]);
                $("#fromStation").val(bQ[1])
            }
        }
        var bP = $.jc_getToStation();
        if (bP) {
            var bQ = bP.split(",");
            if (bQ && bQ.length == 2) {
                $("#toStationText").val(bQ[0]);
                $("#toStation").val(bQ[1])
            }
        }
        var bS = [];
        bS = stu_buy_date.split("&");
        var bO = $.jc_getFromDate();
        if (bO) {
            if (bO >= bS[0] && bO <= bS[1]) {
                $("#train_date").val(bO)
            }
        }
        var bT = $.jc_getWfOrDc();
        if (bT && "wf" == bT) {
            $("#wf").click();
            var bU = $.jc_getToDate();
            if (bU) {
                if (bU >= bS[0] && bU <= bS[1]) {
                    $("#back_train_date").val(bU)
                }
            }
        } else {
            $("#dc").click()
        }
    }
    function aD() {
        $("#train_stop").on("mouseover", function(bO) {
            if (checkHover(bO, this)) {
                bw = 1
            }
        }).on("mouseleave", function() {
            bw = 0;
            $("#train_stop").hide();
            $("#train_table_").html("")
        })
    }
    function e() {
        fromStation = from_station;
        fromStationName = from_station_name;
        toStation = to_station;
        toStationName = to_station_name;
        trainDate = trainDate;
        backTrainDate = backTrainDate;
        bb = new Array();
        a0 = new Array();
        E = new Array()
    }
    function k() {
        $("#fromStation").val(fromStation);
        $("#fromStationText").val(fromStationName);
        $("#toStation").val(toStation);
        $("#toStationText").val(toStationName);
        $("#train_date").val(trainDate);
        if (isInMaintenanceHours) {
            $("#autoSubmit").prop("checked", false);
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#autoSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
            $("#partSubmit").prop("checked", false);
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999");
            $("#partSubmitTxt").attr("title", "系统维护时间下不允许自动提交")
        }
        if (backTrainDate != null && backTrainDate != "") {
            $("#back_train_date").val(backTrainDate)
        }
        if ($("#fromStationText").val() == "") {
            $("#fromStationText").val("简拼/全拼/汉字")
        }
        if ($("#toStationText").val() == "") {
            $("#toStationText").val("简拼/全拼/汉字")
        }
        if (page_show_flag == null) {
            ay();
            bG()
        } else {
            if (page_show_flag == "index") {
                aZ()
            } else {
                if (page_show_flag == "preStep") {
                    bC()
                } else {
                    if (page_show_flag == "fcInit") {
                        o();
                        $("#autoSubmit").attr("disabled", true);
                        $("#autoSubmit").siblings("label").css("color", "#999");
                        $("#partSubmit").attr("disabled", true);
                        $("#partSubmit").siblings("label").css("color", "#999")
                    } else {
                        if (page_show_flag == "gcInit") {
                            a1();
                            $("#autoSubmit").attr("disabled", true);
                            $("#autoSubmit").siblings("label").css("color", "#999");
                            $("#partSubmit").attr("disabled", true);
                            $("#partSubmit").siblings("label").css("color", "#999")
                        }
                    }
                }
            }
        }
    }
    function aZ() {
        if (tour_flag == "wf") {
            $("#wf").click()
        } else {
            if (tour_flag == "dc") {
                $("#dc").click()
            }
        }
        if (purposeCodeFromIndex == "0X00") {
            $("#sf2").click()
        } else {
            if (purposeCodeFromIndex == "ADULT") {
                $("#sf1").click()
            }
        }
        var bO = [];
        $("#date_range>ul>li").each(function() {
            var bP = $(this).children("span:first-child").html();
            bO.push(bP)
        });
        $("#query_ticket").click()
    }
    function bC() {
        $("#fromStationText").removeClass().addClass("inp_selected");
        $("#toStationText").removeClass().addClass("inp_selected");
        if (train_tour_flag == "dc") {
            ab(trainDate);
            $("#dc").click()
        }
        if (train_tour_flag == "wc") {
            ab(trainDate);
            $("#wf").click()
        }
        if (train_tour_flag == "fc") {
            ab(backTrainDate);
            $("#wf").click();
            $("#wf").attr("disabled", "true");
            $("#dc").attr("disabled", "true");
            $("#change_station").removeClass().addClass("i-change i-change2");
            $("#change_station").attr("style", "");
            $("#fromStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
            $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
            $("#place_area>ul>li:nth-child(1)").addClass("no-change");
            $("#place_area>ul>li:nth-child(3)").addClass("no-change");
            $("#place_area>ul>li:nth-child(4)").addClass("no-change");
            $("#fromStationText").removeClass().addClass("inp-txt");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#change_station").unbind();
            $("#train_date").val(trainDate);
            $("#train_date").attr("readonly", "true");
            $("#train_date").removeClass().addClass("inp-txt");
            $("#train_date").unbind("click");
            $("#date_icon_1").unbind("click");
            $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
            $("#back_train_date").val(backTrainDate);
            $("#back_train_date").removeAttr("disabled");
            $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
            $("#back_train_date").removeClass().addClass("inp_selected");
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
        if (train_tour_flag == "gc") {
            ab(trainDate);
            a1();
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
    }
    function ab(bQ) {
        for (var bO = 1; bO <= 20; bO++) {
            var bP = $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").text();
            bP = "2013-" + bP;
            if (bQ == bP) {
                $("#date_range>ul>li").removeClass("sel");
                $("#date_range>ul>li").removeAttr("alt");
                $("#date_range>ul>li:nth-child(" + bO + ")").addClass("sel");
                $("#date_range>ul>li:nth-child(" + bO + ")").attr("alt", "show");
                $("#date_range>ul>li:nth-child(20)").addClass("end");
                $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").removeClass();
                $("#date_range>ul>li:nth-child(" + bO + ")").children("span:last-child").removeClass();
                $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").addClass("hide");
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                bq = $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").text();
                break
            }
        }
    }
    function a1() {
        $("#fromStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#dc").click();
        $("#wf").attr("disabled", "true");
        $("#dc").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(5)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "");
        $("#fromStationText_label").addClass("color999");
        $("#toStationText_label").addClass("color999")
    }
    function o() {
        $("#fromStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        ab(backTrainDate);
        $("#wf").click();
        $("#dc").attr("disabled", "true");
        $("#wf").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(4)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#train_date").attr("readonly", "true");
        $("#train_date").addClass("color999");
        $("#train_date").attr("disabled", true);
        $("#train_date").unbind("click");
        $("#date_icon_1").unbind("click");
        $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
        $("#back_train_date").removeAttr("disabled");
        $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
        $("#train_date").removeClass().addClass("inp-txt");
        $("#back_train_date").removeClass().addClass("inp_selected");
        $("#fromStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }
    function M() {
        initPageTitle(1);
        $("#train_type_btn_all").css("cursor", "pointer");
        $("#start_time_btn_all").css("cursor", "pointer");
        $("#arrive_time_btn_all").css("cursor", "pointer");
        $("#seat_type_btn_all").css("cursor", "pointer");
        $("#from_station_name_all").css("cursor", "pointer");
        $("#to_station_name_all").css("cursor", "pointer");
        $("#change_station").css("cursor", "pointer");
        $("#show_more").css("cursor", "pointer");
        $("#date_normal").css("cursor", "pointer");
        $("#lookup").css("cursor", "pointer");
        $("#s_time").css("cursor", "pointer");
        $("#r_time").css("cursor", "pointer");
        $("#l_s").css("cursor", "pointer");
        $("#other_span_starttime").css("cursor", "pointer");
        $("#other_span_endtime").css("cursor", "pointer");
        $("#other_span_lishi").css("cursor", "pointer");
        $("#date_range>ul>li").children("span:nth-child(1)").css("cursor", "pointer");
        $("#cc_seat_type_btn_all>ul>li").hide();
        $("#train_date").removeClass().addClass("inp_selected");
        if ($("#fromStationText").val() != "" && $("#fromStationText").val() != "简拼/全拼/汉字" || $("#toStationText").val() != "" && $("#toStationText").val() != "简拼/全拼/汉字") {
            $("#fromStationText").removeClass().addClass("inp_selected");
            $("#toStationText").removeClass().addClass("inp_selected")
        }
        var bO = stu_start_train_date.split("&");
        var bP = stu_end_tain_date.split("&")
    }
    function bE(bP) {
        var bO = ("00" + (bP.getMonth() + 1)).slice(-2) + "-";
        bO += ("00" + bP.getDate()).slice(-2) + " 00:00:00";
        return bO
    }
    function r() {
        $("#dc").click(function() {
            $("#wf").attr("checked", false);
            $("#dc").attr("checked", "true");
            $("#place_area>ul>li:nth-child(5)").addClass("no-change");
            $("#back_train_date").removeClass().addClass("inp-txt");
            $("#back_train_date").attr("disabled", true)
        });
        $("#wf").click(function() {
            $("#dc").attr("checked", false);
            $("#wf").attr("checked", true);
            $("#back_train_date").removeAttr("disabled");
            $("#place_area>ul>li:nth-child(5)").removeClass();
            $("#train_date").removeClass().addClass("inp_selected");
            $("#back_train_date").removeClass().addClass("inp_selected");
            isbigdate = bd();
            if (!isbigdate) {
                train = $("#train_date").val();
                $("#back_train_date").val(train)
            }
            var bO = $("#train_date").val()
        })
    }
    function aH() {
        $("#avail_ticket").click(function() {
            $("#filterTic").attr("checked", false);
            ao()
        });
        $("#train_type_btn_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_type']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_type']").each(function() {
                    this.checked = false
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_type']").each(function() {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            }
            ao()
        });
        $("#start_time_btn_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                    this.checked = false
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            }
            ao()
        });
        $("#from_station_name_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                    this.checked = false;
                    g(bb, "cc_from_station_" + $(this).val())
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                    if (!this.checked) {
                        this.checked = true;
                        g(bb, "cc_from_station_" + $(this).val())
                    }
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            }
            ao()
        });
        $("#to_station_name_all").click(function() {
            var bO = true;
            $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                if (!this.checked) {
                    bO = false
                }
            });
            if (bO) {
                $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                    this.checked = false;
                    g(a0, "cc_to_station_" + $(this).val())
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                    if (!this.checked) {
                        this.checked = true;
                        g(a0, "cc_to_station_" + $(this).val())
                    }
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            }
            ao()
        })
    }
    function bs() {
        $("#change_station").bind("click", function() {
            var bS = $("#fromStationText").val();
            var bU = $("#fromStation").val();
            var bT = $("#toStationText").val();
            var bO = $("#toStation").val();
            if ((bS != "" && bS != "简拼/全拼/汉字") && (bT != "" && bT != "简拼/全拼/汉字")) {
                $("#fromStationText").val(bT);
                $("#toStationText").val(bS);
                $("#fromStation").val(bO);
                $("#toStation").val(bU);
                $("#fromStationText").removeClass().addClass("inp_selected");
                $("#toStationText").removeClass().addClass("inp_selected")
            } else {
                aO.checkForm();
                aO.hideErrors();
                var bR = aO.errorList;
                for (var bQ = 0; bQ < bR.length; bQ++) {
                    var bP = bR[bQ];
                    $(bP.element).next().addClass("error")
                }
                aO.checkForm()
            }
            bk()
        })
    }
    function bk() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#fromStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#fromStationText"))
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#toStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#toStationText"))
        }
    }
    function ba() {
        $("#show_more").click(function() {
            if ($("#sear-sel-bd").height() == 17) {
                ae();
                $("#show_more").attr("class", "up")
            } else {
                document.getElementById("sear-sel-bd").style.height = "17px";
                $("#show_more").attr("class", "down");
                $("#show_more").parent().css("top", "59px")
            }
        })
    }
    function j() {
        if ($("#sear-sel-bd").height() != 17) {
            ae()
        }
    }
    function ae() {
        var bQ = "17px";
        var bS = 179;
        var bR = 28;
        var bO = $("#sear-sel-bd input[name='cc_from_station']").length;
        var bT = $("#sear-sel-bd input[name='cc_to_station']").length;
        var bP = $("#sear-sel-bd input[name='cc_seat_type']").length;
        if (bO > 7 && bO <= 14) {
            bQ = (bS + bR) + "px"
        } else {
            if (bT > 7 && bO <= 14) {
                bQ = (bS + bR * 2) + "px"
            } else {
                if (bP > 7) {
                    bQ = (bS + bR) + "px"
                } else {
                    bQ = bS + "px"
                }
            }
        }
        document.getElementById("sear-sel-bd").style.height = bQ;
        $("#show_more").parent().css("top", "221px")
    }
    function c() {
        if (train_tour_flag == "fc" || train_tour_flag == "gc") {
            return
        }
        $.stationFor12306.init(["fromStation", "toStation"], {_init_input: "简拼/全拼/汉字",_top_4_initInput: "简拼/全拼/汉字或↑↓",_unselected_class: "inpt_unselected",_selected_class: "inp_selected",confirmCallBack: function(bO, bP) {
                bO.removeClass("error");
                if (bO.attr("id") == "fromStationText") {
                    if (ccSelected.length > 0) {
                        if (bO.val() != bo) {
                            $("#prior_train span:gt(0)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    bo = bO.val()
                }
                if (bO.attr("id") == "toStationText") {
                    if (ccSelected.length > 0) {
                        if (bO.val() != bB) {
                            $("#prior_train span:gt(0)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    bB = bO.val()
                }
            }});
        $("#fromStation_icon_image").css("cursor", "pointer");
        $("#toStation_icon_image").css("cursor", "pointer");
        $("#fromStationText_label").click(function() {
            $("#fromStationText").focus()
        });
        $("#toStationText_label").click(function() {
            $("#toStationText").focus()
        });
        $("#fromStation_icon_image").click(function() {
            $("#fromStationText").focus()
        });
        $("#toStation_icon_image").click(function() {
            $("#toStationText").focus()
        })
    }
    function bM() {
        aO = $("#queryLeftForm").validate({rules: {"leftTicketDTO.from_station": {required: true},"leftTicketDTO.to_station": {required: true},"leftTicketDTO.train_date": {required: true},back_train_date: {required: true}},ignore: "",onsubmit: false,onfocusout: function() {
            },onkeyup: function() {
            },onclick: function() {
            },highlight: function() {
            },unhighlight: function() {
            }});
        bj()
    }
    function b(bO) {
        dhtmlx.alert({title: "提示",ok: messages["button.ok"],text: bO,type: "alert-error",callback: function() {
            }})
    }
    function bh(bP, bV) {
        var bO = aO.checkForm();
        aO.hideErrors();
        if (bO) {
            var bU = "";
            if ($.trim($("#fromStation").val()) == $.trim($("#toStation").val()) || $.trim($("#fromStationText").val()) == $.trim($("#toStationText").val())) {
                bU = "出发地和目的地不能相同";
                b(bU);
                return false
            }
            if (!bd()) {
                bU = "返回日期不得早于出发日期";
                b(bU);
                return false
            }
            var bS = [];
            if (bV) {
                bS = stu_buy_date.split("&")
            } else {
                bS = other_buy_date.split("&")
            }
            if (bS.length > 0) {
                if (bP < bS[0] || bP > bS[1]) {
                    bU = "您选择的日期不在预售期范围内！";
                    b(bU);
                    return false
                }
            }
        } else {
            var bT = aO.errorList;
            for (var bR = 0; bR < bT.length; bR++) {
                var bQ = bT[bR];
                $(bQ.element).next().addClass("error")
            }
            return false
        }
        bF();
        return true
    }
    function bF() {
        $.jc_setFromStation($("#fromStationText").val(), $("#fromStation").val());
        $.jc_setToStation($("#toStationText").val(), $("#toStation").val());
        $.jc_setFromDate($("#train_date").val());
        $.jc_setToDate($("#back_train_date").val());
        $.jc_setWfOrDc($("#wf").is(":checked") ? "wf" : "dc")
    }
    function bj() {
        $("#query_ticket").click(function(bS) {
            if ($jpopup.isShow()) {
                $jpopup.quickHide()
            }
            if (myStopStation) {
                myStopStation.close()
            }
            if ($("#auto_query").is(":checked")) {
                var bR = $.trim($("#inp-train").val()).toUpperCase();
                if (bR.length != 0 && bR != "请输入") {
                    dhtmlx.alert({title: "输入车次",ok: "确定",text: "您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！",type: "alert-error",callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }});
                    return
                }
            }
            U();
            if (document.getElementById("autoSubmit").checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({title: "选择乘车人",ok: "确定",text: "请选择乘车人",type: "alert-error",callback: function() {
                            return
                        }});
                    return
                }
            }
            q = bL();
            var bP = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
            var bO = bh(bP, false);
            if (!bO) {
                return
            }
            var bQ = {"leftTicketDTO.train_date": bP,"leftTicketDTO.from_station": $("#fromStation").val(),"leftTicketDTO.to_station": $("#toStation").val(),purpose_codes: q};
            ay();
            V(bQ)
        })
    }
    var aS = function() {
        if ($("#filterTic").is(":checked")) {
            $("#avail_ticket").attr("checked", false);
            ar();
            if (bi.length != 0 && bi.length < aL.length) {
                $("#trainum").html(bi.length);
                ak(bi)
            }
        } else {
            bn = aP();
            if (bi.length != 0 && bi.length < bn.length) {
                $("#trainum").html(bn.length);
                ak(bn)
            }
        }
    };
    function V(bO) {
        $("#cc_seat_type_btn_all>ul>li").css("display", "none");
        if ($("#auto_query").is(":checked")) {
            $("#query_ticket").html("停止查询");
            $("#auto_query").attr("disabled", "true");
            $("#autoSubmit").attr("disabled", "true");
            $("#partSubmit").attr("disabled", "true");
            $("#query_ticket").unbind("click");
            $("#query_ticket").bind("click", function() {
                $("#filterTic").hide();
                clearInterval(aC);
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("");
                $("#query_ticket").unbind("click");
                $("#query_ticket").html("查询");
                if ($("#dc").is(":checked")) {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#auto_query").removeAttr("disabled");
                bj()
            })
        } else {
            if (countDown) {
                clearInterval(countDown)
            }
            $("#filterTicDiv").html("");
            bm()
        }
        var bP = dhtmlx.modalbox({targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',callback: function() {
            }});
        if ($jpopup.isShow()) {
            $jpopup.quickHide()
        }
        if (aC) {
            clearInterval(aC)
        }
        $.ajax({type: "get",isTakeParam: false,beforeSend: function(bQ) {
                bQ.setRequestHeader("If-Modified-Since", "0");
                bQ.setRequestHeader("Cache-Control", "no-cache")
            },url: ctx + "leftTicket/query",data: bO,timeout: 10000,error: function(bQ, bS, bR) {
                dhtmlx.modalbox.hide(bP)
            },success: function(bS) {
                dhtmlx.modalbox.hide(bP);
                if (bS.status) {
                    if (bS.data == null || bS.data.length == 0) {
                        $("#sear-sel").hide();
                        $("#sear-result").hide();
                        $("#t-list").hide();
                        $("#no_filter_ticket_fromstation").html($("#fromStationText").val());
                        $("#no_filter_ticket_tostation").html($("#toStationText").val());
                        $("#no_filter_ticket_2").show();
                        $(".content").css("min-height", "344px");
                        return
                    }
                    $("#sear-sel").show();
                    $("#sear-result").show();
                    $("#t-list").show();
                    $("#no_filter_ticket_2").hide();
                    if (train_tour_flag != null && train_tour_flag == "fc") {
                        var bR = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(an($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(bS.data.length).concat("</strong>个车次");
                        if ($("#auto_query").is(":checked")) {
                            var bQ = "";
                            for (var bT = 0; bT < 55; bT++) {
                                bQ = bQ + "&nbsp;"
                            }
                            bR = bR.concat(bQ + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(bR);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", aS)
                        }
                    } else {
                        var bR = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(an($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(bS.data.length).concat("</strong>个车次");
                        if ($("#auto_query").is(":checked")) {
                            var bQ = "";
                            for (var bT = 0; bT < 55; bT++) {
                                bQ = bQ + "&nbsp;"
                            }
                            bR = bR.concat(bQ + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(bR);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", aS)
                        }
                    }
                    aL = bS.data;
                    aY(aL);
                    j();
                    bf(aL);
                    bl();
                    C()
                }
            }});
        aB()
    }
    function P() {
        $("#date_range>ul>li").each(function(bS) {
            var bP = new Date();
            var bQ = bP.getFullYear() + "-" + $("#date_range>ul>li:nth-child(" + (bS + 1) + ")>span[class=hide]").text().substring(0, 5);
            var bO = new Date(Date.parse(bQ.replace(/-/g, "/")));
            var bR = $("#date_range>ul>li:nth-child(" + (bS + 1) + ")>span[class=hide]").text().substring(0, 5) + aW(bO);
            $("#date_range>ul>li:nth-child(" + (bS + 1) + ")>span[class=hide]").text(bR)
        });
        if (index_train_date == null) {
            $("#date_range>ul>li:nth-child(1)").addClass("sel");
            $("#date_range>ul>li:nth-child(1)").attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").addClass("hide");
            bq = $("#date_range>ul>li:nth-child(1)").children("span:first-child").text()
        }
        aU()
    }
    function aW(bP) {
        var bS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var bR = 0;
        for (var bQ = 0; bQ < bS.length; bQ++) {
            if (bP.toString().indexOf(bS[bQ]) > -1) {
                bR = bQ + 1;
                break
            }
        }
        var bO = "";
        switch (bR) {
            case 1:
                bO = " 周一";
                break;
            case 2:
                bO = " 周二";
                break;
            case 3:
                bO = " 周三";
                break;
            case 4:
                bO = " 周四";
                break;
            case 5:
                bO = " 周五";
                break;
            case 6:
                bO = " 周六";
                break;
            case 7:
                bO = " 周日";
                break
        }
        return bO
    }
    function aX() {
        $("#date_range>ul>li").unbind("mouseover");
        $("#date_range>ul>li").unbind("mouseout");
        $("#date_range").unbind("mouseleave");
        $("#date_range>ul>li").unbind("click")
    }
    function aU() {
        $("#date_range>ul>li").bind("mouseover", function() {
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide")
        });
        $("#date_range>ul>li").bind("mouseout", function() {
            $("#date_range>ul>li").each(function(bO) {
                $(this).children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                $(this).children("span:last").addClass("hide")
            })
        });
        $("#date_range").bind("mouseleave", function() {
            for (var bO = 1; bO <= 20; bO++) {
                var bP = $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").text();
                if (bq == bP) {
                    $("#date_range>ul>li").removeClass("sel");
                    $("#date_range>ul>li").removeAttr("alt");
                    $("#date_range>ul>li:nth-child(" + bO + ")").addClass("sel");
                    $("#date_range>ul>li:nth-child(" + bO + ")").attr("alt", "show");
                    $("#date_range>ul>li:nth-child(20)").addClass("end");
                    $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + bO + ")").children("span:last-child").removeClass();
                    $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                    $("#date_range>ul>li:nth-child(" + bO + ")").children("span:first-child").addClass("hide");
                    break
                }
            }
        });
        $("#date_range>ul>li").bind("click", function() {
            var bQ = new Date();
            var bP = "";
            if (train_tour_flag != null && train_tour_flag == "fc") {
                nowDate = $("#back_train_date").val();
                $("#back_train_date").val(bQ.getFullYear() + "-" + $(this).children("span:first-child").text());
                backTrainDate = bQ.getFullYear() + "-" + $(this).children("span:first-child").text();
                bP = backTrainDate;
                if (!bd()) {
                    $("#back_train_date").val(nowDate);
                    b("返程日期不得小于出发日期.");
                    return
                }
            } else {
                nowDate = $("#train_date").val();
                $("#train_date").val(bQ.getFullYear() + "-" + $(this).children("span:first-child").text());
                trainDate = bQ.getFullYear() + "-" + $(this).children("span:first-child").text();
                bP = trainDate;
                if (!bd()) {
                    $("#back_train_date").val($("#train_date").val())
                }
            }
            var bO = bh(bP, false);
            if (!bO) {
                return
            }
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide");
            bq = $(this).children("span:first-child").text();
            var bR = {"leftTicketDTO.train_date": bP,"leftTicketDTO.from_station": $("#fromStation").val(),"leftTicketDTO.to_station": $("#toStation").val(),purpose_codes: bL()};
            V(bR)
        })
    }
    function a5() {
        $("#sear-sel-bd input[name='cc_type']").click(function() {
            var bO = $("input[name='cc_type']");
            var bP = $("input[name='cc_type']:checked");
            if ($(this).is(":checked")) {
                if (bO && bP && bP.length == bO.length) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bO && bP && bP.length == 0) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#sear-sel-bd input[name='cc_start_time']").click(function() {
            var bO = $("input[name='cc_start_time']");
            var bP = $("input[name='cc_start_time']:checked");
            if ($(this).is(":checked")) {
                if (bO && bP && bP.length == bO.length) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bO && bP && bP.length == 0) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#sear-sel-bd input[name='cc_arrive_time']").click(function() {
            var bO = $("input[name='cc_arrive_time']");
            var bP = $("input[name='cc_arrive_time']:checked");
            if ($(this).is(":checked")) {
                if (bO && bP && bP.length == bO.length) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bO && bP && bP.length == 0) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#cc_start_time").change(function() {
            ao()
        })
    }
    function H(bQ, bP) {
        if (bP.length == 0) {
            return true
        }
        for (var bO = 0; bO < bP.length; bO++) {
            if (bQ.queryLeftNewDTO.station_train_code.substring(0, 1) == bP[bO]) {
                return true
            }
            if (bP[bO] == "QT") {
                if (bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "G" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "D" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "C" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "T" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "K" && bQ.queryLeftNewDTO.station_train_code.substring(0, 1) != "Z") {
                    return true
                }
            }
            if (bP[bO] == "G") {
                if (bQ.queryLeftNewDTO.station_train_code.substring(0, 1) == "C" || bQ.queryLeftNewDTO.station_train_code.substring(0, 1) == "G") {
                    return true
                }
            }
        }
        return false
    }
    function ap(bR, bT) {
        if (bT.length == 0) {
            return true
        }
        for (var bO = 0; bO < bT.length; bO++) {
            var bS = (bR.queryLeftNewDTO.start_time.replace(":", ""));
            var bP = Number(bT[bO].substring(0, 4));
            var bQ = Number(bT[bO].substring(4, 8));
            if (bS >= bP && bS <= bQ) {
                return true
            }
        }
        return false
    }
    function aw(bQ, bO) {
        if (bO.length == 0) {
            return true
        }
        for (var bP = 0; bP < bO.length; bP++) {
            if (bO[bP] == "SWZ") {
                if (bQ.queryLeftNewDTO.swz_num != "--" && bQ.queryLeftNewDTO.swz_num != "无") {
                    am.push("SWZ");
                    return true
                }
            }
            if (bO[bP] == "TZ") {
                if (bQ.queryLeftNewDTO.tz_num != "--" && bQ.queryLeftNewDTO.tz_num != "无") {
                    am.push("TZ");
                    return true
                }
            }
            if (bO[bP] == "ZY") {
                if (bQ.queryLeftNewDTO.zy_num != "--" && bQ.queryLeftNewDTO.zy_num != "无") {
                    am.push("ZY");
                    return true
                }
            }
            if (bO[bP] == "ZE") {
                if (bQ.queryLeftNewDTO.ze_num != "--" && bQ.queryLeftNewDTO.ze_num != "无") {
                    am.push("ZE");
                    return true
                }
            }
            if (bO[bP] == "GR") {
                if (bQ.queryLeftNewDTO.gr_num != "--" && bQ.queryLeftNewDTO.gr_num != "无") {
                    am.push("GR");
                    return true
                }
            }
            if (bO[bP] == "RW") {
                if (bQ.queryLeftNewDTO.rw_num != "--" && bQ.queryLeftNewDTO.rw_num != "无") {
                    am.push("RW");
                    return true
                }
            }
            if (bO[bP] == "YW") {
                if (bQ.queryLeftNewDTO.yw_num != "--" && bQ.queryLeftNewDTO.yw_num != "无") {
                    am.push("YW");
                    return true
                }
            }
            if (bO[bP] == "RZ") {
                if (bQ.queryLeftNewDTO.rz_num != "--" && bQ.queryLeftNewDTO.rz_num != "无") {
                    am.push("RZ");
                    return true
                }
            }
            if (bO[bP] == "YZ") {
                if (bQ.queryLeftNewDTO.yz_num != "--" && bQ.queryLeftNewDTO.yz_num != "无") {
                    am.push("YZ");
                    return true
                }
            }
            if (bO[bP] == "WZ") {
                if (bQ.queryLeftNewDTO.wz_num != "--" && bQ.queryLeftNewDTO.wz_num != "无") {
                    am.push("WZ");
                    return true
                }
            }
        }
        return false
    }
    function aK(bP, bO) {
        if (bO.length == 0) {
            return true
        }
        for (var bQ = 0; bQ < bO.length; bQ++) {
            if (bO[bQ] == bP.queryLeftNewDTO.from_station_name) {
                return true
            }
        }
        return false
    }
    function K(bO, bP) {
        if (bP.length == 0) {
            return true
        }
        for (var bQ = 0; bQ < bP.length; bQ++) {
            if (bP[bQ] == bO.queryLeftNewDTO.to_station_name) {
                return true
            }
        }
        return false
    }
    function p(bP, bO) {
        if (bO.length == 0) {
            return true
        }
        for (var bQ = 0; bQ < bO.length; bQ++) {
            if (bO[bQ].toLowerCase() == bP.queryLeftNewDTO.station_train_code.toLowerCase()) {
                return true
            }
        }
        return false
    }
    function aP() {
        var bP = [];
        var bV = [];
        var bR = [];
        var bT = [];
        $("#sear-sel-bd input[name='cc_type']").each(function() {
            if (this.checked == true) {
                bP.push($(this).val())
            }
        });
        bV.push($("#cc_start_time option:selected").val());
        $("#sear-sel-bd input[name='cc_from_station']").each(function() {
            if (this.checked == true) {
                bR.push($(this).val())
            }
        });
        $("#sear-sel-bd input[name='cc_to_station']").each(function() {
            if (this.checked == true) {
                bT.push($(this).val())
            }
        });
        var bQ = aL;
        var bU = [];
        if (bP.length > 0 || bV.length > 0 || filteredTrainArriveTime.length > 0 || bp.length > 0 || bR.length > 0 || bT.length > 0 || ah.getComboText() != "" || $("#avail_ticket")[0].checked) {
            for (var bO = 0; bO < bQ.length; bO++) {
                var bS = bQ[bO];
                if (!H(bS, bP)) {
                    continue
                }
                if (!ap(bS, bV)) {
                    continue
                }
                if (!aK(bS, bR)) {
                    continue
                }
                if (!K(bS, bT)) {
                    continue
                }
                if ($("#avail_ticket")[0].checked) {
                    if (bS.queryLeftNewDTO.canWebBuy == "Y") {
                        bU.push(bS)
                    }
                } else {
                    bU.push(bS)
                }
            }
            bQ = bU
        }
        return bQ
    }
    function z(bO, bP) {
        if (bP == null || bP == "" || bO.length == 0 || bP.length > bO.length) {
            return false
        }
        if (bO.substr(0, bP.length) == bP) {
            return true
        } else {
            return false
        }
        return true
    }
    function aI(bO) {
        aR = ccSelected;
        bp = xbChecked;
        if (p(bO, aR) && aw(bO, bp)) {
            return true
        } else {
            return false
        }
    }
    function ar() {
        bi = [];
        bn = aP();
        bv = br(bn);
        for (var bO = 0; bO < bv.length; bO++) {
            var bP = bv[bO];
            if (!aI(bP)) {
                continue
            }
            if (bP.queryLeftNewDTO.canWebBuy == "Y") {
                bi.push(bP)
            }
        }
    }
    var a8;
    function be() {
        if (ischeckAutoSubmitCode) {
            $("#randCode2").on("keyup", function(bO) {
                if ($("#randCode2").val().length == 4 && a8 != $("#randCode2").val()) {
                    $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: $("#randCode2").val(),rand: "sjrand"},async: false,success: function(bP) {
                            if (bP.data == "N") {
                                $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                                $("#c_error2").html("验证码不合法");
                                $("#randCode2").val("");
                                $("#c_error2").addClass("error");
                                $("#i-ok2").css("display", "none");
                                $("#c_error2").css("margin-left", "15px")
                            } else {
                                $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                                $("#i-ok2").css("display", "block");
                                $("#c_error2").html("");
                                $("#c_error2").removeClass("error")
                            }
                        }})
                } else {
                    if ($("#randCode2").val().length != 4) {
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html("请输入四位长度验证码");
                        $("#c_error2").addClass("error");
                        $("#i-ok2").css("display", "none");
                        $("#c_error2").css("margin-left", "15px")
                    }
                }
                a8 = $("#randCode2").val()
            })
        }
    }
    function W(bO) {
        return at.autoSubmit(bi, passengerChecked, xbChecked, ccSelected)
    }
    var au = false;
    function C() {
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        ar();
        if ($("#auto_query").is(":checked")) {
            if (bv.length < 0) {
                $("#no_filter_ticket").show();
                $("#trainum").html("0");
                au = true
            } else {
                if (bi.length > 0) {
                    $("#no_filter_ticket").hide();
                    if (document.getElementById("autoSubmit").checked) {
                        var bS = [];
                        for (var bY = 0; bY < passengerChecked.length; bY++) {
                            var bR = false;
                            var bV = passengerChecked[bY];
                            for (var bZ = 0; bZ < bS.length; bZ++) {
                                var bP = bS[bZ];
                                if (bV.passenger_name == bP.passenger_name && bV.passenger_id_type_code == bP.passenger_id_type_code && bV.passenger_id_no == bP.passenger_id_no) {
                                    bR = true;
                                    break
                                }
                            }
                            if (!bR) {
                                bS.push(bV)
                            }
                        }
                        passengerChecked = bS;
                        var b4 = W(true);
                        if (b4[0] == 1 || b4[0] == 2) {
                            au = true;
                            B = b4[1];
                            var bX = bL();
                            var b1 = B.secretStr;
                            h(b4);
                            var b0 = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
                            var bO = "";
                            if ($("#dc").is(":checked")) {
                                bO = "dc"
                            } else {
                                bO = "wc"
                            }
                            if ("undefined" == typeof (submitForm)) {
                                var b5 = "secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bX + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + b0 + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            } else {
                                var bQ = submitForm();
                                var bW = bQ.split(":::");
                                var b3 = bW[0].split(",-,")[0];
                                var bU = bW[0].split(",-,")[1];
                                var b2 = bW[1].split(",-,")[0];
                                var bT = bW[1].split(",-,")[1];
                                var b5 = escape(b3) + "=" + escape(bU) + "&" + b2 + "=" + bT + "&secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bX + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + b0 + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            }
                            $.ajax({type: "post",url: ctx + "confirmPassenger/autoSubmitOrderRequest",async: false,data: b5,success: function(b7) {
                                    if (b7.status) {
                                        if (!b7.data.submitStatus) {
                                            if (b7.data.isRelogin) {
                                                window.location.href = ctx + "login/init?random=" + new Date().getTime()
                                            } else {
                                                if (b7.data.isNoActive) {
                                                    Q(b7.data.errMsg, true, "", true, "warn")
                                                } else {
                                                    Q("车票信息不合法!", true, "原因： " + b7.data.errMsg, true, "warn")
                                                }
                                            }
                                            return
                                        }
                                        if (b7.data && undefined != b7.data.result && typeof (b7.data.result) != "undefined") {
                                            var b6 = b7.data.result;
                                            location_code = b6.split("#")[0];
                                            md5Str = b6.split("#")[1];
                                            leftTicketStr = b6.split("#")[2];
                                            isAsync = b6.split("#")[3];
                                            a2(bX, b7.data.isCheckOrderInfo, b7.data.doneHMD)
                                        }
                                    }
                                }})
                        } else {
                            au = false;
                            D()
                        }
                    } else {
                        au = true
                    }
                } else {
                    au = false;
                    D()
                }
                $("#trainum").html(bv.length);
                ak(bv)
            }
        } else {
            if (bv.length < 0) {
                au = true;
                $("#no_filter_ticket").show();
                $("#no_filter_ticket_msg_1").show();
                $("#no_filter_ticket_msg_2").hide();
                $("#trainum").html("0");
                return
            } else {
                au = true;
                $("#trainum").html(bv.length);
                ak(bv)
            }
        }
    }
    var F = 0;
    var aC;
    function D() {
        var bO;
        if (rqChecked.length > 1) {
            if (F >= rqChecked.length) {
                F = 0
            }
            bO = rqChecked[F++]
        } else {
            if (train_tour_flag == "fc") {
                bO = $.trim($("#back_train_date").val())
            } else {
                bO = $.trim($("#train_date").val())
            }
        }
        clearInterval(aC);
        aC = window.setInterval(function() {
            if (train_tour_flag == "fc") {
                $("#back_train_date").val(bO)
            } else {
                $("#train_date").val(bO)
            }
            var bP = {"leftTicketDTO.train_date": bO,"leftTicketDTO.from_station": $("#fromStation").val(),"leftTicketDTO.to_station": $("#toStation").val(),purpose_codes: bL()};
            ay();
            V(bP)
        }, autoSearchTime)
    }
    function bt() {
        ag();
        bJ(tickets_info);
        $("#i-ok2").hide();
        refreshImg("login", "sjrand", "img_rand_code2");
        $("#randCode2").val("");
        $("#c_error2").val("");
        $("#c_error2").removeClass("error");
        var bO = dhtmlx.createWin({winId: "autosubmitcheckticketinfo",closeWinId: ["back_edit"],callback: function() {
                jPlayer("stop")
            },okId: "qr_submit",okCallBack: function() {
                jPlayer("stop");
                $.ajax({url: ctx + "confirmPassenger/checkRandCode",type: "post",data: {randCode: $("#randCode2").val(),rand: "sjrand"},async: false,success: function(bP) {
                        if (bP.status) {
                            if (!bP.data.submitStatus) {
                                Q("提交失败!", true, "原因： " + bP.data.errMsg, true, "warn");
                                return
                            }
                            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                                m()
                            } else {
                                bN()
                            }
                        }
                    }})
            },checkConfirm: function() {
                if (!ischeckAutoSubmitCode) {
                    return true
                }
                randCode = $("#randCode2").val();
                var bP = true;
                if ("" == randCode) {
                    bP = false;
                    $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                    $("#c_error2").html(login_messages.randCodeEmpty).attr("class", "error").css("margin-left", "60px");
                    $("#randCode2").focus()
                } else {
                    if (!/^[a-zA-Z0-9]+$/.test(randCode)) {
                        bP = false;
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html(login_messages.randCodeFormat).attr("class", "error").css("margin-left", "60px");
                        $("#randCode2").focus()
                    } else {
                        if (randCode.length != 4) {
                            bP = false;
                            $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                            $("#c_error2").html(login_messages.randCodeLentgh).attr("class", "error").css("margin-left", "60px");
                            $("#randCode2").focus()
                        }
                    }
                }
                $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: randCode,rand: "sjrand"},async: false,success: function(bQ) {
                        if (bQ.data == "N") {
                            bP = false;
                            $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                            $("#c_error2").html("验证码不合法");
                            $("#randCode2").val("");
                            $("#c_error2").addClass("error");
                            $("#i-ok2").css("display", "none")
                        } else {
                            bP = true;
                            $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                            $("#i-ok2").css("display", "block");
                            $("#c_error2").html("");
                            $("#c_error2").removeClass("error")
                        }
                    }});
                if (!bP) {
                    refreshImg("login", "sjrand", "img_rand_code2");
                    $("#randCode2").focus();
                    $("#c_error2").css("margin-left", "15px")
                }
                return bP
            }});
        $("#autosubmitcheckticketinfo").css("top", "100px");
        $(".dhx_modal_cover").css("background-color", "#EEEEEE")
    }
    function ao() {
        if (aL.length == 0) {
            return
        }
        var bO = aP();
        var bP = br(bO);
        $("#train_stop").appendTo($("body")).hide();
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        if (bP.length > 0) {
            $("#no_filter_ticket").hide();
            $("#trainum").html(bP.length)
        } else {
            $("#no_filter_ticket").show();
            $("#no_filter_ticket_msg_1").show();
            $("#no_filter_ticket_msg_2").hide();
            $("#trainum").html("0");
            return
        }
        ak(bP)
    }
    function a6(bP) {
        var bO = bD.createWindow(bP + "_", 0, 0, 660, 100);
        bO.attachObject(bP);
        bO.clearIcon();
        bO.denyResize();
        bO.setModal(true);
        bO.center();
        bO.button("park").hide();
        bO.button("minmax1").hide();
        bO.hideHeader();
        return bO
    }
    function ag() {
        var bT = new Array();
        $("#autosubmit_check_ticket_tit").html("");
        var bR = $("#train_date").val();
        var bO = aW(new Date(Date.parse(bR.replace(/-/g, "/"))));
        var bP = B.queryLeftNewDTO.station_train_code;
        var bY = null;
        var bZ = B.queryLeftNewDTO.from_station_name;
        var bS = B.queryLeftNewDTO.to_station_name;
        var bU = B.queryLeftNewDTO.start_time;
        var bX = B.queryLeftNewDTO.arrive_time;
        var bW = function(b1, b3, b0, b5, b2, b4, b7, b6) {
            this.date = b1;
            this.week = b3;
            this.station_train_code = b0;
            this.train_headers = b5;
            this.from_station = b2;
            this.start_time = b4;
            this.to_station = b7;
            this.arrive_time = b6
        };
        var bQ = new bW(bR, bO, bP, bY, bZ, bU, bS, bX);
        bT.push(bQ);
        var bV = $("#autoSubTicketTitTemplate").html();
        $.templates({leftTableTemplate: bV});
        $("#autosubmit_check_ticket_tit").html($.render.leftTableTemplate(bT))
    }
    function h(bZ) {
        if (aC) {
            clearInterval(aC)
        }
        var bO = "";
        var bP = "";
        var bU = "";
        var bQ = "";
        if ($("#sf2").is(":checked")) {
            bU = "3";
            bQ = "学生票"
        }
        tickets_info = new Array();
        var b0 = bZ[1];
        var bT = bZ[2];
        var bS = 0;
        var bR = passengerChecked.length;
        for (var bV = 0; bV < bT.length; bV++) {
            var bX = b0.queryLeftNewDTO[bT[bV].toLowerCase() + "_num"];
            if (bX == "--" || bX == "无") {
                bX = 0
            } else {
                if (bX == "有") {
                    bX = 20
                } else {
                    bX = Number(bX)
                }
            }
            if (bS >= bR) {
                break
            }
            var bY = bT[bV];
            bO = af(bY);
            bP = A(bY);
            for (var bW = 0; bW < bX; bW++) {
                if (bS >= bR) {
                    break
                }
                bU = passengerChecked[bW].passenger_type;
                if (!bU || "" == bU) {
                    bU = "1"
                }
                if (bU == "1") {
                    bQ = "成人票"
                } else {
                    if (bU == "2") {
                        bQ = "儿童票"
                    } else {
                        if (bU == "3") {
                            bQ = "学生票"
                        } else {
                            if (bU == "4") {
                                bQ = "残军票"
                            }
                        }
                    }
                }
                tickets_info.push(new aM("sdAdd_" + X(), bO, bP, bU, bQ, passengerChecked[bS].passenger_name, passengerChecked[bS].passenger_id_type_code, passengerChecked[bS].passenger_id_type_name, passengerChecked[bS].passenger_id_no, passengerChecked[bS].mobile_no));
                bS++
            }
        }
    }
    function bJ(bP) {
        var bO = $("#autoSubCheckTicketInfoTemplate").html();
        $.templates({leftTableTemplate: bO});
        $("#autosubmit_check_ticketInfo").html($.render.leftTableTemplate(bP))
    }
    function f() {
        var bR = B.queryLeftNewDTO.yz_num;
        var bO = B.queryLeftNewDTO.rz_num;
        var bV = B.queryLeftNewDTO.yw_num;
        var bT = B.queryLeftNewDTO.rw_num;
        var bU = B.queryLeftNewDTO.gr_num;
        var bS = B.queryLeftNewDTO.ze_num;
        var bX = B.queryLeftNewDTO.zy_num;
        var bY = B.queryLeftNewDTO.tz_num;
        var bP = B.queryLeftNewDTO.swz_num;
        var bW = B.queryLeftNewDTO.wz_num;
        var bQ = "";
        if (bR != "--") {
            bQ = "YZ";
            return bQ
        }
        if (bS != "--") {
            bQ = "ZE";
            return bQ
        }
        if (bV != "--") {
            bQ = "YW";
            return bQ
        }
        if (bX != "--") {
            bQ = "ZY";
            return bQ
        }
        if (bO != "--") {
            bQ = "RZ";
            return bQ
        }
        if (bT != "--") {
            bQ = "RW";
            return bQ
        }
        if (bY != "--") {
            bQ = "TZ";
            return bQ
        }
        if (bU != "--") {
            bQ = "GR";
            return bQ
        }
        if (bP != "--") {
            bQ = "SWZ";
            return bQ
        }
        if (bW != "--") {
            bQ = "WZ";
            return bQ
        }
    }
    function A(bP) {
        var bO = "";
        if (bP == "ZY") {
            bO = "一等座"
        }
        if (bP == "ZE") {
            bO = "二等座"
        }
        if (bP == "SWZ") {
            bO = "商务座"
        }
        if (bP == "TZ") {
            bO = "特等座"
        }
        if (bP == "YZ") {
            bO = "硬座"
        }
        if (bP == "RZ") {
            bO = "软座"
        }
        if (bP == "YW") {
            bO = "硬卧"
        }
        if (bP == "RW") {
            bO = "软卧"
        }
        if (bP == "GR") {
            bO = "高级软卧"
        }
        if (bP == "WZ") {
            bO = "无座"
        }
        return bO
    }
    function af(bP) {
        var bO = "";
        if (bP == "ZY") {
            bO = "M"
        }
        if (bP == "ZE") {
            bO = "O"
        }
        if (bP == "SWZ") {
            bO = "9"
        }
        if (bP == "TZ") {
            bO = "P"
        }
        if (bP == "YZ") {
            bO = "1"
        }
        if (bP == "RZ") {
            bO = "2"
        }
        if (bP == "YW") {
            bO = "3"
        }
        if (bP == "RW") {
            bO = "4"
        }
        if (bP == "GR") {
            bO = "6"
        }
        if (bP == "WZ") {
            bO = "WZ"
        }
        return bO
    }
    function aM(bV, bQ, bR, bT, bS, bP, bX, bW, bU, bO) {
        this.only_id = bV, this.seat_type = bQ;
        this.seat_type_name = bR;
        this.ticket_type = bT, this.ticket_type_name = bS;
        this.name = bP;
        this.id_type = bX;
        this.id_type_name = bW;
        this.id_no = bU;
        this.phone_no = bO;
        this.toString = function() {
            return this.name + "_" + this.id_type + "_" + this.id_no + "_" + this.phone_no
        }
    }
    function X() {
        if (tickets_info.length < 1) {
            return tickets_info.length
        } else {
            var bQ = 0;
            for (var bP = 0; bP < tickets_info.length; bP++) {
                var bO = Number(tickets_info[bP].only_id.split("_")[1]);
                if (bO > bQ) {
                    bQ = bO
                }
            }
            return bQ + 1
        }
    }
    function aB() {
        bi = [];
        L = [];
        am = [];
        tickets_info.length = [];
        bn = [];
        bv = [];
        B = "";
        isAsync = "";
        location_code = "";
        md5Str = "";
        leftTicketStr = ""
    }
    getpassengerTicketsForAutoSubmit = function() {
        var bO = "";
        for (var bP = 0; bP < tickets_info.length; bP++) {
            var bQ = "";
            if ("WZ" == tickets_info[bP].seat_type) {
                bQ = af(f())
            } else {
                bQ = tickets_info[bP].seat_type
            }
            var bR = bQ + ",0," + tickets_info[bP].ticket_type + "," + tickets_info[bP].name + "," + tickets_info[bP].id_type + "," + tickets_info[bP].id_no + "," + (tickets_info[bP].phone_no == null ? "" : tickets_info[bP].phone_no) + ",N";
            bO += bR + "_"
        }
        return bO.substring(0, bO.length - 1)
    };
    getOldPassengersForAutoSubmit = function() {
        var bQ = "";
        for (var bP = 0; bP < passengerChecked.length; bP++) {
            var bO = passengerChecked[bP].passenger_name + "," + passengerChecked[bP].passenger_id_type_code + "," + passengerChecked[bP].passenger_id_no + "," + passengerChecked[bP].passenger_type;
            bQ += bO + "_"
        }
        return bQ
    };
    function a2(bO, bP) {
        var bS = "";
        var bQ = $("#train_date").val().split("-");
        var bR = new Date();
        bR.setFullYear(bQ[0], bQ[1] - 1, bQ[2]);
        if (isAsync == ticket_submit_order.request_flag.isAsync && leftTicketStr != "") {
            $.ajax({url: ctx + "confirmPassenger/getQueueCount",type: "post",async: false,data: {train_date: bR.toString(),train_no: B.queryLeftNewDTO.train_no,stationTrainCode: B.queryLeftNewDTO.station_train_code,seatType: tickets_info[0].seat_type,fromStationTelecode: B.queryLeftNewDTO.from_station_telecode,toStationTelecode: B.queryLeftNewDTO.to_station_telecode,leftTicket: leftTicketStr,purpose_codes: bO,isCheckOrderInfo: bP},dataType: "json",success: function(bT) {
                    if (bT.status) {
                        if (bT.data.isRelogin == "Y") {
                            window.location.href = ctx + "login/init?random=" + new Date().getTime()
                        }
                        var bU = a3(bT.data.ticket, tickets_info[0].seat_type).split(",");
                        bS = "本次列车，剩余" + (tickets_info[0].seat_type_name).split("（")[0] + "<strong>" + bU[0] + "</strong>张";
                        if (bU.length > 1) {
                            bS += ",无座<strong>" + bU[1] + "</strong>张"
                        }
                        bS += "。";
                        if (bT.data.op_2 == "true") {
                            bS += "目前排队人数已经超过余票张数，请您选择其他席别或车次。"
                        } else {
                            if (bT.data.countT > 0) {
                                bS += '目前排队人数<font color="red">' + bT.data.countT + "</font>人，"
                            }
                        }
                        bS += "<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。";
                        var bV = $("#sy_ticket_num_id");
                        if (bV != null) {
                            bV.html(bS)
                        }
                        bt()
                    }
                },error: function(bT, bV, bU) {
                    return
                }})
        } else {
            bt()
        }
    }
    function a3(bP, bO) {
        rt = "";
        seat_1 = -1;
        seat_2 = -1;
        i = 0;
        while (i < bP.length) {
            s = bP.substr(i, 10);
            c_seat = s.substr(0, 1);
            if (c_seat == bO) {
                count = s.substr(6, 4);
                while (count.length > 1 && count.substr(0, 1) == "0") {
                    count = count.substr(1, count.length)
                }
                count = parseInt(count);
                if (count < 3000) {
                    seat_1 = count
                } else {
                    seat_2 = (count - 3000)
                }
            }
            i = i + 10
        }
        if (seat_1 > -1) {
            rt += seat_1
        }
        if (seat_2 > -1) {
            rt += "," + seat_2
        }
        return rt
    }
    function bN() {
        $.ajax({url: ctx + "confirmPassenger/confirmSingle",type: "post",data: {passengerTicketStr: getpassengerTicketsForAutoSubmit(),oldPassengerStr: getOldPassengersForAutoSubmit(),tour_flag: "dc",randCode: $("#randCode").val(),purpose_codes: bL(),key_check_isChange: md5Str,train_location: location_code},dataType: "json",async: true,success: function(bO) {
                if (bO.status) {
                    if (bO.data.submitStatus) {
                        otsRedirect("post", ctx + "payOrder/init?random=" + new Date().getTime(), {})
                    } else {
                        Q("出票失败!", false, "原因： " + bO.data.errMsg + '<a  id="xg_close_win_id">点击修改</a>', false, "lose");
                        $("#xg_close_win_id").click(function() {
                            S("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    }
                } else {
                    Q("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },error: function(bO, bQ, bP) {
                Q("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }})
    }
    function m() {
        $.ajax({url: ctx + "confirmPassenger/confirmSingleForQueue",type: "post",data: {passengerTicketStr: getpassengerTicketsForAutoSubmit(),oldPassengerStr: getOldPassengersForAutoSubmit(),randCode: $("#randCode").val(),purpose_codes: bL(),key_check_isChange: md5Str,leftTicketStr: leftTicketStr,train_location: location_code},dataType: "json",async: true,success: function(bO) {
                if (bO.status) {
                    if (!bO.data.submitStatus) {
                        Q("出票失败!", false, "原因： " + bO.data.errMsg + '<a id="xg_close_win_id" >点击修改</a>', false, "lose");
                        $("#xg_close_win_id").click(function() {
                            S("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    } else {
                        var bP = new OrderQueueWaitTime("dc", Y, n);
                        bP.start()
                    }
                } else {
                    Q("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },error: function(bO, bQ, bP) {
                Q("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }})
    }
    function Y(bO, bQ, bP) {
        if (bQ <= 5) {
            Q("订单已经提交，系统正在处理中，请稍等。", false, "", false, "work")
        } else {
            if (bQ > 30 * 60) {
                Q("订单已经提交，预计等待时间超过30分钟，请耐心等待。", false, "", false, "queue")
            } else {
                Q("订单已经提交，最新预估等待时间" + bP + "，请耐心等待。", false, "", false, "queue")
            }
        }
    }
    function n(bO, bQ, bP) {
        if (bQ == -1) {
            $.ajax({url: ctx + "confirmPassenger/resultOrderForDcQueue",data: {orderSequence_no: bP.orderId},type: "POST",dataType: "json",success: function(bR) {
                    if (bR.status) {
                        if (bR.data.submitStatus) {
                            otsRedirect("post", ctx + "/payOrder/init?random=" + new Date().getTime(), {})
                        } else {
                            Q("下单成功", false, "", false, "win")
                        }
                    } else {
                        Q("下单成功。", false, "", false, "win")
                    }
                },error: function(bR, bT, bS) {
                    Q("下单成功。", false, "", false, "win")
                }})
        } else {
            bg(bQ, bP)
        }
    }
    function bg(bO, bP) {
        if (bO == -1) {
            return
        } else {
            if (bO == -2) {
                if (bP.errorcode == 0) {
                    Q("订票失败!", true, "原因： " + bP.msg, false, "lose")
                } else {
                    Q("订票失败!", true, "原因： " + bP.msg, false, "lose")
                }
            } else {
                if (bO == -3) {
                    Q("哎呀,订票失败!", true, "订单已撤销", false, "lose")
                } else {
                    window.location.href = ctx + "queryOrder/initNoComplete?random=" + new Date().getTime()
                }
            }
        }
    }
    function I() {
        bI = new dhtmlXWindows();
        bI.enableAutoViewport(true);
        bI.setSkin("dhx_terrace");
        bI.setImagePath(ctx + "resources/js/rich/windows/imgs/");
        S = function(bS, bR) {
            unLoadGrayBackground();
            if (bI.isWindow(bS + "_")) {
                bI.window(bS + "_").setModal(false);
                bI.window(bS + "_").hide()
            }
        };
        Q = function(bY, bV, bS, bR, bU) {
            var bX = '<div class="tit">' + (bV ? '<span class="colorC">' + bY + "</span>" : bY) + "</div>";
            var bT = "<P>" + bS + "</p>";
            var bW = bV ? '<p>请点击[<a href="' + ctx + 'queryOrder/init"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="' + ctx + 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>' : '<P>查看订单处理情况，请点击“<a href="' + ctx + 'queryOrder/initNoComplete">未完成订单</a>”</P>';
            $("#iamge_status_id").removeClass().addClass("icon i-" + bU);
            if (bR) {
                $("#up-box-hd_id").html("提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>");
                bW = "";
                $("#lay-btn_id").html("<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>")
            } else {
                $("#up-box-hd_id").html("提示");
                $("#lay-btn_id").html("")
            }
            $("#orderResultInfo_id").html(bX + (bS == "" || bS == null || bS == "undefined" || bS == undefined ? "" : bT) + bW);
            bO("transforNotice_id");
            if (bR) {
                $("#closeTranforDialog_id").click(function() {
                    S("transforNotice_id", true)
                });
                $("#qr_closeTranforDialog_id").click(function() {
                    S("transforNotice_id", true);
                    $("#i-ok").css("display", "none")
                })
            }
        };
        function bO(bV) {
            S(bV, false);
            if ("checkticketinfo_id" == bV) {
                var bT = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
                if (bT.to_station_telecode == ticket_submit_order.special_areas.lso || bT.to_station_telecode == ticket_submit_order.special_areas.dao || bT.to_station_telecode == ticket_submit_order.special_areas.ado || bT.to_station_telecode == ticket_submit_order.special_areas.nqo || bT.to_station_telecode == ticket_submit_order.special_areas.tho) {
                    if (bP()) {
                        $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                        $("#notice_2_id").html("2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。");
                        if (bQ()) {
                            $("#notice_3_id").html("3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                        } else {
                            $("#notice_3_id").html("")
                        }
                    }
                } else {
                    $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                    if (bQ()) {
                        $("#notice_3_id").html("2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                    } else {
                        $("#notice_3_id").html("")
                    }
                }
            }
            var bS = aG(bV);
            var bR = $(window).width() / 2 - 300;
            var bU = bH() + ($(window).height() / 2 - 200);
            bS.setDimension($("#content_" + bV).width(), $("#content_" + bV).height() + 10);
            $(".dhtmlx_window_active").height($("#content_" + bV).height());
            $(".dhtmlx_window_active").css({left: bR + "px",top: bU + "px"})
        }
        function bQ() {
            for (var bS = 0; bS < limit_tickets.length; bS++) {
                var bR = limit_tickets[bS];
                if (bR.ticket_type == ticket_submit_order.ticket_type.student) {
                    return true
                }
            }
            return false
        }
        function bP() {
            for (var bS = 0; bS < limit_tickets.length; bS++) {
                var bR = limit_tickets[bS];
                if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && bR.save_status != "" && bR.id_type == ticket_submit_order.passenger_card_type.passport) {
                    return true
                } else {
                    if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && bR.id_type == ticket_submit_order.passenger_card_type.passport) {
                        return true
                    }
                }
            }
            return false
        }
    }
    function aG(bP) {
        var bO = bI.createWindow(bP + "_", 0, 0, 660, 100);
        bO.attachObject(bP);
        bO.clearIcon();
        bO.denyResize();
        bO.setModal(true);
        bO.center();
        bO.button("park").hide();
        bO.button("minmax1").hide();
        bO.hideHeader();
        return bO
    }
    function u(bP) {
        var bO = new Date();
        var bQ = bP.split("-");
        bO.setFullYear(parseInt(bQ[0]), parseInt(bQ[1] - 1, 10), parseInt(bQ[2], 10));
        if (bQ.length >= 6) {
            bO.setHours(bQ[3], bQ[4], bQ[5])
        }
        return bO
    }
    function an(bO) {
        var bR = "", bQ = "";
        var bT = bO.replace(/-/g, "");
        if (bT.substring(4, 5) == "0") {
            bR = bT.substring(5, 6) + "月"
        } else {
            bR = bT.substring(4, 6) + "月"
        }
        if (bT.substring(6, 7) == "0") {
            bQ = bT.substring(7, 8) + "日"
        } else {
            bQ = bT.substring(6, 8) + "日"
        }
        var bP = new Date(Date.parse(bO.replace(/-/g, "/")));
        var bS = "日一二三四五六";
        return bR.concat(bQ).concat("&nbsp;&nbsp;").concat("周").concat(bS.charAt(bP.getDay()))
    }
    showTicketPrice = function(bS) {
        var bV = $(bS).parent("tr").children("td").children("div").children("div").children("span").attr("id");
        if (undefined == bV || bV == null || "undefined" == typeof (bV)) {
            bV = $(bS).attr("id")
        }
        $("#price_" + bT).hide();
        $("#tp-list-price").hide();
        $("#sleeper-price>span").css("cursor", "pointer");
        var bT = bV.split("_")[0];
        var bU = bV.split("_")[1];
        var bR = bV.split("_")[2];
        var bW = bV.split("_")[3];
        var bQ = bV.split("_")[4];
        var bO = $("#WZ_" + bT).html();
        var bP = $("#QT_" + bT).html();
        if ($("#ticket_" + bT + "_train>span>span").text() == "查看票价") {
            if ($("#ticket_" + bT).attr("class") == "bgc") {
                $("#price_" + bT).addClass("bgc")
            }
            $.ajax({type: "get",isTakeParam: false,url: ctx + "leftTicket/queryTicketPrice",data: {train_no: bT,from_station_no: bU,to_station_no: bR,seat_types: bQ,train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())},success: function(bX) {
                    if (bX.status) {
                        $("#ticket_" + bT + "_train>span>span").html("收起票价");
                        $("#ticket_" + bT + "_train>span>b").addClass("open");
                        $("#ticket_" + bT + "_train>span>b").attr("title", "收起票价");
                        if (bP == "--") {
                            bX.data.MIN = ""
                        }
                        if (bO == "--") {
                            bX.data.WZ = ""
                        }
                        $("#price_" + bT).html($.render.priceTableTemplate(bX.data));
                        $("#price_" + bT).show();
                        if (bX.data.PM != "--") {
                            $("#sleeper-price_" + bT).mouseover(function() {
                                $("#tp-list-price_" + bT).show()
                            });
                            $("#sleeper-price_" + bT).mouseout(function() {
                                $("#tp-list-price_" + bT).hide()
                            })
                        }
                    }
                }})
        } else {
            $("#ticket_" + bT + "_train>span>span").html("查看票价");
            $("#ticket_" + bT + "_train>span>b").attr("title", "查看票价");
            $("#ticket_" + bT + "_train>span>b").removeClass();
            $("#price_" + bT).html("");
            $("#price_" + bT).hide()
        }
    };
    function br(bO) {
        if (ai == "starttime") {
            return bO.sort(function(bQ, bP) {
                var bS = Number(bQ.queryLeftNewDTO.start_time.replace(":", ""));
                var bR = Number(bP.queryLeftNewDTO.start_time.replace(":", ""));
                if (bS > bR) {
                    return aF ? 1 : -1
                } else {
                    return aF ? -1 : 1
                }
            })
        } else {
            if (ai == "arrivedtime") {
                return bO.sort(function(bQ, bP) {
                    var bS = Number(bQ.queryLeftNewDTO.arrive_time.replace(":", ""));
                    var bR = Number(bP.queryLeftNewDTO.arrive_time.replace(":", ""));
                    if (bS > bR) {
                        return bx ? 1 : -1
                    } else {
                        return bx ? -1 : 1
                    }
                })
            } else {
                if (ai == "lishi") {
                    return bO.sort(function(bQ, bP) {
                        var bS = Number(bQ.queryLeftNewDTO.lishi.replace(":", ""));
                        var bR = Number(bP.queryLeftNewDTO.lishi.replace(":", ""));
                        if (bS > bR) {
                            return aA ? 1 : -1
                        } else {
                            return aA ? -1 : 1
                        }
                    })
                }
            }
        }
        return bO
    }
    function aj() {
        $("#s_time").click(function() {
            if (aF) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "starttime";
            ao()
        });
        $("#other_span_starttime").click(function() {
            if (aF) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                aF = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "starttime";
            ao()
        });
        $("#r_time").click(function() {
            if (bx) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                $("#other_span_endtime").removeClass().addClass("b2");
                $("#other_span_lishi").removeClass().addClass("b2")
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = true;
                $("#other_span_endtime").removeClass().addClass("b2");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "arrivedtime";
            ao()
        });
        $("#other_span_endtime").click(function() {
            if (bx) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = false;
                $("#other_span_endtime").removeClass().addClass("b4");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bx = true;
                $("#other_span_endtime").removeClass().addClass("b3");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            ai = "arrivedtime";
            ao()
        });
        $("#l_s").click(function() {
            if (aA) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            ai = "lishi";
            ao()
        });
        $("#other_span_lishi").click(function() {
            if (aA) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                aA = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            ai = "lishi";
            ao()
        })
    }
    closeTrainStop = function() {
        over_flag = false;
        bw = 0;
        $("#train_stop").hide();
        $("#train_table").html("")
    };
    hideTrainStop = function(bO) {
        over_flag = false;
        if (l) {
            clearTimeout(l)
        }
        l = window.setTimeout(function() {
            if (bw != 1) {
                bw = 0;
                $("#train_stop").hide();
                $("#train_table").html("")
            }
        }, 130)
    };
    checkHover = function(bP, bO) {
        if (getEvent(bP).type == "mouseover") {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).fromElement) && !((getEvent(bP).relatedTarget || getEvent(bP).fromElement) === bO)
        } else {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).toElement) && !((getEvent(bP).relatedTarget || getEvent(bP).toElement) === bO)
        }
    };
    getEvent = function(bO) {
        return bO || window.event
    };
    checkHover = function(bP, bO) {
        if (getEvent(bP).type == "mouseover") {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).fromElement) && !((getEvent(bP).relatedTarget || getEvent(bP).fromElement) === bO)
        } else {
            return !$.contains(bO, getEvent(bP).relatedTarget || getEvent(bP).toElement) && !((getEvent(bP).relatedTarget || getEvent(bP).toElement) === bO)
        }
    };
    getEvent = function(bO) {
        return bO || window.event
    };
    function bc(bQ, bO) {
        for (var bP = 0; bP < bO.length; bP++) {
            if (bO[bP].key == bQ) {
                return true
            }
        }
        return false
    }
    function aY(bS) {
        var bX = function(bY) {
            this.value = bY
        };
        var bT = new Array();
        var bP = new Array();
        var bR = {};
        var bO = {};
        $("#cc_from_station_name_all>ul").html("");
        $("#cc_to_station_name_all>ul").html("");
        var bQ;
        var bW;
        var bV;
        for (var bU = 0; bU < bS.length; bU++) {
            bQ = bS[bU].queryLeftNewDTO.from_station_name;
            bW = bS[bU].queryLeftNewDTO.to_station_name;
            bV = bS[bU];
            if (!bR[bQ]) {
                bT.push(new bX(bQ));
                bR[bQ] = true
            }
            if (!bO[bW]) {
                bP.push(new bX(bW));
                bO[bW] = true
            }
        }
        $("#to_station_ul").html($.render.toStationNameTableTemplate(bP));
        $("#from_station_ul").html($.render.stationNameTableTemplate(bT));
        $("#sear-sel-bd input[name='cc_from_station']").click(function() {
            g(bb, "cc_from_station_" + $(this).val());
            var bY = $("input[name='cc_from_station']");
            var bZ = $("input[name='cc_from_station']:checked");
            if ($(this).is(":checked")) {
                if (bY && bZ && bZ.length == bY.length) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bY && bZ && bZ.length == 0) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        });
        $("#sear-sel-bd input[name='cc_to_station']").click(function() {
            g(a0, "cc_to_station_" + $(this).val());
            var bY = $("input[name='cc_to_station']");
            var bZ = $("input[name='cc_to_station']:checked");
            if ($(this).is(":checked")) {
                if (bY && bZ && bZ.length == bY.length) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (bY && bZ && bZ.length == 0) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            ao()
        })
    }
    submitOrderRequest = function(bP, bO) {
        $.ajax({type: "post",url: ctx + "login/checkUser",data: {},success: function(bQ) {
                var bS;
                checkusermdId = bQ.attributes;
                if (bQ.data.flag) {
                    if (train_tour_flag == "fc") {
                        bS = $("#back_train_date").val()
                    } else {
                        bS = $("#train_date").val()
                    }
                    if (q == "0X00") {
                        var bR = false;
                        for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
                            if (u(studentComPerArr[i - 1]) <= u(bS) && u(studentComPerArr[i]) >= u(bS)) {
                                bR = true;
                                break
                            }
                        }
                        if (!bR) {
                            b("学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。");
                            return
                        }
                    }
                    J(bP, bO)
                } else {
                    a6();
                    $("#floatTable").hide();
                    a = $(window).scrollTop();
                    O(bP, bO)
                }
            }})
    };
    function J(b1, bU) {
        var bO = "";
        if ($("#dc").is(":checked")) {
            bO = "dc"
        } else {
            bO = "wc"
        }
        if (train_tour_flag == "fc") {
            bO = "fc";
            var bR = bU.split(":");
            var bQ = $("#back_train_date").val() + "-" + bR[0] + "-" + bR[1] + "-00";
            try {
                if (roundReferTime) {
                    if (u(roundReferTime) >= u(bQ)) {
                        b("您预订的往程车票到站时间为" + u(roundReferTime).format("yyyy年MM月dd日 hh时mm分") + "，返回日期不能早于此时间");
                        return
                    }
                }
            } catch (bW) {
            }
        }
        if (train_tour_flag == "gc") {
            bO = "gc"
        }
        if ("undefined" == typeof (submitForm)) {
            var bS = "secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bL() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + bZ
        } else {
            var bP = submitForm();
            var b0 = bP.split(":::");
            var bV = b0[0].split(",-,")[0];
            var bY = b0[0].split(",-,")[1];
            var bT = b0[1].split(",-,")[0];
            var bX = b0[1].split(",-,")[1];
            var bS = escape(bV) + "=" + escape(bY) + "&" + bT + "=" + bX + "&secretStr=" + b1 + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + bO + "&purpose_codes=" + bL() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + bZ
        }
        var bZ = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
        $.ajax({type: "post",url: ctx + "leftTicket/submitOrderRequest",data: bS,async: false,success: function(b2) {
                if (b2.status) {
                    if (train_tour_flag != null) {
                        if (train_tour_flag == "fc") {
                            otsRedirect("post", ctx + "confirmPassenger/initFc", {});
                            return
                        }
                        if (train_tour_flag == "gc") {
                            otsRedirect("post", ctx + "confirmPassenger/initGc", {});
                            return
                        }
                    }
                    if (bO == "dc") {
                        otsRedirect("post", ctx + "confirmPassenger/initDc", {});
                        return
                    } else {
                        otsRedirect("post", ctx + "confirmPassenger/initWc", {})
                    }
                }
            }})
    }
    var bK = $("#fromStation").val();
    var aQ = $("#toStation").val();
    var bu = $.trim($("#train_date").val());
    aJ = bK + aQ + bu;
    $("#add-train").click(function() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次",ok: "确定",text: "请填写出发地！",type: "alert-error"});
            return
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({title: "输入车次",ok: "确定",text: "请填写目的地！",type: "alert-error"});
            return
        }
        var bQ = $("#prior_train span").length;
        var bX = $.trim($("#inp-train").val()).toUpperCase();
        if (bX.length == 0 || bX == "请输入") {
            dhtmlx.alert({title: "输入车次",ok: "确定",text: "请输入车次",type: "alert-error",callback: function() {
                    $("#inp-train").val("");
                    $("#inp-train").focus()
                }})
        } else {
            if (bQ < 6) {
                var bR = /^[a-zA-Z0-9]+$/;
                var bT = /^[0-9]+$/;
                if (!bR.test(bX)) {
                    dhtmlx.alert({title: "输入车次",ok: "确定",text: "车次格式输入错误！",type: "alert-error",callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }})
                } else {
                    if (bT.test(bX) && bX.length > 4) {
                        dhtmlx.alert({title: "输入车次",ok: "确定",text: "车次格式输入错误！",type: "alert-error",callback: function() {
                                ccInputSelected = true;
                                $("#inp-train").select()
                            }})
                    } else {
                        if (bX.length < 2) {
                            dhtmlx.alert({title: "输入车次",ok: "确定",text: "车次格式输入错误！",type: "alert-error",callback: function() {
                                    ccInputSelected = true;
                                    $("#inp-train").select()
                                }})
                        } else {
                            var bS = $("#fromStation").val();
                            var bV = $("#toStation").val();
                            var b5 = $.trim($("#train_date").val());
                            var b1 = bS + bV + b5;
                            var b2 = b5.split("-");
                            var bY = new Date();
                            bY.setFullYear(b2[0], b2[1] - 1, b2[2]);
                            bY.setHours(8, 0, 0);
                            var bU = new Date();
                            var b4 = "";
                            if (bU.getDate() < 10) {
                                b4 = bU.getFullYear() + "-" + (bU.getMonth() + 1) + "-0" + bU.getDate()
                            } else {
                                b4 = bU.getFullYear() + "-" + (bU.getMonth() + 1) + "-" + bU.getDate()
                            }
                            var bO = "";
                            if (b4 == b5) {
                                var b3 = new Date(bY.getTime() + 1000 * 60 * 60 * 24);
                                if (b3.getDate() < 10) {
                                    bO = b3.getFullYear() + "-" + (b3.getMonth() + 1) + "-0" + b3.getDate()
                                } else {
                                    bO = b3.getFullYear() + "-" + (b3.getMonth() + 1) + "-" + b3.getDate()
                                }
                            } else {
                                bO = b5
                            }
                            var b6 = {"leftTicketDTO.train_date": bO,"leftTicketDTO.from_station": bS,"leftTicketDTO.to_station": bV,purpose_codes: bL()};
                            if (b1 != aJ) {
                                aJ = b1;
                                $("#prior_train span:gt(0)").remove();
                                ccSelected = [];
                                var bP = [];
                                $.ajax({type: "get",async: false,isTakeParam: false,url: ctx + "leftTicket/query",data: b6,timeout: 10000,success: function(b7) {
                                        if (b7.status) {
                                            if (b7.data == null || b7.data.length == 0) {
                                                dhtmlx.alert({title: "错误信息",ok: "确定",text: "您输入的车次与出发地目的地不符！",type: "alert-error",callback: function() {
                                                    }})
                                            } else {
                                                var b9 = b7.data;
                                                for (var b8 = 0; b8 < b9.length; b8++) {
                                                    bP.push(b9[b8].queryLeftNewDTO.station_train_code.toUpperCase())
                                                }
                                                y = bP
                                            }
                                        }
                                    }})
                            } else {
                                if (y.length == 0) {
                                    $.ajax({type: "get",async: false,isTakeParam: false,url: ctx + "leftTicket/query",data: b6,timeout: 10000,success: function(b7) {
                                            if (b7.status) {
                                                if (b7.data == null || b7.data.length == 0) {
                                                    dhtmlx.alert({title: "错误信息",ok: "确定",text: "您输入的车次与出发地目的地不符！",type: "alert-error",callback: function() {
                                                        }})
                                                } else {
                                                    var b9 = b7.data;
                                                    for (var b8 = 0; b8 < b9.length; b8++) {
                                                        y.push(b9[b8].queryLeftNewDTO.station_train_code.toUpperCase())
                                                    }
                                                }
                                            }
                                        }})
                                }
                            }
                            var bW = false;
                            for (var b0 = 0; b0 < y.length; b0++) {
                                if (bX == y[b0]) {
                                    bW = true;
                                    break
                                }
                            }
                            if (!bW) {
                                dhtmlx.alert({title: "错误信息",ok: "确定",text: "您输入的车次与出发地目的地不符！",type: "alert-error",callback: function() {
                                        $("#inp-train").val("")
                                    }})
                            } else {
                                if ($.inArray(bX, ccSelected) < 0) {
                                    var bZ = "<span class='sel-box w80'>" + bX + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + bX + "\",4)'></a></span>";
                                    $("#prior_train").append(bZ);
                                    ccSelected.push(bX);
                                    $("#inp-train").val("")
                                } else {
                                    dhtmlx.alert({title: "输入车次",ok: "确定",text: "此车次已经添加过！",type: "alert-error",callback: function() {
                                            ccInputSelected = true;
                                            $("#inp-train").select()
                                        }})
                                }
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({title: "输入车次",ok: "确定",text: "最多添加5个优先车次",type: "alert-error"});
                $("#inp-train").val("")
            }
        }
    });
    function bL() {
        if ($("#sf2").is(":checked")) {
            return "0X00"
        } else {
            return "ADULT"
        }
    }
    jQuery.extend({renderPassenger: function() {
            if (passengerAll) {
                var bZ = passengerAll.length;
                var bW = [];
                var bU = 0;
                var bP = $("#searchPassenger").val();
                for (var bS = 0; bS < bZ; bS++) {
                    var bQ = passengerAll[bS];
                    var bO = bQ.passenger_type_name;
                    if (!bO) {
                        bO = ""
                    }
                    var bT = "";
                    var bV = "";
                    if ($("#sf2").is(":checked")) {
                        if (bQ.passenger_type != "3") {
                            bT = " disabled='true' ";
                            bV = " class='color999' "
                        }
                    }
                    if (bP != "" && bP != "输入乘客姓名") {
                        if (bQ.passenger_name.indexOf(bP) > -1 || (bQ.first_letter && bQ.first_letter.toUpperCase().indexOf(bP.toUpperCase()) > -1)) {
                            bU++;
                            var bR = "";
                            if ($.pHasInSelected(bQ)) {
                                bR = " checked='checked' "
                            }
                            bW[bS] = "<li " + bV + "><input " + bR + " type='checkbox' " + bT + " name='" + bQ.passenger_type + "' class='check' />" + bQ.passenger_name + "(" + bO + ")(" + bQ.passenger_id_no + ")</li>"
                        }
                    } else {
                        bU++;
                        var bR = "";
                        if ($.pHasInSelected(bQ)) {
                            bR = " checked='checked' "
                        }
                        bW[bS] = "<li " + bV + "><input  " + bR + " type='checkbox' " + bT + " name='" + bQ.passenger_type + "' class='check' />" + bQ.passenger_name + "(" + bO + ")(" + bQ.passenger_id_no + ")</li>"
                    }
                }
                var bY = 100;
                var bX = 0;
                if (bU / 3 > 11) {
                    bY = 310;
                    bX = 258
                } else {
                    bY = 100 + parseInt((bU / 3) * 25);
                    bX = bY - 48
                }
                $("#sel-buyer").css("height", bY);
                $("#pContent").css("height", bX);
                $("#buyer-list").html(bW.join(""))
            }
            $("#buyer-list input").click(function() {
                var b1 = $("#setion_postion span").length;
                var b2 = this.nextSibling.nodeValue;
                if (this.checked) {
                    if (b1 < 6) {
                        var b0 = "<span name='" + b2 + "' class='sel-box w80'>" + b2 + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + b2 + "\",1)'></a></span>";
                        $("#setion_postion").append(b0);
                        $.checkedPasseanger(b2)
                    } else {
                        dhtmlx.alert({title: "添加常用联系人",ok: "确定",text: "最多添加5位联系人",type: "alert-error"});
                        this.checked = false
                    }
                } else {
                    $.each($("#setion_postion span"), function(b3, b4) {
                        if (b2 == $(b4).attr("name")) {
                            $(b4).remove();
                            $.removePasseanger(b2);
                            return
                        }
                    })
                }
            })
        },reloadPassenger: function() {
            var bO = dhtmlx.modalbox({targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',callback: function() {
                }});
            $.ajax({type: "post",isTakeParam: false,cache: false,async: false,url: ctx + "confirmPassenger/getPassengerDTOs",timeout: 10000,error: function(bP, bR, bQ) {
                    dhtmlx.modalbox.hide(bO)
                },success: function(bP) {
                    dhtmlx.modalbox.hide(bO);
                    if (bP.status) {
                        if (bP.data.noLogin == "true") {
                            a6();
                            $("#floatTable").hide();
                            a = $(window).scrollTop();
                            N()
                        } else {
                            passengerAll = bP.data.normal_passengers;
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").show();
                            $("#sel-seat").hide();
                            $("#sel-date").hide();
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16);
                            $.renderPassenger()
                        }
                    }
                }})
        },pHasInSelected: function(bR) {
            var bP = passengerChecked.length;
            if (bP > 0) {
                for (var bO = 0; bO < bP; bO++) {
                    var bQ = passengerChecked[bO];
                    if (bQ.passenger_name == bR.passenger_name && bQ.passenger_id_type_code == bR.passenger_id_type_code && bQ.passenger_id_no == bR.passenger_id_no) {
                        return true
                    }
                }
            }
            return false
        },showSelectBuyer: function() {
            if (!passengerAll) {
                $.reloadPassenger()
            } else {
                var bO = $("#buyer-list input");
                for (var bP = 0; bP < bO.length; bP++) {
                    var bQ = $(bO[bP]).attr("name");
                    if ($("#sf2").is(":checked")) {
                        if (bQ != "3") {
                            $(bO[bP]).attr("disabled", "true");
                            $(bO[bP]).parent().addClass("color999")
                        } else {
                            $(bO[bP]).removeAttr("disabled");
                            $(bO[bP]).parent().removeClass("color999")
                        }
                    } else {
                        $(bO[bP]).removeAttr("disabled");
                        $(bO[bP]).parent().removeClass("color999")
                    }
                }
                $("#sel-buyer").bgiframe();
                $("#sel-buyer").show();
                $("#sel-seat").hide();
                $("#sel-date").hide();
                $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16)
            }
        }});
    function x() {
        $("#show_all_query_result").click(function() {
            bb = new Array();
            a0 = new Array();
            E = new Array();
            $("#train_type_btn_all").removeClass().addClass("btn-all");
            $("#start_time_btn_all").removeClass().addClass("btn-all");
            $("#arrive_time_btn_all").removeClass().addClass("btn-all");
            $("#seat_type_btn_all").removeClass().addClass("btn-all");
            $("#from_station_name_all").removeClass().addClass("btn-all");
            $("#to_station_name_all").removeClass().addClass("btn-all");
            $("#sear-sel-bd input").each(function() {
                if (this.checked) {
                    this.checked = false
                }
            });
            if (ah) {
                ah.setComboText("")
            }
            $("#avail_ticket").attr("checked", false);
            ao()
        })
    }
    function ad() {
        var bO = $("#queryPriceTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({priceTableTemplate: bO});
        var bO = $("#fromStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationNameTableTemplate: bO});
        var bO = $("#toStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({toStationNameTableTemplate: bO});
        var bO = $("#seatTypeTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({seatTypeTemplate: bO});
        var bO = $("#stationinfoTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({stationinfoTemplate: bO})
    }
    function bf(bP) {
        dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function() {
        };
        $("#train_combo_box").hide();
        var bO = [];
        if (!ah) {
            ah = new dhtmlXCombo("train_combo_box_div", "cc", 90)
        } else {
            ah.setComboText("")
        }
        ah.clearAll();
        $(bP).each(function() {
            bO.push([this.queryLeftNewDTO.station_train_code, this.queryLeftNewDTO.station_train_code])
        });
        ah.addOption(bO);
        ah.enableFilteringMode(true);
        ah.attachEvent("onChange", function() {
            if (ah.getComboText() != "") {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
            ao()
        });
        if (!$("#iLcear")[0]) {
            $(".dhx_combo_box ").append($('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
            $("#iLcear").on("click", function() {
                if (ah) {
                    ah.setComboText("");
                    $(this).hide()
                }
            })
        }
        $(".dhx_combo_input").on("keyup", function() {
            if ($(this).val() == "") {
                $("#iLcear").hide()
            } else {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
        })
    }
    function ac() {
        if (!bD) {
            bD = new dhtmlXWindows();
            bD.enableAutoViewport(true);
            bD.setSkin("dhx_terrace");
            bD.attachViewportTo("winVP");
            bD.setImagePath(ctx + "resources/js/rich/windows/imgs/")
        }
    }
    function a4() {
        bD.window("login").hide();
        bD.window("login").setModal(false)
    }
    function a6() {
        if (bD.window("login")) {
            bD.window("login").setModal(false);
            bD.window("login").hide()
        }
        aE = bD.createWindow("login", 0, 0, 400, 350);
        var bO = $(window).width() / 2 - 140;
        var bP = bH() + ($(window).height() / 2 - 205);
        aE.attachObject("relogin");
        aE.setDimension($("#content").width(), $("#content").height() + 10);
        $(".dhtmlx_window_active").height($("#content").height());
        $(".dhtmlx_window_active").css({left: bO,top: bP});
        aE.bringToTop();
        bD.window("login").clearIcon();
        bD.window("login").denyResize();
        aE.button("park").hide();
        aE.button("minmax1").hide();
        aE.hideHeader();
        refreshImg("login", "sjrand");
        aE.setModal(true);
        $("#relogin_close").click(function() {
            aV();
            var bQ = $(window).scrollTop();
            var bR = $("#float").position().top;
            if (bQ > bR + 30) {
                $("#floatTable").show()
            }
            a4()
        })
    }
    function aV() {
        av();
        $("#c_error").html("");
        $("#c_error").removeClass("error");
        $("#username").val("");
        $("#password").val("");
        $("#randCode").val("");
        $("#i-ok").hide();
        by()
    }
    function bH() {
        if ("pageYOffset" in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }
    function av() {
        $("#username").removeClass("inptxt w200 error").addClass("inptxt w200");
        $("#password").removeClass("inptxt w200 error").addClass("inptxt w200");
        $("#randCode").removeClass("inptxt w100 error").addClass("inptxt w100");
        $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100")
    }
    function v(bR) {
        var bO = true;
        var bP = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
        var bQ = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if ("" == bR || bR == null || bR == "用户名／邮箱" || bR == "admin") {
            bO = false;
            av();
            $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
            $("#c_error").html(login_messages.userNameEmpty).attr("class", "error").css("margin-left", "60px")
        } else {
            if (!bP.test(bR) && !bQ.test(bR)) {
                bO = false;
                av();
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                $("#c_error").html(login_messages.userNameFormat).attr("class", "error").css("margin-left", "60px")
            }
        }
        if (bO) {
            av();
            $("#c_error").html("");
            $("#c_error").removeClass("error")
        }
        return bO
    }
    function a9(bP) {
        var bO = true;
        if ("" == bP || bP == null) {
            bO = false;
            av();
            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
            $("#c_error").html(login_messages.passwordEmpty).attr("class", "error").css("margin-left", "60px")
        } else {
            if (bP.length < 6) {
                bO = false;
                av();
                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                $("#c_error").html(login_messages.passwordLength).attr("class", "error").css("margin-left", "60px")
            }
        }
        if (bO) {
            av();
            $("#c_error").html("");
            $("#c_error").removeClass("error")
        }
        return bO
    }
    function aT(bP) {
        var bO = true;
        if ("" == bP) {
            bO = false;
            av();
            $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
            $("#c_error").html(login_messages.randCodeEmpty).attr("class", "error").css("margin-left", "60px")
        } else {
            if (!/^[a-zA-Z0-9]+$/.test(bP)) {
                bO = false;
                av();
                $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
                $("#c_error").html(login_messages.randCodeFormat).attr("class", "error").css("margin-left", "60px")
            } else {
                if (bP.length != 4) {
                    bO = false;
                    av();
                    $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
                    $("#c_error").html(login_messages.randCodeLentgh).attr("class", "error").css("margin-left", "60px")
                } else {
                    if (!w(bP)) {
                        bO = false;
                        av();
                        $("#randCode").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error").html(login_messages.randCodeError).attr("class", "error").css("margin-left", "60px")
                    }
                }
            }
        }
        if (bO) {
            av();
            $("#c_error").html("");
            $("#c_error").removeClass("error")
        }
        return bO
    }
    function ax() {
        var bQ = $.trim($("#username").val());
        var bP = $.trim($("#password").val());
        var bO = $.trim($("#randCode").val());
        if (!v(bQ)) {
            return false
        }
        if (!a9(bP)) {
            return false
        }
        if (!aT(bO)) {
            return false
        }
        return true
    }
    function w(bP) {
        var bO = true;
        if (bP != "" && bP.length == 4) {
            $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: bP,rand: "sjrand"},async: false,success: function(bQ) {
                    if (bQ.data == "N") {
                        bO = false;
                        $("#i-ok").css("display", "none")
                    } else {
                        bO = true;
                        $("#i-ok").css("display", "block");
                        $("#c_error").html("");
                        $("#c_error").removeClass("error");
                        av()
                    }
                }})
        } else {
            bO = false;
            $("#i-ok").css("display", "none")
        }
        return bO
    }
    function t() {
        var bP = false;
        var bO = false;
        $("#username").on("keyup", function() {
            al = true;
            var bQ = $.trim($("#username").val());
            bP = v(bQ)
        }).blur(function() {
            if (al) {
                var bQ = $.trim($("#username").val());
                bP = v(bQ)
            }
        });
        $("#password").blur(function() {
            if (al) {
                if (bP) {
                    var bQ = $.trim($("#password").val());
                    bO = a9(bQ)
                }
            }
        });
        $("#randCode").on("keyup", function() {
            if ($.trim($("#password").val()) != "" && $.trim($("#password").val()) != null) {
                if (bO) {
                    var bQ = $.trim($("#randCode").val());
                    w(bQ)
                }
            }
        }).blur(function() {
            if ($.trim($("#password").val()) != "" && $.trim($("#password").val()) != null) {
                if (bO) {
                    var bQ = $.trim($("#randCode").val());
                    aT(bQ)
                }
            }
        })
    }
    function O(bP, bO) {
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function() {
            var bQ = ax();
            if (bQ) {
                $("#loginForm").ajaxSubmit({url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),type: "post",dataType: "json",async: false,success: function(bR) {
                        if (bR.data.status) {
                            if (bR.data.username != null) {
                                a4();
                                loginAsyn(bR.data.username);
                                J(bP, bO)
                            }
                        } else {
                            $("#i-ok").hide();
                            refreshImg("login", "sjrand");
                            $("#password").val("");
                            $("#randCode").val("");
                            if (bR.data.loginFail != null) {
                                if (bR.data.loginFail == "登录名不存在!") {
                                    al = false;
                                    av();
                                    $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                    $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px")
                                } else {
                                    if (bR.data.loginFail == "验证码不正确！" && bR.data.loginFail != "登录名不存在!") {
                                        av();
                                        $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                        $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                        $("#randCode").focus()
                                    } else {
                                        if (bR.data.loginFail != "验证码不正确！" && bR.data.loginFail != "登录名不存在!") {
                                            av();
                                            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                                            $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                            $("#password").focus()
                                        }
                                    }
                                }
                            }
                        }
                    }})
            } else {
                a6()
            }
        })
    }
    function N() {
        var bO = false;
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function() {
            if (!bO) {
                var bP = ax();
                bO = true;
                if (bP) {
                    $("#loginForm").ajaxSubmit({url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),type: "post",dataType: "json",async: false,success: function(bQ) {
                            if (bQ.data.status) {
                                if (bQ.data.username != null) {
                                    a4();
                                    loginAsyn(bQ.data.username)
                                }
                            } else {
                                $("#i-ok").hide();
                                refreshImg("login", "sjrand");
                                $("#password").val("");
                                $("#randCode").val("");
                                if (bQ.data.loginFail != null) {
                                    if (bQ.data.loginFail == "登录名不存在!") {
                                        al = false;
                                        av();
                                        $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                        $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                        $("#username").focus()
                                    } else {
                                        if (bQ.data.loginFail == "验证码不正确！" && bQ.data.loginFail != "登录名不存在!") {
                                            av();
                                            $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                            $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                            $("#randCode").focus()
                                        } else {
                                            if (bQ.data.loginFail != "验证码不正确！" && bQ.data.loginFail != "登录名不存在!") {
                                                av();
                                                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                                                $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                                $("#password").focus()
                                            }
                                        }
                                    }
                                }
                            }
                        },complete: function() {
                            bO = false
                        }})
                } else {
                    bO = false;
                    a6()
                }
            }
        })
    }
    function az() {
        $("#randCode").keydown(function(bO) {
            bO = bO || window.event;
            if (bO.keyCode == 13 || bO.keyCode == 9) {
                $("#loginSubAsyn").click()
            }
        })
    }
    function by() {
        $("#username").css("color", "#333");
        $("#password").css("color", "#333");
        $("#randCode").css("color", "#333");
        if ($("#username").val() == "" || $("#username").val() == "用户名／邮箱" || $("#username").val() == null || $("#username").val() == "admin") {
            $("#username").css("color", "#999");
            $("#username").val("用户名／邮箱");
            $("#password").val("")
        }
        $("#username").focus(function() {
            var bO = $("#username").val();
            if (bO == "用户名／邮箱") {
                $("#username").css("color", "#333");
                $("#username").val("");
                $("#password").val("")
            }
        }).blur(function() {
            var bO = $("#username").val();
            if (bO == "") {
                $("#username").css("color", "#999");
                $("#username").val("用户名／邮箱")
            }
        })
    }
    function T() {
        $("#forget_my_password_id").on("click", function(bO) {
            otsRedirect("post", ctx + "forgetPassword/initforgetMyPassword")
        })
    }
    function ay() {
        var bO = [];
        $("#date_range>ul>li").each(function() {
            var bQ = $(this).children("span:first-child").html();
            bO.push(bQ)
        });
        var bP;
        if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
            bP = jQuery.inArray($("#back_train_date").val().substring(5, 10), bO)
        } else {
            bP = jQuery.inArray($("#train_date").val().substring(5, 10), bO)
        }
        if (bP != "-1") {
            bP = bP + 1;
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li:nth-child(1)").children("span:first").addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:last").addClass("first");
            $("#date_range>ul>li:nth-child(" + bP + ")").addClass("sel");
            $("#date_range>ul>li:nth-child(" + bP + ")").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(" + bP + ")").children("span:first-child").addClass("hide");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            bq = $("#date_range>ul>li:nth-child(" + bP + ")").children("span:first-child").text()
        }
    }
    function bm() {
        $("#query_ticket").unbind("click");
        $("#query_ticket_stu").unbind("click");
        $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
        $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
        aX();
        setTimeout(function() {
            bM();
            aU();
            $("#query_ticket").removeClass().addClass("btn92s");
            $("#query_ticket_stu").removeClass().addClass("btn92s");
            if (train_tour_flag != "gc" && train_tour_flag != "fc") {
                if (ClickWho == "0X00") {
                    $("#query_ticket").unbind();
                    $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket_stu").removeClass().addClass("btn92s")
                }
                if (ClickWho == "00") {
                    $("#query_ticket_stu").unbind();
                    $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket").removeClass().addClass("btn92s")
                }
            }
            if (isstudentDate) {
                $("#query_ticket_stu").unbind();
                $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                $("#query_ticket").removeClass().addClass("btn92s")
            }
            Z()
        }, 1000)
    }
    changeArriveDate = function(bP, bO) {
        bP = bP.replace(":", "");
        bO = bO.replace(":", "");
        hour_value = Number(bP.substring(0, 2)) + Number(bO.substring(0, 2));
        min_value = Number(bP.substring(2, 4)) + Number(bO.substring(2, 4));
        if (min_value >= 60) {
            hour_value = hour_value + 1
        }
        if (hour_value >= 24 && hour_value < 48) {
            return "次日"
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return "两日"
            } else {
                if (hour_value >= 72) {
                    return "三日"
                } else {
                    return "当日"
                }
            }
        }
    };
    changeLiShi = function(bO) {
        if (bO.substring(0, 1) == "0") {
            if (bO.substring(1, 2) == "0") {
                if (bO.substring(3, 4) == "0") {
                    bO = bO.substring(4, 5) + "分"
                } else {
                    bO = bO.substring(3, 5) + "分"
                }
            } else {
                bO = bO.substring(1, 2) + "小时" + bO.substring(3, 5) + "分"
            }
        } else {
            if (bO.substring(3, 5) == "00") {
                bO = bO.substring(0, 2) + "小时"
            } else {
                bO = bO.substring(0, 2) + "小时" + bO.substring(3, 5) + "分"
            }
        }
        return bO
    };
    isNum = function(bO) {
        return parseInt(bO)
    };
    buttonText = function() {
        return "预订"
    };
    function Z() {
        if ($("#sf2").is(":checked")) {
            if (u($("#train_date").val()) > u(init_maxPeriod) - 24 * 60 * 60 * 1000) {
                aX()
            } else {
                aU()
            }
        }
    }
    function aa() {
        if (train_tour_flag == "fc") {
            var bO = $("#back_train_date").val()
        } else {
            var bO = $("#train_date").val()
        }
        if (rqChecked.length == 0) {
            rqChecked.push(bO)
        }
        var bP = false;
        if (bO != rqChecked[0]) {
            for (var bQ = 0; bQ < rqChecked.length; bQ++) {
                if (bO == rqChecked[bQ]) {
                    bP = true;
                    rqChecked.splice(bQ, 1);
                    $("#date-list input[value=" + rqChecked[0] + "]").prop("checked", false);
                    rqChecked.splice(0, 1, bO);
                    $("#prior_date span[name=" + bO + "]").remove();
                    break
                }
            }
            if (!bP) {
                $("#date-list input[value=" + rqChecked[0] + "]").prop("checked", false);
                rqChecked.splice(0, 1, bO);
                $("#date-list input[value=" + rqChecked[0] + "]").prop("checked", true)
            }
        }
    }
    $("#train_date").focus(function() {
        WdatePicker({doubleCalendar: true,minDate: init_minPeriod,maxDate: init_maxPeriod,isShowClear: false,readOnly: true,qsEnabled: false,onpicked: function() {
                aa();
                $("#train_date").blur();
                var bO = $("#train_date").val();
                var bP = $("#back_train_date").val();
                if ($("#wf").is(":checked")) {
                    if (!bP | u(bO) > u(bP)) {
                        $("#back_train_date").val(bO)
                    }
                }
            }})
    });
    $("#date_icon_1").click(function() {
        $("#train_date").focus()
    });
    $("#back_train_date").focus(function() {
        WdatePicker({doubleCalendar: true,minDate: $("#train_date").val(),maxDate: init_maxPeriod,isShowClear: false,readOnly: true,qsEnabled: false,onpicked: function() {
                aa();
                $("#back_train_date").blur()
            }})
    });
    $("#date_icon_2").click(function() {
        $("#back_train_date").focus()
    })
})();
var left_ticket_messages = {"leftTicketDTO.from_station": "出发站","leftTicketDTO.to_station": "目的站","leftTicketDTO.train_no": "车次","leftTicketDTO.train_date": "出发日",back_train_date: "返程日"};
jQuery.validator.addMethod("checkLoginUserName", function(e, c) {
    var a = false;
    var b = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
    var d = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    if (b.test(e) || d.test(e)) {
        a = true
    }
    return this.optional(c) || a
}, "wrong username.");
jQuery.validator.addMethod("requiredUserName", function(b, a) {
    if ("用户名／邮箱" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("requiredSchoolName", function(b, a) {
    if ("简码／汉字" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong schoolname.");
jQuery.validator.addMethod("randCodeRequired", function(b, a) {
    $("#i-ok").css("display", "none");
    return b.length > 0
}, "验证码错误!");
jQuery.validator.addMethod("randCodeFormat", function(c, b) {
    $("#i-ok").css("display", "none");
    var a = /^[a-zA-Z0-9]+$/;
    return this.optional(b) || a.test(c)
}, "验证码错误!");
jQuery.validator.addMethod("randCodeLength", function(b, a) {
    $("#i-ok").css("display", "none");
    return b.length == 4
}, "验证码错误!.");
jQuery.validator.addMethod("integrationCheck", function(b, a) {
    var c = /^\d{6}$/;
    return this.optional(a) || c.test(b)
}, "wrong integrationpassword");
jQuery.validator.addMethod("checkRandCode", function(c, b, d) {
    var a = true;
    if (c && c.length == 4) {
        $.ajax({url: ctx + "passcodeNew/checkRandCodeAnsyn",type: "post",data: {randCode: c,rand: d},async: false,success: function(e) {
                if (e.data == "N") {
                    a = false;
                    $("#i-ok").css("display", "none")
                } else {
                    a = true;
                    $("#i-ok").css("display", "block")
                }
            }})
    } else {
        a = false;
        $("#i-ok").css("display", "none")
    }
    return a
}, "验证码错误!.");
jQuery.validator.addMethod("validateUsersName", function(b, a) {
    return this.optional(a) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(b)
}, "用户名只能由字母、数字或_组成");
jQuery.validator.addMethod("checkWriteSpace", function(c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 32) {
            return false
        }
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("validateRandCode", function(b, a) {
    return this.optional(a) || /^[a-zA-Z0-9]+$/.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkPassward", function(c, b, e) {
    var d = true;
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Passward wrong");
function validateSecIdCard(g) {
    var f = 0;
    var a = g;
    var e = {11: "北京",12: "天津",13: "河北",14: "山西",15: "内蒙",21: "辽宁",22: "吉林",23: "黑龙",31: "上海",32: "江苏",33: "浙江",34: "安徽",35: "福建",36: "江西",37: "山东",41: "河南",42: "湖北",43: "湖南",44: "广东",45: "广西",46: "海南",50: "重庆",51: "四川",52: "贵州",53: "云南",54: "西藏",61: "陕西",62: "甘肃",63: "青海",64: "宁夏",65: "新疆",71: "台湾",81: "香港",82: "澳门",91: "国外"};
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}
function validateFirIdCard(g) {
    var f = 0;
    var a;
    var e = {11: "北京",12: "天津",13: "河北",14: "山西",15: "内蒙",21: "辽宁",22: "吉林",23: "黑龙",31: "上海",32: "江苏",33: "浙江",34: "安徽",35: "福建",36: "江西",37: "山东",41: "河南",42: "湖北",43: "湖南",44: "广东",45: "广西",46: "海南",50: "重庆",51: "四川",52: "贵州",53: "云南",54: "西藏",61: "陕西",62: "甘肃",63: "青海",64: "宁夏",65: "新疆",71: "台湾",81: "香港",82: "澳门",91: "国外"};
    if (g.length == 15) {
        a = idCardUpdate(g)
    } else {
        a = g
    }
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}
function idCardUpdate(g) {
    var b;
    var f = /^(\d){15}$/;
    if (f.test(g)) {
        var e = 0;
        var a = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        var d = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
        g = g.substr(0, 6) + "19" + g.substr(6, g.length - 6);
        for (var c = 0; c < g.length; c++) {
            e += parseInt(g.substr(c, 1)) * a[c]
        }
        g += d[e % 11];
        b = g
    } else {
        b = "#"
    }
    return b
}
jQuery.validator.addMethod("checkBorth", function(e, c) {
    var b = e;
    if (b == "") {
        return true
    } else {
        var a = b.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (a == null) {
            return false
        }
        var f = new Date(a[1], a[3] - 1, a[4]);
        return (f.getFullYear() == a[1] && (f.getMonth() + 1) == a[3] && f.getDate() == a[4])
    }
}, "日期格式不合法");
jQuery.validator.addMethod("byteRangeLength", function(d, b, e) {
    var c = d.length;
    for (var a = 0; a < d.length; a++) {
        if (d.charCodeAt(a) > 127) {
            c++
        }
    }
    return this.optional(b) || (c >= e[0] && c <= e[1])
}, "length wrong");
jQuery.validator.addMethod("checkNameCharBlank", function(c, b, d) {
    var a = d.split("@");
    if ($("#" + a[1]).val() == "") {
        return true
    } else {
        if ($("#" + a[0]).val() == "1" || $("#" + a[0]).val() == "2") {
            return this.optional(b) || /^[a-zA-Z·.．\u4E00-\u9FA5]+$/.test(c)
        } else {
            return this.optional(b) || /^[a-z A-Z·.．\u4E00-\u9FA5]+$/.test(c)
        }
    }
}, "wrong name.");
jQuery.validator.addMethod("checkIdValidStr", function(c, b) {
    var a = /^[a-zA-Z0-9\_\-\(\)]+$/;
    return this.optional(b) || (a.test(c))
}, "wrong id");
jQuery.validator.addMethod("isSecIDCard", function(b, a, c) {
    if (!checkIfSecIdCard($(c).val())) {
        return true
    }
    return validateSecIdCard(b)
}, "wrong");
function checkIfSecIdCard(a) {
    if (a == "1") {
        return true
    }
    return false
}
function checkIfFirIdCard(a) {
    if (a == "2") {
        return true
    }
    return false
}
function checkCardForHKorTW(a) {
    if (a == "C" || a == "G") {
        return true
    }
    return false
}
jQuery.validator.addMethod("isFirIDCard", function(b, a, c) {
    if (!checkIfFirIdCard($(c).val())) {
        return true
    }
    return validateFirIdCard(b)
}, "wrong");
jQuery.validator.addMethod("checkHkongMacao", function(c, b, d) {
    if ($(d).val() == "C") {
        var a = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkTaiw", function(c, a, e) {
    if ($(e).val() == "G") {
        var d = /^[0-9]{8}$/;
        var b = /^[0-9]{10}$/;
        return this.optional(a) || (d.test(c)) || (b.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkPassport", function(d, b, e) {
    if ($(e).val() == "B") {
        var c = /^[a-zA-Z]*$/;
        if (c.test(d)) {
            return false
        }
        var a = /^[a-zA-Z0-9]{5,17}$/;
        return this.optional(b) || (a.test(d))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("isMobile", function(c, a) {
    var b = c.length;
    return this.optional(a) || (b == 11 && /^[0-9]+$/.test(c))
}, "wrong mobile phone ");
jQuery.validator.addMethod("isTelePhone", function(b, a) {
    var c = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}#)/;
    return this.optional(a) || (c.test(b))
}, "wrong telePhone ");
jQuery.validator.addMethod("illegalChar", function(c, b, e) {
    var d = true;
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62 || c.charCodeAt(a) == 34 || c.charCodeAt(a) == 63) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Illegal char wrong");
jQuery.validator.addMethod("isZipCode", function(c, b) {
    var a = /^[0-9]{6}$/;
    return this.optional(b) || (a.test(c))
}, "wrong zipcode");
jQuery.validator.addMethod("isEmail", function(c, a) {
    var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(a) || (b.test(trim(c)))
}, "wrong email");
function replaceChar(b) {
    var a = b.value.replace(/['"<> ?]/g, "");
    b.value = a
}
function checkNameChar1(a) {
    return /^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(a)
}
function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function ltrim(a) {
    return a.replace(/(^\s*)/g, "")
}
function rtrim(a) {
    return a.replace(/(\s*$)/g, "")
}
jQuery.validator.addMethod("validateName", function(b, a) {
    return this.optional(a) || /^[a-zA-Z\u4E00-\u9FA50-9\_]+$/.test(b)
}, "wrong username.");
jQuery.validator.addMethod("studentRequired", function(b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != ""
    }
    return true
}, "wrong studentRequired.");
jQuery.validator.addMethod("studentStationRequired", function(b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != "简拼/全拼/汉字" && trim(b) != ""
    }
    return true
}, "wrong studentStationRequired.");
jQuery.validator.addMethod("studentValidateName", function(b, a, c) {
    if ($(c).val() == "3") {
        return this.optional(a) || /^[a-zA-Z\u4E00-\u9FA50-9\_]+$/.test(b)
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkStudentName", function(b, a, c) {
    if ($(c).val() == "3") {
        if ((!b || trim(b) == "" || trim(b) == "简拼/全拼/汉字")) {
            return false
        }
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("isQuestionNull", function(b, a, c) {
    if (jQuery.trim(b) != "") {
        if (jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) == "" || jQuery.trim($(c[0]).val()) == "") {
            return false
        }
    }
    return true
}, "you should input the question");
jQuery.validator.addMethod("isAnswerNull", function(b, a, c) {
    if ((jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) != "") || (jQuery.trim($(c[0]).val()) != "")) {
        if (jQuery.trim(b) == "") {
            return false
        }
    }
    return true
}, "you should input the answer");
function checkSex(c, b, a) {
    if (!checkSexByCardId(c, b, a)) {
        if (!confirm("性别与身份证中的性别不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkSexByCardId(c, e, a) {
    function b(h, i) {
        var g = null;
        if (i.length == 15) {
            g = i.substring(14, 15)
        } else {
            if (i.length == 18) {
                g = i.substring(16, 17)
            } else {
                return true
            }
        }
        if (g == "x" || g == "X") {
            g = "10"
        }
        var f = parseInt(g);
        var j = f % 2;
        if (j === 0 && h === "F") {
            return true
        } else {
            if (j === 1 && h === "M") {
                return true
            } else {
                return false
            }
        }
    }
    var d = $(a).val();
    if (checkIfSecIdCard($(e).val()) && validateSecIdCard(d)) {
        if (d !== "") {
            return b(c, d)
        } else {
            return true
        }
    } else {
        if (checkIfFirIdCard($(e).val()) && validateFirIdCard(d)) {
            if (d !== "") {
                return b(c, d)
            } else {
                return true
            }
        } else {
            return true
        }
    }
}
function checkBirdDateByCardId(c, e, b) {
    var a = null;
    var d = $(b).val();
    if (checkIfSecIdCard($(e).val()) && d !== "" && validateSecIdCard(d)) {
        a = d.substring(6, 14)
    } else {
        if (checkIfFirIdCard($(e).val()) && d !== "" && validateFirIdCard(d)) {
            if (d.length == 15) {
                a = "19" + d.substring(6, 12)
            } else {
                if (d.length == 18) {
                    a = d.substring(6, 14)
                }
            }
        } else {
            return true
        }
    }
    if (c !== "") {
        c = c.replace(/-/g, "");
        if (c != a) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkBirdate(c, b, a) {
    if (!checkBirdDateByCardId(c, b, a)) {
        if (!confirm("出生日期与身份证中的出生日期不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
jQuery.validator.addMethod("checkPwdValidate", function(b, a) {
    return this.optional(a) || /(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$/.test(b)
}, "contain writespace");
jQuery.validator.addMethod("checkConfirmPassWard", function(b, a, c) {
    if ($(c).val() != null) {
        return $(c).val() == b
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("IVR_passwd_format", function(b, a) {
    var c = /^[0-9]{6}$/;
    return this.optional(a) || c.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkStation", function(b, a) {
    if ((!b || trim(b) == "" || trim(b) == "简拼/全拼/汉字" || trim(b) == "简拼/全拼/汉字或↑↓")) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkAnsyUserName", function(e, c, f) {
    var b = f[0];
    var d = $("#" + f[1]).val();
    var a = true;
    $.ajax({url: b + "?user_name=" + e,type: "get",async: false,success: function(g, h) {
            if (g.data == true) {
                a = false
            } else {
                a = true
            }
        },error: function(g, i, h) {
            a = false
        }});
    return a
}, "wrong cardNo");
function checkPwdRank(e, a, d) {
    var b = $(e);
    var c = b.val();
    if (c.length <= 6 || new RegExp("^[a-zA-Z]{6,}$").test(c) || new RegExp("^[0-9]{6,}$").test(c) || new RegExp("^[_]{6,}$").test(c)) {
        $("#" + a).attr("title", "危险");
        $("#" + d).html("危险");
        $("#" + a).removeClass("rank-a");
        $("#" + a).removeClass("rank-b");
        $("#" + a).removeClass("rank-c");
        $("#" + a).addClass("rank-a")
    } else {
        if (c.length > 6 && new RegExp("[a-zA-Z]").test(c) && new RegExp("[0-9]").test(c) && new RegExp("[_]").test(c)) {
            $("#" + a).attr("title", "安全");
            $("#" + d).html("安全");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-c")
        } else {
            $("#" + a).attr("title", "一般");
            $("#" + d).html("一般");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-b")
        }
    }
}
Array.prototype.unique = function() {
    var b = {}, a = this.length;
    for (var c = 0; c < a; c++) {
        if (typeof b[this[c]] == "undefined") {
            b[this[c]] = 1
        }
    }
    this.length = 0;
    a = 0;
    for (var c in b) {
        this[a++] = c
    }
    return this
};
function checkSearchPwdRank(h, c, g) {
    var e = $(h);
    var f = e.val();
    if (f.length < 6) {
        $("#" + c).attr("title", "危险");
        $("#" + g).html("危险");
        $("#" + c).removeClass("rank-a");
        $("#" + c).removeClass("rank-b");
        $("#" + c).removeClass("rank-c");
        $("#" + c).addClass("rank-a")
    } else {
        var a = [];
        for (var b = 0; b < 6; b++) {
            a.push(f.charAt(b))
        }
        a = a.unique();
        var d = a.length;
        if (d == 1) {
            $("#" + c).attr("title", "危险");
            $("#" + g).html("危险");
            $("#" + c).removeClass("rank-a");
            $("#" + c).removeClass("rank-b");
            $("#" + c).removeClass("rank-c");
            $("#" + c).addClass("rank-a")
        } else {
            if (d > 1 && d < 5) {
                $("#" + c).attr("title", "一般");
                $("#" + g).html("一般");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-b")
            } else {
                $("#" + c).attr("title", "安全");
                $("#" + g).html("安全");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-c")
            }
        }
    }
}
;
var login_messages = {randCodeError: "验证码错误!",randCodeLentgh: "验证码长度为4位!",randCodeFormat: "验证码只能由数字或字母组成!",randCodeEmpty: "验证码不能为空!",userNameEmpty: "登录名必须填写!",userNameFormat: "登录名格式不正确，请重新输入!",passwordEmpty: "密码必须填写,且不少于6位!",passwordLength: "密码长度不能少于6位!",loginError: "当前访问用户过多,请稍候重试!"};