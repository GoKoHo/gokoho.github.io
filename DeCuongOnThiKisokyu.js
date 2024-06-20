// script.js
// Hàm tô màu từ khóa
function highlightKeywords(text, keywords) {
    let words = text.split(' ');
    let coloredText = "";
    const colors = ['blue', 'red', 'orange', 'purple', 'cyan'];
    let colorIndex = 0;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let wordLowercase = word.toLowerCase();

        if (keywords.includes(wordLowercase)) {
            coloredText += `<span class="keyword" style="color:${colors[colorIndex]}">${word}</span> `;
            colorIndex = (colorIndex + 1) % colors.length;
        } else {
            coloredText += word + " ";
        }
    }
    return coloredText;
}
const questions = [
    {
        id: 1,
        jp: "うすい ぬの を ぬうとき は おさえ を つよく します。",
        romaji: "Usui nu no wo nuutokiwa osae wo tsuyoku shimasu.",
        meaning: "Khi may vải mỏng thì chỉnh chân vịt đè chặt .",
        answer: "ꓫ",
        keywords: ["うすい", "つよく", "usui", "tsuyoku", "mỏng", "chặt"],
        image: null
    },
    {
        id: 2,
        jp: "あつい ぬの を ぬうとき は おさえ を つよく します。",
        romaji: "Atsui nu no wo nuu toki wa osae wo tsuyoku shimasu.",
        meaning: "Khi may vải dày thì chỉnh chân vịt đè chặt .",
        answer: "◯",
        keywords: ["あつい", "つよく", "atsui", "tsuyoku", "dày", "chặt"],
        image: null
    },
    {
        id: 3,
        jp: "うすい きじを ぬうときは いとや はりを ふとく すると よいです。",
        romaji: "Usui kiji wo nuutokiwa itoya hariwo futoku suruto yoidesu.",
        meaning: "Khi may vải mỏng , chỉ và kim to thì tốt.",
        answer: "ꓫ",
        keywords: ["うすい","ふとく", "usui", "futoku", "mỏng", "to"],
        image: null
    },
    {
        id: 4,
        jp: "うすい きじを ぬうときは いとや はりを ほそく すると よいです。",
        romaji: "Usui kiji wo nuutokiwa itoya hariwo hosoku suruto yoidesu.",
        meaning: "Khi may vải mỏng , chỉ và kim nhỏ thì tốt.",
        answer: "◯",
        keywords: ["うすい",  "ほそく", "usui",  "hosoku", "mỏng", "nhỏ"],
        image: null
    },
    {
        id: 5,
        jp: "ミシンいとは ばんごうが おおきく なるほど ふとく なります。",
        romaji: "Mishin ito wa bangou ga ookiku nareba naruhodo futoku narimasu.",
        meaning: "Chỉ máy may số càng lớn thì sợi chỉ càng to .",
        answer: "ꓫ",
        keywords: ["おおきく", "ふとく","ookiku", "futoku", "lớn", "to"],
        image: null
    },
    {
        id: 6,
        jp: "ミシンいとは ばんごうが おおきく なるほど ほそく なりま す。",
        romaji: "Mishin ito wa bangou ga ookiku naruhodo hosoku narimasu.",
        meaning: "Chỉ máy may có số càng lớn thì chỉ càng mảnh .",
        answer: "◯",
        keywords: ["おおきく", "ほそく", "ookiku", "hosoku","lớn", "mảnh"],
        image: null
    },
    {
        id: 7,
        jp: "この ワイヤロープ は つかっては いけません 。",
        romaji: "Kono waiya-ropu wa tsukattewa ikemasen .",
        meaning: "Dây-cáp này không được sử dụng.",
        answer: "◯",
        keywords: ["ワイヤロープ", "いけません", "waiya-ropu", "ikemasen", "dây-cáp", "không"],
        image: "hinh anh 100 cau/waiyaropu.jpg"
    },
    {
        id: 8,
        jp: "この ワイヤロープ は つかって も よいです。",
        romaji: "Kono waiyaroupu wa tsukattemo yoidesu.",
        meaning: "Dây-cáp này dùng cũng được .",
        answer: "ꓫ",
        keywords: ["ワイヤロープ", "よいです。", "waiyaroupu", "yoidesu.", "dây-cáp", "được"],
        image: "hinh anh 100 cau/waiyaropu.jpg"
    },
    {
        id: 9,
        jp: "こうじようシートの アイレットの かんかくは 90cmいか です。",
        romaji: "Koujiyou shi-to no airetto no kankaku wa 90cm-ika desu.",
        meaning: "Khoảng cách giữa các khoen lỗ của tấm bạt dùng cho công trường là 90cm-trở-xuống.",
        answer: "ꓫ",
        keywords: ["90cmいか", "90cm-ika","90cm-trở-xuống."],
        image: null
    },
    {
        id: 10,
        jp: "こうじようシートの アイレットの かんかくは 60cmいか です。",
        romaji: "Koujiyou shi-to no airetto no kankaku wa 60cm-ika desu.",
        meaning: "Khoảng cách giữa các khoen lỗ của tấm bạt dùng cho công trường là 60cm-trở-xuống.",
        answer: "ꓫ",
        keywords: ["60cmいか","60cm-ika","60cm-trở-xuống."],
        image: null
    },
    {
        id: 11,
        jp: "シートに アイレットリング を う つときは うら に ざがねが くる ように うちます。",
        romaji: "Shiito airettoringu wo utsutokiwa ura ni zaganega kuru youni uchimasu.",
        meaning: "Khi dập lỗ-khoen trên tấm bạt, dập sao cho đế khoen đế nằm ở mặt-trái.",
        answer: "◯",
        keywords: ["アイレットリング", "うら","airettoringu", "ura","lỗ-khoen", "mặt-trái."],
        image: null
    },
    {
        id: 12,
        jp: "シートに アイレットリング を う つときは おもて に ざがねが くる ように うちます。",
        romaji: "Shiito airettoringu wo utsutokiwa omote ni zaganega kuru youni uchimasu.",
        meaning: "Khi dập lỗ-khoen trên tấm bạt, dập sao cho đế khoen đế nằm ở mặt-phải.",
        answer: "ꓫ",
        keywords: ["アイレットリング", "おもて","airettoringu", "omote","lỗ-khoen", "mặt-phải."],
        image: null
    },
    {
        id: 13,
        jp: " ミシンの うわいと が きれる げんいん には はり の ふりょう が あります。",
        romaji: "Mishin no uwaito ga kireru genin niwa hari no huryou ga arimasu.",
        meaning: "Trong các nguyên nhân gây đứt chỉ-trên của máy may, có nguyên nhân do kim bị hỏng.",
        answer: "◯",
        keywords: ["うわいと","uwaito","chỉ-trên"],
        image: null
    },
    {
        id: 14,
        jp: " ミシンの したいと が きれる げんいん には はりの ふりょう が あります。",
        romaji: "Mishin no shita-ito ga kireru genin niwa hari no furyo ga arimasu.",
        meaning: "Nguyên nhân chỉ-dưới của máy may bị đứt là do kim không tốt.",
        answer: "◯",
        keywords: ["したいと","shita-ito","chỉ-dưới"],
        image: null
    },
    {
        id: 15,
        jp: " はんぷには たていと と よこいと が あります。",
        romaji: "Hanpuniwa tate-ito to yoko-ito ga arimasu.",
        meaning: "Vải dù có sợi-dọc và sợi-ngang ." ,
        answer: "◯",
        keywords: ["たていと", "よこいと","tate-ito", "yoko-ito", "sợi-dọc", "sợi-ngang"],
        image: null
    },
    {
        id: 16,
        jp: " はんぷには たていと と よこいと が ありません。",
        romaji: "Hanpuniwa tate-ito to yoko-ito ga arimasen.",
        meaning: "Vải dù không có sợi-dọc và sợi-ngang .",
        answer: "ꓫ",
        keywords: ["たていと", "よこいと","tate-ito", "yoko-ito", "sợi-dọc", "sợi-ngang"],
        image: null
    },
    {
        id: 17,
        jp: " これは みつおり ( みつまき ）ぬい です。",
        romaji: "Korewa mitsuori ( mitsumaki ) nui desu.",
        meaning: "Đây là may-gấp-2-lần (có 3 lớp)",
        answer: "ꓫ",
        keywords: ["みつおり", "みつまき", "mitsuori", "mitsumaki", "may-gấp-2-lần", "3-lớp"],
        image: "hinh anh 100 cau/honnui.jpg"
    },
    {
        id: 18,
        jp: " これは ひらぬい です。",
        romaji: "Kore wa hiranui desu.",
        meaning: "Đây là may-song-song (sử dụng máy 2 kim, và may đường chỉ thẳng)",
        answer: "◯",
        keywords: ["ひらぬい", "hiranui", "may-song-song"],
        image: "hinh anh 100 cau/honnui.jpg"
    },
    {
        id: 19,
        jp: " これは ひらぬい です。",
        romaji: "Kore wa hiranui desu.",
        meaning: "Đây là may-song-song (sử dụng máy 2 kim, và may đường chỉ thẳng)",
        answer: "ꓫ",
        keywords: ["ひらぬい", "hiranui", "may-song-song"],
        image: "hinh anh 100 cau/mistuori.jpg"
    },
    {
        id: 20,
        jp: " ほんぬいミシンには 2ほんばり は ありません。",
        romaji: "Honnui mishin niwa nihonbari wa arimasen.",
        meaning: "Máy may cơ bản không có máy hai-kim .",
        answer: "ꓫ",
        keywords: ["2ほんばり", "nihonbari", "hai-kim"],
        image: null
    },
    {
        id: 21,
        jp: " ほんぬいミシンには 2ほんばり も あります。",
        romaji: "Honnui mishin niwa nihonbari mo arimasu.",
        meaning: "Máy may cơ bản cũng có máy hai-kim .",
        answer: "◯",
        keywords: ["2ほんばり","nihonbari", "hai-kim"],
        image: null
    },
    {
        id: 22,
        jp: " あつい きじを ぬうときは ミシン の かいてんすうを おそく すると よいです。",
        romaji: "Atsui kijiwo nuutokiwa mishinno kaiten suuwo osoku suruto yoidesu.",
        meaning: "Khi may vải dày , nên để tốc độ quay của máy may chậm thì tốt.",
        answer: "◯",
        keywords: ["あつい","おそく", "atsui", "osoku", "dày", "chậm"],
        image: null
    },
    {
        id: 23,
        jp: "これは しゃもんおり ( あやおり ) です",
        romaji: "Korewa shamon-ori ( ayaori ) desu.",
        meaning: "Đây là dệt-thoi-vân-chéo ( long-2 ).",
        answer: "◯",
        keywords: ["しゃもんおり", "あやおり", "shamon-ori", "ayaori", "dệt-thoi-vân-chéo", "long-2"],
        image: "hinh anh 100 cau/shamonori.jpg"
    },
    {
        id: 24,
        jp: "これは ひらおり です。",
        romaji: "Kore wa hiraori desu.",
        meaning: "Đây là vải-dệt-thoi ( long-1 ).",
        answer: "◯",
        keywords: ["ひらおり", "hiraori", "vải-dệt-thoi", "long-1"],
        image: "hinh anh 100 cau/hiraori.png"
    },
    {
        id: 25,
        jp: "これ は しゅすおり です。",
        romaji: "kore wa shusu-ori desu.",
        meaning: "Đây là dệt-vân-đoạn ( long-4 )",
        answer: "ꓫ",
        keywords: ["しゅすおり", "shusu-ori", "dệt-vân-đoạn", "long-4"],
        image: "hinh anh 100 cau/shamonori.jpg"
    },
    {
        id: 26,
        jp: "これは らっせるおり です。",
        romaji: "Kore wa rasseru-ori desu.",
        meaning: "Đây là dệt-russel ( len-dệt-kim )",
        answer: "ꓫ",
        keywords: ["らっせるおり", "rasseru-ori", "dệt-russel", "len-dệt-kim"],
        image: "hinh anh 100 cau/shamonori.jpg"
    },
    {
        id: 27,
        jp: "これ は ドームがたテント です。",
        romaji: "Kore wa domugata-tento desu.",
        meaning: "Đây là lều dạng-mái-vòm .",
        answer: "◯",
        keywords: ["ドームがたテント", "domugata-tento", "dạng-mái-vòm"],
        image: "hinh anh 100 cau/domugata.jpg"
    },
    {
        id: 28,
        jp: "これは こていしき テント です。",
        romaji: "Korewa koteishiki tento desu.",
        meaning: "Đây là lều dạng cố-định .",
        answer: "◯",
        keywords: ["こていしき", "koteishiki","cố-định"],
        image: "hinh anh 100 cau/kouteishikitento.png"
    },
    {
        id: 29,
        jp: "これは そうしょくようテント です。",
        romaji: "Korewa soushoku-youtento desu.",
        meaning: "Đây là lều-trang-trí .",
        answer: "◯",
        keywords: ["そうしょくようテント", "soushoku-youtento", "lều-trang-trí"],
        image: "hinh anh 100 cau/soushoku.jpg"
    },
    {
        id: 30,
        jp: "これ は ひよけ テント です。",
        romaji: "Kore wa hiyoke tento desu.",
        meaning: "Đây là lều che-nắng.",
        answer: "◯",
        keywords: ["ひよけ","hiyoke", "che-nắng."],
        image: "hinh anh 100 cau/hiyoke.jpg"
    },
    {
        id: 31,
        jp: "これは しゅうかいよう くみたてテント です。",
        romaji: "Kore wa shukaiyou kumitate-tento desu.",
        meaning: "Đây là lều-chữ-A dạng lắp-ráp , dùng cho tập thể.",
        answer: "◯",
        keywords: ["しゅうかいよう", "くみたてテント", "shukaiyou", "kumitate-tento", "lều-chữ-a", "lắp-ráp"],
        image: "hinh anh 100 cau/shukaiyo.jpg"
    },
    {
        id: 32,
        jp: "これは テントそうこ の こうぞうず です。",
        romaji: "Korewa tentosouko no kouzouzu desu.",
        meaning: "Đây là bản-vẽ-kết-cấu của lều-nhà-kho .",
        answer: "◯",
        keywords: ["テントそうこ", "こうぞうず", "tentosouko", "kouzouzu", "lều-nhà-kho", "bản-vẽ-kết-cấu"],
        image: "hinh anh 100 cau/tentosokozu.jpg"
    },
    {
        id: 33,
        jp: "これは まどよう ひよけ テント です。",
        romaji: "Kore wa madoyou hiyoke tento desu.",
        meaning: "Đây là lều che-nắng , dùng cho cửa-sổ .",
        answer: "◯",
        keywords: ["まどよう", "ひよけ", "madoyou", "hiyoke","che-nắng", "cửa-sổ"],
        image: "hinh anh 100 cau/madoyo.jpg"
    },
    {
        id: 34,
        jp: "これは キャンプよう テント です。",
        romaji: "Korewa kyanpuyou tento desu.",
        meaning: "Đây là lều cắm-trại.",
        answer: "◯",
        keywords: ["キャンプよう", "kyanpuyou","cắm-trại."],
        image: "hinh anh 100 cau/kyanpu.jpg"
    },
    {
        id: 35,
        jp: "これは かどうしき テント です。",
        romaji: "Korewa kadoshiki tento desu.",
        meaning: "Đây là liều di-động.",
        answer: "ꓫ",
        keywords: ["かどうしき","kadoshiki","di-động."],
        image: "hinh anh 100 cau/kouteitento.jpg"
    },
    {
        id: 36,
        jp: "これは オーニング の ほねぐみ です。",
        romaji: "Korewa ooningu no honegumi desu.",
        meaning: "Đây là khung mái-hiên.",
        answer: "◯",
        keywords: ["オーニング", "ほねぐみ", "ooningu", "honegumi", "khung", "mái-hiên."],
        image: "hinh anh 100 cau/oningu.jpg"
    },
    {
        id: 37,
        jp: "オーニング には しゅどうしき と でんどうしき が あります。",
        romaji: "Ooningu niwa shudoushiki to dendoushiki ga arimasu.",
        meaning: "Mái-hiên có loại điều khiển bằng tay-quay và có loại điều khiển bằng điện.",
        answer: "◯",
        keywords: ["オーニング", "しゅどうしき", "でんどうしき", "ooningu", "shudoushiki", "dendoushiki", "mái-hiên", "tay-quay", "điện."],
        image: null
    },
    {
        id: 38,
        jp: " まきあげしきテントは おもに ひよけ あめよけ に つかわれます。",
        romaji: "Makiageshiki tento wa omoni hiyoke ameyoke ni tsukawaremasu.",
        meaning: "Lều dạng mái bạt cuốn chủ yếu dùng để che-nắng che-mưa ",
        answer: "◯",
        keywords: ["ひよけ", "あめよけ","hiyoke", "ameyoke","che-nắng", "che-mưa"],
        image: null
    },
    {
        id: 39,
        jp: "とざんようテント に つかわれる きじは なるべく あつい ものが よいです。",
        romaji: "Tozanyou-tento ni tsukawareru kijiwa kiji wa narubeku atsui mono ga yoidesu.",
        meaning: "Vải dùng làm lều-leo-núi nên dùng vải dày",
        answer: "ꓫ",
        keywords: ["とざんようテント", "あつい", "tozanyou-tento", "atsui", "lều-leo-núi", "dày"],
        image: null
    },
    {
        id: 40,
        jp: "しゅうかいよう テント は おも に うんどうかい や てんじかい など に つかわれます。",
        romaji: "Shukaiyou tentowa omoni undoukai ya tenjikai nado ni tsukawaremasu.",
        meaning: "Lều-tập-thể chủ yếu được dùng ở đại-hội-thể-thao , hội-chợ-triển-lãm , v.v.",
        answer: "◯",
        keywords: ["しゅうかいよう","うんどうかい", "てんじかい", "shukaiyou","undoukai", "tenjikai", "lều-tập-thể", "đại-hội-thể-thao", "hội-chợ-triển-lãm"],
        image: null
    },
    {
        id: 41,
        jp: "テントそうこ は すべて こていしき です。",
        romaji: "Tentosouko wa subete koteishiki desu.",
        meaning: "Lều-nhà-kho , toàn bộ đều là dạng cố-định",
        answer: "ꓫ",
        keywords: ["テントそうこ", "こていしき", "tentosouko", "koteishiki", "lều-nhà-kho", "cố-định"],
        image: null
    },
    {
        id: 42,
        jp: "せんぱくようシート は きょうど や ぼうすいせい は とくに ひつよう ありません。",
        romaji: "Senpaku you shi--to wa kyodo ya bousuisei wa tokuni hitsuyou arimasen.",
        meaning: "Tấm bạt che tàu thuyền không cần có độ-bền và tính chống-thấm.",
        answer: "ꓫ",
        keywords: ["きょうど", "ぼうすいせい","kyodo", "bousuisei", "độ-bền", "chống-thấm."],
        image: null
    },
    {
        id: 43,
        jp: "たちばさみ は てんとじ を １まい ずつ きるのに てきしています。",
        romaji: "Tachi-basami wa tentoji wo ichi mai zutsu kirunoni tekishite imasu.",
        meaning: "Kéo-cắt-vải thích hợp để cắt từng tấm vải may lều.",
        answer: "◯",
        keywords: ["たちばさみ","tachi-basami", "kéo-cắt-vải"],
        image: null
    },
    {
        id: 44,
        jp: "ちょくせんぬい には ちどりミシン が てきして います。",
        romaji: "Chokusennui niwa chidorimishin ga tekishite imasu.",
        meaning: "Để may đường-thẳng thì dùng máy-may-dích-dắc là thích hợp.",
        answer: "ꓫ",
        keywords: ["ちょくせんぬい", "ちどりミシン", "chokusennui", "chidorimishin", "máy-may-dích-dắc", "đường-thẳng"],
        image: null
    },
    {
        id: 45,
        jp: "めんはんぷ は あさ から できていま す。",
        romaji: "Men-hanpu wa asa kara dekite imasu.",
        meaning: "Vải-bố được làm từ sợi-gai",
        answer: "ꓫ",
        keywords: ["めんはんぷ", "あさ", "men-hanpu", "asa", "vải-bố", "sợi-gai"],
        image: null
    },
    {
        id: 46,
        jp: "こうしゅうはウエルダー を つかうと きは やけど に ちゅういします。",
        romaji: "Koshu-ha-ueruda- wo tsukau toki wa yakedo ni chuui shimasu.",
        meaning: "Khi sử dụng máy-hàn-cao-tần thì phải cẩn thận để tránh bị bỏng",
        answer: "◯",
        keywords: ["こうしゅうはウエルダー", "やけど", "ちゅうい", "koshu-ha-ueruda-","yakedo","bỏng","máy-hàn-cao-tần"],
        image: null
    },
    {
        id: 47,
        jp: "こうしゅうはウエルダー は ようちゃくき では ありません。",
        romaji: "Koushu-ha-ueruda- wa youchakuki dewa arimasen .",
        meaning: "Máy-hàn-cao-tần không phải là máy hàn nóng-chảy",
        answer: "ꓫ",
        keywords: ["こうしゅうはウエルダー", "ようちゃくき", "koushu-ha-ueruda-", "youchakuki", "máy-hàn-cao-tần", "nóng-chảy"],
        image: null
    },
    {
        id: 48,
        jp: "けんちくこうじようシート には めんはんぷ きじを つかっても よいです。",
        romaji: "Kenchiku-koujiyou-shiito niwa menhanpu kijiwo tsukattemo yoidesu.",
        meaning: "Có thể sử dụng vải-bố cho các tấm-bạt-công-trình-xây-dựng .",
        answer: "ꓫ",
        keywords: ["けんちくこうじようシート", "めんはんぷ","kenchiku-koujiyou-shiito", "menhanpu", "tấm-bạt-công-trình-xây-dựng", "vải-bố"],
        image: null
    },
    {
        id: 49,
        jp: "めうち は はとめよう の あな を あける どうぐです。",
        romaji: "Meuchi wa hatomeyou no anawo akeru dougudesu.",
        meaning: "Cây-dùi-lỗ là dụng cụ để tạo lỗ cho khoen tròn bọc lỗ",
        answer: "ꓫ",
        keywords: ["めうち", "meuchi","cây-dùi-lỗ"],
        image: null
    },
    {
        id: 50,
        jp: "これは はとめ うちぐ です。",
        romaji: "Korewa hatome uchigu desu.",
        meaning: "Đây là dụng cụ dập-lỗ khoen",
        answer: "◯",
        keywords: ["はとめ", "うちぐ", "hatome", "uchigu", "dập-lỗ", "khoen"],
        image: "hinh anh 100 cau/hatomeuchigu.jpg"
    },
    {
        id: 51,
        jp: "めうち は きじ を きる どうぐ です。",
        romaji: "Meuchi wa kiji wo kiru dougu desu.",
        meaning: "Cây-dùi-lỗ là dụng cụ để cắt vải.",
        answer: "ꓫ",
        keywords: ["めうち", "meuchi", "cây-dùi-lỗ"],
        image: null
    },
    {
        id: 52,
        jp: "これは ほんぬいミシンの ぬいめ を あらわしています。",
        romaji: "kore wa honnui mishin no nuime wo arawasite imasu.",
        meaning: "Cái này thể hiện đường may của máy may cơ bản.",
        answer: "◯",
        keywords: [],
        image: "hinh anh 100 cau/honnuizu.jpg"
    },
    {
        id: 53,
        jp: "アイレットリング を うつときは リ ングより ちいさい あなを あけま す。",
        romaji: "Airettoringu wo utsutoki wa ringu yori chiisai anawo akemasu.",
        meaning: "Khi dùi lỗ để gắn khoen tròn, thì dùi lỗ nhỏ hơn khoen.",
        answer: "◯",
        keywords: ["アイレットリング", "ちいさい", "airettoringu","chiisai","khoen","nhỏ"],
        image: null
    },
    {
        id: 54,
        jp: "めんはんぷ は いっぱんに ひらおり です。",
        romaji: "Menhanpu wa ippanni hiraori desu.",
        meaning: "Vải-bố , thông thường là vải-dệt-thoi.",
        answer: "◯",
        keywords: ["めんはんぷ", "ひらおり", "menhanpu", "hiraori", "vải-bố", "vải-dệt-thoi."],
        image: null
    },
    {
        id: 55,
        jp: "いどうしきあしば （ローリング タワー）の うえ では きゃたつ を つかっても よいです。",
        romaji: "Idousikiashiba ( rouringu tawaa ) no ue dewa kyatatsu wo tsukattemo yoidesu.",
        meaning: "Có thể dùng được thang-chữ-A trên giàn-giáo-di-động.",
        answer: "ꓫ",
        keywords: ["いどうしきあしば","うえ", "きゃたつ", "idousikiashiba","ue", "kyatatsu","giàn-giáo-di-động.", "thang-chữ-a", "trên"],
        image: null
    },
    {
        id: 56,
        jp: "きかいの そうじ や きゅうゆ を するとき は きかいを とめてから します。",
        romaji: "Kikai no souji ya kyuuyu wo surutoki wa kikai wo tometekara shimasu.",
        meaning: "Dừng máy khi vệ-sinh máy hay cung-cấp-dầu.",
        answer: "◯",
        keywords: ["そうじ", "きゅうゆ", "とめてから", "souji", "kyuuyu", "tometekara","vệ-sinh", "cung-cấp-dầu.", "dừng"],
        image: null
    },
    {
        id: 57,
        jp: "この ひょうしき が あるところで は ほごぼう は かぶらなくても よいです。",
        romaji: "Kono hyoushiki ga arutokoro dewa hogobou wa kaburanakute mo yoidesu.",
        meaning: "Tại nơi có biển-báo này, không cần đội mũ-bảo-hiểm",
        answer: "ꓫ",
        keywords: ["ひょうしき", "ほごぼう", "hyoushiki", "hogobou","biển-báo", "mũ-bảo-hiểm"],
        image: "hinh anh 100 cau/hogobou.jpg"
    },
    {
        id: 58,
        jp: "この ひょうしき が あるところ では かんでん の きけん は ありません。",
        romaji: "Kono hyoushiki ga arutokoro dewa kanden no kiken wa arimasen.",
        meaning: "Tại nơi có biển-báo này, không có nguy cơ bị điện-giật",
        answer: "ꓫ",
        keywords: ["ひょうしき", "かんでん", "hyoushiki", "kanden","biển-báo", "điện-giật"],
        image: "hinh anh 100 cau/hyosiki.jpg"
    },
    {
        id: 59,
        jp: "この ひょうしき が あるところ には はいって も よいです。",
        romaji: "Kono hyoshiki ga arutokoro niwa haitte mo yoidesu.",
        meaning: "Nơi có biển-báo này thì có thể vào được.",
        answer: "ꓫ",
        keywords: ["ひょうしき", "はいって", "hyoshiki", "haitte", "biển-báo", "vào"],
        image: "hinh anh 100 cau/hyosikihito.jpg"
    },
    {
        id: 60,
        jp: "この ひょうしき が あるところは あんぜん です。",
        romaji: "Kono hyoshiki ga arutokoro wa anzen desu.",
        meaning: "Nơi có biển-báo này thì an-toàn.",
        answer: "ꓫ",
        keywords: ["ひょうしき", "あんぜん", "hyoshiki", "anzen", "biển-báo", "an-toàn."],
        image: "hinh anh 100 cau/hyosiki.jpg"
    },
    {
        id: 61,
        jp: "この ひょうしき が あるところには はいって は いけません。",
        romaji: "Kono hyoshiki ga arutokoro niwa haitte ha ikemasen.",
        meaning: "Không được vào chỗ có biển-báo này.",
        answer: "◯",
        keywords: ["ひょうしき", "はいって", "hyoshiki", "haitte", "biển-báo", "vào"],
        image: "hinh anh 100 cau/hyosikihito.jpg"
    },
    {
        id: 62,
        jp: "この ひょうしき が あるところ では たばこ を すっても よいです。",
        romaji: "Kono hyoshiki ga arutokoro dewa tabako wo sutte mo yoidesu.",
        meaning: "Bạn có thể hút thuốc-lá ở chỗ có biển-báo này.",
        answer: "ꓫ",
        keywords: ["ひょうしき", "たばこ","hyoshiki", "tabako", "biển-báo", "thuốc-lá"],
        image: "hinh anh 100 cau/hi.jpg"
    },
    {
        id: 63,
        jp: "この ひょうしき が あるところ では たばこ を すっては いけません。",
        romaji: "Kono hyoshiki ga arutokoro dewa tabako wo sutte wa ikemasen.",
        meaning: "Không được hút thuốc-lá ở chỗ có biển-báo này.",
        answer: "◯",
        keywords: ["ひょうしき", "たばこ", "hyoshiki", "tabako","biển-báo", "thuốc-lá"],
        image: "hinh anh 100 cau/tabako.jpg"
    },
    {
        id: 64,
        jp: "けんちくこうじょうシート には ぼうえん かこう を しなくて も よいです。",
        romaji: "Kenchikukoujiyou-shiito niwa bouen kakou wo shinakutemo yoidesu.",
        meaning: "Không cần thiết phải gia-công chống-cháy đối với bạt-phủ-xây-dựng.",
        answer: "ꓫ",
        keywords: ["けんちくこうじょうシート", "ぼうえん", "かこう", "kenchikukoujiyou-shiito", "bouen", "kakou", "bạt-phủ-xây-dựng.", "chống-cháy", "gia-công"],
        image: null
    },
    {
        id: 65,
        jp: "じぬい は 2まい の きじ の おもて を あわせて ぬいます。",
        romaji: "Jinui wa nimai no maji no omote wo awasete nuimasu.",
        meaning: "JINUI là may ghép mặt trái của hai tấm vải vào nhau (tức là may để sau đó lộn ra mặt-phải ).",
        answer: "◯",
        keywords: ["おもて","omote","mặt-phải"],
        image: null
    },
    {
        id: 66,
        jp: "こうしゅうはウエルダー は ねっぷう をつかった ようちゃく き です。",
        romaji: "Koushu-ha-ueruda- wa neppuu wo tsukatta youchaku ki desu.",
        meaning: "Máy-hàn-cao-tần là máy-hàn-nóng-chảy sử dụng khí-nóng",
        answer: "ꓫ",
        keywords: ["こうしゅうはウエルダー", "ねっぷう", "ようちゃく", "koushu-ha-ueruda-", "neppuu", "youchaku", "máy-hàn-cao-tần", "khí-nóng", "máy-hàn-nóng-chảy"],
        image: null
    },
    {
        id: 67,
        jp: "ようちゃく かこう を したときは めどめしょり をします。",
        romaji: "Youchaku kakou wo shitatokiwa mejimeshori wo shimasu.",
        meaning: "Khi gia-công máy-hàn-nóng-chảy , phải xử lý chống-rò.",
        answer: "ꓫ",
        keywords: ["ようちゃく", "かこう", "めどめしょり", "youchaku", "kakou", "mejimeshori", "máy-hàn-nóng-chảy", "gia-công", "chống-rò."],
        image: null
    },
    {
        id: 68,
        jp: "ナイロン や ビニロン は かがくせんい です。",
        romaji: "Nairon ya biniron wa kagakuseni desu.",
        meaning: "Nylon và Vinylon là sợi-hóa-học",
        answer: "◯",
        keywords: ["ナイロン", "ビニロン", "かがくせんい", "nairon", "biniron", "kagakuseni", "nylon", "vinylon", "sợi-hóa-học"],
        image: null
    },
    {
        id: 69,
        jp: "アイレットリング の 25ばん は 30ばん より おおきい です。",
        romaji: "Airettoringu no nijuugoban wa sanjuuban yori ookii desu.",
        meaning: "Khoen bọc lỗ số 25 lớn hơn khoen số 30",
        answer: "ꓫ",
        keywords: ["アイレットリング", "おおきい", "airettoringu","ookii", "khoen", "lớn"],
        image: null
    },
    {
        id: 70,
        jp: "きかい の スイッチ は きかいを つかう ひとが そうさします 。",
        romaji: "kikai no suicchi wa kikaiwo tsukau hitoga sousashimasu.",
        meaning: "Công-tắc máy được vận-hành bởi người sử dụng máy",
        answer: "◯",
        keywords: ["きかい", "スイッチ", "そうさします", "kikai", "suicchi", "sousashimasu.", "công-tắt", "vận-hành", "máy"],
        image: null
    },
    {
        id: 71,
        jp: "きじの せっちゃくほうほうで アークしき も あります。",
        romaji: "Kijino secchaku houhou de a-kushiki mo arimasu.",
        meaning: "Trong các phương pháp dán vải, có dán hồ-quang",
        answer: "ꓫ",
        keywords: ["アークしき","a-kushiki","hồ-quang"],
        image: null
    },
    {
        id: 72,
        jp: "こもの の さいだんに は まるばしき は てきしません。",
        romaji: "Komono no saidanni wa marubashiki wa tekishimasen.",
        meaning: "Khi cắt các phụ-kiện-nhỏ , máy-cắt-lưỡi-tròn không thích hợp.",
        answer: "◯",
        keywords: ["こもの","まるばしき","komono","marubashiki", "phụ-kiện-nhỏ","máy-cắt-lưỡi-tròn"],
        image: null
    },
    {
        id: 73,
        jp: "ずは りょうながれぬい です。",
        romaji: "Zu wa ryounagare-nui desu.",
        meaning: "Hình vẽ bên là may-sóng-đôi (Ryo nagare nui)",
        answer: "◯",
        keywords: ["りょうながれぬい", "ryounagare-nui", "may-sóng-đôi"],
        image: "hinh anh 100 cau/ryonaganui.png"
    },
    {
        id: 74,
        jp: "うわいと したいと の ちょうし が つよすぎる と ぬいちぢみ に なります。",
        romaji: "Uwaito shitaito no choushi ga tsuyosugiru to nuichijimi ninarimasu.",
        meaning: "Nếu chỉ-trên và chỉ-dưới quá-chặt sẽ khiến đường may-bị-rút.",
        answer: "◯",
        keywords: ["うわいと", "したいと","つよすぎる", "ぬいちぢみ", "uwaito", "shitaito","tsuyosugiru", "nuichijimi", "chỉ-trên", "chỉ-dưới", "quá-chặt","may-bị-rút."],
        image: null
    },
    {
        id: 75,
        jp: "テトロン は ポリエステルせんい です。",
        romaji: "Tetoron wa poriesuterusei desu.",
        meaning: "Tetoron là sợi-Polyester",
        answer: "◯",
        keywords: ["テトロン", "ポリエステルせんい", "tetoron", "poriesuterusei", "tetoron", "sợi-polyester"],
        image: null
    },
    {
        id: 76,
        jp: "ビニロンいと は ぬいいと には つかいません。",
        romaji: "Binironito wa nui-ito niwa tsukaimasen.",
        meaning: "Sợi-nylon không dùng làm chỉ-may",
        answer: "ꓫ",
        keywords: ["ビニロンいと", "ぬいいと","binironito", "nui-ito","sợi-nylon", "chỉ-may"],
        image: null
    },
    {
        id: 77,
        jp: "せんぷうきのはね で ろうどうしゃ に きけん を あたえる おそれ の あるもの は かこい を します。",
        romaji: "Senpuukinohane de roudousha ni kiken wo ataeru osore no arumono wa kakoi wo shimasu.",
        meaning: "Những cánh-quạt có thể gây nguy hiểm cho công nhân thì bọc lại.",
        answer: "◯",
        keywords: ["せんぷうきのはね", "かこい", "senpuukinohane","kakoi", "cánh-quạt","bọc"],
        image: null
    },
    {
        id: 78,
        jp: "こうしょ さぎょうしゃ で さ ぎょう を するとき は あんぜんたい を つかいます。",
        romaji: "Kousho sagyousha de sagyou wo surutoki wa anzentai wo tsukaimasu.",
        meaning: "Khi làm việc trên xe ở vị trí cao, thì đeo đai-an-toàn",
        answer: "◯",
        keywords: ["あんぜんたい","anzentai","đai-an-toàn"],
        image: null
    },
    {
        id: 79,
        jp: "あしば は じょうぶ な もの で なくても つかうこと が できます。",
        romaji: "Ashiba wa joubu namono de nakutemo tsukaukoto ga dekimasu.",
        meaning: "Bục-đứng (giàn giáo) dù không vững chãi cũng dùng được",
        answer: "ꓫ",
        keywords: ["あしば", "じょうぶ", "ashiba", "joubu", "bục-đứng", "vững"],
        image: null
    },
    {
        id: 80,
        jp: "きじの さいだんには かたがみさいだん と じかさいだん が ありま す。",
        romaji: "Kijino saidan niwa katagamisaidan to jikasaidan ga arimasu.",
        meaning: "Cắt vải thì có cắt theo mẫu-rập và cắt-trực-tiếp.",
        answer: "◯",
        keywords: ["かたがみさいだん", "じかさいだん", "katagamisaidan", "jikasaidan","mẫu-rập", "cắt-trực-tiếp."],
        image: null
    },
    {
        id: 81,
        jp: "ハンドタイプ の ようちゃくき には ねっぷうしき と ちょうおんぱしき が あります。",
        romaji: "Handotaipu no youchakuki niwa neppuushiki to chouonpashiki ga arimasu.",
        meaning: "Máy-hàn-cầm-tay có loại máy hơi-nóng và máy siêu-âm",
        answer: "◯",
        keywords: ["ハンドタイプ", "ようちゃくき", "ねっぷうしき", "ちょうおんぱしき", "handotaipu", "youchakuki", "neppuushiki", "chouonpashiki", "máy-hàn-cầm-tay", "hơi-nóng", "siêu-âm"],
        image: null
    },
    {
        id: 82,
        jp: "ほんぬいの ミシンは うわいと と したいと の からみで ぬい ます。",
        romaji: "Honnui no mishin wa uwaito to shitaito no karamide nuimasu.",
        meaning: "Máy may cơ bản may bằng cách móc giữa chỉ-trên và chỉ-dưới.",
        answer: "◯",
        keywords: ["うわいと", "したいと","uwaito", "shitaito", "chỉ-trên", "chỉ-dưới."],
        image: null
    },
    {
        id: 83,
        jp: "ずは かんぬい です",
        romaji: "Zu wa kannui desu.",
        meaning: "Hình bên là đường may-móc-xích",
        answer: "◯",
        keywords: ["かんぬい", "kannui", "may-móc-xích"],
        image: "hinh anh 100 cau/kannui.jpg"
    },
    {
        id: 84,
        jp: "さいだんず には さいすんしたすん ぽうを きにゅうします。",
        romaji: "Saidanzu niwa saisunshita sunpou wo kinyuushimasu.",
        meaning: "Trong bản-vẽ-rập-cắt, ghi kích thước khi đo",
        answer: "ꓫ",
        keywords: ["さいだんず","きにゅうします。", "saidanzu","kinyuushimasu.", "bản-vẽ-rập-cắt,","ghi"],
        image: null
    },
    {
        id: 85,
        jp: "うわぬの と したぬの が ずれること を ぬいずれ といいます。",
        romaji: "Uwanuno to shitanuno ga zurerukoto wo nuizure to iidesu.",
        meaning: "Vải-trên và vải-dưới bị lệch, gọi là may-lệch",
        answer: "◯",
        keywords: ["うわぬの", "したぬの", "ぬいずれ", "uwanuno", "shitanuno","nuizure", "vải-trên", "vải-dưới", "may-lệch"],
        image: null
    },
    {
        id: 86,
        jp: "めんはんぷ は かがくやくひん に つよい です。",
        romaji: "Menhanpu wa kagakuyakuhin ni tsuyoi desu.",
        meaning: "Vải-bố chịu hóa-chất tốt",
        answer: "ꓫ",
        keywords: ["めんはんぷ", "かがくやくひん", "つよい", "menhanpu", "kagakuyakuhin", "tsuyoi", "vải-bố", "hóa-chất", "tốt"],
        image: null
    },
    {
        id: 87,
        jp: "きかいの そうじ や きゅうゆ を するとき は きかいを とめてから します。",
        romaji: "Kikaino souji ya kyuuyu wo surutoki wa kikai wo tometekara shimasu.",
        meaning: "Khi vệ-sinh máy hay tra-dầu , tắt-máy rồi mới làm.",
        answer: "◯",
        keywords: ["そうじ", "きゅうゆ", "とめてから", "souji", "kyuuyu", "tometekara", "vệ-sinh", "tra-dầu", "tắt-máy"],
        image: null
    },
    {
        id: 88,
        jp: "ひ をつ かったひと は かならず あと かたづけ をします。",
        romaji: "Hi wo tsukattahito wa kanarazu ato katazuke wo shimasu.",
        meaning: "Người nào dùng lửa xong phải cất-dọn.",
        answer: "◯",
        keywords: ["ひ", "かたづけ", "hi", "katazuke", "lửa","cất-dọn."],
        image: null
    },
    {
        id: 89,
        jp: "さぎょうだいの あかるさ は 150ルクス いじょう です。",
        romaji: "Sagyoudai no akarusa wa 150-rukusu ijou desu.",
        meaning: "Độ sáng của bàn làm việc là hơn 150-Lux",
        answer: "◯",
        keywords: ["150ルクス", "いじょう", "150-rukusu", "ijou", "150-lux", "hơn"],
        image: null
    },
    {
        id: 90,
        jp: "さぎょうをするときは、 うごき や すければどのような ふくそう を してもよいです。",
        romaji: "Sagyou wo surutoki wa ugoki yasukere ba donoyou na fukusou wo shitemo yoidesu.",
        meaning: "Khi làm việc, miễn là dễ cử-động thì mặc-đồ như thế nào cũng được",
        answer: "ꓫ",
        keywords: ["うごき", "ふくそう", "ugoki", "fukusou", "cử-động", "mặc-đồ"],
        image: null
    },
    {
        id: 91,
        jp: "せまい ところでは つうろをかくほしなくて もよいです。",
        romaji: "Semai tokoro dewa tsuro wo kakuho shinakutemo yoidesu.",
        meaning: "Ở chỗ hẹp thì không chừa lối đi cũng được",
        answer: "ꓫ",
        keywords: ["せまい","semai", "hẹp"],
        image: null
    },
    {
        id: 92,
        jp: "ちどりミシン は ふちぬいよう ミシン です。",
        romaji: "Chidorimishin wa fuchi-nuiyou mishin desu.",
        meaning: "Máy may dích-dắc là máy dùng để may-viền",
        answer: "ꓫ",
        keywords: ["ちどりミシン", "ふちぬいよう", "chidorimishin", "fuchi-nuiyou", "dích-dắc", "may-viền"],
        image: null
    },
    {
        id: 93,
        jp: "オーバーロック ミシン は ふちぬいよう ミシン です。",
        romaji: "O-ba-rokku mishin wa fuchinuiyou mishin desu.",
        meaning: "Máy vắt-sổ là máy để may-viền",
        answer: "◯",
        keywords: ["オーバーロック", "ふちぬいよう", "o-ba-rokku", "fuchinuiyou", "vắt-sổ", "may-viền"],
        image: null
    },
    {
        id: 94,
        jp: "ミシンを つかう まえや つかった あとには てんけん を します。",
        romaji: "Mishin wo tsukau mae ya tsukatta ato niwa tenken wo shimasu.",
        meaning: "Trước và sau khi sử dụng máy may phải kiểm-tra máy.",
        answer: "◯",
        keywords: ["てんけん","tenken","kiểm-tra"],
        image: null
    },
    {
        id: 95,
        jp: "ミシンを つかうときは はりの しょうめん に すわります。",
        romaji: "Mishin wo tsukautoki wa hari no shoumen ni suwari masu.",
        meaning: "Khi dùng máy may, ngồi trước kim máy may",
        answer: "◯",
        keywords: ["しょうめん","shoumen","trước"],
        image: null
    },
    {
        id: 96,
        jp: "オーバーロック ミシンは ちょくせんぬい ミシンです。",
        romaji: "O-ba-rokku mishin wa chokusennui mishin desu.",
        meaning: "Máy vắt-sổ là máy may đường-thẳng.",
        answer: "ꓫ",
        keywords: ["オーバーロック", "ちょくせんぬい", "o-ba-rokku", "chokusennui", "vắt-sổ", "đường-thẳng."],
        image: null
    },
    {
        id: 97,
        jp: "ミシンを かけるときの しせい が わるい と せいかく に ぬえません。",
        romaji: "Mishin wo kakerutokino shisei ga warui to seikaku ni nuemasen.",
        meaning: "Tư-thế ngồi may không-tốt thì không thể may chính-xác được.",
        answer: "◯",
        keywords: ["しせい", "わるい", "せいかく", "shisei", "warui", "seikaku","tư-thế", "không-tốt", "chính-xác"],
        image: null
    },
    {
        id: 98,
        jp: "ミシンいとの 8ばん は 20ばん より ほそい です。",
        romaji: "Mishin ito no hachiban ha nijuuban yori hosoi desu.",
        meaning: "Chỉ may số 8 mỏng hơn chỉ may số 20.",
        answer: "ꓫ",
        keywords: ["ほそい","hosoi","mỏng"],
        image: null
    },
    {
        id: 99,
        jp: "ミシン の はりさき が まるく なって いると ぬいずれ の げんいん と なります。",
        romaji: "Mishin no harisaki ga maruku natte iruto nuizure no genin to narimasu.",
        meaning: "Đầu kim của máy may bị tròn là nguyên-nhân may bị lệch",
        answer: "◯",
        keywords: ["まるく", "ぬいずれ", "げんいん","maruku", "nuizure", "genin", "tròn", "lệch", "nguyên-nhân"],
        image: null
    },
    {
        id: 100,
        jp: "これは しゅすおり です。",
        romaji: "Korewa shusu-ori desu.",
        meaning: "Đây là dệt vân-đoạn (long 4)",
        answer: "◯",
        keywords: ["しゅすおり", "shusu-ori", "vân-đoạn"],
        image: "hinh anh 100 cau/shusuori.jpg"
    }
];

const questionTable = document.getElementById("questionTable");


// Hàm tạo HTML cho một câu hỏi
function createQuestionRow(question) {
    const row = document.createElement("tr");

    // Kiểm tra xem câu hỏi có hình ảnh hay không
    let imageHTML = '';
    if (question.image) {
        imageHTML = `<img src="${question.image}" alt="">`;
    }

    row.innerHTML = `
        <td style="width: 10%; text-align: center;">
            <h1>${question.id}</h1>
        </td>
        <td style="width: 80%;">
            <h1>${highlightKeywords(question.jp, question.keywords)}</h1>
            <h2>${highlightKeywords(question.romaji, question.keywords)}</h2>
            <h3 class="meaning" style="display: none;">${highlightKeywords(question.meaning, question.keywords)}</h3>
            ${imageHTML} <button onclick="toggleMeaning(this)">Xem ý nghĩa</button>
        </td>
        <td style="width: 10%; text-align: center;">
            <button onclick="toggleAnswer(this)">Xem đáp án</button>
            <h1 class="answer" style="display: none;">${question.answer}</h1>
        </td>
    `;
    return row;
}

// Thêm câu hỏi vào bảng
questions.forEach(question => {
    questionTable.appendChild(createQuestionRow(question));
});

// Xử lý sự kiện click cho nút "Hiển thị toàn bộ ý nghĩa"
const showH3Button = document.getElementById("showH3");
showH3Button.addEventListener("click", function () {
    const h3Elements = document.querySelectorAll(".meaning");
    h3Elements.forEach(h3 => {
        h3.style.display = "block";
    });
    this.disabled = true;
});

// Xử lý sự kiện click cho nút "Hiển thị tất cả kết quả"
const showKqButton = document.getElementById("showKq");
showKqButton.addEventListener("click", function () {
    const h1Elements = document.querySelectorAll(".answer");
    h1Elements.forEach(h1 => {
        h1.style.display = "block";
    });
    this.disabled = true;
});

// Hàm xử lý sự kiện click cho nút "Xem đáp án"
function toggleAnswer(button) {
    var answer = button.parentNode.querySelector(".answer");
    if (answer.style.display === "none") {
        answer.style.display = "block";
        button.textContent = "Ẩn đáp án";
    } else {
        answer.style.display = "none";
        button.textContent = "Xem đáp án";
    }
}

// Hàm xử lý sự kiện click cho nút "Xem ý nghĩa"
function toggleMeaning(button) {
    var meaning = button.parentNode.querySelector(".meaning");
    if (meaning.style.display === "none") {
        meaning.style.display = "block";
        button.textContent = "Ẩn ý nghĩa";
    } else {
        meaning.style.display = "none";
        button.textContent = "Xem ý nghĩa";
    }
}