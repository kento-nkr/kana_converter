// module.exports =
class KanaConverter
{
  constructor()
  {
    this.conversionMap = CONVERSIONMAP;
  }

  halfToFull(str)
  {
    return this.convert(str, "half", "full");
  }

  fullToHalf(str)
  {
    return this.convert(str, "full", "half");
  }

  convert(str, fromType, toType)
  {
    const str_array = Array.from(str);
    let result_arr = [];
    str_array.forEach((elem) =>
    {
      if (elem == "ﾞ")
      {
        let tmp = result_arr.pop();
        result_arr.push(tmp + elem);
      } else
      {
        result_arr.push(elem);
      }
    });
    const convertedString = result_arr
      .map((char) =>
      {
        const conversion = this.conversionMap.find(
          (entry) => entry[fromType] === char
        );
        return conversion ? conversion[toType] : char;
      })
      .join("");

    return convertedString;
  }
};

const CONVERSIONMAP = [
  { "half": "ｶﾞ", "full": "ガ" },
  { "half": "ｷﾞ", "full": "ギ" },
  { "half": "ｸﾞ", "full": "グ" },
  { "half": "ｹﾞ", "full": "ゲ" },
  { "half": "ｺﾞ", "full": "ゴ" },
  { "half": "ｻﾞ", "full": "ザ" },
  { "half": "ｼﾞ", "full": "ジ" },
  { "half": "ｽﾞ", "full": "ズ" },
  { "half": "ｾﾞ", "full": "ゼ" },
  { "half": "ｿﾞ", "full": "ゾ" },
  { "half": "ﾀﾞ", "full": "ダ" },
  { "half": "ﾁﾞ", "full": "ヂ" },
  { "half": "ﾂﾞ", "full": "ヅ" },
  { "half": "ﾃﾞ", "full": "デ" },
  { "half": "ﾄﾞ", "full": "ド" },
  { "half": "ﾊﾞ", "full": "バ" },
  { "half": "ﾋﾞ", "full": "ビ" },
  { "half": "ﾌﾞ", "full": "ブ" },
  { "half": "ﾍﾞ", "full": "ベ" },
  { "half": "ﾎﾞ", "full": "ボ" },
  { "half": "ﾊﾟ", "full": "バ" },
  { "half": "ﾋﾟ", "full": "ビ" },
  { "half": "ﾌﾟ", "full": "ブ" },
  { "half": "ﾍﾟ", "full": "ベ" },
  { "half": "ﾎﾟ", "full": "ボ" },
  { "half": "ｳﾞ", "full": "ヴ" },
  { "half": "ﾜﾞ", "full": "ワ" },
  { "half": "ｦﾞ", "full": "ヲ" },
  { "half": "ｱ", "full": "ア" },
  { "half": "ｲ", "full": "イ" },
  { "half": "ｳ", "full": "ウ" },
  { "half": "ｴ", "full": "エ" },
  { "half": "ｵ", "full": "オ" },
  { "half": "ｶ", "full": "カ" },
  { "half": "ｷ", "full": "キ" },
  { "half": "ｸ", "full": "ク" },
  { "half": "ｹ", "full": "ケ" },
  { "half": "ｺ", "full": "コ" },
  { "half": "ｻ", "full": "サ" },
  { "half": "ｼ", "full": "シ" },
  { "half": "ｽ", "full": "ス" },
  { "half": "ｾ", "full": "セ" },
  { "half": "ｿ", "full": "ソ" },
  { "half": "ﾀ", "full": "タ" },
  { "half": "ﾁ", "full": "チ" },
  { "half": "ﾂ", "full": "ツ" },
  { "half": "ﾃ", "full": "テ" },
  { "half": "ﾄ", "full": "ト" },
  { "half": "ﾅ", "full": "ナ" },
  { "half": "ﾆ", "full": "ニ" },
  { "half": "ﾇ", "full": "ヌ" },
  { "half": "ﾈ", "full": "ネ" },
  { "half": "ﾉ", "full": "ノ" },
  { "half": "ﾊ", "full": "ハ" },
  { "half": "ﾋ", "full": "ヒ" },
  { "half": "ﾌ", "full": "フ" },
  { "half": "ﾍ", "full": "ヘ" },
  { "half": "ﾎ", "full": "ホ" },
  { "half": "ﾏ", "full": "マ" },
  { "half": "ﾐ", "full": "ミ" },
  { "half": "ﾑ", "full": "ム" },
  { "half": "ﾒ", "full": "メ" },
  { "half": "ﾓ", "full": "モ" },
  { "half": "ﾔ", "full": "ヤ" },
  { "half": "ﾕ", "full": "ユ" },
  { "half": "ﾖ", "full": "ヨ" },
  { "half": "ﾗ", "full": "ラ" },
  { "half": "ﾘ", "full": "リ" },
  { "half": "ﾙ", "full": "ル" },
  { "half": "ﾚ", "full": "レ" },
  { "half": "ﾛ", "full": "ロ" },
  { "half": "ﾜ", "full": "ワ" },
  { "half": "ｦ", "full": "ヲ" },
  { "half": "ﾝ", "full": "ン" },
  { "half": "ｧ", "full": "ァ" },
  { "half": "ｨ", "full": "ィ" },
  { "half": "ｩ", "full": "ゥ" },
  { "half": "ｪ", "full": "ェ" },
  { "half": "ｫ", "full": "ォ" },
  { "half": "ｯ", "full": "ッ" },
  { "half": "ｬ", "full": "ャ" },
  { "half": "ｭ", "full": "ュ" },
  { "half": "ｮ", "full": "ョ" },
  { "half": "｡", "full": "。" },
  { "half": "､", "full": "、" },
  { "half": "-", "full": "ー" },
  { "half": "｢", "full": "「" },
  { "half": "｣", "full": "」" },
  { "half": "･", "full": "・" },
  { "half": "0", "full": "０" },
  { "half": "1", "full": "１" },
  { "half": "2", "full": "２" },
  { "half": "3", "full": "３" },
  { "half": "4", "full": "４" },
  { "half": "5", "full": "５" },
  { "half": "6", "full": "６" },
  { "half": "7", "full": "７" },
  { "half": "8", "full": "８" },
  { "half": "9", "full": "９" }
];
