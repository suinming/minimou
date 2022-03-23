const titleBlock = {
  brand: { title: '品牌介紹', englishTitle: 'BRAND' },
  nutrient: { title: '專業營養師計算', englishTitle: 'NUTRIENT' }
}

const portfolioContent = {
  degree: '學歷｜臺北醫學大學 保健營養學系 碩士',
  position: '現職｜門診營養師 ',
  license: '證照｜中華民國專技高考 合格營養師',
  title1: '中華民國糖尿病衛教學會合格衛教師',
  title2: '台北市糖尿病共同照護網醫事人員認證',
  title3: '腎臟專科營養師',
  title4: 'HACCP衛生管理人員(60A.B)'
}

const menuItems = [
  {
    imgSrc: 'burger.png',
    imgSizeObj: { width: '267px', height: '267px' },
    blockWidth: '259px',
    title: '手工起司牛肉小漢堡',
    ingredients: [
      { key: '熱量', val: '617.9', unit: '大卡', isRed: false },
      { key: '蛋白質', val: '21.7', unit: '大卡', isRed: false },
      { key: '碳水化合物', val: '30', unit: '公克', isRed: false },
      { key: '總糖量', val: '1.9', unit: '公克', isRed: false },
      { key: '膳食纖維', val: '37', unit: '公克', isRed: false },
      { key: '鈉', val: '5.8', unit: '毫克', isRed: false },
      { key: '礦物質鉀', val: '852.7', unit: '毫克', isRed: false },
      { key: '礦物質鎂', val: '32', unit: '毫克', isRed: false },
      { key: '維生素C', val: '5.6', unit: '毫克', isRed: false }
    ]
  }
]

export { titleBlock, menuItems, portfolioContent }
