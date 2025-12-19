// Hàm tô màu từ khóa
function highlightKeywords(text, keywords) {
    let highlightedText = "";
    const words = text.split(/\s+/); // Tách văn bản thành các từ

    words.forEach(word => {
        let highlightedWord = word;
        for (const groupName in keywords) {
            const group = keywords[groupName];
            const color = groupName === "group1" ? "blue" : groupName === "group2" ? "red" : groupName === "group3" ? "blueviolet" : "orange";

            if (group.includes(word)) {
                highlightedWord = `<span style="color: ${color}">${word}</span>`;
                break; // Thoát khỏi vòng lặp khi tìm thấy từ khóa
            }
        }
        highlightedText += highlightedWord + " "; // Nối từ đã tô màu vào văn bản kết quả
    });

    return highlightedText.trim();
}

const questions = [
    {
        id: 1,
        jp: "うすい ぬの を ぬうとき は おさえ を つよく します。",
        romaji: "Usui nuno wo nuutoki wa osae wo tsuyoku shimasu.",
        meaning: "Khi may vải MỎNG thì chỉnh CHÂN VỊT đè CHẶT .",
        answer: "ꓫ",
        keywords: {
            group1: ["うすい", "Usui", "MỎNG"],
            group2: ["つよく", "tsuyoku", "CHẶT"],
            group3: ["おさえ", "osae", "CHÂN", "VỊT"]
        },
        image: null
    },
    {
        id: 2,
        jp: "あつい ぬの を ぬうとき は おさえ を つよく します。",
        romaji: "Atsui nuno wo nuu toki wa osae wo tsuyoku shimasu.",
        meaning: "Khi may vải DÀY thì chỉnh CHÂN VỊT đè CHẶT .",
        answer: "◯",
        keywords: {
            group1: ["あつい", "Atsui", "DÀY"],
            group2: ["つよく", "tsuyoku", "CHẶT"],
            group3: ["おさえ", "osae", "CHÂN", "VỊT"]
        },
        image: null
    },
    {
        id: 3,
        jp: "うすい きじ を ぬうとき は いと や はり を ふとく すると よいです。",
        romaji: "Usui kiji wo nuutoki wa ito ya hari wo futoku suruto yoidesu.",
        meaning: "Khi may vải MỎNG , CHỈ VÀ KIM TO thì tốt.",
        answer: "ꓫ",
        keywords: {
            group1: ["うすい", "Usui", "MỎNG"],
            group2: ["ふとく", "futoku", "TO"],
            group3: ["いと", "や", "はり", "ito", "ya", "hari", "CHỈ", "VÀ", "KIM"]
        },
        image: null
    },
    {
        id: 4,
        jp: "うすい きじ を ぬうとき は いと や はり を ほそく すると よいです。",
        romaji: "Usui kiji wo nuutoki wa ito ya hari wo hosoku suruto yoidesu.",
        meaning: "Khi may vải MỎNG , CHỈ VÀ KIM NHỎ thì tốt.",
        answer: "◯",
        keywords: {
            group1: ["うすい", "Usui", "MỎNG"],
            group2: ["ほそく", "hosoku", "NHỎ"],
            group3: ["いと", "や", "はり", "ito", "ya", "hari", "CHỈ", "VÀ", "KIM"]
        },
        image: null
    },
    {
        id: 5,
        jp: "ミシンいと は ばんごう が おおきく なるほど ふとく なります。",
        romaji: "Mishin ito wa bangou ga ookiku naruhodo futoku narimasu.",
        meaning: "Chỉ máy may số càng LỚN thì sợi chỉ càng TO .",
        answer: "ꓫ",
        keywords: {
            group1: ["おおきく", "ookiku", "LỚN"],
            group2: ["ふとく", "futoku", "TO"]
        },
        image: null
    },
    {
        id: 6,
        jp: "ミシンいと は ばんごう が おおきく なるほど ほそく なります。",
        romaji: "Mishin ito wa bangou ga ookiku naruhodo hosoku narimasu.",
        meaning: "Chỉ máy may có số càng LỚN thì chỉ càng MẢNH .",
        answer: "◯",
        keywords: {
            group1: ["おおきく", "ookiku", "LỚN"],
            group2: ["ほそく", "hosoku", "MẢNH"]
        },
        image: null
    },
    {
        id: 7,
        jp: "この ワイヤロープ は つかっては いけません 。",
        romaji: "Kono waiyaropu wa tsukattewa ikemasen .",
        meaning: "DÂY CÁP này KHÔNG ĐƯỢC sử dụng.",
        answer: "◯",
        keywords: {
            group1: ["ワイヤロープ", "waiyaropu", "DÂY", "CÁP"],
            group2: ["いけません", "ikemasen", "KHÔNG", "ĐƯỢC"]
        },
        image: "hinh anh 100 cau/waiyaropu.jpg"
    },
    {
        id: 8,
        jp: "この ワイヤロープ は つかって も よいです。",
        romaji: "Kono waiya-ropu wa tsukattemo yoidesu.",
        meaning: "DÂY CÁP này dùng cũng ĐƯỢC .",
        answer: "ꓫ",
        keywords: {
            group1: ["ワイヤロープ", "waiyaropu", "DÂY", "CÁP"],
            group2: ["よいです。", "yoidesu.", "ĐƯỢC"]
        },
        image: "hinh anh 100 cau/waiyaropu.jpg"
    },
    {
        id: 9,
        jp: "こうじよう シート の アイレット の かんかく は 90cm いか です。",
        romaji: "Koujiyou shito no airetto no kankaku wa 90cm ika desu.",
        meaning: "Khoảng cách giữa các khoen lỗ của tấm bạt dùng cho công trường là 90cm TRỞ XUỐNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["90cm", "いか", "90cm", "ika", "TRỞ", "XUỐNG"]
        },
        image: null
    },
    {
        id: 10,
        jp: "こうじようシートの アイレットの かんかくは 60cm いか です。",
        romaji: "Koujiyou shi-to no airetto no kankaku wa 60cm ika desu.",
        meaning: "Khoảng cách giữa các khoen lỗ của tấm bạt dùng cho công trường là 60cm TRỞ XUỐNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["60cm", "いか", "60cm", "ika", "TRỞ", "XUỐNG"]
        },
        image: null
    },
    {
        id: 11,
        jp: "シートに アイレットリング を うつときは うら に ざがねが くる ように うちます。",
        romaji: "Shiito airettoringu wo utsutokiwa ura ni zaganega kuru youni uchimasu.",
        meaning: "Khi dập LỖ KHOEN trên tấm bạt, dập sao cho đế khoen đế nằm ở MẶT TRÁI .",
        answer: "◯",
        keywords: {
            group1: ["アイレットリング", "airettoringu", "LỖ", "KHOEN"],
            group2: ["うら", "ura", "MẶT", "TRÁI"]
        },
        image: null
    },
    {
        id: 12,
        jp: "シートに アイレットリング を うつときは おもて に ざがねが くる ように うちます。",
        romaji: "Shiito airettoringu wo utsutokiwa omote ni zaganega kuru youni uchimasu.",
        meaning: "Khi dập LỖ KHOEN trên tấm bạt, dập sao cho đế khoen đế nằm ở MẶT PHẢI .",
        answer: "ꓫ",
        keywords: {
            group1: ["アイレットリング", "airettoringu", "LỖ", "KHOEN"],
            group2: ["おもて", "omote", "MẶT", "PHẢI"]
        },
        image: null
    },
    {
        id: 13,
        jp: " ミシンの うわいと が きれる げんいん には はり の ふりょう が あります。",
        romaji: "Mishin no uwaito ga kireru genin niwa hari no huryou ga arimasu.",
        meaning: "Trong các nguyên nhân gây đứt CHỈ TRÊN của máy may, có NGUYÊN NHÂN do kim bị hỏng.",
        answer: "◯",
        keywords: {
            group1: ["うわいと", "uwaito", "CHỈ", "TRÊN"],
            group2: ["げんいん", "genin", "NGUYÊN", "NHÂN"]
        },
        image: null
    },
    {
        id: 14,
        jp: " ミシンの したいと が きれる げんいん には はりの ふりょう が あります。",
        romaji: "Mishin no shitaito ga kireru genin niwa hari no furyo ga arimasu.",
        meaning: "NGUYÊN NHÂN CHỈ DƯỚI của máy may bị đứt là do kim không tốt.",
        answer: "◯",
        keywords: {
            group1: ["したいと", "shitaito", "CHỈ", "DƯỚI"],
            group2: ["げんいん", "genin", "NGUYÊN", "NHÂN"]
        },
        image: null
    },
    {
        id: 15,
        jp: " はんぷには たていと と よこいと が あります 。",
        romaji: "Hanpuniwa tateito to yokoito ga arimasu .",
        meaning: "Vải dù CÓ sợi DỌC và sợi NGANG .",
        answer: "◯",
        keywords: {
            group1: ["たていと", "tateito", "DỌC"],
            group2: ["よこいと", "yokoito", "NGANG"],
            group3: ["あります", " arimasu", "CÓ"]
        },
        image: null
    },
    {
        id: 16,
        jp: " はんぷには たていと と よこいと が ありません。",
        romaji: "Hanpuniwa tateito to yokoito ga arimasen.",
        meaning: "Vải dù KHÔNG CÓ sợi DỌC và sợi NGANG .",
        answer: "ꓫ",
        keywords: {
            group1: ["たていと", "tateito", "DỌC"],
            group2: ["よこいと", "yokoito", "NGANG"],
            group3: ["ありません", " arimasen", "KHÔNG", "CÓ"]
        },
        image: null
    },
    {
        id: 17,
        jp: " これは みつおり ( みつまき ）ぬい です。",
        romaji: "Korewa mitsuori ( mitsumaki ) nui desu.",
        meaning: "Đây là MAY GẤP 2 lần ( CÓ 3 LỚP )",
        answer: "ꓫ",
        keywords: {
            group1: ["みつおり", "mitsuori", "MAY", "GẤP", "2"],
            group2: ["みつまき", "mitsumaki", "CÓ", "3", "LỚP"]
        },
        image: "hinh anh 100 cau/honnui.jpg"
    },
    {
        id: 18,
        jp: " これは ひらぬい です。",
        romaji: "Kore wa hiranui desu.",
        meaning: "Đây là MAY SONG SONG (sử dụng máy 2 kim, và may đường chỉ thẳng).",
        answer: "◯",
        keywords: {
            group1: ["ひらぬい", "hiranui", "MAY", "SONG", "SONG"]
        },
        image: "hinh anh 100 cau/honnui.jpg"
    },
    {
        id: 19,
        jp: " これは ひらぬい です。",
        romaji: "Kore wa hiranui desu.",
        meaning: "Đây là MAY SONG SONG (sử dụng máy 2 kim, và may đường chỉ thẳng).",
        answer: "ꓫ",
        keywords: {
            group1: ["ひらぬい", "hiranui", "MAY", "SONG", "SONG"]
        },
        image: "hinh anh 100 cau/mistuori.jpg"
    },
    {
        id: 20,
        jp: "ほんぬいミシン には 2 ほんばり は ありません 。",
        romaji: "Honnui mishin niwa nihonbari wa arimasen .",
        meaning: "Máy may cơ bản KHÔNG CÓ máy HAI KIM .",
        answer: "ꓫ",
        keywords: {
            group1: ["2", "ほんばり", "nihonbari", "HAI", "KIM"],
            group2: ["ありません", "arimasen", "KHÔNG", "CÓ"]
        },
        image: null
    },
    {
        id: 21,
        jp: " ほんぬいミシン には 2 ほんばり も あります 。",
        romaji: "Honnui mishin niwa nihonbari mo arimasu .",
        meaning: "Máy may cơ bản cũng CÓ máy HAI KIM .",
        answer: "◯",
        keywords: {
            group1: ["2", "ほんばり", "nihonbari", "HAI", "KIM"],
            group2: ["あります", "arimasu", "CÓ"]
        },
        image: null
    },
    {
        id: 22,
        jp: " あつい きじを ぬうときは ミシン の かいてんすうを おそく すると よいです。",
        romaji: "Atsui kijiwo nuutokiwa mishinno kaiten suuwo osoku suruto yoidesu .",
        meaning: "Khi may vải DÀY , nên để tốc độ quay của máy may CHẬM THÌ TỐT .",
        answer: "◯",
        keywords: {
            group1: ["あつい", "Atsui", "DÀY"],
            group2: ["おそく", "osoku", "CHẬM"],
            group3: ["よいです", "yoidesu", "THÌ", "TỐT"]
        },
        image: null
    },
    {
        id: 23,
        jp: "これは しゃもんおり ( あやおり ) です",
        romaji: "Korewa shamonori ( ayaori ) desu.",
        meaning: "Đây là DỆT THOI VÂN CHÉO ( long 2 ).",
        answer: "◯",
        keywords: {
            group1: ["しゃもんおり", "shamonori", "DỆT", "THOI", "VÂN", "CHÉO"],
            group2: ["あやおり", "ayaori", "long", "2"]
        },
        image: "hinh anh 100 cau/shamonori.jpg"
    },
    {
        id: 24,
        jp: "これは ひらおり です。",
        romaji: "Kore wa hiraori desu.",
        meaning: "Đây là VẢI DỆT THOI ( long nhất ).",
        answer: "◯",
        keywords: {
            group1: ["ひらおり", "hiraori", "VẢI", "DỆT", "THOI", "long", "nhất"]
        },
        image: "hinh anh 100 cau/hiraori.png"
    },
    {
        id: 25,
        jp: "これ は しゅすおり です。",
        romaji: "kore wa shusuori desu.",
        meaning: "Đây là DỆT VÂN ĐOẠN ( long tư )",
        answer: "ꓫ",
        keywords: {
            group1: ["しゅすおり", "shusuori", "DỆT", "VÂN", "ĐOẠN", "long", "tư"]
        },
        image: "hinh anh 100 cau/shamonori.jpg"
    },
    {
        id: 26,
        jp: "これは らっせるおり です。",
        romaji: "Kore wa rasseru ori desu.",
        meaning: "Đây là DỆT RUSSEL ( len dệt kim )",
        answer: "ꓫ",
        keywords: {
            group1: ["らっせるおり", "rasseru", "ori", "DỆT", "RUSSEL", "len", "dệt", "kim"]
        },
        image: "hinh anh 100 cau/shamonori.jpg"
    },
    {
        id: 27,
        jp: "これ は ドームがたテント です。",
        romaji: "Kore wa domugata tento desu.",
        meaning: "Đây là lều DẠNG MÁI VÒM .",
        answer: "◯",
        keywords: {
            group1: ["ドームがたテント", "domugata", "tento", "DẠNG", "MÁI", "VÒM"]
        },
        image: "hinh anh 100 cau/domugata.jpg"
    },
    {
        id: 28,
        jp: "これは こていしきテント です。",
        romaji: "Korewa koteishiki tento desu.",
        meaning: "Đây là lều DẠNG CỐ ĐỊNH .",
        answer: "◯",
        keywords: {
            group1: ["こていしきテント", "koteishiki", "tento", "DẠNG", "CỐ", "ĐỊNH"]
        },
        image: "hinh anh 100 cau/kouteishikitento.png"
    },
    {
        id: 29,
        jp: "これは そうしょくよう テント です。",
        romaji: "Korewa soushoku youtento desu.",
        meaning: "Đây là LỀU TRANG TRÍ .",
        answer: "◯",
        keywords: {
            group1: ["そうしょくよう", "テント", "soushokuyou", "tento", "LỀU", "TRANG", "TRÍ"]
        },
        image: "hinh anh 100 cau/soushoku.jpg"
    },
    {
        id: 30,
        jp: "これ は ひよけ テント です。",
        romaji: "Kore wa hiyoke tento desu.",
        meaning: "Đây là LỀU CHE NẮNG .",
        answer: "◯",
        keywords: {
            group1: ["ひよけ", "テント", "hiyoke", "tento", "LỀU", "CHE", "NẮNG"]
        },
        image: "hinh anh 100 cau/hiyoke.jpg"
    },
    {
        id: 31,
        jp: "これは しゅうかいよう くみたてテント です。",
        romaji: "Kore wa shukaiyou kumitate tento desu.",
        meaning: "Đây là LỀU CHỮ A dạng lắp ráp , DÙNG CHO TẬP THỂ .",
        answer: "◯",
        keywords: {
            group1: ["しゅうかいよう", "shukaiyou", "DÙNG", "CHO", "TẬP", "THỂ"],
            group2: ["くみたてテント", "kumitate", "tento", "LỀU", "CHỮ", "A"]
        },
        image: "hinh anh 100 cau/shukaiyo.jpg"
    },
    {
        id: 32,
        jp: "これは テントそうこ の こうぞうず です。",
        romaji: "Korewa tentosouko no kouzouzu desu.",
        meaning: "Đây là BẢN VẼ KẾT CẤU của LỀU NHÀ KHO .",
        answer: "◯",
        keywords: {
            group1: ["テントそうこ", "tentosouko", "LỀU", "NHÀ", "KHO"],
            group2: ["こうぞうず", "kouzouzu", "BẢN", "VẼ", "KẾT", "CẤU"]
        },
        image: "hinh anh 100 cau/tentosokozu.jpg"
    },
    {
        id: 33,
        jp: "これは まどよう ひよけ テント です。",
        romaji: "Kore wa madoyou hiyoke tento desu.",
        meaning: "Đây là lều CHE NẮNG , DÙNG CHO CỬA SỔ .",
        answer: "◯",
        keywords: {
            group1: ["ひよけ", "テント", "hiyoke", "tento", "CHE", "NẮNG"],
            group2: ["まどよう", "madoyou", "DÙNG", "CHO", "CỬA", "SỔ"]
        },
        image: "hinh anh 100 cau/madoyo.jpg"
    },
    {
        id: 34,
        jp: "これは キャンプよう テント です。",
        romaji: "Korewa kyanpuyou tento desu.",
        meaning: "Đây là LỀU CẮM TRẠI .",
        answer: "◯",
        keywords: {
            group1: ["キャンプよう", "テント", "kyanpuyou", "tento", "LỀU", "CẮM", "TRẠI"]
        },
        image: "hinh anh 100 cau/kyanpu.jpg"
    },
    {
        id: 35,
        jp: "これは かどうしき テント です。",
        romaji: "Korewa kadoshiki tento desu.",
        meaning: "Đây là LỀU DI ĐỘNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["かどうしき","テント", "kadoshiki", "tento", "LỀU", "DI", "ĐỘNG"]
        },
        image: "hinh anh 100 cau/kouteitento.jpg"
    },
    {
        id: 36,
        jp: "これは オーニング の ほねぐみ です。",
        romaji: "Korewa ooningu no honegumi desu.",
        meaning: "Đây là KHUNG MÁI HIÊN .",
        answer: "◯",
        keywords: {
            group1: ["オーニング", "ooningu", "MÁI", "HIÊN"],
            group2: ["ほねぐみ", "honegumi", "KHUNG"]
        },
        image: "hinh anh 100 cau/oningu.jpg"
    },
    {
        id: 37,
        jp: "オーニング には しゅどうしき と でんどうしき が あります。",
        romaji: "Ooningu niwa shudoushiki to dendoushiki ga arimasu.",
        meaning: "MÁI HIÊN có loại điều khiển bằng TAY QUAY và có loại điều khiển BẰNG ĐIỆN .",
        answer: "◯",
        keywords: {
            group1: ["オーニング", "Ooningu", "MÁI", "HIÊN"],
            group2: ["しゅどうしき", "shudoushiki", "TAY QUAY", "QUAY"],
            group3: ["でんどうしき", "dendoushiki", "BẰNG", "ĐIỆN"]
        },
        image: null
    },
    {
        id: 38,
        jp: "まきあげしきテントは おもに ひよけ あめよけ に つかわれます。",
        romaji: "Makiageshiki tento wa omoni hiyoke ameyoke ni tsukawaremasu.",
        meaning: "LỀU DẠNG MÁI BẠT CUỐN chủ yếu dùng để che NẮNG che MƯA .",
        answer: "◯",
        keywords: {
            group1: ["ひよけ", "hiyoke", "NẮNG"],
            group2: ["あめよけ", "ameyoke", "MƯA"],
            group3: ["まきあげしきテント", "Makiageshiki", "tento", "LỀU", "DẠNG", "MÁI", "BẠT", "CUỐN"] 
        },
        image: null
    },
    {
        id: 39,
        jp: "とざんようテント に つかわれる きじは なるべく あつい ものが よいです。",
        romaji: "Tozanyou tento ni tsukawareru kijiwa kiji wa narubeku atsui mono ga yoidesu.",
        meaning: "Vải dùng làm LỀU LEO NÚI nên dùng vải DÀY .",
        answer: "ꓫ",
        keywords: {
            group1: ["とざんようテント", "Tozanyou", "tento", "LỀU", "LEO", "NÚI"],
            group2: ["あつい", "atsui", "DÀY"]
        },
        image: null
    },
    {
        id: 40,
        jp: "しゅうかいよう テント は おも に うんどうかい や てんじかい など に つかわれます。",
        romaji: "Shukaiyou tentowa omoni undoukai ya tenjikai nado ni tsukawaremasu.",
        meaning: "LỀU TẬP THỂ chủ yếu được dùng ở HỘI THAO , hội chợ TRIỂN LÃM , v.v.",
        answer: "◯",
        keywords: {
            group1: ["しゅうかいよう", "Shukaiyou", "LỀU", "TẬP", "THỂ"],
            group2: ["うんどうかい", "undoukai", "HỘI", "THAO"],
            group3: ["てんじかい", "tenjikai", "TRIỂN", "LÃM"]
        },
        image: null
    },
    {
        id: 41,
        jp: "テントそうこ は すべて こていしき です。",
        romaji: "Tentosouko wa subete koteishiki desu.",
        meaning: "LỀU NHÀ KHO , TOÀN BỘ đều là dạng CỐ ĐỊNH .",
        answer: "ꓫ",
        keywords: {
            group1: ["テントそうこ", "Tentosouko", "LỀU", "NHÀ", "KHO"],
            group2: ["こていしき", "koteishiki", "CỐ", "ĐỊNH"],
            group3: ["すべて", "subete", "TOÀN", "BỘ"]
        },
        image: null
    },
    {
        id: 42,
        jp: "せんぱくようシート は きょうど や ぼうすいせい は とくに ひつよう ありません。",
        romaji: "Senpakuyou shi―to wa kyodo ya bousuisei wa tokuni hitsuyou arimasen.",
        meaning: "Tấm bạt che tàu thuyền KHÔNG CẦN có ĐỘ BỀN và tính CHỐNG THẤM .",
        answer: "ꓫ",
        keywords: {
            group1: ["きょうど", "kyodo", "ĐỘ", "BỀN"],
            group2: ["ぼうすいせい", "bousuisei", "CHỐNG", "THẤM"],
            group3: ["ありません", "arimasen", "KHÔNG", "CẦN"]
        },
        image: null
    },
    {
        id: 43,
        jp: "たちばさみ は てんとじ を １まい ずつ きるのに てきしています 。",
        romaji: "Tachibasami wa tentoji wo ichi mai zutsu kirunoni tekishiteimasu .",
        meaning: "KÉO CẮT VẢI THÍCH HỢP để cắt từng tấm vải may lều.",
        answer: "◯",
        keywords: {
            group1: ["たちばさみ", "Tachibasami", "KÉO", "CẮT", "VẢI"],
            group2: ["てきしています", "tekishiteimasu", "THÍCH", "HỢP"]
        },
        image: null
    },
    {
        id: 44,
        jp: "ちょくせんぬい には ちどりミシン が てきしています 。",
        romaji: "Chokusennui niwa chidorimishin ga tekishiteimasu .",
        meaning: "Để may ĐƯỜNG THẲNG thì dùng máy may DÍCH DẮC là THÍCH HỢP .",
        answer: "ꓫ",
        keywords: {
            group1: ["ちどりミシン", "chidorimishin", "DÍCH", "DẮC"],
            group2: ["ちょくせんぬい", "Chokusennui", "ĐƯỜNG", "THẲNG"],
            group3: ["てきしています", "tekishiteimasu", "THÍCH", "HỢP"]
        },
        image: null
    },
    {
        id: 45,
        jp: "めんはんぷ は あさ から できています。",
        romaji: "Menhanpu wa asa kara dekiteimasu.",
        meaning: "VẢI BỐ được làm từ SỢi GAI .",
        answer: "ꓫ",
        keywords: {
            group1: ["めんはんぷ", "Menhanpu", "VẢI", "BỐ"],
            group2: ["あさ", "asa", "SỢI", "GAI"]
        },
        image: null
    },
    {
        id: 46,
        jp: "こうしゅうは ウエルダー を つかうと きは やけど に ちゅういします。",
        romaji: "Koshuha ueruda wo tsukau toki wa yakedo ni chuui shimasu.",
        meaning: "Khi sử dụng MÁY HÀN CAO TẦN thì phải CẨN THẬN để tránh bị BỎNG .",
        answer: "◯",
        keywords: {
            group1: ["こうしゅうは", "ウエルダー", "Koshuha", "ueruda", "MÁY", "HÀN", "CAO", "TẦN"],
            group2: ["やけど", "yakedo", "BỎNG"],
            group3: ["ちゅうい", "chuui", "CẨN", "THẬN"]
        },
        image: null
    },
    {
        id: 47,
        jp: "こうしゅうは ウエルダー は ようちゃくき では ありません。",
        romaji: "Koushuha ueruda wa youchakuki dewa arimasen.",
        meaning: "MÁY HÀN CAO TẦN không phải là máy hàn NÓNG CHẢY .",
        answer: "ꓫ",
        keywords: {
            group1: ["こうしゅうは", "ウエルダー", "Koshuha", "ueruda", "MÁY", "HÀN", "CAO", "TẦN"],
            group2: ["ようちゃくき", "youchakuki", "NÓNG", "CHẢY"]
        },
        image: null
    },
    {
        id: 48,
        jp: "けんちくこうじようシート には めんはんぷきじ を つかっても よいです。",
        romaji: "Kenchikukoujiyou shiito niwa menhanpukiji wo tsukattemo yoidesu.",
        meaning: "Có thể sử dụng VẢI BỐ cho các TẤM BẠT CÔNG TRÌNH XÂY DỰNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["けんちくこうじようシート", "Kenchikukoujiyou", "shiito", "TẤM", "BẠT", "CÔNG", "TRÌNH", "XÂY", "DỰNG"],
            group2: ["めんはんぷきじ", "menhanpukiji", "VẢI", "BỐ"]
        },
        image: null
    },
    {
        id: 49,
        jp: "めうち は はとめよう の あな を あける どうぐです。",
        romaji: "Meuchi wa hatomeyou no anawo akeru dougudesu.",
        meaning: "CÂY DÙI LỖ là dụng cụ để tạo lỗ cho khoen tròn bọc lỗ.",
        answer: "ꓫ",
        keywords: {
            group1: ["めうち", "Meuchi", "CÂY", "DÙI", "LỖ"]
        },
        image: null
    },
    {
        id: 50,
        jp: "これは はとめ うちぐ です。",
        romaji: "Korewa hatome uchigu desu.",
        meaning: "Đây là DỤNG CỤ DẬP LỖ KHOEN",
        answer: "◯",
        keywords: {
            group1: ["はとめ", "hatome", "KHOEN"],
            group2: ["うちぐ", "uchigu", "DỤNG", "CỤ", "DẬP", "LỖ"]
        },
        image: "hinh anh 100 cau/hatomeuchigu.jpg"
    },
    {
        id: 51,
        jp: "めうち は きじ を きる どうぐ です。",
        romaji: "Meuchi wa kiji wo kiru dougu desu.",
        meaning: "CAY DÙI LỖ là DỤNG CỤ để CẮT vải.",
        answer: "ꓫ",
        keywords: {
            group1: ["めうち", "Meuchi", "CÂY", "DÙI", "LỖ"],
            group2: ["きる", "kiru", "CẮT"],
            group3: ["どうぐ", "dougu", "DỤNG", "CỤ"]
        },
        image: null
    },
    {
        id: 52,
        jp: "これは ほんぬいミシンの ぬいめ を あらわしています。",
        romaji: "kore wa honnuimishinno nuime wo arawasite imasu.",
        meaning: "Cái này thể hiện ĐƯỜNG MAY CỦA MÁY MAY CƠ BẢN .",
        answer: "◯",
        keywords: {
            group1: ["ほんぬいミシンの", "ぬいめ", "honnuimishinno", "nuime", "ĐƯỜNG", "MAY", "CỦA", "MÁY", "MAY", "CƠ", "BẢN"]
        },
        image: "hinh anh 100 cau/honnuizu.jpg"
    },
    {
        id: 53,
        jp: "アイレットリング を うつときは リングより ちいさい あな を あけます。",
        romaji: "Airettoringu wo utsutoki wa ringu yori chiisai ana wo akemasu.",
        meaning: "Khi dùi lỗ để gắn KHOEN tròn, thì dùi lỗ nhỏ hơn khoen.",
        answer: "◯",
        keywords: {
            group1: ["アイレットリング", "Airettoringu", "KHOEN"],
            group2: ["ちいさい", "あな", "chiisai", "ana", "LỖ", "NHỎ"]
        },
        image: null
    },
    {
        id: 54,
        jp: "めんはんぷ は いっぱんに ひらおり です。",
        romaji: "Menhanpu wa ippanni hiraori desu.",
        meaning: "VẢI BỐ , thông thường là vải DỆT THOI .",
        answer: "◯",
        keywords: {
            group1: ["めんはんぷ", "Menhanpu", "VẢI", "BỐ"],
            group2: ["ひらおり", "hiraori", "DỆT", "THOI"]
        },
        image: null
    },
    {
        id: 55,
        jp: "いどうしきあしば （ローリング タワー）の うえ では きゃたつ を つかっても よいです 。",
        romaji: "Idousikiashiba ( rouringu tawaa ) no ue dewa kyatatsu wo tsukattemo yoidesu .",
        meaning: "CÓ THỂ DÙNG được THANG CHỮ A TRÊN GIÀN GIÁO DI ĐỘNG .",   
        answer: "ꓫ",
        keywords: {
            group1: ["いどうしきあしば", "Idousikiashiba", "GIÀN", "GIÁO", "DI", "ĐỘNG"],
            group2: ["うえ", "ue", "TRÊN"],
            group3: ["きゃたつ", "kyatatsu", "THANG", "CHỮ", "A"],
            group4: ["つかっても よいです", "tsukattemo yoidesu", "CÓ", "THỂ", "DÙNG"]
        },
        image: null
    },
    {
        id: 56,
        jp: "きかいの そうじ や きゅうゆ を するとき は きかいを とめてから します。",
        romaji: "Kikai no souji ya kyuuyu wo surutoki wa kikai wo tometekara shimasu.",
        meaning: "DỪNG máy khi VỆ SINH máy hay CUNG CẤP dầu.",
        answer: "◯",
        keywords: {
            group1: ["そうじ", "souji", "VỆ", "SINH"],
            group2: ["きゅうゆ", "kyuuyu", "CUNG", "CẤP"],
            group3: ["とめてから", "tometekara", "DÙNG"]
        },
        image: null
    },
    {
        id: 57,
        jp: "この ひょうしき が あるところで は ほごぼう は かぶらなくても よいです 。",
        romaji: "Kono hyoushiki ga arutokoro dewa hogobou wa kaburanakute mo yoidesu .",
        meaning: "Tại nơi có BIỂN BÁO này, KHÔNG CẦN ĐỘI MŨ BẢO HIỂM .",
        answer: "ꓫ",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["ほごぼう", "hogobou", "MŨ", "BẢO", "HIỂM"],
            group3: ["かぶらなくても", "よいです", "kaburanakute", "mo", "yoidesu", "KHÔNG", "CẦN", "DỘI"]
        },
        image: "hinh anh 100 cau/hogobou.jpg"
    },
    {
        id: 58,
        jp: "この ひょうしき が あるところ では かんでん の きけん は ありません 。",
        romaji: "Kono hyoushiki ga arutokoro dewa kanden no kiken wa arimasen .",
        meaning: "Tại nơi có BIỂN BÁO này, KHÔNG có NGUY CƠ bị ĐIỆN GIẬT .",
        answer: "ꓫ",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["かんでん", "kanden", "ĐIỆN", "GIẬT"],
            group3: ["きけん", "kiken", "NGUY", "CƠ"],
            group4: ["ありません", "arimasen", "KHÔNG"]
        },
        image: "hinh anh 100 cau/hyosiki.jpg"
    },
    {
        id: 59,
        jp: "この ひょうしき が あるところ には はいっても よいです 。",
        romaji: "Kono hyoushiki ga arutokoro niwa haittemo yoidesu .",
        meaning: "Nơi có biển báo này thì có thể VÀO ĐƯỢC .",
        answer: "ꓫ",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["はいっても", "よいです", "haittemo", "yoidesu", "VÀO", "ĐƯỢC"]
        },
        image: "hinh anh 100 cau/hyosikihito.jpg"
    },
    {
        id: 60,
        jp: "この ひょうしき が あるところは あんぜん です。",
        romaji: "Kono hyoushiki ga arutokoro wa anzen desu.",
        meaning: "Nơi có BIỂN BÁO này thì AN TOÀN .",
        answer: "ꓫ",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["あんぜん", "anzen", "AN", "TOÀN"]
        },
        image: "hinh anh 100 cau/hyosiki.jpg"
    },
    {
        id: 61,
        jp: "この ひょうしき が あるところには はいって は いけません。",
        romaji: "Kono hyoushiki ga arutokoro niwa haitte ha ikemasen .",
        meaning: "KHÔNG ĐƯỢC VÀO chỗ có BIỂN BÁO này.",
        answer: "◯",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["はいって", "は", "いけません", "haitte", "ha", "ikemasen", "KHÔNG", "ĐƯỢC", "VÀO"]
        },
        image: "hinh anh 100 cau/hyosikihito.jpg"
    },
    {
        id: 62,
        jp: "この ひょうしき が あるところ では たばこ を すって も よいです 。",
        romaji: "Kono hyoushiki ga arutokoro dewa tabako wo sutte mo yoidesu .",
        meaning: "Bạn CÓ THỂ HÚT THUỐC LÁ ở chỗ có BIỂN BÁO này.",
        answer: "ꓫ",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["たばこ", "tabako", "THUỐC", "LÁ"],
            group3: ["すって", "も", "よいです", "sutte mo yoidesu", "CÓ", "THỂ", "HÚT"]
        },
        image: "hinh anh 100 cau/hi.jpg"
    },
    {
        id: 63,
        jp: "この ひょうしき が あるところ では たばこ を すって は いけません 。",
        romaji: "Kono hyoushiki ga arutokoro dewa tabako wo sutte wa ikemasen .",
        meaning: "KHÔNG ĐƯỢC HÚT THUỐC LÁ ở chỗ có BIỂN BÁO này.",
        answer: "◯",
        keywords: {
            group1: ["ひょうしき", "hyoushiki", "BIỂN", "BÁO"],
            group2: ["たばこ", "tabako", "THUỐC", "LÁ"],
            group3: ["すって" ,"は", "いけません", "sutte", "wa", "ikemasen", "KHÔNG", "ĐƯỢC", "HÚT"]
        },
        image: "hinh anh 100 cau/tabako.jpg"
    },
    {
        id: 64,
        jp: "けんちくこうじょう シート には ぼうえん かこう を しなくて も よいです。",
        romaji: "Kenchikukoujiyou shiito niwa bouen kakou wo shinakutemo yoidesu.",
        meaning: "Không cần thiết phải GIA CÔNG CHỐNG CHÁY đối với BẠT PHỦ XÂY DỰNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["けんちくこうじょう", "シート", "Kenchikukoujiyou", "shiito", "BẠT", "PHỦ", "XÂY", "DỰNG"],
            group2: ["ぼうえん", "bouen", "CHỐNG", "CHÁY"],
            group3: ["かこう", "kakou", "GIA", "CÔNG"]
        },
        image: null
    },
    {
        id: 65,
        jp: "じぬい は 2まい の きじ の おもて を あわせて ぬいます。",
        romaji: "Jinui wa nimai no maji no omote wo awasete nuimasu.",
        meaning: "JINUI là may ghép MẶT TRÁI của hai tấm vải vào nhau (tức là may để sau đó lộn ra mặt phải ).",
        answer: "◯",
        keywords: {
            group1: ["おもて", "omote", "MẶT", "TRÁI"]
        },
        image: null
    },
    {
        id: 66,
        jp: "こうしゅうは ウエルダー は ねっぷう を つかった ようちゃく き です。",
        romaji: "Koushuha ueruda wa neppuu wo tsukatta youchaku ki desu.",
        meaning: "MÁY HÀN CAO TẦN là máy hàn nóng chảy sử dụng KHÍ NÓNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["こうしゅうは", "ウエルダー", "Koshuha", "ueruda", "MÁY", "HÀN", "CAO", "TẦN"],
            group2: ["ねっぷう", "neppuu", "KHÍ", "NÓNG"]
        },
        image: null
    },
    {
        id: 67,
        jp: "ようちゃく かこう を したときは めどめしょり をします。",
        romaji: "Youchaku kakou wo shitatokiwa mejimeshori wo shimasu.",
        meaning: "Khi GIA CÔNG máy hàn NÓNG CHẢY , phải xử lý CHỐNG RÒ .",
        answer: "ꓫ",
        keywords: {
            group1: ["ようちゃく", "youchaku", "NÓNG", "CHẢY"],
            group2: ["かこう", "kakou", "GIA", "CÔNG"],
            group3: ["めどめしょり", "mejimeshori", "CHỐNG", "RÒ"]
        },
        image: null
    },
    {
        id: 68,
        jp: "ナイロン や ビニロン は かがくせんい です。",
        romaji: "Nairon ya biniron wa kagakuseni desu.",
        meaning: "Nylon và Vinylon là SỢI HÓA HỌC .",
        answer: "◯",
        keywords: {
            group1: ["ナイロン", "Nairon", "Nylon"],
            group2: ["ビニロン", "biniron", "Vinylon"],
            group3: ["かがくせんい", "kagakuseni", "SƠI", "HÓA", "HỌC"]
        },
        image: null
    },
    {
        id: 69,
        jp: "アイレットリング の 25ばん は 30ばん より おおきい です。",
        romaji: "Airettoringu no nijuugoban wa sanjuuban yori ookii desu.",
        meaning: "KHOEN bọc lỗ số 25 LỚN hơn khoen số 30",
        answer: "ꓫ",
        keywords: {
            group1: ["アイレットリング", "Airettoringu", "KHOEN"],
            group2: ["おおきい", "ookii", "LỚN"]
        },
        image: null
    },
    {
        id: 70,
        jp: "きかい の スイッチ は きかいを つかう ひとが そうさします 。",
        romaji: "kikai no suicchi wa kikaiwo tsukau hitoga sousashimasu .",
        meaning: "CÔNG TẮC máy được VẬN HÀNH bởi người sử dụng MÁY .",
        answer: "◯",
        keywords: {
            group1: ["きかい", "Kikai", "MÁY"],
            group2: ["スイッチ", "suicchi", "CÔNG", "TẮC"],
            group3: ["そうさします", "sousashimasu", "VẬN", "HÀNH"]
        },
        image: null
    },
    {
        id: 71,
        jp: "きじの せっちゃく ほうほう で アークしき も あります。",
        romaji: "Kijino secchaku houhou de akushiki mo arimasu.",
        meaning: "Trong các PHƯƠNG PHÁP dán vải, có dán HỒ QUANG .",
        answer: "ꓫ",
        keywords: {
            group1: ["アークしき", "akushiki", "HỒ", "QUANG"],
            group2: ["ほうほう", "houhou", "PHƯƠNG", "PHÁP"]
        },
        image: null
    },
    {
        id: 72,
        jp: "こもの の さいだんに は まるばしき は てきしません 。",
        romaji: "Komono no saidanni wa marubashiki wa tekishimasen .",
        meaning: "Khi cắt các PHỤ KIỆN NHỎ , MÁY CẮT LƯỠI TRÒN KHÔNG THÍCH HỢP .",
        answer: "◯",
        keywords: {
            group1: ["こもの", "komono", "PHỤ", "KIỆN", "NHỎ"],
            group2: ["まるばしき", "marubashiki", "MÁY", "CẮT", "LƯỠI", "TRÒN"],
            group3: ["てきしません", "tekishimasen", "KHÔNG", "THÍCH", "HỢP"]
        },
        image: null
    },
    {
        id: 73,
        jp: "ずは りょうながれぬい です。",
        romaji: "Zu wa ryounagarenui desu.",
        meaning: "Hình vẽ bên là MAY SÓNG ĐÔI .",
        answer: "◯",
        keywords: {
            group1: ["りょうながれぬい", "ryounagarenui", "MAY", "SÓNG", "ĐÔI"]
        },
        image: "hinh anh 100 cau/ryonaganui.png"
    },
    {
        id: 74,
        jp: "うわいと したいと の ちょうし が つよすぎる と ぬいちぢみ に なります。",
        romaji: "Uwaito shitaito no choushi ga tsuyosugiru to nuichijimi ninarimasu.",
        meaning: "Nếu CHỈ TRÊN và CHỈ DƯỚI QUÁ CHẶT sẽ khiến đường MAY BỊ RÚT .",
        answer: "◯",
        keywords: {
            group1: ["うわいと", "Uwaito", "CHỈ", "TRÊN"],
            group2: ["したいと", "shitaito", "DƯỚI"],
            group3: ["つよすぎる", "tsuyosugiru", "QUÁ", "CHẶT"],
            group4: ["ぬいちぢみ", "nuichijimi", "MAY", "BỊ", "RÚT"]
        },
        image: null
    },
    {
        id: 75,
        jp: "テトロン は ポリエステルせんい です。",
        romaji: "Tetoron wa poriesuterusei desu.",
        meaning: "Tetoron là sợi Polyester .",
        answer: "◯",
        keywords: {
            group1: ["テトロン", "Tetoron", "Tetoron"],
            group2: ["ポリエステルせんい", "poriesuterusei", "sợi", "Polyester"]
        },
        image: null
    },
    {
        id: 76,
        jp: "ビニロンいと は ぬいいと には つかいません 。",
        romaji: "Binironito wa nuiito niwa tsukaimasen .",
        meaning: "Sợi Nylon KHÔNG DÙNG làm CHỈ MAY .",
        answer: "ꓫ",
        keywords: {
            group1: ["ビニロンいと", "Binironito", "Sợi", "Nylon"],
            group2: ["ぬいいと", "nuiito", "CHỈ", "MAY"],
            group3: ["つかいません", "tsukaimasen", "KHÔNG", "DÙNG"]
        },
        image: null
    },
    {
        id: 77,
        jp: "せんぷうきの はね で ろうどうしゃ に きけん を あたえる おそれ の あるもの は かこい を します。",
        romaji: "Senpuukino hane de roudousha ni kiken wo ataeru osore no arumono wa kakoi wo shimasu.",
        meaning: "Những CÁNH QUẠT có thể gây NGUY HIỂM cho công nhân thì BỌC lại.",
        answer: "◯",
        keywords: {
            group1: ["せんぷうきの", "はね", "Senpuukino", "hane", "CÁNH", "QUẠT"],
            group2: ["かこい", "kakoi", "BỌC"],
            group3: ["きけん", "kiken", "NGUY", "HIỂM"]
        },
        image: null
    },
    {
        id: 78,
        jp: "こうしょさぎょうしゃ で さぎょう を するとき は あんぜんたい を つかいます。",
        romaji: "Kousho sagyousha de sagyou wo surutoki wa anzentai wo tsukaimasu.",
        meaning: "Khi LÀM VIỆC TRÊN XE VỊ TRÍ CAO , thì đeo ĐAI AN TOÀN .",
        answer: "◯",
        keywords: {
            group1: ["こうしょさぎょうしゃ", "Kousho", "sagyousha", "TRÊN", "XE", "VỊ", "TRÍ", "CAO"],
            group2: ["あんぜんたい", "anzentai", "ĐAI", "AN", "TOÀN"],
            group3: ["さぎょう", "sagyou", "LÀM", "VIỆC"]
        },
        image: null
    },
    {
        id: 79,
        jp: "あしば は じょうぶ な もの で なくても つかうこと が できます。",
        romaji: "Ashiba wa joubu namono de nakutemo tsukaukoto ga dekimasu.",
        meaning: "BỤC ĐỨNG (giàn giáo) dù không VỮNG chãi cũng dùng được",
        answer: "ꓫ",
        keywords: {
            group1: ["あしば", "Ashiba", "BỤC", "ĐỨNG"],
            group2: ["じょうぶ", "joubu", "VỮNG"]
        },
        image: null
    },
    {
        id: 80,
        jp: "きじの さいだんには かたがみさいだん と じかさいだん が ありま す。",
        romaji: "Kijino saidan niwa katagamisaidan to jikasaidan ga arimasu.",
        meaning: "CẮT VẢI thì có cắt theo MẪU RẬP và cắt TRỰC TIẾP .",
        answer: "◯",
        keywords: {
            group1: ["きじの", "さいだん", "Kijino", "saidan", "CẮT", "VẢI"],
            group2: ["かたがみさいだん", "katagamisaidan", "MẪU", "RẬP"],
            group3: ["じかさいだん", "jikasaidan", "TRỰC", "TIẾP"]
        },
        image: null
    },
    {
        id: 81,
        jp: "ハンドタイプ の ようちゃくき には ねっぷうしき と ちょうおんぱしき が あります。",
        romaji: "Handotaipu no youchakuki niwa neppuushiki to chouonpashiki ga arimasu.",
        meaning: "MÁY HÀN CẦM TAY có loại máy HƠI NÓNG và máy SIÊU ÂM .",
        answer: "◯",
        keywords: {
            group1: ["ハンドタイプ", "の", "ようちゃくき", "Handotaipu", "no", "youchakuki", "MÁY", "HÀN", "CẦM", "TAY"],
            group2: ["ねっぷうしき", "neppuushiki", "HƠI", "NÓNG"],
            group3: ["ちょうおんぱしき", "chouonpashiki", "SIÊU", "ÂM"]
        },
        image: null
    },
    {
        id: 82,
        jp: "ほんぬいの ミシンは うわいと と したいと の からみで ぬいます。",
        romaji: "Honnui no mishin wa uwaito to shitaito no karamide nuimasu.",
        meaning: "Máy may cơ bản may bằng cách móc giữa CHỈ TRÊN và CHỈ DƯỚI .",
        answer: "◯",
        keywords: {
            group1: ["うわいと", "uwaito", "TRÊN"],  
            group2: ["したいと", "shitaito", "DƯỚI"]
        },
        image: null
    },
    {
        id: 83,
        jp: "ずは かんぬい です",
        romaji: "Zu wa kannui desu.",
        meaning: "Hình bên là đường MAY MÓC XÍCH",
        answer: "◯",
        keywords: {
            group1: ["かんぬい", "kannui", "MAY", "MÓC", "XÍCH"]
        },
        image: "hinh anh 100 cau/kannui.jpg"
    },
    {
        id: 84,
        jp: "さいだんず には さいすんした すんぽうを きにゅうします 。",
        romaji: "Saidanzu niwa saisunshita sunpou wo kinyuushimasu .",   
        meaning: "Trong BẢN VẼ RẬP CẮT , GHI KÍCH THƯỚC khi đo.",
        answer: "ꓫ",
        keywords: {
            group1: ["さいだんず", "Saidanzu", "BẢN", "VẼ", "RẬP", "CẮT"],
            group2: ["すんぽうを", "きにゅうします", "sunpou", "wo", "kinyuushimasu", "GHI", "KÍCH", "THƯỚC"]
        },
        image: null
    },
    {
        id: 85,
        jp: "うわぬの と したぬの が ずれること を ぬいずれ といいます。",
        romaji: "Uwanuno to shitanuno ga zurerukoto wo nuizure to iidesu.",
        meaning: "VẢI TRÊN và ‍VẢI DƯỚI bị lệch, gọi là MAY LỆCH .",
        answer: "◯",
        keywords: {
            group1: ["うわぬの", "Uwanuno", "VẢI", "TRÊN"],
            group2: ["したぬの", "shitanuno", " ‍VẢI", "DƯỚI"], 
            group3: ["ぬいずれ", "nuizure", "MAY", "LỆCH"]
        },
        image: null
    },
    {
        id: 86,
        jp: "めんはんぷ は かがくやくひん に つよい です。",
        romaji: "Menhanpu wa kagakuyakuhin ni tsuyoi desu.",
        meaning: "VẢI BỐ chịu HÓA CHẤT TỐT .",
        answer: "ꓫ",
        keywords: {
            group1: ["めんはんぷ", "Menhanpu", "VẢI", "BỐ"],
            group2: ["かがくやくひん", "kagakuyakuhin", "HÓA", "CHẤT"],
            group3: ["つよい", "tsuyoi", "TỐT"]
        },
        image: null
    },
    {
        id: 87,
        jp: "きかいの そうじ や きゅうゆ を するとき は きかいを とめてから します。",
        romaji: "Kikaino souji ya kyuuyu wo surutoki wa kikai wo tometekara shimasu.",
        meaning: "Khi VỆ SINH máy hay TRA DẦU , TẮT MÁY rồi mới làm.",
        answer: "◯",
        keywords: {
            group1: ["そうじ", "souji", "VỆ", "SINH"],
            group2: ["きゅうゆ", "kyuuyu", "TRA", "DẦU"],
            group3: ["とめてから", "tometekara", "TẮT", "MÁY"]
        },
        image: null
    },
    {
        id: 88,
        jp: "ひ を つかったひと は かならず あと かたづけ をします。",
        romaji: "Hi wo tsukattahito wa kanarazu ato katazuke wo shimasu.",
        meaning: "Người nào dùng LỬA xong phải CẤT DỌN .",
        answer: "◯",
        keywords: {
            group1: ["ひ", "Hi", "LỬA"],
            group2: ["かたづけ", "katazuke", "CẤT", "DỌN"]
        },
        image: null
    },
    {
        id: 89,
        jp: "さぎょうだいの あかるさ は 150ルクス いじょう です。",
        romaji: "Sagyoudai no akarusa wa 150 rukusu ijou desu.",
        meaning: "ĐỘ SÁNG CỦA BÀN LÀM VIỆC là HƠN 150 Lux",
        answer: "◯",
        keywords: {
            group1: ["さぎょうだいの", "あかるさ", "Sagyoudai", "no", "akarusa", "DỘ", "SÁNG", "CỦA", "BÀN", "LÀM", "VIỆC"],
            group2: ["150ルクス", "150", "rukusu", "150", "lux"],
            group3: ["いじょう", "ijou", "HƠN"]
        },
        image: null
    },
    {
        id: 90,
        jp: "さぎょう を するときは、 うごき やすければどのような ふくそう を してもよいです。",
        romaji: "Sagyou wo surutoki wa ugoki yasukere ba donoyou na fukusou wo shitemo yoidesu.",
        meaning: "Khi làm việc, miễn là dễ CỬ ĐỘNG thì MẶC ĐỒ như thế nào cũng được",
        answer: "ꓫ",
        keywords: {
            group1: ["うごき", "ugoki", "CỬ", "ĐỘNG"],
            group2: ["ふくそう", "fukusou", "MẶC", "ĐỒ"]
        },
        image: null
    },
    {
        id: 91,
        jp: "せまい ところでは つうろを かくほしなくて もよいです。",
        romaji: "Semai tokoro dewa tsuro wo kakuho shinakute mo yoidesu.",
        meaning: "Ở chỗ HẸP thì KHÔNG CHỪA LỐI ĐI cũng được.",
        answer: "ꓫ",
        keywords: {
            group1: ["せまい", "Semai", "HẸP"],
            group2: ["かくほしなくて", "kakuho", "shinakute", "KHÔNG", "CHỪA"],
            group3: ["つうろ", "tsuro", "LỐI", "ĐI"]
        },
        image: null
    },
    {
        id: 92,
        jp: "ちどりミシン は ふちぬいようミシン です。",
        romaji: "Chidorimishin wa fuchinuiyou mishin desu.",
        meaning: "MÁY MAY DÍCH DẮC là máy dùng để ‍MAY VIỀN .",
        answer: "ꓫ",
        keywords: {
            group1: ["ちどりミシン", "Chidorimishin", "MÁY", "MAY", "DÍCH", "DẮC"],
            group2: ["ふちぬいよう", "fuchinuiyou", " ‍MAY", "VIỀN"]
        },
        image: null
    },
    {
        id: 93,
        jp: "オーバーロック ミシン は ふちぬいよう ミシン です。",
        romaji: "Obarokku mishin wa fuchinuiyou mishin desu.",
        meaning: "Máy VẮT SỔ là máy để MAY VIỀN .",
        answer: "◯",
        keywords: {
            group1: ["オーバーロック", "Obarokku", "VẮT", "SỔ"],
            group2: ["ふちぬいよう", "fuchinuiyou", "MAY", "VIỀN"]
        },
        image: null
    },
    {
        id: 94,
        jp: "ミシンを つかう まえ や つかった あと には てんけん を します。",
        romaji: "Mishin wo tsukau mae ya tsukatta ato niwa tenken wo shimasu.",
        meaning: "Trước và sau khi sử dụng máy may phải KIỂM TRA máy.",
        answer: "◯",
        keywords: {
            group1: ["てんけん", "tenken", "KIỂM", "TRA"]
        },
        image: null
    },
    {
        id: 95,
        jp: "ミシンを つかうときは はりの しょうめん に すわります。",
        romaji: "Mishin wo tsukautoki wa hari no shoumen ni suwari masu.",
        meaning: "Khi dùng máy may, ngồi TRƯỚC KIM máy may.",
        answer: "◯",
        keywords: {
            group1: ["しょうめん", "shoumen", "TRƯỚC"],
            group2: ["はり", "hari", "KIM"]
        },
        image: null
    },
    {
        id: 96,
        jp: "オーバーロック ミシンは ちょくせんぬい ミシンです。",
        romaji: "Obarokku mishin wa chokusennui mishin desu.",
        meaning: "Máy VẮT SỔ là máy may ĐƯỜNG THẲNG .",
        answer: "ꓫ",
        keywords: {
            group1: ["オーバーロック", "Obarokku", "VẮT", "SỔ"],
            group2: ["ちょくせんぬい", "chokusennui", "ĐƯỜNG", "THẲNG"]
        },
        image: null
    },
    {
        id: 97,
        jp: "ミシンを かけるときの しせい が わるい と せいかく に ぬえません 。",
        romaji: "Mishin wo kakerutokino shisei ga warui to seikaku ni nuemasen .",
        meaning: "TƯ THẾ ngồi may KHÔNG TỐT thì ‍KHÔNG THỂ MAY CHÍNH XÁC được.",
        answer: "◯",
        keywords: {
            group1: ["しせい", "shisei", "TƯ", "THẾ"],
            group2: ["わるい", "warui", "KHÔNG", "TỐT"],
            group3: ["せいかく", "seikaku", "CHÍCH", "XÁC"],
            group4: ["ぬえません", "nuemasen", " ‍KHÔNG", "THỂ", "MAY"]
        },
        image: null
    },
    {
        id: 98,
        jp: "ミシンいとの 8ばん は 20ばん より ほそい です。",
        romaji: "Mishin ito no hachiban ha nijuuban yori hosoi desu.",
        meaning: "Chỉ may số 8 MỎNG hơn chỉ may số 20.",
        answer: "ꓫ",
        keywords: {
            group1: ["ほそい", "hosoi", "MỎNG"]
        },
        image: null
    },
    {
        id: 99,
        jp: "ミシン の はりさき が まるく なって いると ぬいずれ の げんいん と なります。",
        romaji: "Mishin no harisaki ga maruku natte iruto nuizure no genin to narimasu.",
        meaning: "Đầu kim của máy may bị TRÒN là NGUYÊN NHÂN may bị LỆCH .",
        answer: "◯",
        keywords: {
            group1: ["まるく", "maruku", "TRÒN"],
            group2: ["ぬいずれ", "nuizure", "LỆCH"],
            group3: ["げんいん", "genin", "NGUYÊN", "NHÂN"]
        },
        image: null
    },
    {
        id: 100,
        jp: "これは しゅすおり です。",
        romaji: "Korewa shusuori desu.",
        meaning: "Đây là dệt VÂN ĐOẠN ( long 4 ).",
        answer: "◯",
        keywords: {
            group1: ["しゅすおり", "shusuori", "VÂN", "ĐOẠN", "long", "4"],
        },
        image: "hinh anh 100 cau/shusuori.jpg"
    },
    {
        id: 101,
        jp: "めうち は あいじるし と さいだん の とき の ずれどめ に つかいます。",
        romaji: "Meuchi wa aijirushi to saidan no toki no zuredome ni tsukaimasu.",
        meaning: "DÙI LỖ được sử dụng để ĐÁNH DẤU và CHỐNG LỆCH trong quá trình cắt.",
        answer: "ꓫ",
        keywords: {
            group1: ["めうち", "Meuchi", "DÙI", "LỖ"],
            group2: ["あいじるし", "aijirushi", "ĐÁNH", "DẤU"],
            group3: ["ずれどめ", "zuredome", "CHỐNG", "LỆCH"]
        },
        image: null
    },
    {
        id: 102,
        jp: "けんたんき は きじを さいだんするものです。",
        romaji: "Kentanki wa kijiwo saidan surumono desu.",
        meaning: "MÁY KIỂM TRA VẢI là dụng cụ dùng để cắt vải.",
        answer: "ꓫ",
        keywords: {
            group1: ["けんたんき", "Kentanki", "MÁY", "KIỂM", "TRA", "VẢI"]
        },
        image: null
    },
    {
        id: 103,
        jp: "たばこ は きめられた ところ で すいます。",
        romaji: "Tabako wa kimerareta tokoro de suimasu.",
        meaning: "Hút THUỐC LÁ ở khu vực ĐƯỢC CHỈ ĐỊNH .",
        answer: "◯",
        keywords: {
            group1: ["たばこ", "Tabako", "THUỐC", "LÁ"],
            group2: ["きめられた", "kimerareta", "ĐƯỢC", "CHỈ", "ĐỊNH"]
        },
        image: null
    },
    {
        id: 104,
        jp: "ほごぐ をつけて さぎょうを しにくい ときは ほごぐ を つけなくて もいいです。",
        romaji: "Hogogu wo tsukete sagyouwo shinikui tokiwa hogogu wo tsukenakutemo yoidesu.",
        meaning: "Khi mang đồ bảo hộ mà KHÓ LÀM VIỆC , bạn có thể không mặc ĐỒ BẢO HỘ .",
        answer: "ꓫ",
        keywords: { 
            group1: ["ほごぐ", "hogogu", "ĐỒ", "BẢO", "HỘ"],
            group2: ["しにくい", "shinikui", "KHÓ", "LÀM", "VIỆC"]
        },
        image: null
    },
    {
        id: 105,
        jp: "ヒューズ が きれた ときは どうせん で たいおうして もいいです。",
        romaji: "Hyuzu ga kiretatoki wa dousen de taiou shitemoiidesu.",
        meaning: "Khi CẦU CHÌ bị đứt, bạn có thể khắc phục bằng cách nối DÂY DẪN .",
        answer: "ꓫ",
        keywords: {
            group1: ["ヒューズ", "Hyuzu", "CẦU", "CHÌ"],
            group2: ["どうせん", "dousen", "DÂY", "DẪN"]
        },
        image: null
    },
    {
        id: 106,
        jp: "ビニロン や ナイロン は てんねんせんい です。",
        romaji: "Nairon ya Biniron wa tennen seni desu.",
        meaning: "Nylon và Vinylon là SỢI TỰ NHIÊN .",
        answer: "ꓫ",
        keywords: {
            group1: ["ナイロン", "Nairon", "Nylon"],
            group2: ["ビニロン", "Biniron", "Vinylon"],
            group3: ["てんねんせんい", "tennen", "seni", "SỢI", "TỰ", "NHIÊN"]
        },
        image: null
    },
    {
        id: 107,
        jp: "きゃたつ を つかって さぎょうするときは きゃたつ の いちばんうえ に たって も よいです。",
        romaji: "Kyatatsu wo tukatte sagho wo surutoki wa kyatatsu no ichiban ue ni tattemo yoidesu.",
        meaning: "Khi làm việc với THANG , bạn có thể đứng ở PHÍA TRÊN CÙNG của thang .",
        answer: "ꓫ",
        keywords: {
            group1: ["きゃたつ", "Kyatatsu", "THANG"],
            group2: ["いちばんうえ", "ichiban", "ue", "PHÍA", "TRÊN", "CÙNG"]  
        },
        image: null
    }
];

const questionTable = document.getElementById("questionTable");

// Hàm tạo HTML cho một câu hỏi
function createQuestionRow(question) {
    const row = document.createElement("tr");
    const answerButton = document.createElement("button");
    const meaningButton = document.createElement("button");

    // Kiểm tra xem câu hỏi có hình ảnh hay không
    let imageHTML = "";
    if (question.image) {
        imageHTML = `<img src="${question.image}" alt="">`;
    }

    answerButton.textContent = "Xem đáp án";
    answerButton.addEventListener("click", function () {
        toggleAnswer(this);
    });

    meaningButton.textContent = "Xem ý nghĩa";
    meaningButton.addEventListener("click", function () {
        toggleMeaning(this);
    });

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

// Hàm xử lý sự kiện click
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