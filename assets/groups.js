/* 加盟団体データ
   出典：2025年度「親子の居場所・多様な学び相談＆座談会」チラシ裏面（団体名・市町・タグ）
        ＋ 各団体の公式サイト・県のフリースクール一覧・新聞記事など（2026-09-05 時点でネット上で確認できた範囲）
   kind   … 種別（フリースクール／親の会／居場所）。複数可。一覧の絞り込みに使う。
   tags   … gaku=座学による学習 / tai=体験型学習 / sou=親（子）を対象とした相談・語らいの場
            asobi=親（子）を対象とした遊び・体験の場 / hoka=その他の活動
   sample … true のものは、ネット上に情報が見つからなかったためサンプル文を入れている（インタビューで差し替える）
   photos … 写真ファイル（assets/img/）。実写真が届いたら差し替える。1枚目が一覧に出る。
   url    … 1つなら文字列。複数（サイト・SNS）なら [{label, href}, …] の配列で書く。
   ※ このファイルを直すだけで、一覧の表示がすべて変わる。 */

const CITY_ORDER = [
  "桑名市","四日市市","四日市市ほか","菰野町","鈴鹿市","亀山市",
  "津市","伊賀市","松阪市","多気町","志摩市","熊野市"
];

/* トーキョーコーヒー各拠点に共通の説明 */
const TKCF_INTRO = "「トーキョーコーヒー」は「登校拒否」の文字を並べかえた名前です。不登校は子どもの問題ではなく大人の課題、という考えから、大人が集まって農作業や手仕事、料理などを楽しみ、子どもはそのそばで自由に過ごします。全国に広がる活動の拠点のひとつです。";

const SAMPLE_INTRO = "ここに団体の紹介文が入ります。どんな思いで始まった場所なのか、どんな一日を過ごしているのか、どんな子どもたちが通っているのかを、会のメンバーがうかがって書きます。";

/* 未取材の団体に出す仮の紹介文（インタビュー後に差し替える） */
const PLACEHOLDER_INTRO = "ここに団体の紹介文が入ります。どんな思いで始まった場所なのか、どんな一日を過ごしているのか、どんな子どもたちが通っているのかを、会のメンバーがうかがって書きます。";

const GROUPS = [
  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"桑名市", tags:["sou","asobi"],
    sub:"トーキョーコーヒー468（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph1.svg","assets/img/ph2.svg"] },

  { name:"もるとれがーと", kind:["フリースクール"], city:"四日市市", tags:["gaku","tai","sou"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph1.svg","assets/img/ph5.svg","assets/img/ph3.svg"] },

  { name:"太陽のほっとぽーと", kind:["居場所"], city:"四日市市", tags:["tai","sou","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph2.svg","assets/img/ph4.svg"] },

  { name:"みちくさ", kind:["親の会"], city:"四日市市", tags:["sou","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph6.svg","assets/img/ph1.svg"] },

  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"四日市市", tags:["sou","asobi"],
    sub:"トーキョーコーヒー145（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph4.svg","assets/img/ph3.svg","assets/img/ph5.svg"] },

  { name:"あじさいの会", kind:["親の会"], city:"四日市市", tags:["sou"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph5.svg","assets/img/ph2.svg","assets/img/ph3.svg"] },

  /* 2026-10-23 団体から届いた掲載内容（会アドレス経由）を反映 */
  { name:"フリースクール「サードプレイス」", kind:["フリースクール"], city:"四日市市", tags:["gaku","sou"],
    intro:"フリースクール「サードプレイス」は、学校でも家庭でもない第三の居場所として、2016年に四日市市で開設しました。完全個別学習支援や通信制高校の学びを支えるとともに、教員時代から子どもや保護者の声を聴いてきた経験をもとに、今年から相談事業も始めました。不登校、学習・進路、親子関係など、入会せずに相談だけでもご利用いただけます。学校復帰だけをゴールにせず、自分の物差しで学び、生きることをともに考えます。",
    age:"小学生・中学生・高校生・高校中退生・浪人生", days:"木・日以外 10時〜17時",
    fee:"入会費 10,000円／月額 14,000円〜25,000円", place:"四日市市蒔田3丁目3－21",
    contact:"info@thirdplace-mie.com",
    url:[
      { label:"ホームページ", href:"https://thirdplace-mie.jimdofree.com/" },
      { label:"Instagram", href:"https://www.instagram.com/miki_hamada_thirdplace/" },
      { label:"YouTube", href:"https://www.youtube.com/channel/UCmAoNiEP_UlC8-RbwAj-Cgg" },
      { label:"教育相談のご案内（LP）", href:"https://thirdplace-miki-lp.shiguibangtian.chatgpt.site" },
      { label:"公式LINE", href:"https://lin.ee/hil4F7I" }
    ],
    note:"減免：三重県のフリースクール支援事業対象校",
    photos:["assets/img/thirdplace_1.jpg","assets/img/thirdplace_2.jpg","assets/img/thirdplace_3.jpg","assets/img/thirdplace_4.jpg"] },

  { name:"三重こどもの未来をつなぐ会", kind:["居場所"], city:"四日市市ほか", tags:["hoka"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph6.svg","assets/img/ph1.svg","assets/img/ph4.svg"] },

  { name:"こもドーナツ", kind:["フリースクール", "親の会"], city:"菰野町", tags:["gaku","tai","sou","asobi"],
    note:"座学は一部",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph3.svg","assets/img/ph6.svg"] },

  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"鈴鹿市", tags:["sou","asobi"],
    sub:"トーキョーコーヒー17（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph1.svg","assets/img/ph4.svg","assets/img/ph2.svg"] },

  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"鈴鹿市", tags:["sou"],
    sub:"トーキョーコーヒー291（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph5.svg","assets/img/ph1.svg","assets/img/ph3.svg"] },

  /* 2026-10-20 団体から届いた掲載内容（会アドレス経由）を反映 */
  { name:"子どもの学び舎ワンダーYOU", kind:["フリースクール"], city:"鈴鹿市", tags:["gaku","tai","asobi"],
    sub:"運営：特定労働者協同組合コモンウェーブ",
    intro:"代表自身の子どもの不登校をきっかけに始まったフリースクールです。朝の会から帰りの会まで、学習、ランチ、外遊び、自由時間、掃除と、仲間と一緒に一日を過ごします。おでかけや地域活動、ビーチクリーン、畑仕事などの体験も大切にしています。現在、通っているのは小学1〜6年生。元気でやさしく、仲間を思う気持ちの強い子どもたちです。「失敗を宝に」「誰もが主役」を合言葉に、一人ひとりのペースを大切にしています。",
    age:"小学1年生〜6年生", days:"火曜〜金曜 10:00〜14:45（遠足・キャンプ・体験活動・外部講師による講座は随時）",
    fee:"入会金 20,000円／年会費 12,000円（初年度無料）／月謝 33,000円／ランチ代 300円（1回）／課外活動費 実費／体験入会（1か月・最大5回） 2,000円＋ランチ代300円（1回）／一時利用 4,000円（1回）",
    place:"鈴鹿市南若松（近鉄「千代崎駅」から徒歩7分）",
    contact:"090-3764-5670／wonderyou000@gmail.com",
    url:[
      { label:"commonwavejapan.com/activity/free-school", href:"https://commonwavejapan.com/activity/free-school/" },
      { label:"Instagram", href:"https://www.instagram.com/wonderyou_suzuka/" }
    ],
    note:"三重県「フリースクールで学ぶ子どもたちへの支援事業補助金」の対象施設です。県の認定を受けたご家庭には、月謝の半額分（上限15,000円）が県から返金されます。",
    photos:["assets/img/wonderyou_1.jpg"] },

  { name:"僕らの夢庭スクールメイト", kind:["フリースクール"], city:"亀山市", tags:["gaku","tai","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph5.svg","assets/img/ph6.svg","assets/img/ph1.svg"] },

  { name:"不登校のこどもと親と地域の会 でんでん", kind:["親の会"], city:"亀山市", tags:["sou","hoka"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph4.svg","assets/img/ph2.svg","assets/img/ph5.svg"] },

  { name:"あおぞらん。", kind:["フリースクール"], city:"津市", tags:["tai","sou","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph1.svg","assets/img/ph3.svg"] },

  { name:"スコーレ倭", kind:["フリースクール"], city:"津市", tags:["tai","sou","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph6.svg","assets/img/ph3.svg"] },

  { name:"永学館", kind:["フリースクール"], city:"津市", tags:["gaku","tai","sou"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph1.svg","assets/img/ph3.svg","assets/img/ph5.svg"] },

  { name:"子育て楽しみ隊", kind:["親の会"], city:"津市", tags:["sou","hoka"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph4.svg","assets/img/ph1.svg","assets/img/ph6.svg"] },

  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"津市", tags:["sou","asobi"],
    sub:"トーキョーコーヒー294（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph5.svg","assets/img/ph2.svg"] },

  { name:"チルドレンハウス ひびうた", kind:["居場所"], city:"津市", tags:["gaku","tai","hoka"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph6.svg","assets/img/ph2.svg","assets/img/ph4.svg"] },

{ name:"居場所支援・フリースクール step", kind:["フリースクール","居場所"], city:"津市", tags:["gaku","tai","sou","asobi"],
    intro:"NPO法人アートタウンプロジェクトが運営する、津市栗真の居場所支援・フリースクールです。自分の興味・関心のあることを追求し、安心できる環境で、それぞれの個性を伸ばしていきます。来室時間は自由。のんびりする、本を読む、おしゃべりする、絵を描く、学習するなど、自分のペースで過ごし、午後は学童教室・アート教室の子どもたちと同じ空間で時間を共有することもできます。",
    age:"小学校高学年（応相談）・中学生・高校生", days:"月〜金 11:00〜18:00（長期休暇中も開室）",
    fee:"月額 33,000円（回数にかかわらず）／入会費 53,000円／年会費 20,000円", place:"津市栗真町屋町545-3（津駅から車10分・江戸橋駅から徒歩15分）",
    contact:"arttown.pjt@gmail.com", url:"https://www.arttownpjt.net/",
    photos:["assets/img/ph1.svg","assets/img/ph6.svg","assets/img/ph2.svg"] },

  { name:"つばめカフェ", kind:["居場所"], city:"伊賀市", tags:["asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph6.svg","assets/img/ph4.svg"] },

  { name:"地立おもしろい学校", kind:["フリースクール"], city:"松阪市", tags:["gaku","tai","sou"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph4.svg","assets/img/ph1.svg"] },

  { name:"明るい不登校＠三重", kind:["親の会"], city:"松阪市", tags:["sou"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph3.svg","assets/img/ph1.svg","assets/img/ph5.svg"] },

  { name:"こころの相談室 ここのま", kind:["親の会"], city:"松阪市", tags:["sou"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph4.svg","assets/img/ph6.svg","assets/img/ph2.svg"] },

  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"松阪市", tags:["sou","asobi"],
    sub:"トーキョーコーヒー425（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph1.svg","assets/img/ph2.svg","assets/img/ph6.svg"] },

  { name:"TEAM おるじょい", kind:["居場所"], city:"多気町", tags:["sou","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph6.svg","assets/img/ph3.svg","assets/img/ph1.svg"] },

  { name:"りゅうのがっこう", kind:["フリースクール"], city:"志摩市", tags:["tai","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph2.svg","assets/img/ph5.svg","assets/img/ph3.svg"] },

  { name:"〇〇〇〇", kind:["親の会", "居場所"], city:"志摩市", tags:["tai","asobi"],
    sub:"トーキョーコーヒー478（正式な拠点名は確認中）",
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
    photos:["assets/img/ph5.svg","assets/img/ph3.svg","assets/img/ph4.svg"] },

  { name:"NPO法人あそぼらいつ", kind:["フリースクール", "居場所"], city:"熊野市", tags:["tai","asobi"],
    intro:PLACEHOLDER_INTRO, sample:true,
    age:"", days:"", fee:"", place:"", contact:"", url:"",
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
