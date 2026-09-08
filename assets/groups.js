/* 加盟団体データ
   出典：2025年度「親子の居場所・多様な学び相談＆座談会」チラシ裏面（団体名・市町・タグ）
        ＋ 各団体の公式サイト・県のフリースクール一覧・新聞記事など（2026-09-05 時点でネット上で確認できた範囲）
   kind   … 種別（フリースクール／親の会／居場所）。複数可。一覧の絞り込みに使う。
   tags   … gaku=座学による学習 / tai=体験型学習 / sou=親（子）を対象とした相談・語らいの場
            asobi=親（子）を対象とした遊び・体験の場 / hoka=その他の活動
   sample … true のものは、ネット上に情報が見つからなかったためサンプル文を入れている（インタビューで差し替える）
   photos … 写真ファイル（assets/img/）。実写真が届いたら差し替える。1枚目が一覧に出る。
   ※ このファイルを直すだけで、一覧の表示がすべて変わる。 */

const CITY_ORDER = [
  "桑名市","四日市市","四日市市ほか","菰野町","鈴鹿市","亀山市",
  "津市","伊賀市","松阪市","多気町","志摩市","熊野市"
];

/* トーキョーコーヒー各拠点に共通の説明 */
const TKCF_INTRO = "「トーキョーコーヒー」は「登校拒否」の文字を並べかえた名前です。不登校は子どもの問題ではなく大人の課題、という考えから、大人が集まって農作業や手仕事、料理などを楽しみ、子どもはそのそばで自由に過ごします。全国に広がる活動の拠点のひとつです。";

const SAMPLE_INTRO = "ここに団体の紹介文が入ります。どんな思いで始まった場所なのか、どんな一日を過ごしているのか、どんな子どもたちが通っているのかを、会のメンバーがうかがって書きます。";

const GROUPS = [
  { name:"トーキョーコーヒー桑名468", kind:["親の会", "居場所"], city:"桑名市", tags:["sou","asobi"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"桑名市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph3.svg","assets/img/ph1.svg","assets/img/ph2.svg"] },

  { name:"もるとれがーと", kind:["フリースクール"], city:"四日市市", tags:["gaku","tai","sou"],
    intro:"プログラミングを軸にした、学習型と居場所型をあわせもつ自律学習サポートスクールです。プログラミングやイラストのほか、オンライン教材での学び直しや学校の宿題の持ち込みもできます。通えない日はオンラインでの参加も可能です。",
    age:"小学生・中学生", days:"火・木 10:00〜13:00／水 13:00〜17:00／土 13:00〜16:00（日・月・祝 休）",
    fee:"入所金 22,000円（相談のみ 5,500円）／月額 22,000円〜41,800円（通う日数による）",
    place:"四日市市塩浜437-1", contact:"059-340-8697", url:"https://school.m-legato.jp/",
    photos:["assets/img/ph1.svg","assets/img/ph5.svg","assets/img/ph3.svg"] },

  { name:"太陽のほっとぽーと", kind:["居場所"], city:"四日市市", tags:["tai","sou","asobi"], sample:true,
    intro:SAMPLE_INTRO, age:"", days:"", fee:"", place:"四日市市", contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph2.svg","assets/img/ph4.svg"] },

  { name:"みちくさ", kind:["親の会"], city:"四日市市", tags:["sou","asobi"],
    intro:"四日市市で、学校に行っていない子・行きづらい子とその親のお話会を月に1回ひらいています。ときどきイベントも。ゆるく続けている集まりで、市内の親の会や居場所の情報も発信しています。",
    age:"学校に行きづらい子どもと保護者", days:"月1回のお話会", fee:"", place:"四日市市",
    contact:"note（みちくさ＠よっかいち）から", url:"https://note.com/kiminoibasyo",
    photos:["assets/img/ph2.svg","assets/img/ph6.svg","assets/img/ph1.svg"] },

  { name:"トーキョーコーヒー四日市145", kind:["親の会", "居場所"], city:"四日市市", tags:["sou","asobi"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"四日市市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph4.svg","assets/img/ph3.svg","assets/img/ph5.svg"] },

  { name:"あじさいの会", kind:["親の会"], city:"四日市市", tags:["sou"],
    intro:"不登校や、学校に行きづらい子どもをもつ親の会です。中高生の親、不登校を経験した人、フリースクールを運営している人など、いろいろな立場の人が集まります。安心して話せる雰囲気で、参加したあと心が軽くなったという声があります。",
    age:"学校に行きづらい子どもの保護者", days:"主に日曜 14:00〜16:00（月1回）", fee:"無料",
    place:"四日市市子ども子育て交流プラザ", contact:"", url:"",
    photos:["assets/img/ph5.svg","assets/img/ph2.svg","assets/img/ph3.svg"] },

  { name:"三重こどもの未来をつなぐ会", kind:["居場所"], city:"四日市市ほか", tags:["hoka"], sample:true,
    intro:SAMPLE_INTRO, age:"", days:"", fee:"", place:"四日市市ほか", contact:"", url:"",
    photos:["assets/img/ph6.svg","assets/img/ph1.svg","assets/img/ph4.svg"] },

  { name:"こもドーナツ", kind:["フリースクール", "親の会"], city:"菰野町", tags:["gaku","tai","sou","asobi"], note:"座学は一部",
    intro:"菰野町の古民家を使ったフリースクールです。裏山があり、子どもたちは探検に出かけたり、思い思いに過ごします。体にやさしい酵母で焼いたドーナツが名前の由来。学校に行きづらい子の保護者向けのお話会も開かれています。",
    age:"", days:"火・水・金 10:00〜15:00ごろ", fee:"", place:"三重郡菰野町小島1404",
    contact:"Instagram @komo_donut", url:"https://www.instagram.com/komo_donut/",
    photos:["assets/img/ph2.svg","assets/img/ph3.svg","assets/img/ph6.svg"] },

  { name:"トーキョーコーヒー鈴鹿17", kind:["親の会", "居場所"], city:"鈴鹿市", tags:["sou","asobi"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"鈴鹿市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph1.svg","assets/img/ph4.svg","assets/img/ph2.svg"] },

  { name:"トーキョーコーヒー鈴鹿291", kind:["親の会", "居場所"], city:"鈴鹿市", tags:["sou"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"鈴鹿市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph5.svg","assets/img/ph1.svg","assets/img/ph3.svg"] },

  { name:"僕らの夢庭スクールメイト", kind:["フリースクール"], city:"亀山市", tags:["gaku","tai","asobi"],
    intro:"オンライン型のフリースクールです。利用時間のあいだはいつでも入退室でき、キャンパスの中のいくつかの部屋から、居たい場所で、やりたいことをして過ごせます。プログラミングなど専門的な技術も学べ、作品を見せあいながら学びます。",
    age:"小学3年生〜高校生・大学生", days:"月〜金 10:00〜15:00（時間内いつでも入退室可）",
    fee:"入学金 10,000円／月額 15,000円（兄弟 10,000円）", place:"亀山市加太中在家7165（オンライン）",
    contact:"yumeniwa.school@gmail.com", url:"https://www.yumeniwaschool.com/",
    photos:["assets/img/ph5.svg","assets/img/ph6.svg","assets/img/ph1.svg"] },

  { name:"不登校のこどもと親と地域の会 でんでん", kind:["親の会"], city:"亀山市", tags:["sou","hoka"],
    intro:"2018年から亀山市で活動している、不登校の子どもと親と地域の会です。お茶を飲みながら悩みを話せる「おしゃべりカフェ」を月に3回ひらくほか、専門家の講演会、親子の体験、心理や発達についての勉強会も行っています。",
    age:"不登校・ひきこもりの子どもの保護者、地域の人", days:"おしゃべりカフェ 月3回ほか", fee:"",
    place:"亀山市内", contact:"Instagram @dendenibasyo", url:"https://www.instagram.com/dendenibasyo/",
    photos:["assets/img/ph4.svg","assets/img/ph2.svg","assets/img/ph5.svg"] },

  { name:"あおぞらん。", kind:["フリースクール"], city:"津市", tags:["tai","sou","asobi"],
    intro:"津市河芸町にある、体験学習を中心にしたフリースクールです。五感を使った学びと、子どもとの対話を大切にしています。活動日は毎月の案内で決まり、1日ずつの利用ができます。",
    age:"小学生・中学生", days:"毎月の案内による", fee:"1日 3,000円／回数券 8回 21,000円",
    place:"津市河芸町上野1586-2", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph1.svg","assets/img/ph3.svg"] },

  { name:"スコーレ倭", kind:["フリースクール"], city:"津市", tags:["tai","sou","asobi"],
    intro:"2023年4月に開校した、津市白山町のオルタナティブスクールです。子どもの幸せを活動の中心に置き、自然の中での体験やアート、農業、海外からのボランティアとの交流など、実践的な学びが特徴。朝、その日に何をするかをスタッフと話し合い、昼食も自分たちでつくります。",
    age:"小学1年〜中学3年", days:"月〜金（独自の開校カレンダー）", fee:"コース制（年間／プロジェクト／森活）",
    place:"津市白山町中ノ村138-4", contact:"090-4415-4042／schole.yamato@gmail.com", url:"https://www.scholeyamato.com/",
    photos:["assets/img/ph2.svg","assets/img/ph6.svg","assets/img/ph3.svg"] },

  { name:"永学館", kind:["フリースクール"], city:"津市", tags:["gaku","tai","sou"],
    intro:"津市久居の学習塾兼フリースクールです。安心して過ごせる居場所として、勉強・探究・表現を自分のペースで「学び直す」ことができます。「1人でいてもOK」「話さなくてもOK」。通う頻度や時間も相談できます。鈴鹿にも教室があります。",
    age:"小学生〜高校生", days:"月〜木 10:00〜15:00（鈴鹿教室は金・土）", fee:"",
    place:"津市久居明神町2614-5 ハヤシビル201", contact:"090-4466-8990／eigakukan8422@gmail.com", url:"https://eigakukan.hp.peraichi.com/",
    photos:["assets/img/ph1.svg","assets/img/ph3.svg","assets/img/ph5.svg"] },

  { name:"子育て楽しみ隊", kind:["親の会"], city:"津市", tags:["sou","hoka"], sample:true,
    intro:SAMPLE_INTRO, age:"", days:"", fee:"", place:"津市", contact:"", url:"",
    photos:["assets/img/ph4.svg","assets/img/ph1.svg","assets/img/ph6.svg"] },

  { name:"トーキョーコーヒー津294", kind:["親の会", "居場所"], city:"津市", tags:["sou","asobi"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"津市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph3.svg","assets/img/ph5.svg","assets/img/ph2.svg"] },

  { name:"WING学習塾", kind:["フリースクール"], city:"津市", tags:["gaku","sou"],
    intro:"津市久居にある、地域に根ざした学習塾です。学習指導と英会話に加えて、不登校のお子さんへの支援を行っています。不登校訪問相談員が一人ひとりに合わせて個別に指導し、オンラインでの対応もできます。",
    age:"小学生・中学生（英会話は幼児から）", days:"", fee:"", place:"津市久居",
    contact:"059-261-4247", url:"https://wing-futoko.com/",
    photos:["assets/img/ph5.svg","assets/img/ph4.svg","assets/img/ph1.svg"] },

  { name:"チルドレンハウス ひびうた", kind:["居場所"], city:"津市", tags:["gaku","tai","hoka"],
    intro:"津市久居で、放課後等デイサービスと放課後児童クラブを一体的に運営しています。「多様性に気づき、違いを認められる場所に」を掲げ、子ども食堂「ひびうた食堂」や工作体験、ギャラリーも。障害のあるなしにかかわらず、いろいろな子どもが一緒に過ごします。",
    age:"小学生〜", days:"火〜土 9:30〜17:30", fee:"", place:"津市久居新町767-12",
    contact:"059-202-1591", url:"https://www.hibiuta.org/hibiuta/children-house/",
    photos:["assets/img/ph6.svg","assets/img/ph2.svg","assets/img/ph4.svg"] },

  { name:"居場所支援・フリースクール step", kind:["フリースクール","居場所"], city:"津市", tags:["gaku","tai","sou","asobi"],
    intro:"NPO法人アートタウンプロジェクトが運営する、津市栗真の居場所支援・フリースクールです。自分の興味・関心のあることを追求し、安心できる環境で、それぞれの個性を伸ばしていきます。来室時間は自由。のんびりする、本を読む、おしゃべりする、絵を描く、学習するなど、自分のペースで過ごし、午後は学童教室・アート教室の子どもたちと同じ空間で時間を共有することもできます。",
    age:"小学校高学年（応相談）・中学生・高校生", days:"月〜金 11:00〜18:00（長期休暇中も開室）",
    fee:"月額 33,000円（回数にかかわらず）／入会費 53,000円／年会費 20,000円", place:"津市栗真町屋町545-3（津駅から車10分・江戸橋駅から徒歩15分）",
    contact:"arttown.pjt@gmail.com", url:"https://www.arttownpjt.net/",
    photos:["assets/img/ph1.svg","assets/img/ph6.svg","assets/img/ph2.svg"] },

  { name:"つばめカフェ", kind:["居場所"], city:"伊賀市", tags:["asobi"],
    intro:"伊賀市柘植地区で、「子どもたちや地域のみなさんの居場所をつくりたい」と集まった女性5人が始めた地域のボランティア食堂です。月に1回ほど、食事を出しながら、住民がそれぞれの特技を生かしてものづくりも教えています。クリスマス会やかるた大会も。",
    age:"子どもと地域の人", days:"月1回ほど", fee:"食事は有償", place:"伊賀市柘植地区",
    contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph6.svg","assets/img/ph4.svg"] },

  { name:"地立おもしろい学校", kind:["フリースクール"], city:"松阪市", tags:["gaku","tai","sou"], sample:true,
    intro:SAMPLE_INTRO, age:"", days:"", fee:"", place:"松阪市曽原町186", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph4.svg","assets/img/ph1.svg"] },

  { name:"明るい不登校＠三重", kind:["親の会"], city:"松阪市", tags:["sou"],
    intro:"音声アプリを使った全国規模の親の会の三重支部です。毎朝8時に、アプリ上でおしゃべりや悩み相談をしています。毎月1回は松阪市で実際に集まる親の会も。「一人でがんばらず、一緒に不登校を受け入れていけるように」を大切にしています。",
    age:"不登校の子どもの保護者・支援者", days:"毎朝8時（アプリ）／月1回（松阪市）", fee:"", place:"松阪市",
    contact:"松阪市市民活動情報サイト（登録番号2313）", url:"https://matsusaka.genki365.jp/group_527/aboutus.html",
    photos:["assets/img/ph3.svg","assets/img/ph1.svg","assets/img/ph5.svg"] },

  { name:"こころの相談室 ここのま", kind:["親の会"], city:"松阪市", tags:["sou"], sample:true,
    intro:SAMPLE_INTRO, age:"", days:"", fee:"", place:"松阪市", contact:"", url:"",
    photos:["assets/img/ph4.svg","assets/img/ph6.svg","assets/img/ph2.svg"] },

  { name:"トーキョーコーヒー松阪425", kind:["親の会", "居場所"], city:"松阪市", tags:["sou","asobi"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"松阪市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph1.svg","assets/img/ph2.svg","assets/img/ph6.svg"] },

  { name:"TEAM おるじょい", kind:["居場所"], city:"多気町", tags:["sou","asobi"], sample:true,
    intro:SAMPLE_INTRO, age:"", days:"", fee:"", place:"多気町", contact:"", url:"",
    photos:["assets/img/ph6.svg","assets/img/ph3.svg","assets/img/ph1.svg"] },

  { name:"りゅうのがっこう", kind:["フリースクール"], city:"志摩市", tags:["tai","asobi"],
    intro:"志摩市のフリースクールです。中学生・高校生が自分のやりたいことを見つけていくのを、そばで伴走します。",
    age:"中学生・高校生", days:"", fee:"", place:"志摩市", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph5.svg","assets/img/ph3.svg"] },

  { name:"トーキョーコーヒー志摩478", kind:["親の会", "居場所"], city:"志摩市", tags:["tai","asobi"],
    intro:TKCF_INTRO, age:"親子（保護者のみの参加も可）", days:"拠点ごとに設定", fee:"拠点ごとに設定",
    place:"志摩市", contact:"公式サイトの拠点マップから主宰者へ", url:"https://tkcf.eft-art.jp/",
    photos:["assets/img/ph5.svg","assets/img/ph3.svg","assets/img/ph4.svg"] },

  { name:"NPO法人あそぼらいつ", kind:["フリースクール", "居場所"], city:"熊野市", tags:["tai","asobi"],
    intro:"「すべての子どもに遊ぶ権利（ライツ）を」という願いから名づけられた、熊野市のNPOです。学童クラブ、小規模保育、放課後等デイサービス、子育て支援センター、フリースクール駅前、農場など、子どもにかかわる11の事業を行っています。",
    age:"乳幼児〜小中学生", days:"事業ごとに異なる", fee:"事業ごとに異なる", place:"熊野市井戸町220-3（フリースクール駅前は井戸町650-5）",
    contact:"0597-89-5607", url:"https://asoborights.jimdofree.com/",
    photos:["assets/img/ph2.svg","assets/img/ph1.svg","assets/img/ph6.svg"] }
];

const TAG_LABEL = {
  gaku:  "座学による学習",
  tai:   "体験型学習",
  sou:   "相談・語らいの場",
  asobi: "遊び・体験の場",
  hoka:  "その他の活動"
};
const TAG_SHORT = { gaku:"学", tai:"体", sou:"相", asobi:"遊", hoka:"他" };

/* 会の連絡先（Notionワークスペースの登録アドレス） */
const KAI_MAIL = "miekodomo.ground@gmail.com";
