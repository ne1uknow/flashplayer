/*
�޸ĵ�:
1��5������ѯ��Ϊ1������ѯ
*/
var station_names = "@bjb|������|VAP|beijingbei|bjb|0@bjd|������|BOP|beijingdong|bjd|1@bji|����|BJP|beijing|bj|2@bjn|������|VNP|beijingnan|bjn|3@bjx|������|BXP|beijingxi|bjx|4@gzn|������|IZQ|guangzhounan|gzn|5@cqb|���챱|CUW|chongqingbei|cqb|6@cqi|����|CQW|chongqing|cq|7@cqn|������|CRW|chongqingnan|cqn|8@gzd|���ݶ�|GGQ|guangzhoudong|gzd|9@sha|�Ϻ�|SHH|shanghai|sh|10@shn|�Ϻ���|SNH|shanghainan|shn|11@shq|�Ϻ�����|AOH|shanghaihongqiao|shhq|12@shx|�Ϻ���|SXH|shanghaixi|shx|13@tjb|���|TBP|tianjinbei|tjb|14@tji|���|TJP|tianjin|tj|15@tjn|�����|TIP|tianjinnan|tjn|16@tjx|�����|TXP|tianjinxi|tjx|17@cch|����|CCT|changchun|cc|18@ccn|������|CET|changchunnan|ccn|19@ccx|������|CRT|changchunxi|ccx|20@cdd|�ɶ���|ICW|chengdudong|cdd|21@cdn|�ɶ���|CNW|chengdunan|cdn|22@cdu|�ɶ�|CDW|chengdu|cd|23@csh|��ɳ|CSQ|changsha|cs|24@csn|��ɳ��|CWQ|changshanan|csn|25@fzh|����|FZS|fuzhou|fz|26@fzn|������|FYS|fuzhounan|fzn|27@gya|����|GIW|guiyang|gy|28@gzh|����|GZQ|guangzhou|gz|29@heb|������|HBB|haerbin|heb|30@hed|��������|VBB|harbindong|hebd|31@hex|��������|VAB|haerbinxi|hebx|32@hfe|�Ϸ�|HFH|hefei|hf|33@hhd|���ͺ��ض�|NDC|huhehaotedong|hhhtd|34@hht|���ͺ���|HHC|hohhot|hhht|35@hkd|���ڶ�|HMQ|haikoudong|hkd|36@hko|����|VUQ|haikou|hk|37@hzd|���ݶ�|HGH|hangzhoudong|hzd|38@hzh|����|HZH|hangzhou|hz|39@hzn|������|XHH|hangzhounan|hzn|40@jna|����|JNK|jinan|jn|41@jnd|���϶�|JAK|jinandong|jnd|42@jnx|������|JGK|jinanxi|jnx|43@kmi|����|KMM|kunming|km|44@kmx|������|KXM|kunmingxi|kmx|45@lsa|����|LSO|lasa|ls|46@lzd|���ݶ�|LVJ|lanzhoudong|lzd|47@lzh|����|LZJ|lanzhou|lz|48@lzx|������|LAJ|lanzhouxi|lzx|49@nch|�ϲ�|NCG|nanchang|nc|50@nji|�Ͼ�|NJH|nanjing|nj|51@njn|�Ͼ���|NKH|nanjingnan|njn|52@nni|����|NNZ|nanning|nn|53@sjb|ʯ��ׯ��|VVP|shijiazhuangbei|sjzb|54@sjz|ʯ��ׯ|SJP|shijiazhuang|sjz|55@sya|����|SYT|shenyang|sy|56@syb|������|SBT|shenyangbei|syb|57@syd|������|SDT|shenyangdong|syd|58@tyb|̫ԭ��|TBV|taiyuanbei|tyb|59@tyd|̫ԭ��|TDV|taiyuandong|tyd|60@tyu|̫ԭ|TYV|taiyuan|ty|61@wha|�人|WHN|wuhan|wh|62@wjx|����Ӫ��|KNM|wangjiayingxi|wjyx|63@wlq|��³ľ��|WMR|wulumuqi|wlmq|64@xab|������|EAY|xianbei|xab|65@xan|����|XAY|xian|xa|66@xan|������|CAY|xiannan|xan|67@xnx|������|XXO|xiningxi|xnx|68@ych|����|YIJ|yinchuan|yc|69@zzh|֣��|ZZF|zhengzhou|zz|70@aes|����ɽ|ART|aershan|aes|71@aka|����|AKY|ankang|ak|72@aks|������|ASR|akesu|aks|73@alh|�����|AHX|alihe|alh|74@alk|����ɽ��|AKR|alashankou|alsk|75@api|��ƽ|APT|anping|ap|76@aqi|����|AQH|anqing|aq|77@ash|��˳|ASW|anshun|as|78@ash|��ɽ|AST|anshan|as|79@aya|����|AYF|anyang|ay|80@ban|����|BAB|beian|ba|81@bbu|����|BBH|bengbu|bb|82@bch|�׳�|BCT|baicheng|bc|83@bha|����|BHZ|beihai|bh|84@bhe|�׺�|BEL|baihe|bh|85@bji|�׽�|BAP|baijian|bj|86@bji|����|BJY|baoji|bj|87@bji|����|BJB|binjiang|bj|88@bkt|����ͼ|BKX|bugt|bkt|89@bse|��ɫ|BIZ|baise|bs|90@bss|��ɽ��|HJL|baishanshi|bss|91@bta|��̨|BTT|beitai|bt|92@btd|��ͷ��|BDC|baotoudong|btd|93@bto|��ͷ|BTC|baotou|bt|94@bts|������|BXR|beitunshi|bts|95@bxi|��Ϫ|BXT|benxi|bx|96@byb|���ƶ���|BEC|bayanobo|byeb|97@byx|������|BXJ|baiyinxi|byx|98@bzh|����|BZH|bozhou|bz|99@cbi|���|CBN|chibi|cb|100@cde|����|VGQ|changde|cd|101@cde|�е�|CDP|chengde|cd|102@cdi|����|CDT|changdian|cd|103@cfe|���|CFD|chifeng|cf|104@cli|����|CDG|chaling|cl|105@cna|����|CEH|cangnan|cn|106@cpi|��ƽ|CPP|changping|cp|107@cre|����|CRG|chongren|cr|108@ctu|��ͼ|CTT|changtu|ct|109@ctz|��͡��|CDB|changtingzhen|ctz|110@cxi|����|CIJ|chongxin|cx|111@cxi|����|CXK|caoxian|cx|112@cxi|����|COM|chuxiong|cx|113@cxt|������|CXT|chenxiangtun|cxt|114@czb|���α�|CBF|changzhibei|czb|115@czh|����|CZJ|changzheng|cz|116@czh|����|IYH|chizhou|cz|117@czh|����|CZH|changzhou|cz|118@czh|����|CZQ|chenzhou|cz|119@czh|����|CZF|changzhi|cz|120@czh|����|COP|cangzhou|cz|121@czu|����|CZZ|chongzuo|cz|122@dab|�󰲱�|RNT|daanbei|dab|123@dch|���|DCT|dacheng|dc|124@ddo|����|DUT|dandong|dd|125@dfh|������|DFB|dongfanghong|dfh|126@dgd|��ݸ��|DMQ|dongguandong|dgd|127@dhs|��ɽ|DHD|dahushan|dhs|128@dhu|�ػ�|DHJ|dunhuang|dh|129@dhu|�ػ�|DHL|dunhua|dh|130@dhu|�»�|DHT|dehui|dh|131@djc|������|DJB|dongjingcheng|djc|132@dji|��|DFP|dajian|dj|133@djy|������|DDW|dujiangyan|djy|134@dlb|������|DFT|dalianbei|dlb|135@dli|����|DKM|dali|dl|136@dli|����|DLT|dalian|dl|137@dna|����|DNG|dingnan|dn|138@dqi|����|DZX|daqing|dq|139@dsh|��ʤ|DOC|dongsheng|ds|140@dsq|��ʯ��|DQT|dashiqiao|dsq|141@dto|��ͬ|DTV|datong|dt|142@dyi|��Ӫ|DPK|dongying|dy|143@dys|������|DUX|dayangshu|dys|144@dyu|����|RYW|duyun|dy|145@dzh|����|DOF|dengzhou|dz|146@dzh|����|RXW|dazhou|dz|147@dzh|����|DZP|dezhou|dz|148@ejn|�����|EJC|ejina|ejn|149@eli|����|RLC|erlian|el|150@esh|��ʩ|ESN|enshi|es|151@fcg|���Ǹ�|FEZ|fangchenggang|fcg|152@fdi|����|FES|fuding|fd|153@fld|�����|FLV|fenglingdu|fld|154@fli|����|FLW|fuling|fl|155@flj|��������|FRX|fulaerji|flej|156@fsb|��˳��|FET|fushunbei|fsb|157@fsh|��ɽ|FSQ|foshan|fs|158@fxi|����|FXD|fuxin|fx|159@fya|����|FYH|fuyang|fy|160@gem|���ľ|GRO|geermu|gem|161@gha|�㺺|GHW|guanghan|gh|162@gji|�Ž�|GJV|gujiao|gj|163@glb|���ֱ�|GBZ|guilinbei|glb|164@gli|����|GRX|gulian|gl|165@gli|����|GLZ|guilin|gl|166@gsh|��ʼ|GXN|gushi|gs|167@gsh|��ˮ|GSN|guangshui|gs|168@gta|����|GNJ|gantang|gt|169@gyu|��Ԫ|GYW|guangyuan|gy|170@gzb|���ݱ�|GBQ|guangzhoubei|gzb|171@gzh|����|GZG|ganzhou|gz|172@gzl|������|GLT|gongzhuling|gzl|173@gzn|��������|GBT|gongzhulingnan|gzln|174@han|����|AUH|huaian|ha|175@hbe|�ױ�|HMB|hebei|hb|176@hbe|����|HRH|huaibei|hb|177@hbi|����|HVN|huaibin|hb|178@hbi|�ӱ�|HBV|hebian|hb|179@hch|�괨|KCN|huangchuan|hc|180@hch|����|HCY|hancheng|hc|181@hda|����|HDP|handan|hd|182@hdz|�������|HDB|hengdaohezi|hdhz|183@hga|�׸�|HGB|hegang|hg|184@hgt|�ʹ���|HTT|huanggutun|hgt|185@hgu|���|HEM|hongguo|hg|186@hhe|�ں�|HJB|heihe|hh|187@hhu|����|HHQ|huaihua|hh|188@hko|����|HKN|hankou|hk|189@hld|��«��|HLD|huludao|hld|190@hle|������|HRX|hailaer|hle|191@hll|���ֹ���|HWD|huolinguole|hlgl|192@hlu|����|HLB|hailun|hl|193@hma|����|HMV|houma|hm|194@hmi|����|HMR|hami|hm|195@hna|����|HAH|huainan|hn|196@hna|����|HNB|huanan|hn|197@hnx|������|EUH|hainingxi|hnx|198@hqi|����|HQM|heqing|hq|199@hrb|���ᱱ|HBP|huairoubei|hrb|200@hro|����|HRP|huairou|hr|201@hsd|��ʯ��|OSN|huangshidong|hsd|202@hsh|��ɽ|HSY|huashan|hs|203@hsh|��ʯ|HSN|huangshi|hs|204@hsh|��ɽ|HKH|huangshan|hs|205@hsh|��ˮ|HSP|hengshui|hs|206@hya|����|HYQ|hengyang|hy|207@hzh|����|HXZ|hezhou|hz|208@hzh|����|HOY|hanzhong|hz|209@hzh|����|HCQ|huizhou|hz|210@jan|����|VAG|jian|ja|211@jan|����|JAL|jian|ja|212@jbc|���ߴ�|JBG|jiangbiancun|jbc|213@jch|����|JCF|jincheng|jc|214@jcj|��ǽ�|JJZ|jinchengjiang|jcj|215@jdz|������|JCG|jingdezhen|jdz|216@jfe|�η�|JFF|jiafeng|jf|217@jgq|�Ӹ����|JGX|jagdaqi|jgdq|218@jgs|����ɽ|JGG|jinggangshan|jgs|219@jhe|�Ժ�|JHL|jiaohe|jh|220@jhn|����|RNH|jinhuanan|jhn|221@jhx|����|JBH|jinhuaxi|jhx|222@jji|�Ž�|JJG|jiujiang|jj|223@jli|����|JLL|jilin|jl|224@jme|����|JMN|jingmen|jm|225@jms|��ľ˹|JMB|jiamusi|jms|226@jni|����|JIK|jining|jn|227@jnn|������|JAC|jiningnan|jnn|228@jqu|��Ȫ|JQJ|jiuquan|jq|229@jsh|��ɽ|JUH|jiangshan|js|230@jsh|����|JIQ|jishou|js|231@jta|��̨|JTL|jiutai|jt|232@jts|����ɽ|JVJ|jingtieshan|jts|233@jxi|����|JXB|jixi|jx|234@jxi|����|JKP|jixian|jx|235@jxx|��Ϫ��|JRH|jixixian|jxx|236@jyg|������|JGJ|jiayuguan|jyg|237@jyo|����|JFW|jiangyou|jy|238@jzh|����|JZD|jinzhou|jz|239@jzh|����|JZT|jinzhou|jz|240@kel|�����|KLR|kuerle|kel|241@kfe|����|KFF|kaifeng|kf|242@kla|��|KLV|kelan|kl|243@kli|����|KLW|kaili|kl|244@ksh|��ʲ|KSR|kashi|ks|245@ksn|��ɽ��|KNH|kunshannan|ksn|246@ktu|����|KTR|kuitun|kt|247@kyu|��ԭ|KYT|kaiyuan|ky|248@lan|����|UAH|luan|la|249@lba|�鱦|LBF|lingbao|lb|250@lcg|«����|UCH|luchaogang|lcg|251@lch|¡��|LCW|longchang|lc|252@lch|½��|LKZ|luchuan|lc|253@lch|����|LCN|lichuan|lc|254@lch|�ٴ�|LCG|linchuan|lc|255@lch|º��|UTP|lucheng|lc|256@lda|¹��|LDL|ludao|ld|257@ldi|¦��|LDQ|loudi|ld|258@lfe|�ٷ�|LFV|linfen|lf|259@lgz|����ׯ|LGP|lianggezhuang|lgz|260@lhe|�ٺ�|LHC|linhe|lh|261@lhe|���|LON|luohe|lh|262@lhu|�̻�|LWJ|lvhua|lh|263@lhu|¡��|UHP|longhua|lh|264@lji|����|LHM|lijiang|lj|265@lji|�ٽ�|LQL|linjiang|lj|266@lji|����|LJL|longjing|lj|267@lli|����|LHV|lvliang|ll|268@lli|����|LLG|liling|ll|269@lln|������|LKV|liulinnan|lln|270@lpi|��ƽ|UPP|luanping|lp|271@lps|����ˮ|UMW|liupanshui|lps|272@lqi|����|LVV|lingqiu|lq|273@lsh|��˳|LST|lvshun|ls|274@lxi|¤��|LXJ|longxi|lx|275@lxi|���|LEQ|lixian|lx|276@lxi|��Ϫ|LWH|lanxi|lx|277@lxi|����|UEP|linxi|lx|278@lya|����|LYQ|leiyang|ly|279@lya|����|LYF|luoyang|ly|280@lya|����|LYS|longyan|ly|281@lyd|������|LDF|luoyangdong|lyd|282@lyd|���Ƹ۶�|UKH|lianyungangdong|lygd|283@lyi|����|LVK|linyi|ly|284@lym|��������|LLF|luoyanglongmen|lylm|285@lyu|��԰|DHR|liuyuan|ly|286@lyu|��Դ|LYD|lingyuan|ly|287@lyu|��Դ|LYL|liaoyuan|ly|288@lzh|��־|LZX|lizhi|lz|289@lzh|����|LZZ|liuzhou|lz|290@lzh|����|LZD|liaozhong|lz|291@mch|���|MCN|macheng|mc|292@mdh|��ɺ�|MDX|mianduhe|mdh|293@mdj|ĵ����|MDB|mudanjiang|mdj|294@meg|Ī������|MRX|mordaga|medg|295@mgu|����|MHX|mangui|mg|296@mgu|����|MGH|mingguang|mg|297@mhe|Į��|MVX|mohe|mh|298@mji|÷��|MKQ|meijiang|mj|299@mmd|ï����|MDQ|maomingdong|mmd|300@mmi|ï��|MMZ|maoming|mm|301@msh|��ɽ|MSB|mishan|ms|302@msj|������|MJT|masanjia|msj|303@mwe|��β|VAW|mawei|mw|304@mya|����|MYW|mianyang|my|305@mzh|÷��|MOQ|meizhou|mz|306@mzl|������|MLX|manzhouli|mzl|307@nbd|������|NVH|ningbodong|nbd|308@nch|�ϲ�|NCB|nancha|nc|309@nch|�ϳ�|NCW|nanchong|nc|310@nda|�ϵ�|NDZ|nandan|nd|311@ndm|�ϴ���|NMP|nandamiao|ndm|312@nfe|�Ϸ�|NFT|nanfen|nf|313@nhe|ګ��|NHX|nehe|nh|314@nji|�۽�|NGX|nenjiang|nj|315@nji|�ڽ�|NJW|neijiang|nj|316@npi|��ƽ|NPS|nanping|np|317@nto|��ͨ|NUH|nantong|nt|318@nya|����|NFF|nanyang|ny|319@nzs|����ɽ|NZX|nianzishan|nzs|320@pds|ƽ��ɽ|PEN|pingdingshan|pds|321@pji|�̽�|PVD|panjin|pj|322@pli|ƽ��|PIJ|pingliang|pl|323@pln|ƽ����|POJ|pingliangnan|pln|324@pqu|ƽȪ|PQP|pingquan|pq|325@psh|ƺʯ|PSQ|pingshi|ps|326@pxi|Ƽ��|PXG|pingxiang|px|327@pxi|ƾ��|PXZ|pingxiang|px|328@pxx|ۯ����|PCW|pixianxi|pxx|329@pzh|��֦��|PRW|panzhihua|pzh|330@qch|ޭ��|QRN|qichun|qc|331@qcs|���ɽ|QSW|qingchengshan|qcs|332@qda|�ൺ|QDK|qingdao|qd|333@qhc|��ӳ�|QYP|qinghecheng|qhc|334@qji|ǭ��|QNW|qianjiang|qj|335@qji|����|QJM|qujing|qj|336@qjz|ǰ����|QEB|qianjinzhen|qjz|337@qqe|�������|QHX|qiqihaer|qqhe|338@qth|��̨��|QTB|qitaihe|qth|339@qxi|����|QVV|qinxian|qx|340@qzd|Ȫ�ݶ�|QRS|quanzhoudong|qzd|341@qzh|Ȫ��|QYS|quanzhou|qz|342@qzh|����|QEH|quzhou|qz|343@ran|�ڰ�|RAZ|rongan|ra|344@rjg|�����|RQJ|rujigou|rqg|345@rji|���|RJG|ruijin|rj|346@rzh|����|RZK|rizhao|rz|347@scp|˫�Ǳ�|SCB|shuangchengpu|scb|348@sfh|��Һ�|SFB|suifenhe|sfh|349@sgd|�عض�|SGQ|shaoguandong|sgd|350@shg|ɽ����|SHD|shanhaiguan|shg|351@shu|�绯|SHB|suihua|sh|352@sjf|���䷿|SFX|sanjianfang|sjf|353@sjt|�ռ���|SXT|sujiatun|sjt|354@sla|����|SLL|shulan|sl|355@smi|����|SMS|sanming|sm|356@smu|��ľ|OMY|shenmu|sm|357@smx|����Ͽ|SMF|sanmenxia|smx|358@sna|����|ONY|shangnan|sn|359@sni|����|NIW|suining|sn|360@spi|��ƽ|SPT|siping|sp|361@sqi|����|SQF|shangqiu|sq|362@sra|����|SRG|shangrao|sr|363@ssh|��ɽ|SSQ|shaoshan|ss|364@sso|����|OAH|susong|ss|365@sto|��ͷ|OTQ|shantou|st|366@swu|����|SWS|shaowu|sw|367@sxi|����|OEP|shexian|sx|368@sya|����|SEQ|sanya|sy|369@sya|����|SYQ|shaoyang|sy|370@sya|ʮ��|SNN|shiyan|sy|371@sys|˫Ѽɽ|SSB|shuangyashan|sys|372@syu|��ԭ|VYT|songyuan|sy|373@szh|����|SZQ|shenzhen|sz|374@szh|����|SZH|suzhou|sz|375@szh|����|SZN|suizhou|sz|376@szh|����|OXH|suzhou|sz|377@szh|˷��|SUV|shuozhou|sz|378@szx|������|OSQ|shenzhenxi|szx|379@tba|����|TBQ|tangbao|tb|380@teq|������|TVX|tarqi|teq|381@tgu|����|TGY|tongguan|tg|382@tgu|����|TGP|tanggu|tg|383@the|����|TXX|tahe|th|384@thu|ͨ��|THL|tonghua|th|385@tla|̩��|TLX|tailai|tl|386@tlf|��³��|TFR|tulufan|tlf|387@tli|ͨ��|TLD|tongliao|tl|388@tli|����|TLT|tieling|tl|389@tlz|������|TPT|taolaizhao|tlz|390@tme|ͼ��|TML|tumen|tm|391@tre|ͭ��|RDQ|tongren|tr|392@tsb|��ɽ��|FUP|tangshanbei|tsb|393@tsf|��ʦ��|TFT|tianshifu|tsf|394@tsh|̩ɽ|TAK|taishan|ts|395@tsh|��ˮ|TSJ|tianshui|ts|396@tsh|��ɽ|TSP|tangshan|ts|397@typ|ͨԶ��|TYT|tongyuanpu|tyb|398@tys|̫����|TQT|taiyangsheng|tys|399@tzh|̩��|UTH|taizhou|tz|400@tzi|ͩ��|TZW|tongzi|tz|401@tzx|ͨ����|TAP|tongzhouxi|tzx|402@wch|�峣|WCB|wuchang|wc|403@wch|���|WCN|wuchang|wc|404@wfd|�߷���|WDT|wafangdian|wfd|405@wha|����|WKK|weihai|wh|406@whu|�ߺ�|WHH|wuhu|wh|407@whx|�ں���|WXC|wuhaixi|whx|408@wjt|�����|WJT|wujiatun|wjt|409@wlo|��¡|WLW|wulong|wl|410@wlt|��������|WWT|ulanhot|wlht|411@wna|μ��|WNY|weinan|wn|412@wsh|����|WSM|weishe|ws|413@wts|��ͷɽ|WIT|waitoushan|wts|414@wwe|����|WUJ|wuwei|ww|415@wwn|������|WWJ|wuweinan|wwn|416@wxi|����|WXH|wuxi|wx|417@wxi|����|WXR|wuxi|wx|418@wyl|������|WPB|wuyiling|wyl|419@wys|����ɽ|WAS|wuyishan|wys|420@wyu|��Դ|WYY|wanyuan|wy|421@wzh|����|WYW|wanzhou|wz|422@wzh|����|WZZ|wuzhou|wz|423@wzh|����|RZH|wenzhou|wz|424@wzn|������|VRH|wenzhounan|wzn|425@xch|����|ECW|xichang|xc|426@xch|���|XCF|xuchang|xc|427@xcn|������|ENW|xichangnan|xcn|428@xfa|�㷻|XFB|xiangfang|xf|429@xga|����|XGV|xuangang|xg|430@xgu|�˹�|EUG|xingguo|xg|431@xha|����|XHY|xuanhan|xh|432@xhu|�»�|EFQ|xinhui|xh|433@xhu|�»�|XLQ|xinhuang|xh|434@xlt|���ֺ���|XTC|xilinhaote|xlht|435@xlx|��¡��|EXP|xinglongxian|xlx|436@xmb|���ű�|XKS|xiamenbei|xmb|437@xme|����|XMS|xiamen|xm|438@xmq|���Ÿ���|XBS|xiamengaoqi|xmgq|439@xsh|��ɽ|ETW|xiushan|xs|440@xsh|С��|XST|xiaoshi|xs|441@xta|����|XTG|xiangtang|xt|442@xwe|����|XWM|xuanwei|xw|443@xxi|����|XXF|xinxiang|xx|444@xya|����|XUN|xinyang|xy|445@xya|����|XYY|xianyang|xy|446@xya|����|XFN|xiangyang|xy|447@xyc|������|XYT|xiongyuecheng|xyc|448@xyi|����|XRZ|xingyi|xy|449@xyi|����|VIH|xinyi|xy|450@xyu|����|XUG|xinyu|xy|451@xzh|����|XCH|xuzhou|xz|452@yan|�Ӱ�|YWY|yanan|ya|453@ybi|�˱�|YBW|yibin|yb|454@ybn|�ǲ�����|YWB|yabulinan|ybln|455@ybs|Ҷ����|YBD|yebaishou|ybs|456@ycd|�˲���|HAN|yichangdong|ycd|457@ych|����|YCW|yongchuan|yc|458@ych|�˴�|YCG|yichun|yc|459@ych|�˲�|YCN|yichang|yc|460@ych|�γ�|AFH|yancheng|yc|461@ych|�˳�|YNV|yuncheng|yc|462@ych|����|YCB|yichun|yc|463@yci|�ܴ�|YCV|yuci|yc|464@ycu|���|YBP|yangcun|yc|465@yes|����ʩ|YET|yirshi|yes|466@yga|���|YGW|yangang|yg|467@yji|����|YIV|yongji|yj|468@yji|�Ӽ�|YJL|yanji|yj|469@yko|Ӫ��|YKT|yingkou|yk|470@yks|����ʯ|YKX|yakeshi|yks|471@yli|����|YNY|yanliang|yl|472@yli|����|YLZ|yulin|yl|473@yli|����|ALY|yulin|yl|474@ymp|һ����|YPB|yimianpo|ymp|475@yni|����|YMR|yining|yn|476@ypg|��ƽ��|YAY|yangpingguan|ypg|477@ypi|����|YZW|yuping|yp|478@ypi|ԭƽ|YPV|yuanping|yp|479@yqi|����|YNP|yanqing|yq|480@yqq|��Ȫ��|YYV|yangquanqu|yqq|481@yqu|��Ȫ|YQB|yuquan|yq|482@yqu|��Ȫ|AQP|yangquan|yq|483@ysh|��ɽ|YNG|yushan|ys|484@ysh|Ӫɽ|NUW|yingshan|ys|485@ysh|��ɽ|AOP|yanshan|ys|486@ysh|����|YRT|yushu|ys|487@yta|ӥ̶|YTG|yingtan|yt|488@yta|��̨|YAK|yantai|yt|489@yth|��ͼ���|YEX|yitulihe|ytlh|490@ytx|������|ATP|yutianxian|ytx|491@ywu|����|YWH|yiwu|yw|492@yxi|����|YON|yangxin|yx|493@yxi|����|YXD|yixian|yx|494@yya|����|AEQ|yiyang|yy|495@yya|����|YYQ|yueyang|yy|496@yzh|����|AOQ|yongzhou|yz|497@yzh|����|YLH|yangzhou|yz|498@zbo|�Ͳ�|ZBK|zibo|zb|499@zcd|��ǵ�|ZDV|zhenchengdi|zcd|500@zgo|�Թ�|ZGW|zigong|zg|501@zha|�麣|ZHQ|zhuhai|zh|502@zhb|�麣��|ZIQ|zhuhaibei|zhb|503@zji|տ��|ZJZ|zhanjiang|zj|504@zji|��|ZJH|zhenjiang|zj|505@zjj|�żҽ�|DIQ|zhangjiajie|zjj|506@zjk|�żҿ�|ZKP|zhangjiakou|zjk|507@zjn|�żҿ���|ZMP|zhangjiakounan|zjkn|508@zko|�ܿ�|ZKN|zhoukou|zk|509@zlm|����ľ|ZLC|zhelimu|zlm|510@zlt|������|ZTX|zhalantun|zlt|511@zmd|פ���|ZDN|zhumadian|zmd|512@zqi|����|ZVQ|zhaoqing|zq|513@zsz|��ˮ��|ZIT|zhoushuizi|zsz|514@zto|��ͨ|ZDW|zhaotong|zt|515@zwe|����|ZWJ|zhongwei|zw|516@zya|����|ZYW|ziyang|zy|517@zyi|����|ZIW|zunyi|zy|518@zzh|��ׯ|ZEK|zaozhuang|zz|519@zzh|����|ZZW|zizhong|zz|520@zzh|����|ZZQ|zhuzhou|zz|521@zzx|��ׯ��|ZFK|zaozhuangxi|zzx|522@aax|����Ϫ|AAX|angangxi|aax|523@ach|����|ACB|acheng|ac|524@ada|����|ADX|anda|ad|525@adi|����|ADP|anding|ad|526@agu|����|AGT|anguang|ag|527@ahe|����|AHP|aihe|ah|528@ahu|����|PKQ|anhua|ah|529@ajc|���Ҵ�|AJJ|aijiacun|ajc|530@aji|����|ARH|aojiang|aj|531@aji|����|AJB|anjia|aj|532@aji|����|AJD|ajin|aj|533@akt|������|AER|aketao|akt|534@aky|����Ҥ|AYY|ankouyao|aky|535@alg|��������|ALD|aolibugao|albg|536@alo|����|AUZ|anlong|al|537@als|����ɽ|ASX|alongshan|als|538@alu|��½|ALN|anlu|al|539@ame|��ľ��|JTX|amuer|ame|540@anz|����ׯ|AZM|ananzhuang|anz|541@aqx|������|APH|anqingxi|aqx|542@asx|��ɽ��|AXT|anshanxi|asx|543@ata|����|ATV|antang|at|544@atb|��ͤ��|ASH|antingbei|atb|545@ats|��ͼʲ|ATR|atushi|ats|546@atu|��ͼ|ATL|antu|at|547@axi|��Ϫ|AXS|anxi|ax|548@bao|����|BWQ|boao|ba|549@bbg|�ױڹ�|BGV|baibiguan|bbg|550@bbn|������|BMH|bengbunan|bbn|551@bch|�ͳ�|BCR|bachu|bc|552@bch|���|BUP|bancheng|bc|553@bdh|������|BEP|beidaihe|bdh|554@bdi|����|BDP|baoding|bd|555@bdi|����|BPP|baodi|bd|556@bdl|�˴���|ILP|badaling|bdl|557@bdo|�Ͷ�|BNN|badong|bd|558@bgu|�ع�|BGM|baiguo|bg|559@bha|����|BUT|buhai|bh|560@bhd|�׺Ӷ�|BIY|baihedong|bhd|561@bho|�ں�|BVC|benhong|bh|562@bhs|����ɽ|BWH|baohuashan|bhs|563@bhx|�׺���|BEY|baihexian|bhx|564@bjg|��ܸ��|BJJ|baijigou|bjg|565@bjg|�̼���|BJM|bijiguan|bjg|566@bji|����|IBQ|beijiao|b|567@bji|�̽�|BLQ|bijiang|bj|568@bjp|�׼���|BBM|baijipo|bjp|569@bjs|�ʼ�ɽ|BSB|bijiashan|bjs|570@bjt|�˽�̨|BTD|bajiaotai|bjt|571@bka|����|BKD|baokang|bk|572@bkp|�׿���|BKB|baikuipu|bkb|573@bla|����|BAT|bailang|bl|574@bla|����|BRZ|bailang|bl|575@ble|����|BOR|bole|bl|576@blg|������|BQC|baolage|blg|577@bli|����|BLX|balin|bl|578@bli|����|BNB|baolin|bl|579@bli|����|BOZ|beiliu|bl|580@bli|����|BLB|boli|bl|581@blk|���п�|BLR|buliekai|blk|582@bls|����ɽ|BND|baolongshan|bls|583@bmc|�����|BMD|bamiancheng|bmc|584@bmq|��è��|BNM|banmaoqing|bmj|585@bmt|����ͨ|BMB|bamiantong|bmt|586@bmz|����Ȧ��|BRP|beimajuanzi|bmqz|587@bpn|��Ʊ��|RPD|beipiaonan|bpn|588@bqi|����|BQP|baiqi|bq|589@bql|��Ȫ��|BQB|baoquanling|bql|590@bqu|��Ȫ|BQL|baiquan|bq|591@bsh|��ɳ|BSW|baisha|bs|592@bsh|��ɽ|BAY|bashan|bs|593@bsj|��ˮ��|BSY|baishuijiang|bsj|594@bsp|��ɳ��|BPM|baishapo|bsp|595@bss|��ʯɽ|BAL|baishishan|bss|596@bsz|��ˮ��|BUM|baishuizhen|bsz|597@bti|����|BTQ|bantian|bt|598@bto|��ͷ|BZP|botou|bt|599@btu|����|BYP|beitun|bt|600@bxh|��Ϫ��|BHT|benxihu|bxh|601@bxi|����|BXK|boxing|bx|602@bxt|����Ͳ|VXD|baxiantong|bxt|603@byg|�������|BYC|bayanqagan|bycg|604@byh|�����|BYB|beiyinhe|byh|605@byi|��Ӫ|BIV|beiying|by|606@byl|�������|BAC|bayangol|bygl|607@byl|��������|BID|baiyintala|bytl|608@byq|����Ȧ|BYT|bayuquan|byq|609@bys|������|BNJ|baiyinshi|bys|610@bys|������˶|BCD|baiyinhushuo|byhs|611@bzh|����|IEW|bazhong|bz|612@bzh|����|RMP|bazhou|bz|613@bzh|��լ|BVP|beizhai|bz|614@cbb|��ڱ�|CIN|chibibei|cbb|615@cbg|�鲼��|CBC|chabuga|cbg|616@cch|����|CEJ|changcheng|cc|617@cch|����|CCM|changchong|cc|618@cdd|�е¶�|CCP|chengdedong|cdd|619@cfx|�����|CID|chifengxi|cfx|620@cga|�ϸ�|CAX|cuogang|cg|621@cga|���|CGT|chaigang|cg|622@cge|����|CEF|changge|cg|623@cgp|�񹵱�|CGV|chaigoupu|cgb|624@cgu|�ǹ�|CGY|chenggu|cg|625@cgy|�¹�Ӫ|CAJ|chenguanying|cgy|626@cgz|�ɸ���|CZB|chenggaozi|cgz|627@cha|�ݺ�|WBW|caohai|ch|628@che|���|CHB|chaihe|ch|629@che|���|CHZ|ceheng|ch|630@chk|�ݺӿ�|CKT|caohekou|chk|631@chk|�޻ƿ�|CHP|cuihuangkou|chk|632@chu|����|CIH|chaohu|ch|633@cjg|�̼ҹ�|CJT|caijiagou|cjg|634@cjh|�ɼ�˼��|CJX|qinggishan|cjsh|635@cji|��|CAM|chajiang|cj|636@cjp|�̼���|CJY|caijiapo|cjp|637@cko|�׿�|CKK|cangkou|ck|638@cle|����|CLK|changle|cl|639@clg|������|CYP|chaolianggou|clg|640@cli|����|CUQ|cili|cl|641@cli|����|CLP|changli|cl|642@clz|������|CLT|changlingzi|clz|643@cmi|����|CMB|chenming|cm|644@cno|��ũ|CNJ|changnong|cn|645@cpb|��ƽ��|VBP|changpingbei|cpb|646@cpi|��ƽ|DAQ|changping|cp|647@cpl|������|CPM|changpoling|cpl|648@cqi|����|CQB|chenqing|cq|649@csh|��ɽ|CSB|chushan|cs|650@csh|����|EFW|changshou|cs|651@csh|��ɽ|CSP|cishan|cs|652@csh|��ʯ|CST|cangshi|cs|653@csh|����|CSL|caoshi|cs|654@csq|������|CSC|chasuqi|csq|655@cst|��ɽ��|CVT|changshantun|cst|656@cti|��͡|CES|changting|ct|657@ctx|��ͼ��|CPT|changtuxi|ctx|658@cwa|����|CQQ|chunwan|cw|659@cxi|����|CIP|cixian|cx|660@cxi|�Ϫ|CNZ|cenxi|cx|661@cxi|��Ϫ|CXQ|chenxi|cx|662@cxi|����|CRP|cixi|cx|663@cxn|������|CFH|changxingnan|cxn|664@cya|��Ҥ|CYK|ciyao|cy|665@cya|����|CYD|chaoyang|cy|666@cya|����|CAL|chunyang|cy|667@cya|����|CEK|chengyang|cy|668@cyc|��ҵ��|CEX|chuangyecun|cyc|669@cyc|������|CYL|chaoyangchuan|cyc|670@cyd|������|CDD|chaoyangdi|cyd|671@cyu|��ԫ|CYF|changyuan|cy|672@cyz|������|CZL|chaoyangzhen|cyz|673@czb|���ݱ�|CUH|chuzhoubei|czb|674@czb|���ݱ�|ESH|changzhoubei|czb|675@czh|����|CXH|chuzhou|cz|676@czh|����|CKQ|chaozhou|cz|677@czh|��ׯ|CVK|changzhuang|cz|678@czl|������|CFP|caozili|czl|679@czw|��ת��|CWM|chezhuanwan|czw|680@czx|������|ICQ|chenzhouxi|czx|681@czx|������|CBP|cangzhouxi|czx|682@dan|�°�|DAG|dean|da|683@dan|��|RAT|daan|da|684@dan|����|DAZ|dongan|da|685@dba|���|DBJ|daba|db|686@dba|���|DBC|daban|db|687@dba|���|DBD|daba|db|688@dba|����|RBT|daobao|db|689@dbi|����|DYJ|dingbian|db|690@dbj|���߾�|DBB|dongbianjing|dbj|691@dbs|�²�˹|RDT|debosi|dbs|692@dcg|���|DGJ|dachaigou|dcg|693@dch|�²�|DVW|dechang|dc|694@dda|�ε�|DDB|didao|dd|695@dde|���|DEM|dade|dd|696@ddg|���㹵|DKJ|dadenggou|ddg|697@ded|������|DRD|daoerdeng|ded|698@dee|�ö�����|DRX|derbur|debe|699@dfa|����|UFQ|dongfang|df|700@dfe|����|DGY|danfeng|df|701@dfe|����|DIL|dongfeng|df|702@dge|����|DMM|duge|dg|703@dgt|�����|DTT|daguantun|dgt|704@dgu|���|RGW|daguan|dg|705@dgu|����|DGP|dongguang|dg|706@dha|����|DHB|donghai|dh|707@dhc|��ҳ�|DHP|dahuichang|dhc|708@dhq|�����|DQD|dahongqi|dhq|709@dhx|������|DQH|donghaixian|dhx|710@dhx|�»���|DXT|dehuixi|dhx|711@djg|��ҹ�|DJT|dajiagou|djg|712@dji|����|DKB|dongjin|dj|713@dji|�ż�|DJL|dujia|dj|714@djz|���ׯ|DJM|dajiuzhuang|djz|715@dkt|�����|DKP|dakoutun|dkt|716@dla|����|RVD|donglai|dl|717@dlh|�����|DHO|delingha|dlh|718@dlh|��½��|DLC|daluhao|dlh|719@dli|����|DLB|dailing|dl|720@dli|����|DLD|dalin|dl|721@dlq|��������|DIC|dalateqi|dltq|722@dlt|������|DTX|dulitun|dlt|723@dlu|����|DLV|douluo|dl|724@dlx|��������|DNC|dalatexi|dltx|725@dmc|������|DMD|dongmingcun|dmc|726@dmh|�����|DEP|dongmiaohe|dmh|727@dmx|������|DNF|dongmingxian|dmx|728@dni|����|DNZ|dani|dn|729@dpf|��ƽ��|DPD|dapingfang|dpf|730@dps|����ʯ|RPP|dapanshi|dps|731@dpu|����|DPI|dapu|dp|732@dpu|��|DVT|dapu|db|733@dqh|��������|DQX|daqilaha|dqlh|734@dqi|����|DML|daoqing|dq|735@dqs|����ɽ|DQB|duiqingshan|dqs|736@dqx|������|MOH|deqingxi|dqx|737@dqx|������|RHX|daqingxi|dqx|738@dsh|����|DRQ|dongsheng|ds|739@dsh|��ɽ|RWW|dushan|ds|740@dsh|�ɽ|DKH|dangshan|ds|741@dsh|��ɳ��|DWT|dengshahe|dsh|742@dsp|������|DPM|dushupu|dsp|743@dst|��ʯͷ|DSL|dashitou|dst|744@dsx|��ʤ��|DYC|dongshengxi|dsx|745@dsz|��ʯկ|RZT|dashizhai|dsz|746@dta|��̨|DBH|dongtai|dt|747@dta|����|DQK|dingtao|dt|748@dta|����|DGT|dengta|dt|749@dtb|�����|DBM|datianbian|dtb|750@dth|��ͨ��|DTL|dongtonghua|dth|751@dtu|��ͽ|RUH|dantu|dt|752@dtu|����|DNT|datun|dt|753@dwa|����|DRJ|dongwan|dw|754@dwk|�����|DFJ|dawukou|dwk|755@dwp|������|DWJ|diwopu|dwp|756@dwt|����̲|DZZ|dawangtan|dwt|757@dwz|������|DFM|dawanzi|dwz|758@dxg|���˹�|DXL|daxinggou|dxg|759@dxi|����|DXX|daxing|dx|760@dxi|����|DSJ|dingxi|dx|761@dxi|����|DXM|dianxin|dx|762@dxi|����|DXG|dongxiang|dx|763@dxi|����|DKV|daixian|dx|764@dxi|����|DXV|dingxiang|dx|765@dxu|����|RXP|dongxu|dx|766@dxz|����ׯ|DXD|dongxinzhuang|dxz|767@dya|����|DYH|danyang|dy|768@dya|����|DYX|dayan|dy|769@dya|����|DYW|deyang|dy|770@dya|����|DYN|dangyang|dy|771@dyb|������|EXH|danyangbei|dyb|772@dyd|��Ӣ��|IAW|dayingdong|dyd|773@dyd|���ٵ�|DBV|dongyudi|dyd|774@dyi|��Ӫ|DYV|daying|dy|775@dyu|��Զ|EWH|dingyuan|dy|776@dyu|���|RYV|daiyue|dy|777@dyu|��Ԫ|DYZ|dayuan|dy|778@dyz|��Ӫ��|DJP|dayingzhen|dyz|779@dyz|��Ӫ��|DZD|dayingzi|dyz|780@dzc|��ս��|DTJ|dazhanchang|dzc|781@dzd|���ݶ�|DIP|dezhoudong|dzd|782@dzh|��ׯ|DVQ|dizhuang|dz|783@dzh|����|DNV|dongzhen|dz|784@dzh|����|DFZ|daozhou|dz|785@dzh|����|DCH|dongzhi|dz|786@dzh|��ׯ|DZV|dongzhuang|dz|787@dzh|����|DWV|duizhen|dz|788@dzh|��ׯ|ROP|douzhuang|dz|789@dzh|����|DXP|dingzhou|dz|790@dzy|����԰|DZY|dazhuyuan|dzy|791@dzz|������|DAP|dazhangzi|dzz|792@dzz|����ׯ|RZP|douzhangzhuang|dzz|793@ebi|���|EBW|ebian|eb|794@edm|��������|RDP|erdaogoumen|edgm|795@edw|������|RDX|erdaowan|edw|796@elo|����|RLD|erlong|el|797@elt|����ɽ��|ELA|erlongshantun|elst|798@eme|��ü|EMW|emei|em|799@emh|���ܺ�|RML|ermihe|emh|800@eyi|��Ӫ|RYJ|erying|ey|801@ezh|����|ECN|ezhou|ez|802@fan|����|FAS|fuan|fa|803@fch|����|FAZ|fangcheng|fc|804@fch|���|FCG|fengcheng|fc|805@fcn|�����|FNG|fengchengnan|fcn|806@fdo|�ʶ�|FIH|feidong|fd|807@fer|����|FEM|faer|fe|808@fha|����|FHX|fuhai|fh|809@fha|����|FHR|fuhai|fh|810@fhc|��˳�|FHT|fenghuangcheng|fhc|811@fhu|�|FHH|fenghua|fh|812@fji|����|FIB|fujin|fj|813@fjt|������|FTT|fanjiatun|fjt|814@flt|������|FTB|fulitun|flt|815@flz|������|FZB|fenglezhen|flz|816@fna|����|FNH|funan|fn|817@fni|����|AKH|funing|fn|818@fni|����|FNP|funing|fn|819@fqi|����|FQS|fuqing|fq|820@fqu|��Ȫ|VMW|fuquan|fq|821@fsc|��ˮ��|FSJ|fengshuicun|fsc|822@fsh|��˳|FUQ|fengshun|fs|823@fsh|����|FSV|fanshi|fs|824@fsh|��˳|FST|fushun|fs|825@fsk|��ɽ��|FKP|fushankou|fsk|826@fsu|����|FSZ|fusui|fs|827@ftu|����|FTX|fengtun|ft|828@fty|��ͼ��|FYP|futuyu|fty|829@fxd|���ض�|FDY|fuxiandong|fxd|830@fxi|����|FXY|fengxian|fx|831@fxi|����|FEY|fuxian|fx|832@fxi|����|FXK|feixian|fx|833@fya|����|FUH|fengyang|fy|834@fya|����|FAV|fenyang|fy|835@fyb|���౱|FBT|fuyubei|fyb|836@fyi|����|FYG|fenyi|fy|837@fyu|��Դ|FYM|fuyuan|fy|838@fyu|����|FYT|fuyu|fy|839@fyu|��ԣ|FYX|fuyu|fy|840@fzb|���ݱ�|FBG|fuzhoubei|fzb|841@fzh|����|FZY|fengzhou|fz|842@fzh|����|FZC|fengzhen|fz|843@fzh|����|VZK|fanzhen|fz|844@gan|�̰�|GFP|guan|ga|845@gan|�㰲|VJW|guangan|ga|846@gbd|�߱���|GBP|gaobeidian|gbd|847@gbz|������|GBD|goubangzi|gbz|848@gcd|�ʲݵ�|GDJ|gancaodian|gcd|849@gch|�ȳ�|GCN|gucheng|gc|850@gch|޻��|GEP|gaocheng|gc|851@gcu|�ߴ�|GCV|gaocun|gc|852@gcz|�ų���|GZB|guchengzhen|gcz|853@gde|���|GRH|guangde|gd|854@gdi|��|GTW|guiding|gd|855@gdn|����|IDW|guidingnan|gdn|856@gdo|�Ŷ�|GDV|gudong|gd|857@gga|���|GGZ|guigang|gg|858@gga|�ٸ�|GVP|guangao|gg|859@ggm|�����|GGT|gegenmiao|ggm|860@ggo|�ɹ�|GGL|gangou|gg|861@ggu|�ʹ�|GGJ|gangu|gg|862@ggz|�߸�ׯ|GGP|gaogezhuang|ggz|863@ghe|�ʺ�|GAX|ganhe|gh|864@ghe|����|GEX|genhe|gh|865@gjd|���ҵ�|GDT|guojiadian|gjd|866@gjz|�¼���|GKT|gujiazi|gjz|867@gla|����|GLJ|gulang|gl|868@gla|����|GEJ|gaolan|gl|869@glf|��¥��|GFM|gaoloufang|glf|870@glh|������|GHT|guiliuhe|glh|871@gli|����|GLF|guanlin|gl|872@glu|����|VOW|ganluo|gl|873@glz|����ׯ|GLP|guoleizhuang|glz|874@gmi|����|GMK|gaomi|gm|875@gmz|������|GMC|gongmiaozi|gmz|876@gnh|��ũ��|GRT|gongnonghu|gnh|877@gns|������|GNT|guangningsi|gns|878@gnw|������|GNM|guangnanwei|gnw|879@gpi|��ƽ|GPF|gaoping|gp|880@gqb|��Ȫ��|GEY|ganquanbei|gqb|881@gqc|�����|GAG|gongqingcheng|gqc|882@gqk|���쿨|GQD|ganqika|gqk|883@gqu|��Ȫ|GQY|ganquan|gq|884@gqz|������|GZD|gaoqiaozhen|gqz|885@gsh|��ˮ|GSW|ganshui|gs|886@gsh|��ˮ|GST|guanshui|gs|887@gsk|��ɽ��|GSP|gushankou|gsk|888@gso|����|GSL|guosong|gs|889@gsz|��ɽ��|GSD|gaoshanzi|gsz|890@gsz|��ʲ����|GXD|gashidianzi|gsdz|891@gta|��̨|GTJ|gaotai|gt|892@gta|��̲|GAY|gaotan|gt|893@gti|����|GTS|gutian|gt|894@gti|����|GTP|guanting|gt|895@gto|��ͨ|GOM|guangtong|gt|896@gtx|������|KEP|guantingxi|gtx|897@gxi|��Ϫ|GXG|guixi|gx|898@gya|����|GYH|guoyang|gy|899@gyi|����|GXF|gongyi|gy|900@gyi|����|GIP|gaoyi|gy|901@gyn|������|GYF|gongyinan|gyn|902@gyu|��ԭ|GUJ|guyuan|gy|903@gyu|��԰|GYL|guyuan|gy|904@gyz|��Ӫ��|GYD|gongyingzi|gyz|905@gze|����|GZS|guangze|gz|906@gzh|����|GNQ|guzhen|gz|907@gzh|����|GZJ|guazhou|gz|908@gzh|����|GSQ|gaozhou|gz|909@gzh|����|GEH|guzhen|gz|910@gzh|����|GXT|gaizhou|gz|911@gzj|���־�|GOT|guanzijing|gzj|912@gzp|����|GZT|gezhenpu|gzb|913@gzs|����ɽ|GSS|guanzhishan|gzs|914@gzx|������|GAT|gaizhouxi|gzx|915@han|�찲|HWN|hongan|ha|916@han|������|AMH|huaiannan|han|917@hax|�찲��|VXN|honganxi|hax|918@hax|������|HIH|haianxian|hax|919@hba|�ư�|HBL|huangbai|hb|920@hbe|����|HEB|haibei|hb|921@hbi|�ױ�|HAF|hebi|hb|922@hch|����|VCQ|huacheng|hc|923@hch|�ϴ�|WKW|hechuan|hc|924@hch|�Ӵ�|HCZ|hechun|hc|925@hch|����|HCN|hanchuan|hc|926@hch|����|HCT|haicheng|hc|927@hct|�ڳ�̲|HCJ|heichongtan|hct|928@hcu|�ƴ�|HCP|huangcun|hc|929@hcx|������|HXT|haichengxi|hcx|930@hde|����|HGC|huade|hd|931@hdo|�鶴|HDV|hongdong|hd|932@hfe|���|HFG|hengfeng|hf|933@hfw|������|HXJ|hanfuwan|hfw|934@hgu|����|HGP|hangu|hg|935@hgy|�ƹ�԰|HYM|huangguayuan|hgy|936@hgz|�����|IGW|hongguangzhen|hgz|937@hhe|���|HHT|hunhe|hh|938@hhg|�컨��|VHD|honghuagou|hhg|939@hht|�ƻ�Ͳ|HUD|huanghuatong|hht|940@hjd|�ؼҵ�|HJJ|hejiadian|hjd|941@hji|�;�|HJR|hejing|hj|942@hji|�콭|HFM|hongjiang|hj|943@hji|�ھ�|HIM|heijing|hj|944@hji|���|HJF|huojia|hj|945@hji|�ӽ�|HJV|hejin|hj|946@hji|����|HJS|hanjiang|hj|947@hji|����|HJT|huajia|hj|948@hjx|�Ӽ���|HXP|hejianxi|hjx|949@hjz|����ׯ|HJM|huajiazhuang|hjz|950@hkn|�ӿ���|HKJ|hekounan|hkn|951@hko|�ƿ�|KOH|huangkou|hk|952@hko|����|HKG|hukou|hk|953@hla|����|HUB|hulan|hl|954@hlb|��«����|HPD|huludaobei|hldb|955@hlh|������|HHB|haolianghe|hlh|956@hlh|������|HIT|halahai|hlh|957@hli|����|HOB|heli|hl|958@hli|����|HIB|hualin|hl|959@hli|����|ULY|huangling|hl|960@hli|����|HRB|hailin|hl|961@hli|����|VLB|hulin|hl|962@hli|����|HAT|hanling|hl|963@hlo|����|HLL|helong|hl|964@hlo|����|HIL|hailong|hl|965@hls|������|HAX|harus|hls|966@hlt|��³˹̫|VTJ|hulstai|hlst|967@hlz|����կ|HLT|huolianzhai|hlz|968@hme|��÷|VEH|huangmei|hm|969@hmt|�����|HMT|hamatang|gmt|970@hmy|����Ӫ|HYP|hanmaying|hmy|971@hnh|�����|HHL|huangnihe|hnh|972@hni|����|HNH|haining|hn|973@hno|��ũ|HMJ|huinong|hn|974@hpi|��ƽ|VAQ|heping|hp|975@hpz|������|HZM|huapengzi|hpz|976@hqi|����|VQH|huaqiao|hq|977@hqi|����|HEY|hongqing|hq|978@hre|����|HRV|huairen|hr|979@hro|����|HRN|huarong|hr|980@hsb|��ɽ��|HDY|huashanbei|hsb|981@hsd|���ɵ�|HDL|huangsongdian|hsd|982@hsg|��ʲ�����|VSR|heshituoluogai|hstlg|983@hsh|��ɽ|VSB|hongshan|hs|984@hsh|����|VSQ|hanshou|hs|985@hsh|��ɽ|HSQ|hengshan|hs|986@hsh|��ˮ|HOT|heishui|hs|987@hsh|��ɽ|VCH|huishan|hs|988@hsh|��ʲ��|HHP|hushiha|hsh|989@hsp|���±�|HSJ|hongsipu|hsb|990@hst|��ʯ̨|HUT|hushitai|hst|991@hsw|��ʯ��|HSO|haishiwan|hsw|992@hsx|��ɽ��|HEQ|hengshanxi|hsx|993@hsx|��ɰ�|VSJ|hongshaxian|hsj|994@hta|��̨|HQB|heitai|ht|995@hta|��̨|VTK|huantai|ht|996@hti|����|VTR|hetian|ht|997@hto|��ͬ|VTQ|huitong|ht|998@htz|������|HZT|haituozi|htz|999@hwa|����|HWK|heiwang|hw|1000@hwa|����|RWH|haiwan|hw|1001@hxi|����|VXB|hongxing|hx|1002@hxi|����|HYY|huixian|hx|1003@hxl|����¡|VHB|hongxinglong|hxl|1004@hxt|������|VTB|huanxintian|hxt|1005@hxt|���̨|HTJ|hongxiantai|hxt|1006@hya|����|VIX|hongyan|hy|1007@hya|����|HAY|heyang|hy|1008@hya|����|HYK|haiyang|hy|1009@hyd|������|HVQ|hengyangdong|hyd|1010@hyi|����|HUW|huaying|hy|1011@hyi|����|HQY|hanyin|hy|1012@hyt|����̲|HGJ|huangyangtan|hyt|1013@hyu|��Դ|WHW|hanyuan|hy|1014@hyu|��Դ|HNO|huangyuan|hy|1015@hyu|��Դ|VIQ|heyuan|hy|1016@hyu|��԰|HUN|huayuan|hy|1017@hyz|������|HYJ|huangyangzhen|hyz|1018@hzh|����|VZH|huzhou|hz|1019@hzh|����|HZZ|huazhou|hz|1020@hzh|����|VON|huangzhou|hz|1021@hzh|����|HZV|huozhou|hz|1022@hzx|������|VXQ|huizhouxi|hzx|1023@jba|�ޱ�|JRT|jubao|jb|1024@jbi|����|JIY|jingbian|jb|1025@jbt|����|JBD|jinbaotun|jbt|1026@jcb|���Ǳ�|JEF|jinchengbei|jcb|1027@jch|���|JCJ|jinchang|jc|1028@jch|۲��|JCK|juancheng|jc|1029@jch|����|JNV|jiaocheng|jc|1030@jch|����|JFD|jianchang|jc|1031@jde|����|JDB|junde|jd|1032@jdi|����|JFP|jingdian|jd|1033@jdo|����|JOB|jidong|jd|1034@jdu|����|UDH|jiangdu|jd|1035@jgs|����ɽ|JST|jiguanshan|jgs|1036@jgt|����|VGP|jingoutun|jgt|1037@jha|����|JHP|jinghai|jh|1038@jhe|���|JHX|jinhe|jh|1039@jhe|����|JHB|jinhe|jh|1040@jhe|����|JHQ|jinhe|jh|1041@jhe|����|JHR|jinghe|jh|1042@jhn|������|JIR|jinghenan|jhn|1043@jhu|����|JHZ|jianghua|jh|1044@jhu|����|AJH|jianhu|jh|1045@jjg|�ͼҹ�|VJD|jijiagou|jjg|1046@jji|����|JJS|jinjiang|jj|1047@jji|����|JJW|jiangjin|jj|1048@jji|����|JJB|jiangjia|jj|1049@jke|���|JKT|jinkeng|jk|1050@jli|ܸ��|JLJ|jiling|jl|1051@jmc|�����|JMM|jinmacun|jmc|1052@jme|����|JES|jiaomei|jm|1053@jme|����|JWQ|jiangmen|jm|1054@jna|����|JOK|junan|jn|1055@jna|����|JNP|jingnan|jn|1056@jou|���|JVS|jianou|jo|1057@jpe|����|JPC|jingpeng|jp|1058@jqi|����|JQX|jiangqiao|jq|1059@jsa|����|SSX|jiusan|js|1060@jsb|��ɽ��|EGH|jinshanbei|jsb|1061@jsh|��ɽ|JCN|jingshan|js|1062@jsh|��ʼ|JRN|jianshi|js|1063@jsh|����|JSH|jiashan|js|1064@jsh|�ɽ|JVV|jishan|js|1065@jsh|����|JSL|jishu|js|1066@jsh|����|JET|jianshe|js|1067@jsh|��ɽ|JOP|jiashan|js|1068@jsj|������|JIB|jiansanjiang|jsj|1069@jsn|������|EAH|jiashannan|jsn|1070@jst|��ɽ��|JTB|jinshantun|jst|1071@jst|������|JOM|jiangsuotian|jst|1072@jta|��̩|JTJ|jingtai|jt|1073@jwe|����|JWX|jiwen|jw|1074@jxi|����|JUG|jinxian|jx|1075@jxi|����|JKK|juxian|jx|1076@jxi|����|JUK|jiaxiang|jx|1077@jxi|����|JXV|jiexiu|jx|1078@jxi|����|JJP|jingxing|jx|1079@jxi|����|JXH|jiaxing|jx|1080@jxn|������|EPH|jiaxingnan|jxn|1081@jxz|������|JXT|jiaxinzi|jxz|1082@jya|����|JYW|jianyang|jy|1083@jya|����|JRQ|jieyang|jy|1084@jya|����|JYS|jianyang|jy|1085@jya|����|UEH|jiangyan|jy|1086@jye|��Ұ|JYK|juye|jy|1087@jyo|����|JYZ|jiangyong|jy|1088@jyu|��Զ|JYJ|jingyuan|jy|1089@jyu|����|JYH|jinyun|jy|1090@jyu|��Դ|SZL|jiangyuan|jy|1091@jyu|��Դ|JYF|jiyuan|jy|1092@jyx|��Զ��|JXJ|jingyuanxi|jyx|1093@jzb|���ݱ�|JZK|jiaozhoubei|jzb|1094@jzd|������|WEF|jiaozuodong|jzd|1095@jzh|����|JEQ|jingzhou|jz|1096@jzh|����|JBN|jingzhou|jz|1097@jzh|��կ|JZH|jinzhai|jz|1098@jzh|����|JXP|jinzhou|jz|1099@jzh|����|JXK|jiaozhou|jz|1100@jzn|������|JOD|jinzhounan|jzn|1101@jzu|����|JOF|jiaozuo|jz|1102@jzw|��ׯ��|JVP|jiuzhuangwo|jzw|1103@jzz|������|JYD|jinzhangzi|jzz|1104@kan|����|KAT|kaian|ka|1105@kch|�⳵|KCR|kuche|kc|1106@kch|����|KCP|kangcheng|kc|1107@kde|�ⶼ��|KDX|huder|kde|1108@kdi|���|KDT|kuandian|kd|1109@kdo|�˶�|KOB|kedong|kd|1110@kji|����|KAW|kaijiang|kj|1111@kjj|����|KJB|kangjinjing|kjj|1112@klq|������|KQX|kalaqi|klq|1113@klu|��³|KLC|kailu|kl|1114@kly|��������|KHR|kelamayi|klmy|1115@kqi|��ǰ|KQL|kouqian|kq|1116@ksh|��ɽ|KAB|kuishan|ks|1117@ksh|��ɽ|KSH|kunshan|ks|1118@ksh|��ɽ|KSB|keshan|ks|1119@kto|��ͨ|KTT|kaitong|kt|1120@kxl|������|KXZ|kangxiling|kxl|1121@kyh|��һ��|KHX|keyihe|kyh|1122@kyx|��ԭ��|KXT|kaiyuanxi|kyx|1123@kzh|��ׯ|KZP|kangzhuang|kz|1124@lbi|����|UBZ|laibin|lb|1125@lbi|�ϱ�|LLT|laobian|lb|1126@lbx|�鱦��|LPF|lingbaoxi|lbx|1127@lch|����|LUQ|longchuan|lc|1128@lch|�ֲ�|LCQ|lechang|lc|1129@lch|���|UCP|licheng|lc|1130@lch|�ĳ�|UCK|liaocheng|lc|1131@lcu|����|LCK|lancun|lc|1132@ldo|�ֶ�|LRC|lindong|ld|1133@ldu|�ֶ�|LDO|ledu|ld|1134@ldx|������|LDP|liangdixia|ldx|1135@ldz|��������|LVP|liudaohezi|ldhz|1136@lfa|³��|LVM|lufan|lf|1137@lfa|�ȷ�|LJP|langfang|lf|1138@lfa|����|LOP|luofa|lf|1139@lfb|�ȷ���|LFP|langfangbei|lfb|1140@lfe|»��|LFM|lufeng|lf|1141@lfu|�ϸ�|UFD|laofu|lf|1142@lga|����|LNB|langang|lg|1143@lgd|���ǵ�|LGM|longgudian|lgd|1144@lgo|«��|LOM|lugou|lg|1145@lgo|����|LGJ|longgou|lg|1146@lgu|����|LGB|lagu|lg|1147@lha|�ٺ�|UFH|linhai|lh|1148@lha|�ֺ�|LXX|linhai|lh|1149@lha|����|LHX|laha|lh|1150@lha|�躣|JID|linghai|lh|1151@lhe|����|LNL|liuhe|lh|1152@lhe|����|KLH|luhe|lh|1153@lhu|����|LHP|longhua|lh|1154@lhy|�к���|UNP|luanheyan|lhy|1155@lhz|������|LEX|liuhezhen|lhz|1156@ljd|���׵�|LRT|liangjiadian|ljd|1157@ljd|���ҵ�|UDT|liujiadian|ljd|1158@ljh|���Һ�|LVT|liujiahe|ljh|1159@lji|����|LKS|lianjiang|lj|1160@lji|���|LJB|lijia|lj|1161@lji|�޽�|LJW|luojiang|lj|1162@lji|����|LJZ|lianjiang|lj|1163@lji|®��|UJH|lujiang|lj|1164@lji|����|UJT|liangjia|lj|1165@lji|����|LJX|longjiang|lj|1166@lji|����|UJL|longjia|lj|1167@ljk|������|LHB|lianjiangkou|ljk|1168@ljl|����¥|ULK|linjialou|ljl|1169@ljp|���ƺ|LIJ|lijiaping|ljp|1170@lka|����|LKF|lankao|lk|1171@lko|�ֿ�|LKB|linkou|lk|1172@lkp|·����|LKQ|lukoupu|lkp|1173@lla|����|LAX|laolai|ll|1174@lli|����|LAB|lalin|ll|1175@lli|½��|LRM|luliang|ll|1176@lli|����|LLW|longli|ll|1177@lli|����|UWZ|lingling|ll|1178@lli|���|LWQ|linli|ll|1179@lli|����|LLB|lanling|ll|1180@llo|¬��|UAP|lulong|ll|1181@lmd|�����|LMX|lamadian|lmd|1182@lmd|��ľ��|LMB|limudian|lmd|1183@lme|����|LMJ|luomen|lm|1184@lna|����|UNG|longnan|ln|1185@lpi|��ƽ|UQW|liangping|lp|1186@lpi|��ƽ|LPM|luoping|lp|1187@lpl|������|LPP|luopoling|lpl|1188@lps|����ɽ|UPJ|liupanshan|lps|1189@lps|��ƽ��|LPG|lepingshi|lps|1190@lqi|����|UQK|linqing|lq|1191@lqs|��Ȫ��|UQJ|longquansi|lqs|1192@lsc|���ƴ�|LUM|leshancun|lsc|1193@lsd|��ˮ����|UDQ|lengshuijiangdong|lsjd|1194@lsg|��ɽ��|LGT|lianshanguan|lsg|1195@lsg|��ˮ��|USP|liushuigou|lsg|1196@lsh|��ˮ|LIQ|lingshui|ls|1197@lsh|��ɽ|UTW|leshan|ls|1198@lsh|��ɽ|LRN|luoshan|ls|1199@lsh|³ɽ|LAF|lushan|ls|1200@lsh|��ˮ|USH|lishui|ls|1201@lsh|��ɽ|LMK|liangshan|ls|1202@lsh|��ʯ|LSV|lingshi|ls|1203@lsh|¶ˮ��|LUL|lushuihe|lsh|1204@lsh|®ɽ|LSG|lushan|ls|1205@lsp|��ʢ��|LBT|linshengpu|lsp|1206@lst|������|LSD|liushutun|lst|1207@lsz|������|LSB|lishuzhen|lsz|1208@lsz|��ɽ��|LAS|longshanzhen|lsz|1209@lsz|��ʯկ|LET|lishizhai|lsz|1210@lta|����|LTZ|litang|lt|1211@lta|��̨|LAR|luntai|lt|1212@lta|«̨|LTP|lutai|lt|1213@ltb|������|LBM|longtangba|ltb|1214@ltu|����|LVZ|laituan|lt|1215@ltx|������|LTJ|luotuoxiang|ltx|1216@lwa|����|VLJ|liwang|lw|1217@lwd|���߶�|LWK|laiwudong|lwd|1218@lws|��βɽ|LRJ|langweishan|lws|1219@lwu|����|LNJ|lingwu|lw|1220@lwx|������|UXK|laiwuxi|lwx|1221@lxi|����|LXB|langxiang|lx|1222@lxi|¤��|LXY|longxian|lx|1223@lxi|����|LXQ|linxiang|lx|1224@lxi|����|LXK|laixi|lx|1225@lxi|����|LXC|linxi|lx|1226@lxi|����|UXP|luanxian|lx|1227@lya|����|LYY|lueyang|ly|1228@lya|����|LYK|laiyang|ly|1229@lya|����|LYT|liaoyang|ly|1230@lyb|���ʱ�|UYK|linyibei|lyb|1231@lyd|��Դ��|LDD|lingyuandong|lyd|1232@lyg|���Ƹ�|UIH|lianyungang|lyg|1233@lyh|����|LYC|laoyanghao|lyh|1234@lyi|���|LNF|linying|ly|1235@lyi|��Ӫ|LXL|laoying|ly|1236@lyo|����|LMH|longyou|ly|1237@lyu|��Դ|LVS|luoyuan|ly|1238@lyu|��Դ|LYX|linyuan|ly|1239@lyu|��Դ|LAQ|lianyuan|ly|1240@lyu|�Դ|LYP|laiyuan|ly|1241@lyx|������|LPQ|leiyangxi|lyx|1242@lze|����|LEJ|linze|lz|1243@lzg|��צ��|LZT|longzhaogou|lzg|1244@lzh|����|UAQ|leizhou|lz|1245@lzh|��֦|LIW|liuzhi|lz|1246@lzh|¹կ|LIZ|luzhai|lz|1247@lzh|����|LZS|laizhou|lz|1248@lzh|����|LZA|longzhen|lz|1249@lzh|����|LEM|lazha|lz|1250@man|����|MAC|mingan|ma|1251@mas|��ɽ|MAH|maanshan|mas|1252@mba|ë��|MBY|maoba|mb|1253@mbg|ë�ӹ�|MGY|maobaguan|mbg|1254@mcb|��Ǳ�|MBN|machengbei|mcb|1255@mch|�ų�|MCF|mianchi|mc|1256@mch|����|MCL|mingcheng|mc|1257@mch|���|MAP|miaocheng|mc|1258@mcn|�ų���|MNF|mianchinan|mcn|1259@mcp|é��ƺ|KPM|maocaoping|mcp|1260@mdh|�Ͷ���|MUQ|mengdonghe|mdh|1261@mds|ĥ��ʯ|MOB|modaoshi|mds|1262@mdu|�ֶ�|MDF|midu|md|1263@mes|ñ��ɽ|MRB|maoershan|mes|1264@mga|����|MGN|minggang|mg|1265@mhk|÷�ӿ�|MHL|meihekou|mhk|1266@mhu|���|MHZ|mahuang|mh|1267@mjg|�ϼҸ�|MGB|mengjiagang|mjg|1268@mla|����|MHQ|meilan|ml|1269@mld|���޶�|MQQ|miluodong|mld|1270@mlh|������|MHB|malianhe|mlh|1271@mli|é��|MLZ|maoling|ml|1272@mli|����|MLL|miaoling|ml|1273@mli|ï��|MLD|maolin|ml|1274@mli|����|MLB|muling|ml|1275@mli|����|MID|malin|ml|1276@mlo|����|MGM|malong|ml|1277@mlo|����|MLQ|miluo|ml|1278@mlt|ľ��ͼ|MUD|mulitu|mlt|1279@mml|������|MMM|mimalong|mml|1280@mnh|����˹��|MNR|manasihu|mnsh|1281@mni|����|UGW|mianning|mn|1282@mpa|����|MPQ|mupang|mp|1283@mqh|���ź�|MQB|maqiaohe|mqh|1284@mqi|����|MQS|minqing|mq|1285@mqu|��Ȩ|MQF|minquan|mq|1286@msh|��ˮ��|MUT|mingshuihe|msh|1287@msh|��ɽ|MAB|mashan|ms|1288@msh|üɽ|MSW|meishan|ms|1289@msw|��ˮ��|MKW|manshuiwan|msw|1290@msz|ï����|MOM|maoshezu|msz|1291@msz|��ɳ��|MST|mishazi|msz|1292@mtz|��̨��|MZB|miaotaizi|mtz|1293@mxi|��Ϫ|MEB|meixi|mx|1294@mxi|����|MVY|mianxian|mx|1295@mya|����|MVQ|mayang|my|1296@myc|�����|MCM|muyangcun|myc|1297@myi|����|MMW|miyi|my|1298@myu|��԰|MYS|maiyuan|my|1299@myu|ī��|MUR|moyu|my|1300@myu|����|MUP|miyun|my|1301@mzh|��ׯ|MZJ|miaozhuang|mz|1302@mzh|��֬|MEY|mizhi|mz|1303@mzh|����|MFQ|mingzhu|mz|1304@nan|����|NAB|ningan|na|1305@nan|ũ��|NAT|nongan|na|1306@nbs|�ϲ�ɽ|NBK|nanboshan|nbs|1307@nch|�ϳ�|NCK|nanchou|nc|1308@ncs|�ϳ�˾|NSP|nanchengsi|ncs|1309@ncu|����|NCZ|ningcun|nc|1310@nde|����|NES|ningde|nd|1311@ngc|�Ϲ۴�|NGP|nanguancun|ngc|1312@ngd|�Ϲ���|NFP|nangongdong|ngd|1313@ngl|�Ϲ���|NLT|nanguanling|ngl|1314@ngu|����|NNH|ningguo|ng|1315@nha|����|NHH|ninghai|nh|1316@nhc|�ϺӴ�|NHJ|nanhechuan|nhc|1317@nhu|�ϻ�|NHS|nanhua|nh|1318@nhz|�����|NHD|nihezi|nhz|1319@nji|����|NVT|ningjia|nj|1320@nji|ţ��|NJB|niujia|nj|1321@nji|�Ͼ�|NJS|nanjing|nj|1322@nji|�ܼ�|NJD|nengjia|nj|1323@nko|�Ͽ�|NKP|nankou|nk|1324@nkq|�Ͽ�ǰ|NKT|nankouqian|nkq|1325@nla|����|NNQ|nanlang|nl|1326@nli|����|NLD|nailin|nl|1327@nlk|���տ�|NIR|nileke|nlk|1328@nlu|����|ULZ|naluo|nl|1329@nlx|������|NLF|ninglingxian|nlx|1330@nma|����|NMD|naiman|nm|1331@nmi|����|NMZ|ningming|nm|1332@nmu|��ľ|NMX|nanmu|nm|1333@npn|��ƽ��|NNS|nanpingnan|npn|1334@npu|����|NPZ|napu|np|1335@nqi|����|NQD|nanqiao|nq|1336@nqu|����|NQO|naqu|nq|1337@nqu|ůȪ|NQJ|nuanquan|nq|1338@nta|��̨|NTT|nantai|nt|1339@nto|��ͷ|NOQ|nantou|nt|1340@nwu|����|NWV|ningwu|nw|1341@nwz|������|NWP|nanwanzi|nwz|1342@nxb|���豱|NEH|nanxiangbei|nxb|1343@nxi|����|NXQ|ningxiang|nx|1344@nxi|����|NXF|neixiang|nx|1345@nxt|ţ��̨|NXT|niuxintai|nxt|1346@nyu|����|NUP|nanyu|ny|1347@nzg|���ӹ�|NIP|niangziguan|nzg|1348@nzh|����|NAF|nanzhao|nz|1349@nzm|����ľ|NZT|nanzamu|nzm|1350@pan|ƽ��|PAL|pingan|pa|1351@pan|�|PAW|pengan|pa|1352@pay|ƽ����|PNO|pinganyi|pay|1353@paz|�Ͱ���|PAJ|pananzhen|paz|1354@paz|ƽ����|PZT|pinganzhen|paz|1355@pcd|�ѳǶ�|PEY|puchengdong|pcd|1356@pch|�ѳ�|PCY|pucheng|pc|1357@pde|���|PDB|peide|pd|1358@pdi|ƫ��|PRP|piandian|pd|1359@pdx|ƽ��ɽ��|BFF|pingdingshanxi|pdsx|1360@pdx|�µ���|PXJ|podixia|pdx|1361@pet|ư����|PRT|piaoertun|pet|1362@pfa|ƽ��|PFB|pingfang|pf|1363@pga|ƽ��|PGL|pinggang|pg|1364@pgu|ƽ��|PGM|pingguan|pg|1365@pgu|�̹�|PAM|panguan|pg|1366@pgu|ƽ��|PGZ|pingguo|pg|1367@phb|�ǻ���|PHP|paihuibei|phb|1368@phk|ƽ�ӿ�|PHM|pinghekou|phk|1369@pjb|�̽���|PBD|panjinbei|pjb|1370@pjd|�˼ҵ�|PDP|panjiadian|pjd|1371@pko|Ƥ��|PKT|pikou|pk|1372@pld|������|PLT|pulandian|pld|1373@pli|ƫ��|PNT|pianling|pl|1374@plu|ƽ��|SZJ|pingluo|plu|1375@psh|ƽɽ|PSB|pingshan|ps|1376@psh|��ɽ|PSW|pengshan|ps|1377@psh|Ƥɽ|PSR|pishan|ps|1378@psh|��ˮ|PHW|pengshui|ps|1379@psh|��ʯ|PSL|panshi|ps|1380@psh|ƽ��|PSV|pingshe|ps|1381@pta|ƽ̨|PVT|pingtai|pt|1382@pti|ƽ��|PTM|pingtian|pt|1383@pti|����|PTS|putian|pt|1384@ptq|����ݼ|PTW|putaoqing|ptj|1385@pwa|����|PWT|puwan|pw|1386@pwa|ƽ��|PWV|pingwang|pw|1387@pxg|ƽ�͹�|PGV|pingxingguan|pxg|1388@pxi|����|POW|puxiong|px|1389@pya|ƽ��|PYX|pingyang|py|1390@pya|����|PYJ|pengyang|py|1391@pya|ƽң|PYV|pingyao|py|1392@pyi|ƽ��|PIK|pingyi|py|1393@pyp|ƽԭ��|PPJ|pingyuanpu|pyp|1394@pyu|ƽԭ|PYK|pingyuan|py|1395@pyu|ƽ��|PYP|pingyu|py|1396@pze|����|PZG|pengze|pz|1397@pzh|����|PJH|pizhou|pz|1398@pzh|ƽׯ|PZD|pingzhuang|pz|1399@pzi|����|POD|paozi|pz|1400@pzn|ƽׯ��|PND|pingzhuangnan|pzn|1401@qan|Ǭ��|QOT|qianan|qa|1402@qan|�찲|QAB|qingan|qa|1403@qan|Ǩ��|QQP|qianan|qa|1404@qdb|���|QRQ|qidongbei|qd|1405@qdi|�ߵ�|QDM|qidian|qd|1406@qfd|������|QAK|qufudong|qfd|1407@qfe|���|QFT|qingfeng|qf|1408@qft|�����|QVP|qifengta|qft|1409@qfu|����|QFK|qufu|qf|1410@qfy|�ڷ�Ӫ|QFM|qinfengying|qfy|1411@qha|��|QYQ|qionghai|qh|1412@qhd|�ػʵ�|QTP|qinhuangdao|qhd|1413@qhe|ǧ��|QUY|qianhe|qh|1414@qhe|���|QIP|qinghe|qh|1415@qhm|�����|QHD|qinghemen|qhm|1416@qhy|�廪԰|QHP|qinghuayuan|qhy|1417@qji|����|QJZ|qujiu|qj|1418@qji|�뽭|QJW|qijiang|qj|1419@qji|Ǳ��|QJN|qianjiang|qj|1420@qji|ȫ��|INH|quanjiao|qj|1421@qji|�ؼ�|QJB|qinjia|qj|1422@qjp|��ұ�|QBT|qijiapu|qjb|1423@qjx|�彧��|QNY|qingjianxian|qjx|1424@qjz|�ؼ�ׯ|QZV|qinjiazhuang|qjz|1425@qlh|�����|QLD|qilihe|qlh|1426@qli|����|QLZ|quli|ql|1427@qli|����|QLY|qinling|ql|1428@qls|����ɽ|QGH|qinglongshan|qls|1429@qls|������|QSM|qinglongsi|qls|1430@qme|����|QIH|qimen|qm|1431@qmt|ǰĥͷ|QMP|qianmotou|qmt|1432@qsh|��ɽ|QSB|qingshan|qs|1433@qsh|ȷɽ|QSN|queshan|qs|1434@qsh|��ˮ|QUJ|qingshui|qs|1435@qsh|ǰɽ|QXQ|qianshan|qs|1436@qsy|������|QYH|qishuyan|qsy|1437@qti|����|QVH|qingtian|qt|1438@qto|��ͷ|QAT|qiaotou|qt|1439@qtx|��ͭϿ|QTJ|qingtongxia|qtx|1440@qwe|ǰ��|QWD|qianwei|qw|1441@qwt|ǰέ��|QWP|qianweitang|qwt|1442@qxi|����|QRW|quxian|qx|1443@qxi|����|QXV|qixian|qx|1444@qxi|����|QXP|qingxian|qx|1445@qxi|����|QXJ|qiaoxi|qx|1446@qxu|����|QUV|qingxu|qx|1447@qxy|����Ӫ|QXC|qixiaying|qxy|1448@qya|ǧ��|QOY|qianyang|qy|1449@qya|����|QYF|qinyang|qy|1450@qya|Ȫ��|QYL|quanyang|qy|1451@qyb|������|QVQ|qiyangbei|qy|1452@qyi|��Ӫ|QYJ|qiying|qy|1453@qys|����ɽ|QSJ|qingyangshan|qys|1454@qyu|��Զ|QBQ|qingyuan|qy|1455@qyu|��ԭ|QYT|qingyuan|qy|1456@qzd|���ݶ�|QDZ|qinzhoudong|qzd|1457@qzh|ȫ��|QZZ|quanzhou|qz|1458@qzh|����|QRZ|qinzhou|qz|1459@qzs|������|QZK|qingzhoushi|qzs|1460@ran|��|RAH|ruian|ra|1461@rch|�ٲ�|RCW|rongchang|rc|1462@rch|���|RCG|ruichang|rc|1463@rga|���|RBH|rugao|rg|1464@rgu|�ݹ�|RUQ|ronggui|rg|1465@rqi|����|RQP|renqiu|rq|1466@rsh|��ɽ|ROK|rushan|rs|1467@rsh|��ˮ|RSZ|rongshui|rs|1468@rsh|��ˮ|RSD|reshui|rs|1469@rxi|����|RXZ|rongxian|rx|1470@rya|����|RVP|raoyang|ry|1471@rya|����|RYF|ruyang|ry|1472@ryh|������|RHD|raoyanghe|ryh|1473@rzh|����|ROF|ruzhou|rz|1474@sba|ʯ��|OBJ|shiba|sb|1475@sbc|�ϰ��|SBP|shangbancheng|sbc|1476@sbi|ʩ��|AQW|shibing|sb|1477@sbn|�ϰ����|OBP|shangbanchengnan|sbcn|1478@sby|����԰|ZWT|shiboyuan|sby|1479@scb|˫�Ǳ�|SBB|shuangchengbei|scb|1480@sch|�̳�|SWN|shangcheng|sc|1481@sch|ɯ��|SCR|shache|sc|1482@sch|˳��|SCS|shunchang|sc|1483@sch|���|OCH|shucheng|sc|1484@sch|���|SMV|shenchi|sc|1485@sch|ɳ��|SCP|shacheng|sc|1486@sch|ʯ��|SCT|shicheng|sc|1487@scz|ɽ����|SCL|shanchengzhen|scz|1488@sda|ɽ��|SDJ|shandan|sd|1489@sde|˳��|ORQ|shunde|sd|1490@sde|���|ODY|suide|sd|1491@sdo|�۶�|SOQ|shaodong|sd|1492@sdo|ˮ��|SIL|shuidong|sd|1493@sdu|�̶�|SXC|shangdu|sd|1494@sdu|ʮ��|SEP|shidu|sd|1495@sdw|�ĵ���|OUD|sidaowan|sdw|1496@sdy|˳��ѧԺ|OJQ|shundexueyuan|sdxy|1497@sfa|��|OLH|shenfang|sf|1498@sfe|˫��|OFB|shuangfeng|sf|1499@sft|�ķ�̨|STB|sifangtai|sft|1500@sfu|ˮ��|OTW|shuifu|sf|1501@sgk|���ؿ�|OKJ|sanguankou|sgk|1502@sgl|ɣ������|OGC|sanggendalai|sgdl|1503@sgu|�ع�|SNQ|shaoguan|sg|1504@sgz|�ϸ���|SVK|shanggaozhen|sgz|1505@sha|�Ϻ�|JBS|shanghang|sh|1506@sha|ɳ��|SED|shahai|sh|1507@she|�ɺ�|SBM|songhe|sh|1508@she|ɳ��|SHP|shahe|sh|1509@shk|ɳ�ӿ�|SKT|shahekou|shk|1510@shl|��������|SHC|saihantai|shtl|1511@shs|ɳ����|VOP|shaheshi|shs|1512@shs|ɳ����|SSD|shahousuo|shs|1513@sht|ɽ����|SHL|shanhetun|sht|1514@shx|������|OXP|sanhexian|shx|1515@shy|�ĺ���|OHD|siheyong|shy|1516@shz|������|OZW|sanhuizhen|shz|1517@shz|˫����|SEL|shuanghezhen|shz|1518@shz|ʯ����|SZR|shihezi|shz|1519@shz|����ׯ|SVP|sanhezhuang|shz|1520@sjd|���ҵ�|ODP|sanjiadian|sjd|1521@sjh|ˮ�Һ�|SQH|shuijiahu|sjh|1522@sjh|��Һ�|OJJ|shenjiahe|sjh|1523@sjh|�ɽ���|SJL|songjianghe|sjh|1524@sji|�м�|SJB|shangjia|sj|1525@sji|���|SUB|sunjia|sj|1526@sji|���|OJB|shenjia|sj|1527@sji|�ɽ�|SAH|songjiang|sj|1528@sjk|������|SKD|sanjiangkou|sjk|1529@sjl|˾����|OLK|sijialing|sjl|1530@sjn|�ɽ���|IMH|songjiangnan|sjn|1531@sjn|ʯ��ɽ��|SRP|shijingshannan|sjsn|1532@sjt|�ۼ���|SJJ|shaojiatang|sjt|1533@sjx|������|SOZ|sanjiangxian|sjx|1534@sjz|����կ|SMM|sanjiazhai|sjz|1535@sjz|ʮ����|SJD|shijiazi|sjz|1536@sjz|�ɽ���|OZL|songjiangzhen|sjz|1537@sjz|ʩ����|SHM|shijiazui|sjz|1538@sjz|���|SWT|shenjingzi|sjz|1539@sld|ʲ���|OMP|shilidian|sld|1540@sle|����|SUR|shule|sl|1541@slh|���պ�|SHJ|shulehe|slh|1542@slh|������|VLD|shelihu|slh|1543@sli|ʯ��|SPB|shilin|sl|1544@sli|����|SIB|suiling|sl|1545@sli|ʯ��|SOL|shiling|sl|1546@sli|ʯ��|SLM|shilin|sl|1547@sln|ʯ����|LNM|shilinnan|sln|1548@slo|ʯ��|SLQ|shilong|sl|1549@slq|������|SLC|salaqi|slq|1550@slu|����|SNT|suolun|sl|1551@slu|����|OLY|shangluo|sl|1552@slz|ɳ����|SLP|shalingzi|slz|1553@smb|ʯ���ر�|VFQ|shimenxianbei|smxb|1554@smn|����Ͽ��|SCF|sanmenxianan|smxn|1555@smx|������|OQH|sanmenxian|smx|1556@smx|ʯ����|OMQ|shimenxian|smx|1557@smx|����Ͽ��|SXF|sanmenxiaxi|smxx|1558@sni|����|SYP|suning|sn|1559@son|��|SOB|song|s|1560@spa|˫��|SBZ|shuangpai|sp|1561@spd|��ƽ��|PPT|sipingdong|spd|1562@spi|��ƽ|SON|suiping|sp|1563@spt|ɳ��ͷ|SFJ|shapotou|spt|1564@sqn|������|SPF|shangqiunan|sqn|1565@squ|ˮȪ|SID|shuiquan|sq|1566@sqx|ʯȪ��|SXY|shiquanxian|sqx|1567@sqz|ʯ����|SQT|shiqiaozi|sqz|1568@src|ʯ�˳�|SRB|shirencheng|src|1569@sre|ʯ��|SRL|shiren|sr|1570@ssh|ɽ��|SQB|shanshi|ss|1571@ssh|����|SWB|shenshu|ss|1572@ssh|۷��|SSR|shanshan|ss|1573@ssh|��ˮ|SJQ|sanshui|ss|1574@ssh|��ˮ|OSK|sishui|ss|1575@ssh|ʯɽ|SAD|shishan|ss|1576@ssh|����|SFT|songshu|ss|1577@ssh|��ɽ|SAT|shoushan|ss|1578@ssj|��ʮ��|SRD|sanshijia|ssj|1579@ssp|��ʮ�ﱤ|SST|sanshilipu|sslb|1580@ssz|������|SSL|songshuzhen|ssz|1581@sta|����|MZQ|songtao|st|1582@sth|��ͼ��|SHX|suotuhan|sth|1583@stj|���ü�|SDH|santangji|stj|1584@sto|ʯͷ|OTB|shitou|st|1585@sto|��ͷ|SEV|shentou|st|1586@stu|ɳ��|SFM|shatuo|st|1587@swa|����|SWP|shangwan|sw|1588@swu|����|SKB|sunwu|sw|1589@swx|ɳ����|SXR|shawanxian|swx|1590@sxi|��Ϫ|SXZ|suixi|sx|1591@sxi|ɳ��|SAS|shaxian|sx|1592@sxi|����|SOH|shaoxing|sx|1593@sxi|���|OVH|shexian|sx|1594@sxi|ʯ�|SXL|shixian|sj|1595@sxp|������|SXM|shangxipu|sxp|1596@sxz|ʯϿ��|SXJ|shixiazi|sxz|1597@sya|����|SYB|suiyang|sy|1598@sya|����|FMH|shuyang|sy|1599@sya|����|SYV|shouyang|sy|1600@sya|ˮ��|OYP|shuiyang|sy|1601@syc|������|SYJ|sanyangchuan|syc|1602@syd|������|SPJ|shangyaodun|syd|1603@syi|��Ӫ|OEJ|sanying|sy|1604@syi|˳��|SOP|shunyi|sy|1605@syj|���微|OYD|sanyijing|syj|1606@syp|��Դ��|SYL|sanyuanpu|syp|1607@syu|��ԭ|SAY|sanyuan|sy|1608@syu|����|BDH|shangyu|sy|1609@syu|��԰|SUD|shangyuan|sy|1610@syu|ˮԴ|OYJ|shuiyuan|sy|1611@syz|ɣ԰��|SAJ|sangyuanzi|syz|1612@szb|���б�|SND|suizhongbei|szb|1613@szb|���ݱ�|OHH|suzhoubei|szb|1614@szd|���ݶ�|SRH|suzhoudong|szd|1615@szd|���ڶ�|BJQ|shenzhendong|szd|1616@szh|����|OZP|shenzhou|sz|1617@szh|����|OZY|sunzhen|sz|1618@szh|����|SZD|suizhong|sz|1619@szh|��־|SZB|shangzhi|sz|1620@szh|ʦׯ|SNM|shizhuang|sz|1621@szi|����|SIN|songzi|sz|1622@szo|ʦ��|SEM|shizong|sz|1623@szq|����԰��|KAH|suzhouyuanqu|szyq|1624@szq|��������|ITH|suzhouxinqu|szxq|1625@tan|̩��|TMK|taian|ta|1626@tan|̨��|TID|taian|ta|1627@tay|ͨ����|TAJ|tonganyi|tay|1628@tba|ͩ��|TBF|tongbai|tb|1629@tbe|ͨ��|TBB|tongbei|tb|1630@tch|����|TCX|tangchi|tc|1631@tch|ͩ��|TTH|tongcheng|tc|1632@tch|۰��|TZK|tancheng|tc|1633@tch|����|TCL|tiechang|tc|1634@tcu|�Ҵ�|TCK|taocun|tc|1635@tda|ͨ��|TRQ|tongdao|td|1636@tdo|�ﶫ|TDZ|tiandong|td|1637@tga|���|TGL|tiangang|tg|1638@tgl|��������|TGC|togrogul|tgwl|1639@tgo|ͨ��|TOL|tonggou|tg|1640@tgu|̫��|TGV|taigu|tg|1641@tha|����|THX|taha|th|1642@tha|�ĺ�|THM|tanghai|th|1643@the|�ƺ�|THF|tanghe|th|1644@the|̩��|THG|taihe|th|1645@thu|̫��|TKH|taihu|th|1646@tji|�Ž�|TIX|tuanjie|tj|1647@tjj|̷�Ҿ�|TNJ|tanjiajing|tjj|1648@tjt|�ռ���|TOT|taojiatun|tjt|1649@tjw|�Ƽ���|PDQ|tangjiawan|tjw|1650@tjz|ͳ��ׯ|TZP|tongjunzhuang|tjz|1651@tka|̩��|TKX|taikang|tk|1652@tld|����ë��|TMD|tuliemaodu|tlmd|1653@tlh|ͼ���|TEX|tulihe|tlh|1654@tli|ͤ��|TIZ|tingliang|tl|1655@tli|����|TFZ|tianlin|tl|1656@tli|ͭ��|TJH|tongling|tl|1657@tli|����|TLB|tieli|tl|1658@tlx|������|PXT|tielingxi|tlx|1659@tme|����|TMN|tianmen|tm|1660@tmn|������|TNN|tianmennan|tmn|1661@tms|̫��ɽ|TLS|taimushan|tms|1662@tmt|������̨|TRC|tomortei|tmet|1663@tmz|������|TCJ|tumenzi|tmz|1664@tna|����|TVW|tongnan|tn|1665@tna|���|TVT|taonan|tn|1666@tpc|̫ƽ��|TIT|taipingchuan|tpc|1667@tpz|̫ƽ��|TEB|taipingzhen|tpz|1668@tqi|ͼǿ|TQX|tuqiang|tq|1669@tqi|̨ǰ|TTK|taiqian|tq|1670@tql|������|TQL|tianqiaoling|tql|1671@tqz|������|TQJ|tuqiaozi|tqz|1672@tsc|��ɽ��|TCT|tangshancheng|tsc|1673@tsh|��ɽ|TAB|taoshan|ts|1674@tsz|��ʯ��|TIM|tashizui|tsz|1675@ttu|ͨ;|TUT|tongtu|tt|1676@twh|������|THB|tangwanghe|twh|1677@txi|ͬ��|TXJ|tongxin|tx|1678@txi|��Ϫ|TSW|tuxi|tx|1679@txi|ͩ��|TCH|tongxiang|tx|1680@tya|����|TRZ|tianyang|ty|1681@tyi|��ӳ|TKQ|taoying|ty|1682@tyi|����|TND|tianyi|ty|1683@tyi|����|TYF|tangyin|ty|1684@tyl|������|TIL|tuoyaoling|tyl|1685@tys|̫��ɽ|TYJ|taiyangshan|tys|1686@tyu|��ԭ|TYB|tangyuan|ty|1687@tyy|������|TYP|tayanyi|tyy|1688@tzd|���ݶ�|TEK|tengzhoudong|tzd|1689@tzh|̨��|TZH|taizhou|tz|1690@tzh|��ף|TZJ|tianzhu|tz|1691@tzh|����|TXK|tengzhou|tz|1692@tzh|����|TZV|tianzhen|tz|1693@tzl|ͩ����|TEW|tongzilin|tzl|1694@tzs|����ɽ|QWH|tianzhushan|tzs|1695@wan|�İ�|WBP|wenan|wa|1696@wan|�䰲|WAP|wuan|wa|1697@waz|������|WVP|wanganzhen|waz|1698@wca|����|WEW|wangcang|wc|1699@wcg|��湵|WCT|wuchagou|wcg|1700@wch|�Ĳ�|WEQ|wenchang|wc|1701@wch|�´�|WDB|wenchun|wc|1702@wdc|�������|WRB|wudalianchi|wdlc|1703@wde|�ĵ�|WBK|wendeng|wd|1704@wdg|�����|WDL|wudaogou|wdg|1705@wdh|�����|WHP|wudaohe|wdh|1706@wdi|�ĵ�|WNZ|wendi|wd|1707@wdo|����|WVT|weidong|wd|1708@wds|�䵱ɽ|WRN|wudangshan|wds|1709@wdu|����|WDP|wangdu|wd|1710@weh|�ڶ��캹|WHX|orqohan|weqh|1711@wfa|Ϋ��|WFK|weifang|wf|1712@wft|����|WFB|wanfatun|wft|1713@wfu|����|WUT|wangfu|wf|1714@wfx|�߷�����|WXT|wafangdianxi|wfdx|1715@wga|����|WGB|wanggang|wg|1716@wgo|�书|WGY|wugong|wg|1717@wgo|�幵|WGL|wangou|wg|1718@wgt|�����|WGM|wuguantian|wgt|1719@wha|�ں�|WVC|wuhai|wh|1720@whe|έ��|WHB|weihe|wh|1721@whu|����|WHF|weihui|wh|1722@wjc|��Ҵ�|WCJ|wujiachuan|wjc|1723@wji|���|WUB|wujia|wj|1724@wji|����|WAM|weiqing|wq|1725@wji|�缳|WJP|wuji|wj|1726@wji|μ��|WJL|weijin|wj|1727@wjw|������|WJJ|wangjiawan|wjw|1728@wke|����|WQB|woken|wk|1729@wks|�����|WKT|wukeshu|wks|1730@wlb|������|WBT|wulongbei|wlb|1731@wld|��������|WLC|ulanhad|wlhd|1732@wle|����|WEB|wanle|wl|1733@wlg|������|WVX|walagan|wlg|1734@wli|����|VHH|wenling|wl|1735@wli|����|WLK|wulian|wl|1736@wlq|������ǰ��|WQC|uradqranqi|wltqq|1737@wls|����ɽ|WSC|wulashan|wls|1738@wlt|������|WLX|wolitun|wlt|1739@wnb|μ�ϱ�|WBY|weinanbei|wnb|1740@wne|��ū��|WRX|onor|wne|1741@wni|����|WNQ|wanning|wn|1742@wni|����|WWG|wannian|wn|1743@wnn|μ����|WVY|weinannan|wnn|1744@wnz|μ����|WNJ|weinanzhen|wnz|1745@wpi|��Ƥ|WPT|wopi|wp|1746@wpu|�Ɽ|WUY|wupu|wb|1747@wqi|����|WUP|wuqiao|wq|1748@wqi|����|WQL|wangqing|wq|1749@wqi|����|WWP|wuqing|wq|1750@wqu|��Ȫ|WQM|wenquan|wq|1751@wsh|��ɽ|WSJ|wushan|ws|1752@wsh|��ˮ|WEV|wenshui|ws|1753@wsz|κ��ׯ|WSP|weishanzhuang|wsz|1754@wto|��ͫ|WTP|wangtong|wt|1755@wts|��̨ɽ|WSV|wutaishan|wts|1756@wtz|����ׯ|WZJ|wangtuanzhuang|wtz|1757@wwu|����|WVR|wuwu|ww|1758@wxd|������|WGH|wuxidong|wxd|1759@wxi|����|WVB|weixing|wx|1760@wxi|��ϲ|WXV|wenxi|wx|1761@wxi|����|WVV|wuxiang|wx|1762@wxq|��������|IFH|wuxixinqu|wxxq|1763@wxu|��Ѩ|WXN|wuxue|wx|1764@wxu|����|WYZ|wuxu|wy|1765@wya|����|WYB|wangyang|wy|1766@wyi|��Ӫ|WWB|wuying|wy|1767@wyi|����|RYH|wuyi|wy|1768@wyt|��Ҥ��|WIM|wayaotian|wjt|1769@wyu|��ԭ|WYC|wuyuan|wy|1770@wzg|έ�ӹ�|WZL|weizigou|wzg|1771@wzh|Τׯ|WZY|weizhuang|wz|1772@wzh|��կ|WZV|wuzhai|wz|1773@wzt|������|WZB|wangzhaotun|wzt|1774@wzz|΢����|WQP|weizizhen|wzz|1775@wzz|κ����|WKD|weizhangzi|wzz|1776@xan|�°�|EAM|xinan|xa|1777@xan|�˰�|XAZ|xingan|xa|1778@xax|�°���|XAF|xinanxian|xax|1779@xba|�±���|XAP|xinbaoan|xba|1780@xbc|�°��|EBP|xiabancheng|xbc|1781@xbl|������|XLP|xibali|xbl|1782@xch|����|ECH|xuancheng|xc|1783@xch|�˳�|XCD|xingcheng|xc|1784@xcu|С��|XEM|xiaocun|xc|1785@xcy|�´�Դ|XRX|xinchuoyuan|xcy|1786@xcz|�³���|XCB|xiachengzi|xcz|1787@xcz|�³���|XCT|xinchengzi|xcz|1788@xde|ϲ��|EDW|xide|xd|1789@xdj|С�ý�|EJM|xiaodejiang|xdj|1790@xdm|������|XMP|xidamiao|xdm|1791@xdo|С��|XEZ|xiaodong|xd|1792@xdo|С��|XOD|xiaodong|xdo|1793@xdp|������|XPC|xidoupu|xdp|1794@xfe|Ϣ��|XFW|xifeng|xf|1795@xfe|�ŷ�|EFG|xinfeng|xf|1796@xfe|���|XFV|xiangfen|xf|1797@xga|�¸�|EGG|xingan|xg|1798@xga|Т��|XGN|xiaogan|xg|1799@xgc|���̳�|XUJ|xigucheng|xgc|1800@xgy|�Ĺ�Ӫ|XGJ|xiaguanying|xgy|1801@xgz|������|NBB|xigangzi|xgz|1802@xhe|���|XXB|xianghe|xh|1803@xhe|�º�|XIR|xinhe|xh|1804@xhe|����|XWJ|xuanhe|xh|1805@xhj|б�ӽ�|EEP|xiehejian|xhj|1806@xht|�»���|XAX|xinhuatun|xht|1807@xhu|�»�|XHB|xinhua|xh|1808@xhu|�»�|EHQ|xinhua|xh|1809@xhu|����|XHP|xuanhua|xh|1810@xhx|�˺���|XEC|xinghexi|xhx|1811@xhy|С����|XYD|xiaoheyan|xhy|1812@xhy|�»�԰|XYP|xiahuayuan|xhy|1813@xhz|С����|EKY|xiaohezhen|xhz|1814@xji|���|XJB|xujia|xj|1815@xji|Ͽ��|EJG|xiajiang|xj|1816@xji|���|XJV|xinjiang|xj|1817@xji|����|ENP|xinji|xj|1818@xji|�½�|XJM|xinjiang|xj|1819@xjk|���ֿ�|EKM|xijiekou|xjk|1820@xjt|�����|XJT|xujiatun|xjt|1821@xjt|���̨|XTJ|xujiatai|xjt|1822@xjz|л����|XMT|xiejiazhen|xjz|1823@xka|�˿�|EKB|xingkai|xk|1824@xla|С�|EAQ|xiaolan|xl|1825@xla|����|XNB|xianglan|xl|1826@xld|��¡��|XDD|xinglongdian|xld|1827@xle|����|ELP|xinle|xl|1828@xli|����|XPX|xinlin|xl|1829@xli|С��|XLB|xiaoling|xl|1830@xli|����|XLJ|xinli|xl|1831@xli|����|XYB|xilin|xl|1832@xli|����|GCT|xiliu|xl|1833@xli|����|XPH|xianlin|xl|1834@xlt|������|XLD|xinlitun|xlt|1835@xlx|С·Ϫ|XLM|xiaoluxi|xlx|1836@xlz|��¡��|XZB|xinglongzhen|xlz|1837@xlz|������|XGT|xinlizhen|xlz|1838@xmi|����|XMD|xinmin|xm|1839@xms|����ɽ|XMB|ximashan|xms|1840@xmt|������|XAT|xiamatang|xmt|1841@xna|Т��|XNV|xiaonan|xn|1842@xnb|������|XRN|xianningbei|xnb|1843@xni|����|ENQ|xingning|xn|1844@xni|����|XNN|xianning|xn|1845@xpi|��ƽ|XPN|xiping|xp|1846@xpi|��ƽ|XPY|xingping|xp|1847@xpt|��ƺ��|XPM|xinpingtian|xpt|1848@xpu|ϼ��|XOS|xiapu|xp|1849@xpu|����|EPQ|xupu|xp|1850@xpu|Ϭ��|XIW|xipu|xp|1851@xqi|����|XQB|xinqing|xq|1852@xqi|����|XQD|xinqiu|xq|1853@xqp|��Ȫ��|XQJ|xingquanpu|xqp|1854@xrq|������|XRL|xianrenqiao|xrq|1855@xsg|С�¹�|ESP|xiaosigou|xsg|1856@xsh|����|XSB|xingshu|xs|1857@xsh|��ʯ|XIZ|xiashi|xs|1858@xsh|�ˮ|XZN|xishui|xs|1859@xsh|����|XSV|xiashe|xs|1860@xsh|��ˮ|XSP|xushui|xs|1861@xsh|С��|XAM|xiaoshao|xs|1862@xsp|������|XOB|xinsongpu|xsp|1863@xst|������|XDT|xingshutun|xst|1864@xsw|������|XSJ|xusanwan|xsw|1865@xta|��̶|XTQ|xiangtan|xt|1866@xta|��̨|XTP|xingtai|xt|1867@xtx|������|XAN|xiantaoxi|xtx|1868@xtz|��̨��|EIP|xiataizi|xtz|1869@xwe|����|XJQ|xuwen|xw|1870@xwp|������|EPD|xinwopu|xwp|1871@xwu|����|XWF|xiuwu|xw|1872@xxi|����|XSN|xinxian|xx|1873@xxi|Ϣ��|ENN|xixian|xx|1874@xxi|����|XQY|xixiang|xx|1875@xxi|����|XXQ|xiangxiang|xx|1876@xxi|��Ͽ|XIF|xixia|xx|1877@xxi|Т��|XOV|xiaoxi|xx|1878@xxj|С�½�|XXM|xiaoxinjie|xxj|1879@xxx|������|XGQ|xinxingxian|xxx|1880@xxz|��С��|XZC|xixiaozhao|xxz|1881@xxz|С��ׯ|XXP|xiaoxizhuang|xxz|1882@xya|����|XDB|xiangyang|xy|1883@xya|Ѯ��|XUY|xunyang|xy|1884@xyb|Ѯ����|XBY|xunyangbei|xyb|1885@xyd|������|XWN|xiangyangdong|xyd|1886@xye|��ҵ|SNZ|xingye|xy|1887@xyg|С���|XHM|xiaoyugu|xyg|1888@xyi|����|EEQ|xinyi|xy|1889@xyj|С�¾�|XFM|xiaoyuejiu|xyj|1890@xyq|С����|XYX|xiaoyangqi|xyq|1891@xyu|����|EXM|xiangyun|xy|1892@xyu|��ԫ|EIF|xiangyuan|xy|1893@xyx|������|EJH|xiayixian|xyx|1894@xyy|������|EYB|xinyouyi|xyy|1895@xyz|������|XZJ|xinyangzhen|xyz|1896@xzd|���ݶ�|UUH|xuzhoudong|xzd|1897@xzf|���ʷ�|XZX|xinzhangfang|xzf|1898@xzh|����|XRP|xuanzhong|xz|1899@xzh|����|XZT|xinzhao|xz|1900@xzh|����|XXV|xinzhou|xz|1901@xzi|ϫ��|XZD|xizi|xz|1902@xzm|������ľ|XRD|xizhelimu|xzlm|1903@xzz|������|ERP|xinzhangzi|xzz|1904@yan|Ҧ��|YAC|yaoan|ya|1905@yan|����|YAX|yian|ya|1906@yan|����|YAS|yongan|ya|1907@yax|������|YNB|yonganxiang|yax|1908@ybc|��Ӵ�|YBM|yubacun|ybc|1909@ybl|�ǲ���|YBB|yabuli|ybl|1910@ybs|Ԫ��ɽ|YUD|yuanbaoshan|ybs|1911@yca|���|YAB|yangcao|yc|1912@ycd|��ݵ�|YKM|yangcaodi|ycd|1913@ych|���κ�|AIH|yangchenghu|ych|1914@ych|ӭ��|YYB|yingchun|yc|1915@ych|Ҷ��|YER|yecheng|yc|1916@ych|�γ�|YKJ|yanchi|yc|1917@ych|�⴨|YYY|yanchuan|yc|1918@ych|����|YQQ|yangchun|yc|1919@ych|�˳�|YIN|yicheng|yc|1920@ych|Ӧ��|YHN|yingcheng|yc|1921@ych|���|YCK|yucheng|yc|1922@ych|�̳�|YEK|yancheng|yc|1923@ych|��|YED|yangchang|yc|1924@ych|����|YNF|yangcheng|yc|1925@ych|����|YAL|yangcha|yc|1926@ych|۩��|YPK|yuncheng|yc|1927@ych|���|YAP|yanchi|yc|1928@ycl|�Ʋ���|ACP|yuncailing|ycl|1929@ycx|�ݳ���|IXH|yuchengxian|ycx|1930@ycz|Ӫ����|YCT|yingchengzi|ycz|1931@yde|����|YDJ|yongdeng|yd|1932@yde|Ӣ��|YDQ|yingde|yd|1933@ydi|����|YDM|yindi|yd|1934@ydi|����|YGS|yongding|yd|1935@yds|�㵴ɽ|YGH|yandangshan|yds|1936@ydu|�ڶ�|YDG|yudu|yd|1937@ydu|԰��|YAJ|yuandun|yd|1938@ydx|Ӣ����|IIQ|yingdexi|ydx|1939@yfu|����|YFZ|yongfu|yf|1940@yfy|����Ӫ|YYM|yongfengying|yfy|1941@yga|���|YRB|yanggang|yg|1942@yga|����|YOV|yanggao|yg|1943@ygu|����|YIK|yanggu|yg|1944@yha|�Ѻ�|YOB|youhao|yh|1945@yha|�ຼ|EVH|yuhang|yh|1946@yhc|�غӳ�|YHP|yanhecheng|yhc|1947@yhu|�һ�|AEP|yanhui|yh|1948@yjh|��ʺ�|YHM|yangjiuhe|yjh|1949@yji|����|URH|yongjia|yj|1950@yji|Ӫ��|YAM|yingjie|yj|1951@yji|�ν�|AEW|yanjin|yj|1952@yji|�཭|YHG|yujiang|yj|1953@yji|Ҷ��|YCH|yeji|yj|1954@yji|�ོ|AJP|yanjiao|yj|1955@yji|Ҧ��|YAT|yaojia|yj|1956@yjj|���Ҿ�|YGJ|yuejiajing|yjj|1957@yjp|һ�䱤|YJT|yijianpu|yjb|1958@yjs|Ӣ��ɳ|YIR|yingjisha|yjs|1959@yjs|�ƾ���|AFP|yunjusi|yjs|1960@yjz|���ׯ|AZK|yanjiazhuang|yjz|1961@yka|����|RFH|yongkang|yk|1962@ykd|Ӫ�ڶ�|YGT|yingkoudong|ykd|1963@yla|����|YJX|yinlang|yl|1964@yla|����|YLW|yonglang|yl|1965@ylb|������|YSM|yiliangbei|ylb|1966@yld|���ֵ�|YDY|yongledian|yld|1967@ylh|������|YLX|yilaha|ylh|1968@yli|����|YLB|yilin|yl|1969@yli|����|ALW|yiliang|yl|1970@yli|����|YLM|yanglin|yl|1971@ylp|������|YLD|yuliangpu|ylb|1972@ylq|������|YQP|yangliuqing|ylq|1973@ylt|������|YUM|yueliangtian|ylt|1974@ylw|������|TWQ|yalongwan|ylw|1975@ylz|������|YSY|yanglingzhen|ylz|1976@yma|����|YMF|yima|ym|1977@yme|����|YXJ|yumen|ym|1978@yme|����|YMN|yunmeng|ym|1979@ymo|Ԫı|YMM|yuanmou|ym|1980@ymp|������|YVV|yangmingpu|ymp|1981@yms|һ��ɽ|YST|yimianshan|yms|1982@yna|����|YNK|yinan|yn|1983@yna|����|YVM|yinai|yn|1984@ynd|������|YNR|yiningdong|ynd|1985@ypl|һƽ��|YIM|yipinglang|ypl|1986@yps|Ӫ��ˮ|YZJ|yingpanshui|yps|1987@ypu|��|ABM|yangpu|yp|1988@ypw|Ӫ����|YPC|yingpanwan|ypw|1989@yqb|��Ȫ��|YPP|yangquanbei|yqb|1990@yqi|����|UPH|yueqing|yq|1991@yqi|����|YSR|yanqi|yq|1992@yqi|ԴǨ|AQK|yuanqian|yq|1993@yqt|Ҧǧ����|YQT|yaoqianhutun|yqht|1994@yqu|����|YQV|yangqu|yq|1995@ysg|������|YGP|yushugou|ysg|1996@ysh|��ɽ|YBF|yueshan|ys|1997@ysh|��ʯ|YSJ|yushi|ys|1998@ysh|��ʦ|YSF|yanshi|ys|1999@ysh|��ˮ|YUK|yishui|ys|2000@ysh|����|YSV|yushe|ys|2001@ysh|Ҥ��|ASP|yaoshang|ys|2002@ysh|Ԫ��|YSP|yuanshi|ys|2003@ysl|������|YAD|yangshuling|ysl|2004@ysp|Ұ����|AIP|yesanpo|ysp|2005@yst|������|YSX|yushutun|yst|2006@yst|����̨|YUT|yushutai|yst|2007@ysz|ӥ��Ӫ��|YIP|yingshouyingzi|ysyz|2008@yta|Դ̶|YTQ|yuantan|yt|2009@ytp|���ͱ�|YTZ|yatunpu|ytb|2010@yts|��Ͳɽ|YSL|yantongshan|yts|2011@ytt|��Ͳ��|YUX|yantongtun|ytt|2012@yws|��β��|YWM|yangweishao|yws|2013@yxi|Խ��|YHW|yuexi|yx|2014@yxi|����|YOG|youxian|yx|2015@yxi|��Ϫ|YXM|yuxi|yx|2016@yxi|����|ACG|yongxiu|yx|2017@yya|����|AFW|youyang|yy|2018@yya|��Ҧ|YYH|yuyao|yy|2019@yyd|߮����|YIG|yiyangdong|yyd|2020@yyd|������|YIQ|yueyangdong|yyd|2021@yyi|����|ARP|yangyi|yy|2022@yyu|Ѽ԰|YYL|yayuan|yy|2023@yyz|ԧ����|YYJ|yuanyangzhen|yyz|2024@yzb|�����|YZY|yanzibian|yzb|2025@yzh|����|YSZ|yizhou|yz|2026@yzh|����|UZH|yizheng|yz|2027@yzh|����|YZK|yanzhou|yz|2028@yzi|����|YQM|yizi|yz|2029@yzw|������|AEM|yangzhewo|wzw|2030@yzz|������|YZD|yangzhangzi|yzz|2031@zan|��|ZEY|zhenan|za|2032@zan|�ΰ�|ZAD|zhian|za|2033@zba|�а�|ZBP|zhaobai|zb|2034@zbw|�Ű���|ZUP|zhangbaiwan|zbw|2035@zch|֦��|ZCN|zhicheng|zc|2036@zch|�ӳ�|ZHY|zichang|zc|2037@zch|���|ZQK|zhucheng|zc|2038@zch|�޳�|ZIK|zoucheng|zc|2039@zch|�Գ�|ZCV|zhaocheng|zc|2040@zda|�µ�|ZHT|zhangdang|zd|2041@zdo|�ض�|ZDB|zhaodong|zd|2042@zfp|�ո���|ZFM|zhaofupu|zfp|2043@zgt|�¹�̨|ZGD|zhanggutai|zgt|2044@zgu|�Թ�|ZGB|zhaoguang|zg|2045@zhe|�к�|ZHX|zhonghe|zh|2046@zhm|�л���|VNH|zhonghuamen|zhm|2047@zjb|֦����|ZIN|zhijiangbei|zjb|2048@zjc|�ӼҴ�|ZJY|zhongjiacun|zjc|2049@zjg|��ҹ�|ZUB|zhujiagou|zjg|2050@zjg|�Ͼ���|ZYP|zijingguan|zjg|2051@zji|�ܼ�|ZOB|zhoujia|zj|2052@zji|����|ZDH|zhuji|zj|2053@zjn|����|ZEH|zhenjiangnan|zjn|2054@zjt|�ܼ���|ZOD|zhoujiatun|zjt|2055@zjt|֣����|ZJD|zhengjiatun|zjt|2056@zjw|�Ҽ���|CWJ|zhujiawan|cjw|2057@zjx|տ����|ZWQ|zhanjiangxi|zjx|2058@zjy|���Ҥ|ZUJ|zhujiayao|zjy|2059@zjz|����ƺ��|ZBW|caojiapingzi|zjpz|2060@zla|����|ZLV|zhanglan|zla|2061@zla|����|ZLT|zhenlai|zl|2062@zli|����|ZIV|zaolin|zl|2063@zlt|��³��|ZLD|zhalute|zlt|2064@zlx|����ŵ����|ZXX|jalainurxi|zlnex|2065@zmt|��ľͷ|ZOQ|zhangmutou|zmt|2066@zmu|��Ĳ|ZGF|zhongmu|zm|2067@znd|������|ZDJ|zhongningdong|znd|2068@zni|����|VNJ|zhongning|zn|2069@znn|������|ZNJ|zhongningnan|znn|2070@zpi|��ƽ|ZPF|zhenping|zp|2071@zpi|��ƽ|ZPS|zhangping|zp|2072@zpu|����|ZPR|zepu|zp|2073@zqi|��ǿ|ZVP|zaoqiang|zq|2074@zqi|����|ZQY|zhangqiao|zq|2075@zqi|����|ZTK|zhangqiu|zq|2076@zrh|���պ�|ZRC|zhurihe|zrh|2077@zrl|������|ZLM|zerunli|zrl|2078@zsb|��ɽ��|ZGQ|zhongshanbei|zsb|2079@zsd|������|ZOG|zhangshudong|zsd|2080@zsh|��ɽ|ZSQ|zhongshan|zs|2081@zsh|��ˮ|ZSY|zhashui|zs|2082@zsh|��ɽ|ZSZ|zhongshan|zs|2083@zsh|����|ZSG|zhangshu|zs|2084@zwo|����|ZOP|zhuwo|zw|2085@zwt|��ά��|ZWB|zhangweitun|zwt|2086@zwu|����|ZWD|zhangwu|zw|2087@zxi|��Ϫ|ZOY|zongxi|zx|2088@zxi|����|ZTN|zhongxiang|zx|2089@zxi|��Ϫ|ZXS|zixi|zx|2090@zxi|����|ZVT|zhenxi|zx|2091@zxi|����|ZIP|zhangxin|zx|2092@zxq|�������|ZXC|zhengxiangbaiqi|zxbq|2093@zya|����|ZVY|ziyang|zy|2094@zya|����|ZYN|zaoyang|zy|2095@zyb|��԰��|ZAW|zhuyuanba|zyb|2096@zye|��Ҵ|ZYJ|zhangye|zy|2097@zyu|��Զ|ZUW|zhenyuan|zy|2098@zyx|����Ϫ|ZXW|zhuyangxi|zyx|2099@zzd|���ݶ�|GOS|zhangzhoudong|zzd|2100@zzh|����|ZUS|zhangzhou|zz|2101@zzh|׳־|ZUX|zhuangzhi|zz|2102@zzh|����|ZZY|zizhou|zz|2103@zzh|��կ|ZZM|zhongzhai|zz|2104@zzh|����|ZXP|zhuozhou|zz|2105@zzi|զ��|ZAL|zhazi|zz|2106@zzs|׿��ɽ|ZZC|zhuozishan|zzs|2107@zzx|������|ZAQ|zhuzhouxi|zzx|2108@ayd|������|ADF|anyangdong|ayd|2109@bdd|������|BMP|baodingdong|bdd|2110@bha|����|FHP|binhai|bh|2111@bhb|������|FCP|binhaibei|bhb|2112@cxi|����|CBH|changxing|cx|2113@cya|����|CYN|changyang|cy|2114@deh|��������|DRB|dongerdaohe|dedh|2115@dju|����|DIM|daju|dj|2116@dqg|���๵|DSD|daqinggou|dqg|2117@dqi|����|DRH|deqing|dq|2118@dzd|���ݶ�|DOP|dingzhoudong|dzd|2119@fch|����|FDZ|fuchuan|fc|2120@fyu|��Զ|FYB|fuyuan|fy|2121@fzh|����|FZG|fuzhou|fz|2122@gbd|�߱��궫|GMP|gaobeidiandong|gbdd|2123@gju|���|GEM|geju|gj|2124@gmc|������|IMQ|guangmingcheng|gmc|2125@gyx|������|GNP|gaoyixi|gyx|2126@hbd|�ױڶ�|HFF|hebidong|hbd|2127@hcg|���й�|HKB|hanconggou|hcg|2128@hdd|������|HPP|handandong|hdd|2129@hfc|�Ϸʱ���|COH|hefeibeicheng|hfbc|2130@hhe|���|HPB|honghe|hh|2131@hme|����|IUQ|humen|hm|2132@hmn|������|HLR|haminan|hmn|2133@hnd|���϶�|HOH|huainandong|hnd|2134@jlb|�����Ǳ�|JMP|junliangchengbei|jlcb|2135@jle|����|JLS|jiangle|jl|2136@jnb|�����ر�|JCS|jianningxianbei|jnxb|2137@jni|����|JJH|jiangning|jn|2138@jrx|������|JWH|jurongxi|jrx|2139@jsh|��ˮ|JSM|jianshui|js|2140@klu|����|KLD|kulun|kl|2141@ldy|��ѹ�԰|INW|liduigongyuan|ldgy|2142@lhe|�к�|UDP|luanhe|lh|2143@lhx|�����|LBN|luohexi|lhx|2144@lsh|��ˮ|LDH|lishui|ls|2145@lya|����|LEH|liyang|ly|2146@mgd|���۶�|MDN|minggangdong|mgd|2147@mzb|���Ա�|MBM|mengzibei|mzb|2148@nch|�ϳ�|NDG|nancheng|nc|2149@ncx|�ϲ���|NXG|nanchangxi|ncx|2150@nfe|�Ϸ�|NFG|nanfeng|nf|2151@qfe|ǰ��|QFB|qianfeng|qf|2152@qsh|��ʢ|QSQ|qingsheng|qs|2153@smb|������|SHS|sanmingbei|smb|2154@sxb|���˱�|SLH|shaoxingbei|sxb|2155@syb|���ݱ�|SSH|shangyubei|syb|2156@szb|���ڱ�|IOQ|shenzhenbei|szb|2157@tha|ͨ��|TAM|tonghai|th|2158@thx|ͨ����|TXL|tonghuaxian|thx|2159@tni|̩��|TNS|taining|tn|2160@wns|��Ůɽ|WET|wunvshan|wns|2161@wws|����ɽ|WAH|wawushan|wws|2162@xcd|�����|XVF|xuchangdong|xcd|2163@xfe|����|XFT|xifeng|xf|2164@xgb|Т�б�|XJN|xiaoganbei|xgb|2165@xtd|��̨��|EDP|xingtaidong|xtd|2166@xxd|���綫|EGF|xinxiangdong|xxd|2167@xyc|������|XQF|xiyangcun|xyc|2168@xyd|������|OYN|xinyangdong|xyd|2169@ybl|ӭ��·|YFW|yingbinlu|ybl|2170@yge|���|VTM|yuge|yg|2171@yta|��̩|YTS|yongtai|yt|2172@yxi|��Ϫ|YXS|youxi|yx|2173@yxi|����|YUH|yixing|yx|2174@yyb|��Ҧ��|CTH|yuyaobei|yyb|2175@zdc|��������|ZHP|zhengdingjichang|zdjc|2176@zji|֯��|IZW|zhijin|zj|2177@zmx|פ�����|ZLN|zhumadianxi|zmdx|2178@zqi|ׯ��|ZQH|zhuangqiao|zq|2179@zzd|���ݶ�|ZAP|zhuozhoudong|zzd|2180@zzd|׿�ʶ�|ZDC|zhuozidong|zzd|2181@zzd|֣�ݶ�|ZAF|zhengzhoudong|zzd|2182";
var favorite_names = "@bji|����|BJP|0@sha|�Ϻ�|SHH|1@tji|���|TJP|2@cqi|����|CQW|3@csh|��ɳ|CSQ|4@cch|����|CCT|5@cdu|�ɶ�|CDW|6@fzh|����|FZS|7@gzh|����|GZQ|8@gya|����|GIW|9@hht|���ͺ���|HHC|10@heb|������|HBB|11@hfe|�Ϸ�|HFH|12@hzh|����|HZH|13@hko|����|VUQ|14@jna|����|JNK|15@kmi|����|KMM|16@lsa|����|LSO|17@lzh|����|LZJ|18@nni|����|NNZ|19@nji|�Ͼ�|NJH|20@nch|�ϲ�|NCG|21@sya|����|SYT|22@sjz|ʯ��ׯ|SJP|23@tyu|̫ԭ|TYV|24@wlq|��³ľ��|WMR|25@wha|�人|WHN|26@xnx|������|XXO|27@xan|����|XAY|28@ych|����|YIJ|29@zzh|֣��|ZZF|30";
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
    var g = "����/����";
    var j = "����/����";
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
            T = '<div class="com_hotresults" id="thetable" style="width:' + N + '"><div style="width:100%;"><div class="ac_title"><span>ƴ��֧������ĸ����</span><a class="ac_close" style="cursor:pointer" title="�ر�" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
            if (w) {
                T = T + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">����</li>'
            }
            T = T + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">����</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">A��E</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">F��J</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">K��O</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">P��T</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">U��Z</li></ul>';
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
            T += '<div id="flip_cities2"> ��ҳ������</div>';
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
                var M = (T == 0) ? "&laquo;&nbsp;��һҳ" : "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + R + "," + (T - 1) + "," + S + ");return false;'>&laquo;&nbsp;��һҳ</a>";
                M += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
                M += (T == R - 1) ? "��һҳ&nbsp;&raquo;" : "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" + R + "," + (T + 1) + "," + S + ")'>��һҳ&nbsp;&raquo;</a>";
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
                x("#top_cities").html('��"<font color=red>' + P + '</font>"������');
                return N
            } else {
                x("#top_cities").html("�޷�ƥ��:<font color=red>" + P + "</font>");
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
                var M = (O == 0) ? "<span style='float:left;'>&laquo;&nbsp;��ǰ</span>" : "<a style='float:left;cursor:pointer' href='' class='cityflip' onclick='$.stationFor12306.city_showlist(" + (O - 1) + ");return false;'>&laquo;&nbsp;��ǰ</a>";
                M += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
                M += (O == N - 1) ? "<span style='float:right;'>���&nbsp;&raquo;</span>" : "<a style='float:right;cursor:pointer' href='' class='cityflip' onclick='$.stationFor12306.city_showlist(" + (O + 1) + ");return false;'>���&nbsp;&raquo;</a>";
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
                d[++c] = '<div class="station-hd"><span class="zx">վ��</span><span class="zm">վ��</span><span class="dzsj">��վʱ��</span>';
                d[++c] = '<span class="cfsj">����ʱ��</span><span class="tlsj">ͣ��ʱ��</span>';
                d[++c] = '<a id="_stopStation_close_id" class="close" title="�ر�" href="javascript:" </a></div>';
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
                                    c = "�޿յ�"
                                } else {
                                    c = "�пյ�"
                                }
                                if (!s) {
                                    s = "&nbsp;&nbsp;"
                                }
                                $("#" + $.stopStation.defaultOptions.showTitleId).html('<span class="item1">' + l.station_train_code + '��      </span><span class="item2">' + l.start_station_name + "<em>--></em>" + l.end_station_name + '</span><span class="item3">' + s + '</span><span class="item4">' + c + "</span>").find("span").css("color", "#333")
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
        if ($("#query_ticket").html() == "ֹͣ��ѯ") {
            if (bS > 0 && au) {
                $("#auto_query").removeAttr("disabled");
                if ($("#dc").is(":checked")) {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#query_ticket").html("��ѯ");
                $("#query_ticket").unbind("click");
                bj();
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("<strong><label for='filterTic' style='cursor: pointer;'>����ʾѡ������</label></strong>");
                if (!$("#autoSubmit").is(":checked")) {
                    clearInterval(aC);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == "fc") {
                            var bP = "�ɹ��鵽" + $("#back_train_date").val() + "��" + bi[0]["queryLeftNewDTO"]["station_train_code"] + "��"
                        } else {
                            var bP = "�ɹ��鵽" + $("#train_date").val() + "��" + bi[0]["queryLeftNewDTO"]["station_train_code"] + "��"
                        }
                        if (bS == 1) {
                            bP = bP + "����"
                        } else {
                            bP = bP + "��" + bS + "�˳���"
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
                $("#filterTicDiv").html("<strong>���´�ˢ��ʱ��<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + bT + "</font>��<strong>");
                countDown = window.setInterval(function() {
                    var bU = "<strong>���´�ˢ��ʱ��<font class='colorA' style='font-size: 16px;'>";
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
                    bU += "</font>��<strong>";
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
            bR.push('<div><a title="����鿴ͣ��վ��Ϣ" href="javascript:" id="');
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
                bR.push(' <span class="i-card" title="��ƾ�������ֱ֤�ӽ���վ"></span>')
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
            bR.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">�鿴Ʊ��</span><b title="�鿴Ʊ��"></b></span>');
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
            bR.push("����</span>");
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
        if ("��" == bS) {
            if (bR == "SWZ_" || bR == "TZ_") {
                bT.push('<td width="46" align="center" class="yes" onclick="showTicketPrice(this)"��style="cursor: pointer;" id="');
                bT.push(bR);
                bT.push(bQ);
                bT.push('">');
                if (bO) {
                    bT.push('<div class="sale" title="��ϯ��Ʊ�۴���">' + bS + '<span class="i-mark">��</span></div>')
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
                        bT.push('<div class="sale" title="��ϯ��Ʊ�۴���">' + bS + '<span class="i-mark">��</span></div>')
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
                        bT.push('<div class="sale" title="��ϯ��Ʊ�۴���">' + bS + '<span class="i-mark">��</span></div>')
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
                        bT.push('<div class="sale" title="��ϯ��Ʊ�۴���">' + bS + '<span class="i-mark">��</span></div>')
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
                        bT.push('<div class="sale" title="��ϯ��Ʊ�۴���">' + bS + '<span class="i-mark">��</span></div>')
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
            $("#autoSubmitTxt").attr("title", "ϵͳά��ʱ���²������Զ��ύ");
            $("#partSubmit").prop("checked", false);
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999");
            $("#partSubmitTxt").attr("title", "ϵͳά��ʱ���²������Զ��ύ")
        }
        if (backTrainDate != null && backTrainDate != "") {
            $("#back_train_date").val(backTrainDate)
        }
        if ($("#fromStationText").val() == "") {
            $("#fromStationText").val("��ƴ/ȫƴ/����")
        }
        if ($("#toStationText").val() == "") {
            $("#toStationText").val("��ƴ/ȫƴ/����")
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
            $("#fromStationText").attr("title", "����ʱ���ñ�������ػ��ܱ�������");
            $("#toStationText").attr("title", "����ʱ���ñ�������ػ��ܱ�������");
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
        $("#fromStationText").attr("title", "��ǩʱ���ñ�������ػ��ܱ�������");
        $("#toStationText").attr("title", "��ǩʱ���ñ�������ػ��ܱ�������");
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
        $("#fromStationText").attr("title", "������Ʊʱ���ñ�������ػ��ܱ�������");
        $("#toStationText").attr("title", "������Ʊʱ���ñ�������ػ��ܱ�������");
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
        if ($("#fromStationText").val() != "" && $("#fromStationText").val() != "��ƴ/ȫƴ/����" || $("#toStationText").val() != "" && $("#toStationText").val() != "��ƴ/ȫƴ/����") {
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
            if ((bS != "" && bS != "��ƴ/ȫƴ/����") && (bT != "" && bT != "��ƴ/ȫƴ/����")) {
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
        if ($("#fromStationText").val() == "��ƴ/ȫƴ/����") {
            $.stationFor12306.from_to_station_class_gray($("#fromStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#fromStationText"))
        }
        if ($("#toStationText").val() == "��ƴ/ȫƴ/����") {
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
        $.stationFor12306.init(["fromStation", "toStation"], {_init_input: "��ƴ/ȫƴ/����",_top_4_initInput: "��ƴ/ȫƴ/���ֻ����",_unselected_class: "inpt_unselected",_selected_class: "inp_selected",confirmCallBack: function(bO, bP) {
                bO.removeClass("error");
                if (bO.attr("id") == "fromStationText") {
                    if (ccSelected.length > 0) {
                        if (bO.val() != bo) {
                            $("#prior_train span:gt(0)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  ������");
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
                            $("#inp-train").val("  ������");
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
        dhtmlx.alert({title: "��ʾ",ok: messages["button.ok"],text: bO,type: "alert-error",callback: function() {
            }})
    }
    function bh(bP, bV) {
        var bO = aO.checkForm();
        aO.hideErrors();
        if (bO) {
            var bU = "";
            if ($.trim($("#fromStation").val()) == $.trim($("#toStation").val()) || $.trim($("#fromStationText").val()) == $.trim($("#toStationText").val())) {
                bU = "�����غ�Ŀ�ĵز�����ͬ";
                b(bU);
                return false
            }
            if (!bd()) {
                bU = "�������ڲ������ڳ�������";
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
                    bU = "��ѡ������ڲ���Ԥ���ڷ�Χ�ڣ�";
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
                if (bR.length != 0 && bR != "������") {
                    dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "����������ȳ���δ��ӣ������������������Ӱ�ť������ȡ������������е����ݣ�",type: "alert-error",callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }});
                    return
                }
            }
            U();
            if (document.getElementById("autoSubmit").checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({title: "ѡ��˳���",ok: "ȷ��",text: "��ѡ��˳���",type: "alert-error",callback: function() {
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
            $("#query_ticket").html("ֹͣ��ѯ");
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
                $("#query_ticket").html("��ѯ");
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
                        var bR = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("��").concat(an($("#back_train_date").val())).concat('��</strong>����<strong id="trainum">').concat(bS.data.length).concat("</strong>������");
                        if ($("#auto_query").is(":checked")) {
                            var bQ = "";
                            for (var bT = 0; bT < 55; bT++) {
                                bQ = bQ + "&nbsp;"
                            }
                            bR = bR.concat(bQ + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>���鿴ˢ������</label></strong></div>")
                        }
                        $("#sear-result>p").html(bR);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", aS)
                        }
                    } else {
                        var bR = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("��").concat(an($("#train_date").val())).concat('��</strong>����<strong id="trainum">').concat(bS.data.length).concat("</strong>������");
                        if ($("#auto_query").is(":checked")) {
                            var bQ = "";
                            for (var bT = 0; bT < 55; bT++) {
                                bQ = bQ + "&nbsp;"
                            }
                            bR = bR.concat(bQ + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>���鿴ˢ������</label></strong></div>")
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
                bO = " ��һ";
                break;
            case 2:
                bO = " �ܶ�";
                break;
            case 3:
                bO = " ����";
                break;
            case 4:
                bO = " ����";
                break;
            case 5:
                bO = " ����";
                break;
            case 6:
                bO = " ����";
                break;
            case 7:
                bO = " ����";
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
                    b("�������ڲ���С�ڳ�������.");
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
                if (bQ.queryLeftNewDTO.swz_num != "--" && bQ.queryLeftNewDTO.swz_num != "��") {
                    am.push("SWZ");
                    return true
                }
            }
            if (bO[bP] == "TZ") {
                if (bQ.queryLeftNewDTO.tz_num != "--" && bQ.queryLeftNewDTO.tz_num != "��") {
                    am.push("TZ");
                    return true
                }
            }
            if (bO[bP] == "ZY") {
                if (bQ.queryLeftNewDTO.zy_num != "--" && bQ.queryLeftNewDTO.zy_num != "��") {
                    am.push("ZY");
                    return true
                }
            }
            if (bO[bP] == "ZE") {
                if (bQ.queryLeftNewDTO.ze_num != "--" && bQ.queryLeftNewDTO.ze_num != "��") {
                    am.push("ZE");
                    return true
                }
            }
            if (bO[bP] == "GR") {
                if (bQ.queryLeftNewDTO.gr_num != "--" && bQ.queryLeftNewDTO.gr_num != "��") {
                    am.push("GR");
                    return true
                }
            }
            if (bO[bP] == "RW") {
                if (bQ.queryLeftNewDTO.rw_num != "--" && bQ.queryLeftNewDTO.rw_num != "��") {
                    am.push("RW");
                    return true
                }
            }
            if (bO[bP] == "YW") {
                if (bQ.queryLeftNewDTO.yw_num != "--" && bQ.queryLeftNewDTO.yw_num != "��") {
                    am.push("YW");
                    return true
                }
            }
            if (bO[bP] == "RZ") {
                if (bQ.queryLeftNewDTO.rz_num != "--" && bQ.queryLeftNewDTO.rz_num != "��") {
                    am.push("RZ");
                    return true
                }
            }
            if (bO[bP] == "YZ") {
                if (bQ.queryLeftNewDTO.yz_num != "--" && bQ.queryLeftNewDTO.yz_num != "��") {
                    am.push("YZ");
                    return true
                }
            }
            if (bO[bP] == "WZ") {
                if (bQ.queryLeftNewDTO.wz_num != "--" && bQ.queryLeftNewDTO.wz_num != "��") {
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
                                $("#c_error2").html("��֤�벻�Ϸ�");
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
                        $("#c_error2").html("��������λ������֤��");
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
                                                    Q("��Ʊ��Ϣ���Ϸ�!", true, "ԭ�� " + b7.data.errMsg, true, "warn")
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
                                Q("�ύʧ��!", true, "ԭ�� " + bP.data.errMsg, true, "warn");
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
                            $("#c_error2").html("��֤�벻�Ϸ�");
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
            bQ = "ѧ��Ʊ"
        }
        tickets_info = new Array();
        var b0 = bZ[1];
        var bT = bZ[2];
        var bS = 0;
        var bR = passengerChecked.length;
        for (var bV = 0; bV < bT.length; bV++) {
            var bX = b0.queryLeftNewDTO[bT[bV].toLowerCase() + "_num"];
            if (bX == "--" || bX == "��") {
                bX = 0
            } else {
                if (bX == "��") {
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
                    bQ = "����Ʊ"
                } else {
                    if (bU == "2") {
                        bQ = "��ͯƱ"
                    } else {
                        if (bU == "3") {
                            bQ = "ѧ��Ʊ"
                        } else {
                            if (bU == "4") {
                                bQ = "�о�Ʊ"
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
            bO = "һ����"
        }
        if (bP == "ZE") {
            bO = "������"
        }
        if (bP == "SWZ") {
            bO = "������"
        }
        if (bP == "TZ") {
            bO = "�ص���"
        }
        if (bP == "YZ") {
            bO = "Ӳ��"
        }
        if (bP == "RZ") {
            bO = "����"
        }
        if (bP == "YW") {
            bO = "Ӳ��"
        }
        if (bP == "RW") {
            bO = "����"
        }
        if (bP == "GR") {
            bO = "�߼�����"
        }
        if (bP == "WZ") {
            bO = "����"
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
                        bS = "�����г���ʣ��" + (tickets_info[0].seat_type_name).split("��")[0] + "<strong>" + bU[0] + "</strong>��";
                        if (bU.length > 1) {
                            bS += ",����<strong>" + bU[1] + "</strong>��"
                        }
                        bS += "��";
                        if (bT.data.op_2 == "true") {
                            bS += "Ŀǰ�Ŷ������Ѿ�������Ʊ����������ѡ������ϯ��򳵴Ρ�"
                        } else {
                            if (bT.data.countT > 0) {
                                bS += 'Ŀǰ�Ŷ�����<font color="red">' + bT.data.countT + "</font>�ˣ�"
                            }
                        }
                        bS += "<br/>��ȷ��������Ϣ�Ƿ���ȷ�������ȷ�ϡ���ϵͳ��Ϊ������ϯλ��";
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
                        Q("��Ʊʧ��!", false, "ԭ�� " + bO.data.errMsg + '<a  id="xg_close_win_id">����޸�</a>', false, "lose");
                        $("#xg_close_win_id").click(function() {
                            S("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    }
                } else {
                    Q("��Ʊʧ��!", true, "�ܱ�Ǹ����رմ�������Ԥ����Ʊ", true, "lose")
                }
            },error: function(bO, bQ, bP) {
                Q("��Ʊʧ��!", true, "�ܱ�Ǹ������æ����رմ����Ժ����ԡ�", true, "lose");
                return
            }})
    }
    function m() {
        $.ajax({url: ctx + "confirmPassenger/confirmSingleForQueue",type: "post",data: {passengerTicketStr: getpassengerTicketsForAutoSubmit(),oldPassengerStr: getOldPassengersForAutoSubmit(),randCode: $("#randCode").val(),purpose_codes: bL(),key_check_isChange: md5Str,leftTicketStr: leftTicketStr,train_location: location_code},dataType: "json",async: true,success: function(bO) {
                if (bO.status) {
                    if (!bO.data.submitStatus) {
                        Q("��Ʊʧ��!", false, "ԭ�� " + bO.data.errMsg + '<a id="xg_close_win_id" >����޸�</a>', false, "lose");
                        $("#xg_close_win_id").click(function() {
                            S("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    } else {
                        var bP = new OrderQueueWaitTime("dc", Y, n);
                        bP.start()
                    }
                } else {
                    Q("��Ʊʧ��!", true, "�ܱ�Ǹ����رմ�������Ԥ����Ʊ", true, "lose")
                }
            },error: function(bO, bQ, bP) {
                Q("��Ʊʧ��!", true, "�ܱ�Ǹ������æ����رմ����Ժ����ԡ�", true, "lose");
                return
            }})
    }
    function Y(bO, bQ, bP) {
        if (bQ <= 5) {
            Q("�����Ѿ��ύ��ϵͳ���ڴ����У����Եȡ�", false, "", false, "work")
        } else {
            if (bQ > 30 * 60) {
                Q("�����Ѿ��ύ��Ԥ�Ƶȴ�ʱ�䳬��30���ӣ������ĵȴ���", false, "", false, "queue")
            } else {
                Q("�����Ѿ��ύ������Ԥ���ȴ�ʱ��" + bP + "�������ĵȴ���", false, "", false, "queue")
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
                            Q("�µ��ɹ�", false, "", false, "win")
                        }
                    } else {
                        Q("�µ��ɹ���", false, "", false, "win")
                    }
                },error: function(bR, bT, bS) {
                    Q("�µ��ɹ���", false, "", false, "win")
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
                    Q("��Ʊʧ��!", true, "ԭ�� " + bP.msg, false, "lose")
                } else {
                    Q("��Ʊʧ��!", true, "ԭ�� " + bP.msg, false, "lose")
                }
            } else {
                if (bO == -3) {
                    Q("��ѽ,��Ʊʧ��!", true, "�����ѳ���", false, "lose")
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
            var bW = bV ? '<p>����[<a href="' + ctx + 'queryOrder/init"><strong>�ҵ�12306</strong></a>]��������ҵ����Ҳ���Ե��[<a href="' + ctx + 'leftTicket/init"><strong>Ԥ����Ʊ</strong></a>]�����¹滮�����ó̡�</p>' : '<P>�鿴�������������������<a href="' + ctx + 'queryOrder/initNoComplete">δ��ɶ���</a>��</P>';
            $("#iamge_status_id").removeClass().addClass("icon i-" + bU);
            if (bR) {
                $("#up-box-hd_id").html("��ʾ<a id='closeTranforDialog_id' href='#nogo'>�ر�</a>");
                bW = "";
                $("#lay-btn_id").html("<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>ȷ��</a>")
            } else {
                $("#up-box-hd_id").html("��ʾ");
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
                        $("#notice_1_id").html("1.ϵͳ�����Ϊ������ϯλ���ݲ�֧����ѡϯλ��");
                        $("#notice_2_id").html("2.�������й涨��������ڹ�������ػ�Ʊʱ�����ʾ�������������°칫�һ����ξ֡�����������׼�����磩�����߳�ʾ�й��ڵ�˾�ּ��Ӵ���λ���ߵġ���������������������ͬ���֤���ź���̨��ͬ�����ش������Ρ����������������������������ξֻ�������������룬������ػ�Ʊʱ���ʾ�й���׼����");
                        if (bQ()) {
                            $("#notice_3_id").html("3.�����й涨��ѧ��Ʊ��Ʊ���������ѧ��֤�ϵĳ˳�����һ�£�����վ�����軻Ʊ��")
                        } else {
                            $("#notice_3_id").html("")
                        }
                    }
                } else {
                    $("#notice_1_id").html("1.ϵͳ�����Ϊ������ϯλ���ݲ�֧����ѡϯλ��");
                    if (bQ()) {
                        $("#notice_3_id").html("2.�����й涨��ѧ��Ʊ��Ʊ���������ѧ��֤�ϵĳ˳�����һ�£�����վ�����軻Ʊ��")
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
            bR = bT.substring(5, 6) + "��"
        } else {
            bR = bT.substring(4, 6) + "��"
        }
        if (bT.substring(6, 7) == "0") {
            bQ = bT.substring(7, 8) + "��"
        } else {
            bQ = bT.substring(6, 8) + "��"
        }
        var bP = new Date(Date.parse(bO.replace(/-/g, "/")));
        var bS = "��һ����������";
        return bR.concat(bQ).concat("&nbsp;&nbsp;").concat("��").concat(bS.charAt(bP.getDay()))
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
        if ($("#ticket_" + bT + "_train>span>span").text() == "�鿴Ʊ��") {
            if ($("#ticket_" + bT).attr("class") == "bgc") {
                $("#price_" + bT).addClass("bgc")
            }
            $.ajax({type: "get",isTakeParam: false,url: ctx + "leftTicket/queryTicketPrice",data: {train_no: bT,from_station_no: bU,to_station_no: bR,seat_types: bQ,train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())},success: function(bX) {
                    if (bX.status) {
                        $("#ticket_" + bT + "_train>span>span").html("����Ʊ��");
                        $("#ticket_" + bT + "_train>span>b").addClass("open");
                        $("#ticket_" + bT + "_train>span>b").attr("title", "����Ʊ��");
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
            $("#ticket_" + bT + "_train>span>span").html("�鿴Ʊ��");
            $("#ticket_" + bT + "_train>span>b").attr("title", "�鿴Ʊ��");
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
                            b("ѧ��Ʊ�ĳ˳�ʱ��Ϊÿ������6��1����9��30�ա�����12��1����3��31�գ�Ŀǰ������ѧ��Ʊҵ��");
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
                        b("��Ԥ�������̳�Ʊ��վʱ��Ϊ" + u(roundReferTime).format("yyyy��MM��dd�� hhʱmm��") + "���������ڲ������ڴ�ʱ��");
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
        if ($("#fromStationText").val() == "��ƴ/ȫƴ/����") {
            dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "����д�����أ�",type: "alert-error"});
            return
        }
        if ($("#toStationText").val() == "��ƴ/ȫƴ/����") {
            dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "����дĿ�ĵأ�",type: "alert-error"});
            return
        }
        var bQ = $("#prior_train span").length;
        var bX = $.trim($("#inp-train").val()).toUpperCase();
        if (bX.length == 0 || bX == "������") {
            dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "�����복��",type: "alert-error",callback: function() {
                    $("#inp-train").val("");
                    $("#inp-train").focus()
                }})
        } else {
            if (bQ < 6) {
                var bR = /^[a-zA-Z0-9]+$/;
                var bT = /^[0-9]+$/;
                if (!bR.test(bX)) {
                    dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "���θ�ʽ�������",type: "alert-error",callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }})
                } else {
                    if (bT.test(bX) && bX.length > 4) {
                        dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "���θ�ʽ�������",type: "alert-error",callback: function() {
                                ccInputSelected = true;
                                $("#inp-train").select()
                            }})
                    } else {
                        if (bX.length < 2) {
                            dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "���θ�ʽ�������",type: "alert-error",callback: function() {
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
                                                dhtmlx.alert({title: "������Ϣ",ok: "ȷ��",text: "������ĳ����������Ŀ�ĵز�����",type: "alert-error",callback: function() {
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
                                                    dhtmlx.alert({title: "������Ϣ",ok: "ȷ��",text: "������ĳ����������Ŀ�ĵز�����",type: "alert-error",callback: function() {
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
                                dhtmlx.alert({title: "������Ϣ",ok: "ȷ��",text: "������ĳ����������Ŀ�ĵز�����",type: "alert-error",callback: function() {
                                        $("#inp-train").val("")
                                    }})
                            } else {
                                if ($.inArray(bX, ccSelected) < 0) {
                                    var bZ = "<span class='sel-box w80'>" + bX + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + bX + "\",4)'></a></span>";
                                    $("#prior_train").append(bZ);
                                    ccSelected.push(bX);
                                    $("#inp-train").val("")
                                } else {
                                    dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "�˳����Ѿ���ӹ���",type: "alert-error",callback: function() {
                                            ccInputSelected = true;
                                            $("#inp-train").select()
                                        }})
                                }
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({title: "���복��",ok: "ȷ��",text: "������5�����ȳ���",type: "alert-error"});
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
                    if (bP != "" && bP != "����˿�����") {
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
                        dhtmlx.alert({title: "��ӳ�����ϵ��",ok: "ȷ��",text: "������5λ��ϵ��",type: "alert-error"});
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
        if ("" == bR || bR == null || bR == "�û���������" || bR == "admin") {
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
                                if (bR.data.loginFail == "��¼��������!") {
                                    al = false;
                                    av();
                                    $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                    $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px")
                                } else {
                                    if (bR.data.loginFail == "��֤�벻��ȷ��" && bR.data.loginFail != "��¼��������!") {
                                        av();
                                        $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                        $("#c_error").html(bR.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                        $("#randCode").focus()
                                    } else {
                                        if (bR.data.loginFail != "��֤�벻��ȷ��" && bR.data.loginFail != "��¼��������!") {
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
                                    if (bQ.data.loginFail == "��¼��������!") {
                                        al = false;
                                        av();
                                        $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                                        $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                        $("#username").focus()
                                    } else {
                                        if (bQ.data.loginFail == "��֤�벻��ȷ��" && bQ.data.loginFail != "��¼��������!") {
                                            av();
                                            $("#randCode").removeClass("inptxt w100").addClass("inptxt w200 error");
                                            $("#c_error").html(bQ.data.loginFail).attr("class", "error").css("margin-left", "60px");
                                            $("#randCode").focus()
                                        } else {
                                            if (bQ.data.loginFail != "��֤�벻��ȷ��" && bQ.data.loginFail != "��¼��������!") {
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
        if ($("#username").val() == "" || $("#username").val() == "�û���������" || $("#username").val() == null || $("#username").val() == "admin") {
            $("#username").css("color", "#999");
            $("#username").val("�û���������");
            $("#password").val("")
        }
        $("#username").focus(function() {
            var bO = $("#username").val();
            if (bO == "�û���������") {
                $("#username").css("color", "#333");
                $("#username").val("");
                $("#password").val("")
            }
        }).blur(function() {
            var bO = $("#username").val();
            if (bO == "") {
                $("#username").css("color", "#999");
                $("#username").val("�û���������")
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
            return "����"
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return "����"
            } else {
                if (hour_value >= 72) {
                    return "����"
                } else {
                    return "����"
                }
            }
        }
    };
    changeLiShi = function(bO) {
        if (bO.substring(0, 1) == "0") {
            if (bO.substring(1, 2) == "0") {
                if (bO.substring(3, 4) == "0") {
                    bO = bO.substring(4, 5) + "��"
                } else {
                    bO = bO.substring(3, 5) + "��"
                }
            } else {
                bO = bO.substring(1, 2) + "Сʱ" + bO.substring(3, 5) + "��"
            }
        } else {
            if (bO.substring(3, 5) == "00") {
                bO = bO.substring(0, 2) + "Сʱ"
            } else {
                bO = bO.substring(0, 2) + "Сʱ" + bO.substring(3, 5) + "��"
            }
        }
        return bO
    };
    isNum = function(bO) {
        return parseInt(bO)
    };
    buttonText = function() {
        return "Ԥ��"
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
var left_ticket_messages = {"leftTicketDTO.from_station": "����վ","leftTicketDTO.to_station": "Ŀ��վ","leftTicketDTO.train_no": "����","leftTicketDTO.train_date": "������",back_train_date: "������"};
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
    if ("�û���������" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("requiredSchoolName", function(b, a) {
    if ("���룯����" == b) {
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
}, "��֤�����!");
jQuery.validator.addMethod("randCodeFormat", function(c, b) {
    $("#i-ok").css("display", "none");
    var a = /^[a-zA-Z0-9]+$/;
    return this.optional(b) || a.test(c)
}, "��֤�����!");
jQuery.validator.addMethod("randCodeLength", function(b, a) {
    $("#i-ok").css("display", "none");
    return b.length == 4
}, "��֤�����!.");
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
}, "��֤�����!.");
jQuery.validator.addMethod("validateUsersName", function(b, a) {
    return this.optional(a) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(b)
}, "�û���ֻ������ĸ�����ֻ�_���");
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
}, "��֤�����!.");
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
    var e = {11: "����",12: "���",13: "�ӱ�",14: "ɽ��",15: "����",21: "����",22: "����",23: "����",31: "�Ϻ�",32: "����",33: "�㽭",34: "����",35: "����",36: "����",37: "ɽ��",41: "����",42: "����",43: "����",44: "�㶫",45: "����",46: "����",50: "����",51: "�Ĵ�",52: "����",53: "����",54: "����",61: "����",62: "����",63: "�ຣ",64: "����",65: "�½�",71: "̨��",81: "���",82: "����",91: "����"};
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
    var e = {11: "����",12: "���",13: "�ӱ�",14: "ɽ��",15: "����",21: "����",22: "����",23: "����",31: "�Ϻ�",32: "����",33: "�㽭",34: "����",35: "����",36: "����",37: "ɽ��",41: "����",42: "����",43: "����",44: "�㶫",45: "����",46: "����",50: "����",51: "�Ĵ�",52: "����",53: "����",54: "����",61: "����",62: "����",63: "�ຣ",64: "����",65: "�½�",71: "̨��",81: "���",82: "����",91: "����"};
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
}, "���ڸ�ʽ���Ϸ�");
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
            return this.optional(b) || /^[a-zA-Z��.��\u4E00-\u9FA5]+$/.test(c)
        } else {
            return this.optional(b) || /^[a-z A-Z��.��\u4E00-\u9FA5]+$/.test(c)
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
        return b && trim(b) != "��ƴ/ȫƴ/����" && trim(b) != ""
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
        if ((!b || trim(b) == "" || trim(b) == "��ƴ/ȫƴ/����")) {
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
        if (!confirm("�Ա������֤�е��Ա𲻷����Ƿ����?")) {
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
        if (!confirm("�������������֤�еĳ������ڲ������Ƿ����?")) {
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
}, "��֤�����!.");
jQuery.validator.addMethod("checkStation", function(b, a) {
    if ((!b || trim(b) == "" || trim(b) == "��ƴ/ȫƴ/����" || trim(b) == "��ƴ/ȫƴ/���ֻ����")) {
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
        $("#" + a).attr("title", "Σ��");
        $("#" + d).html("Σ��");
        $("#" + a).removeClass("rank-a");
        $("#" + a).removeClass("rank-b");
        $("#" + a).removeClass("rank-c");
        $("#" + a).addClass("rank-a")
    } else {
        if (c.length > 6 && new RegExp("[a-zA-Z]").test(c) && new RegExp("[0-9]").test(c) && new RegExp("[_]").test(c)) {
            $("#" + a).attr("title", "��ȫ");
            $("#" + d).html("��ȫ");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-c")
        } else {
            $("#" + a).attr("title", "һ��");
            $("#" + d).html("һ��");
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
        $("#" + c).attr("title", "Σ��");
        $("#" + g).html("Σ��");
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
            $("#" + c).attr("title", "Σ��");
            $("#" + g).html("Σ��");
            $("#" + c).removeClass("rank-a");
            $("#" + c).removeClass("rank-b");
            $("#" + c).removeClass("rank-c");
            $("#" + c).addClass("rank-a")
        } else {
            if (d > 1 && d < 5) {
                $("#" + c).attr("title", "һ��");
                $("#" + g).html("һ��");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-b")
            } else {
                $("#" + c).attr("title", "��ȫ");
                $("#" + g).html("��ȫ");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-c")
            }
        }
    }
}
;
var login_messages = {randCodeError: "��֤�����!",randCodeLentgh: "��֤�볤��Ϊ4λ!",randCodeFormat: "��֤��ֻ�������ֻ���ĸ���!",randCodeEmpty: "��֤�벻��Ϊ��!",userNameEmpty: "��¼��������д!",userNameFormat: "��¼����ʽ����ȷ������������!",passwordEmpty: "���������д,�Ҳ�����6λ!",passwordLength: "���볤�Ȳ�������6λ!",loginError: "��ǰ�����û�����,���Ժ�����!"};