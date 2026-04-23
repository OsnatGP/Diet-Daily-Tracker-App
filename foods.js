/* ═══════════════════════════════════════════════════════
   DAILY TRACKER — FOOD DATABASE
   cal = kcal per 100g  |  pro = protein g  |  fat = fat g  |  carb = carb g  (all per 100g)
   srv = default serving in grams
   ─────────────────────────────────────────────────────
   HOW TO ADD A FOOD:
     {id:'unique_id', cal:XXX, pro:XX, srv:XXX, srvName:'תיאור מנה',
      keys:['מילת חיפוש','another keyword','english name']},
   ═══════════════════════════════════════════════════════ */

var FOOD_DB = [

  /* ──── EGGS ──── */
  {id:'egg',        cal:155, pro:13,  fat:10.6, carb:1.1,  srv:55,  srvName:'ביצה בינונית',
   keys:['ביצה','ביצים','ביצה קשה','ביצה רכה','ביצה מקושקשת','ביצה עלומה','חביתה','egg','eggs','omelette','omelet','scrambled egg','hard boiled','boiled egg']},

  /* ──── CHICKEN ──── */
  {id:'chicken_breast', cal:165, pro:31,  fat:3.6, carb:0.0, srv:120, srvName:'חזה עוף בינוני',
   keys:['חזה עוף','עוף','עוף צלוי','עוף מבושל','עוף בתנור','שניצל עוף','chicken','chicken breast','grilled chicken','baked chicken']},
  {id:'chicken_thigh',  cal:209, pro:26,  fat:13.0, carb:0.0, srv:120, srvName:'ירך עוף',
   keys:['ירך עוף','כרעיים','chicken thigh','chicken leg']},
  {id:'chicken_wing',   cal:203, pro:30,  fat:12.0, carb:0.0, srv:80,  srvName:'כנף עוף',
   keys:['כנפיים','כנף עוף','chicken wing','wings']},
  {id:'schnitzel',      cal:230, pro:20,  fat:12.0, carb:11.0, srv:120, srvName:'שניצל',
   keys:['שניצל','שניצל עוף','schnitzel']},

  /* ──── BEEF & MEAT ──── */
  {id:'beef_ground',    cal:250, pro:26,  fat:20.0, carb:0.0, srv:120, srvName:'מנת בשר טחון',
   keys:['בשר טחון','קציצה','המבורגר','המבורגר ביתי','ground beef','hamburger','burger','meatball','קציצות']},
  {id:'beef_steak',     cal:271, pro:26,  fat:19.0, carb:0.0, srv:150, srvName:'סטייק',
   keys:['סטייק','אנטריקוט','פילה בקר','בשר בקר','steak','beef','ribeye','sirloin']},
  {id:'turkey_breast',  cal:135, pro:30,  fat:1.0, carb:0.0, srv:100, srvName:'חזה הודו',
   keys:['חזה הודו','הודו','turkey','turkey breast']},
  {id:'deli_turkey',    cal:110, pro:18,  fat:3.0, carb:2.0, srv:60,  srvName:'3 פרוסות הודו',
   keys:['נקניק הודו','הודו קר','פרוסות הודו','deli turkey','turkey slices']},
  {id:'sausage',        cal:290, pro:12,  fat:26.0, carb:2.0, srv:80,  srvName:'נקניקייה',
   keys:['נקניקייה','נקניקיות','נקניק','hotdog','sausage','frankfurter']},
  {id:'lamb',           cal:294, pro:25,  fat:25.0, carb:0.0, srv:120, srvName:'מנת כבש',
   keys:['כבש','טלה','כבוב','lamb','kebab']},

  /* ──── FISH & SEAFOOD ──── */
  {id:'tuna_can',       cal:116, pro:26,  fat:2.7, carb:0.0, srv:100, srvName:'פחית טונה',
   keys:['טונה','טונה בשימורים','tuna','canned tuna','tuna can']},
  {id:'salmon',         cal:208, pro:20,  fat:13.0, carb:0.0, srv:150, srvName:'פילה סלמון',
   keys:['סלמון','דג סלמון','salmon','grilled salmon']},
  {id:'tilapia',        cal:96,  pro:20,  fat:2.7, carb:0.0, srv:150, srvName:'פילה אמנון',
   keys:['אמנון','דג אמנון','tilapia','fish fillet','פילה דג']},
  {id:'sardines',       cal:208, pro:25,  fat:11.0, carb:0.0, srv:90,  srvName:'קופסת סרדינים',
   keys:['סרדינים','sardines','sardine']},
  {id:'shrimp',         cal:99,  pro:24,  fat:0.3, carb:0.9, srv:120, srvName:'מנת שרימפס',
   keys:['שרימפס','גמבה','shrimp','prawns']},

  /* ──── DAIRY — CHEESE ──── */
  {id:'cottage_strauss_5', cal:97, pro:10.2,  fat:0.0, carb:0.0, srv:250, srvName:'חבילת קוטג׳ 5%',
   keys:['קוטג','קוטג׳','קוטג 5','קוטג 5%','קוטג׳ 5%','חבילת קוטג','גביע קוטג','קופסת קוטג','cottage','cottage cheese','strauss cottage']},
  {id:'labaneh',        cal:170, pro:9,  fat:12.0, carb:4.0,  srv:100, srvName:'2 כפות לבנה',
   keys:['לבנה','labaneh','labane','labaneh cheese']},
  {id:'yellow_cheese',  cal:400, pro:25,  fat:33.0, carb:1.3, srv:30,  srvName:'פרוסת גבינה צהובה',
   keys:['גבינה צהובה','אמנטל','גאודה','צ׳דר','yellow cheese','cheddar','gouda','emmental','cheese slice']},
  {id:'white_cheese_5', cal:90,  pro:9,  fat:5.0, carb:3.5,  srv:200, srvName:'גביע גבינה לבנה 5%',
   keys:['גבינה לבנה','גבינה לבנה 5%','גבינה לבנה 9%','white cheese','cream cheese light']},
  {id:'feta',           cal:264, pro:14,  fat:21.0, carb:4.1, srv:50,  srvName:'50g גבינה בולגרית',
   keys:['גבינה בולגרית','פטה','feta','bulgarian cheese','בולגרית']},
  {id:'ricotta',        cal:174, pro:11,  fat:13.0, carb:3.0, srv:100, srvName:'100g ריקוטה',
   keys:['ריקוטה','ricotta']},
  {id:'mozzarella',     cal:280, pro:28,  fat:22.0, carb:2.2, srv:80,  srvName:'80g מוצרלה',
   keys:['מוצרלה','mozzarella']},
  {id:'parmesan',       cal:431, pro:38,  fat:29.0, carb:3.2, srv:15,  srvName:'כף פרמזן',
   keys:['פרמזן','parmesan','parmigiano']},
  {id:'cream_cheese',   cal:342, pro:6,  fat:34.0, carb:4.1,  srv:30,  srvName:'כף שמנת',
   keys:['שמנת','שמנת מתוקה','cream cheese','philadelphia','שמנת גבינה']},

  /* ──── DAIRY — MILK & YOGURT ──── */
  {id:'milk',           cal:61,  pro:3.2,  fat:3.2, carb:4.8,srv:250, srvName:'כוס חלב',
   keys:['חלב','milk','whole milk','חלב מלא','חלב 3%']},
  {id:'milk_low',       cal:42,  pro:3.4,  fat:1.0, carb:5.0,srv:250, srvName:'כוס חלב דל שומן',
   keys:['חלב דל שומן','חלב 1%','milk 1%','skim milk','low fat milk']},
  {id:'yogurt',         cal:100, pro:4,  fat:3.3, carb:11.0,  srv:200, srvName:'גביע יוגורט',
   keys:['יוגורט','yogurt','יוגורט טבעי','plain yogurt']},
  {id:'yogurt_greek',   cal:130, pro:10,  fat:5.0, carb:9.0, srv:200, srvName:'גביע יוגורט יווני',
   keys:['יוגורט יווני','greek yogurt','יוגורט יוונ']},
  {id:'sour_cream',     cal:193, pro:2.4,  fat:20.0, carb:3.0,srv:50,  srvName:'2 כפות שמנת חמוצה',
   keys:['שמנת חמוצה','sour cream']},
  {id:'leben',          cal:65,  pro:3.3,  fat:1.5, carb:7.5,srv:250, srvName:'גביע לבן',
   keys:['לבן','leben','drinking yogurt','לבן לשתיה']},
  {id:'chocolate_milk', cal:83,  pro:3.4,  fat:3.5, carb:10.5,srv:250, srvName:'כוס חלב שוקולד',
   keys:['שוקולד חלב','חלב שוקולד','chocolate milk','cocoa milk']},
  {id:'skyr_3_small',   cal:79,  pro:8.7,  fat:0.0, carb:0.0,srv:125, srvName:'גביע סקי 3% קטן',
   keys:['סקי','סקי 3','סקי 3%','סקי קטן','גבינת סקי','גבינת סקי 3%','חבילת סקי','גביע סקי','skyr','skyr 3%','small skyr']},
  {id:'danone_pro_20', cal:87, pro:13,  fat:0.5, carb:5.5, srv:150, srvName:'גביע דנונה PRO 20 (150g)',
   keys:['דנונה פרו','דנונה פרו 20','דנונה pro','danone pro','pro 20','פרו 20','יוגורט פרו','יוגורט פרו 20','יוגורט דנונה פרו','יוגורט דנונה פרו 20','דנונה פרו 20 1.5','danone pro 20']},

  /* ──── LEGUMES ──── */
  {id:'hummus_prepared',cal:166, pro:8,  fat:9.6, carb:14.3,  srv:100, srvName:'2 כפות חומוס',
   keys:['חומוס','hummus','חומוס מוכן','חומוס ממרח']},
  {id:'chickpeas',      cal:164, pro:9,  fat:2.6, carb:27.4,  srv:150, srvName:'מנת חומוס מבושל',
   keys:['גרגרי חומוס','חומוס מבושל','chickpeas','garbanzo']},
  {id:'lentils',        cal:116, pro:9,  fat:0.4, carb:20.1,  srv:150, srvName:'מנת עדשים',
   keys:['עדשים','עדשים מבושלות','lentils','lentil soup','מרק עדשים']},
  {id:'beans_red',      cal:127, pro:8.7,  fat:0.5, carb:22.8,srv:150, srvName:'מנת שעועית',
   keys:['שעועית','שעועית אדומה','red beans','kidney beans','פול']},
  {id:'tofu',           cal:76,  pro:8,  fat:4.2, carb:1.9,  srv:120, srvName:'120g טופו',
   keys:['טופו','tofu']},
  {id:'edamame',        cal:121, pro:11,  fat:5.2, carb:8.9, srv:100, srvName:'100g אדמאמה',
   keys:['אדמאמה','edamame']},

  /* ──── GRAINS — BREAD ──── */
  {id:'bread_white',    cal:265, pro:9,  fat:2.5, carb:51.0,  srv:30,  srvName:'פרוסת לחם לבן',
   keys:['לחם לבן','פרוסת לחם','לחם','bread','white bread','toast','טוסט']},
  {id:'bread_whole',    cal:247, pro:10,  fat:3.4, carb:43.0, srv:30,  srvName:'פרוסת לחם מחיטה מלאה',
   keys:['לחם מחיטה מלאה','לחם שחור','whole wheat bread','whole grain bread','לחם מלא']},
  {id:'bread_rye',      cal:259, pro:9,  fat:1.7, carb:48.0,  srv:30,  srvName:'פרוסת לחם שיפון',
   keys:['לחם שיפון','rye bread','pumpernickel']},
  {id:'pita',           cal:275, pro:9,  fat:1.2, carb:55.0,  srv:60,  srvName:'פיתה',
   keys:['פיתה','pita','pitta','pita bread']},
  {id:'laffa',          cal:270, pro:8,  fat:3.5, carb:53.0,  srv:80,  srvName:'לאפה',
   keys:['לאפה','laffa','wrap','wrp']},
  {id:'cracker',        cal:420, pro:9,  fat:10.0, carb:72.0,  srv:20,  srvName:'4 קרקרים',
   keys:['קרקר','קרקרים','cracker','rice cake','קציר']},
  {id:'bagel',          cal:270, pro:10,  fat:1.1, carb:53.0, srv:90,  srvName:'בייגלה',
   keys:['בייגלה','בייגל','bagel']},

  /* ──── GRAINS — COOKED ──── */
  {id:'rice_white',     cal:130, pro:2.7,  fat:0.3, carb:28.1,srv:180, srvName:'מנת אורז לבן',
   keys:['אורז','אורז לבן','rice','white rice','cooked rice']},
  {id:'rice_brown',     cal:123, pro:2.7,  fat:0.9, carb:25.8,srv:180, srvName:'מנת אורז מלא',
   keys:['אורז מלא','brown rice','אורז חום']},
  {id:'pasta',          cal:131, pro:5,  fat:1.1, carb:25.0,  srv:200, srvName:'מנת פסטה מבושלת',
   keys:['פסטה','ספגטי','מקרוני','pasta','spaghetti','macaroni','פנה','penne']},
  {id:'couscous',       cal:112, pro:3.8,  fat:0.2, carb:23.2,srv:180, srvName:'מנת קוסקוס',
   keys:['קוסקוס','couscous']},
  {id:'bulgur',         cal:83,  pro:3.1,  fat:0.2, carb:18.6,srv:180, srvName:'מנת בורגול',
   keys:['בורגול','bulgur','פרו','freekeh','פריקה']},
  {id:'oats',           cal:389, pro:17,  fat:6.9, carb:66.3, srv:40,  srvName:'חצי כוס שיבולת שועל יבשה',
   keys:['שיבולת שועל','קוואקר','פתיתי שבולת שועל','oats','oatmeal','granola','גרנולה']},
  {id:'quinoa',         cal:120, pro:4.4,  fat:1.9, carb:21.3,srv:180, srvName:'מנת קינואה',
   keys:['קינואה','quinoa']},
  {id:'corn',           cal:86,  pro:3.3,  fat:1.2, carb:19.0,srv:150, srvName:'תירס',
   keys:['תירס','תירס מבושל','corn','sweet corn','maize']},

  /* ──── VEGETABLES ──── */
  {id:'tomato',         cal:18,  pro:0.9,  fat:0.2, carb:3.9,srv:150, srvName:'עגבנייה',
   keys:['עגבנייה','עגבניה','עגבניות','tomato','tomatoes']},
  {id:'cucumber',       cal:16,  pro:0.7,  fat:0.1, carb:3.6,srv:130, srvName:'מלפפון',
   keys:['מלפפון','מלפפונים','cucumber']},
  {id:'lettuce',        cal:15,  pro:1.4,  fat:0.2, carb:2.9,srv:100, srvName:'קערת חסה',
   keys:['חסה','חסה ירוקה','lettuce','salad leaves','רוקט','rocket','arugula']},
  {id:'pepper',         cal:31,  pro:1,  fat:0.3, carb:6.0,  srv:120, srvName:'פלפל',
   keys:['פלפל','פלפל אדום','פלפל ירוק','פלפל צהוב','bell pepper','pepper']},
  {id:'carrot',         cal:41,  pro:0.9,  fat:0.2, carb:9.6,srv:100, srvName:'גזר',
   keys:['גזר','גזרים','carrot','carrots']},
  {id:'spinach',        cal:23,  pro:2.9,  fat:0.4, carb:3.6,srv:100, srvName:'100g תרד',
   keys:['תרד','spinach']},
  {id:'broccoli',       cal:34,  pro:2.8,  fat:0.4, carb:6.6,srv:150, srvName:'מנת ברוקולי',
   keys:['ברוקולי','broccoli']},
  {id:'cauliflower',    cal:25,  pro:2,  fat:0.3, carb:5.0,  srv:150, srvName:'מנת כרובית',
   keys:['כרובית','cauliflower']},
  {id:'cabbage',        cal:25,  pro:1.3,  fat:0.1, carb:5.8,srv:100, srvName:'100g כרוב',
   keys:['כרוב','cabbage','coleslaw','כרוב כבוש','sauerkraut']},
  {id:'onion',          cal:40,  pro:1.1,  fat:0.1, carb:9.3,srv:80,  srvName:'בצל',
   keys:['בצל','בצלים','onion','onions']},
  {id:'zucchini',       cal:17,  pro:1.2,  fat:0.3, carb:3.1,srv:150, srvName:'קישוא',
   keys:['קישוא','קישואים','zucchini','courgette']},
  {id:'eggplant',       cal:25,  pro:1,  fat:0.2, carb:5.9,  srv:150, srvName:'חצי חציל',
   keys:['חציל','חצילים','eggplant','aubergine']},
  {id:'mushrooms',      cal:22,  pro:3.1,  fat:0.3, carb:3.3,srv:100, srvName:'100g פטריות',
   keys:['פטריות','פטרייה','mushroom','mushrooms']},
  {id:'sweet_potato',   cal:86,  pro:1.6,  fat:0.1, carb:20.1,srv:150, srvName:'בטטה בינונית',
   keys:['בטטה','sweet potato','yam']},
  {id:'potato',         cal:87,  pro:2,  fat:0.1, carb:20.1,  srv:150, srvName:'תפוח אדמה בינוני',
   keys:['תפוח אדמה','תפו"א','תפוח-אדמה','potato','potatoes','מרק','בטטה מבושלת']},
  {id:'avocado',        cal:160, pro:2,  fat:15.0, carb:8.5,  srv:100, srvName:'חצי אבוקדו',
   keys:['אבוקדו','avocado']},
  {id:'corn_canned',    cal:86,  pro:3.3,  fat:1.2, carb:19.0,srv:100, srvName:'100g תירס מקופסא',
   keys:['תירס מקופסא','תירס שימורים','canned corn']},

  /* ──── FRUITS ──── */
  {id:'apple',          cal:52,  pro:0.3,  fat:0.2, carb:13.8,srv:182, srvName:'תפוח בינוני',
   keys:['תפוח','תפוח עץ','apple']},
  {id:'banana',         cal:89,  pro:1.1,  fat:0.3, carb:23.0,srv:118, srvName:'בננה בינונית',
   keys:['בננה','banana']},
  {id:'orange',         cal:47,  pro:0.9,  fat:0.1, carb:11.7,srv:131, srvName:'תפוז',
   keys:['תפוז','תפוזים','orange']},
  {id:'watermelon',     cal:30,  pro:0.6,  fat:0.2, carb:7.6,srv:300, srvName:'פרוסת אבטיח',
   keys:['אבטיח','watermelon']},
  {id:'grapes',         cal:69,  pro:0.7,  fat:0.2, carb:17.2,srv:150, srvName:'אשכול ענבים',
   keys:['ענבים','ענב','grapes','grape']},
  {id:'strawberry',     cal:32,  pro:0.7,  fat:0.3, carb:7.7,srv:150, srvName:'קערת תותים',
   keys:['תות','תותים','strawberry','strawberries']},
  {id:'melon',          cal:34,  pro:0.8,  fat:0.2, carb:8.2,srv:250, srvName:'פרוסת מלון',
   keys:['מלון','melon','cantaloupe']},
  {id:'mango',          cal:60,  pro:0.8,  fat:0.4, carb:15.0,srv:200, srvName:'מנגו בינוני',
   keys:['מנגו','mango']},
  {id:'pear',           cal:57,  pro:0.4,  fat:0.1, carb:15.5,srv:178, srvName:'אגס',
   keys:['אגס','pear']},
  {id:'peach',          cal:39,  pro:0.9,  fat:0.3, carb:9.5,srv:150, srvName:'אפרסק',
   keys:['אפרסק','peach','nectarine','נקטרינה']},
  {id:'kiwi',           cal:61,  pro:1.1,  fat:0.5, carb:14.7,srv:76,  srvName:'קיווי',
   keys:['קיווי','kiwi']},
  {id:'dates',          cal:282, pro:2.5,  fat:0.4, carb:74.0,srv:30,  srvName:'3 תמרים',
   keys:['תמר','תמרים','dates','date']},
  {id:'raisins',        cal:299, pro:3.1,  fat:0.5, carb:79.0,srv:30,  srvName:'חופן צימוקים',
   keys:['צימוקים','raisins']},

  /* ──── FATS & SPREADS ──── */
  {id:'olive_oil',      cal:884, pro:0,  fat:100.0, carb:0.0,  srv:10,  srvName:'כף שמן זית',
   keys:['שמן זית','olive oil','oil','שמן']},
  {id:'tahini',         cal:595, pro:17,  fat:53.0, carb:21.0, srv:30,  srvName:'2 כפות טחינה',
   keys:['טחינה','tahini','sesame paste']},
  {id:'peanut_butter',  cal:588, pro:25,  fat:50.0, carb:20.0, srv:32,  srvName:'2 כפות חמאת בוטנים',
   keys:['חמאת בוטנים','peanut butter','pb']},
  {id:'almond_butter',  cal:614, pro:21,  fat:56.0, carb:19.0, srv:32,  srvName:'2 כפות חמאת שקדים',
   keys:['חמאת שקדים','almond butter']},
  {id:'butter',         cal:717, pro:0.9,  fat:81.0, carb:0.1,srv:10,  srvName:'כפית חמאה',
   keys:['חמאה','butter','margarine','מרגרינה']},
  {id:'mayonnaise',     cal:680, pro:1,  fat:75.0, carb:0.6,  srv:15,  srvName:'כף מיונז',
   keys:['מיונז','mayonnaise','mayo']},
  {id:'techina',        cal:595, pro:17,  fat:53.0, carb:21.0, srv:30,  srvName:'2 כפות טחינה',
   keys:['טחינה גולמית','raw tahini','sesame']},
  {id:'honey_teaspoon', cal:304, pro:0.3,  fat:0.0, carb:0.0,srv:7,   srvName:'כפית דבש',
   keys:['כפית דבש','דבש','honey','teaspoon honey','1 tsp honey']},
  {id:'walnut_half',   cal:654, pro:15.2,  fat:0.0, carb:0.0,srv:2,   srvName:'חצי אגוז מלך',
   keys:['חצי אגוז מלך','אגוז מלך','אגוזי מלך','walnut','walnuts','half walnut','walnut half']},

  /* ──── ISRAELI DISHES ──── */
  {id:'shakshuka',      cal:110, pro:7,  fat:7.0, carb:6.0,  srv:300, srvName:'מנת שקשוקה',
   keys:['שקשוקה','shakshuka']},
  {id:'falafel',        cal:333, pro:13,  fat:17.0, carb:32.0, srv:100, srvName:'4 פלאפל',
   keys:['פלאפל','falafel']},
  {id:'burekas',        cal:360, pro:8,  fat:20.0, carb:38.0,  srv:90,  srvName:'בורקס',
   keys:['בורקס','בורקס גבינה','בורקס תפו"א','burekas','bourekas']},
  {id:'sabich',         cal:310, pro:14,  fat:14.0, carb:24.0, srv:300, srvName:'סביח',
   keys:['סביח','sabich']},
  {id:'shawarma',       cal:200, pro:18,  fat:9.0, carb:5.0, srv:200, srvName:'מנת שווארמה',
   keys:['שווארמה','shawarma']},
  {id:'malabi',         cal:150, pro:4,  fat:4.5, carb:24.0,  srv:150, srvName:'מלבי',
   keys:['מלבי','malabi']},
  {id:'soup',           cal:60,  pro:3,  fat:1.5, carb:6.5,  srv:300, srvName:'קערת מרק',
   keys:['מרק','מרק ירקות','מרק עוף','soup','chicken soup','vegetable soup']},
  {id:'salad_israeli',  cal:80,  pro:2,  fat:4.0, carb:7.0,  srv:200, srvName:'סלט ישראלי',
   keys:['סלט ישראלי','סלט ירקות','israeli salad','vegetable salad','סלט']},
  {id:'rice_and_lentils',cal:150,pro:6,  fat:2.5, carb:28.0, srv:200, srvName:'מנת מג׳דרה',
   keys:['מג׳דרה','מגדרה','mujaddara']},

  /* ──── NUTS & SEEDS ──── */
  {id:'almonds',        cal:579, pro:21,  fat:50.0, carb:21.5, srv:30,  srvName:'חופן שקדים',
   keys:['שקדים','almonds','almond']},
  {id:'walnuts',        cal:654, pro:15,  fat:65.0, carb:14.0, srv:30,  srvName:'חופן אגוזי מלך',
   keys:['אגוזי מלך','אגוזים','walnuts','walnut']},
  {id:'cashews',        cal:553, pro:18,  fat:44.0, carb:30.0, srv:30,  srvName:'חופן קשיו',
   keys:['קשיו','cashews','cashew']},
  {id:'pistachios',     cal:562, pro:20,  fat:45.0, carb:28.0, srv:30,  srvName:'חופן פיסטוק',
   keys:['פיסטוק','pistachios','pistachio']},
  {id:'sunflower_seeds',cal:584, pro:21,  fat:51.0, carb:20.0, srv:30,  srvName:'חופן גרעינים',
   keys:['גרעינים','גרעיני חמנייה','sunflower seeds','seeds']},
  {id:'pumpkin_seeds',  cal:559, pro:30,  fat:49.0, carb:10.5, srv:30,  srvName:'חופן גרעיני דלעת',
   keys:['גרעיני דלעת','pumpkin seeds']},

  /* ──── SNACKS & PROCESSED ──── */
  {id:'chips',          cal:536, pro:7,  fat:35.0, carb:53.0,  srv:30,  srvName:'חבילת צ׳יפס קטנה',
   keys:['צ׳יפס','ציפס','chips','potato chips','crisps']},
  {id:'pretzels',       cal:380, pro:10,  fat:3.4, carb:79.0, srv:30,  srvName:'חופן פרצלים',
   keys:['פרצלים','בייגלה','pretzels','pretzel']},
  {id:'popcorn',        cal:375, pro:11,  fat:22.0, carb:46.0, srv:30,  srvName:'קערת פופקורן',
   keys:['פופקורן','popcorn']},
  {id:'chocolate',      cal:546, pro:5,  fat:31.0, carb:60.0,  srv:30,  srvName:'3 קוביות שוקולד',
   keys:['שוקולד','chocolate','dark chocolate','שוקולד מריר']},
  {id:'ice_cream',      cal:207, pro:3.5,  fat:11.0, carb:23.0,srv:100, srvName:'גביע גלידה',
   keys:['גלידה','ice cream','icecream']},
  {id:'cake',           cal:350, pro:5,  fat:15.0, carb:55.0,  srv:100, srvName:'פרוסת עוגה',
   keys:['עוגה','cake','tort','טורט']},
  {id:'cookie',         cal:480, pro:6,  fat:24.0, carb:63.0,  srv:30,  srvName:'2 עוגיות',
   keys:['עוגייה','עוגיות','cookie','cookies','biscuit']},
  {id:'croissant',      cal:406, pro:8,  fat:22.0, carb:46.0,  srv:60,  srvName:'קרואסון',
   keys:['קרואסון','croissant']},
  {id:'muffin',         cal:375, pro:6,  fat:18.0, carb:46.0,  srv:100, srvName:'מאפין',
   keys:['מאפין','muffin']},
  {id:'pizza',          cal:266, pro:11,  fat:10.0, carb:33.0, srv:150, srvName:'פרוסת פיצה',
   keys:['פיצה','pizza']},

  /* ──── PROTEIN SUPPLEMENTS ──── */
  {id:'protein_shake',  cal:120, pro:25,  fat:2.0, carb:5.0, srv:30,  srvName:'מנת אבקת חלבון',
   keys:['אבקת חלבון','שייק חלבון','protein powder','protein shake','whey','whey protein']},
  {id:'protein_bar',    cal:200, pro:20,  fat:7.0, carb:20.0, srv:60,  srvName:'חטיף חלבון',
   keys:['חטיף חלבון','protein bar','quest bar']},

  /* ──── BEVERAGES (with cals) ──── */
  {id:'orange_juice',   cal:45,  pro:0.7,  fat:0.2, carb:10.4,srv:250, srvName:'כוס מיץ תפוזים',
   keys:['מיץ תפוזים','מיץ','juice','orange juice','מיץ טבעי']},
  {id:'coffee_milk',    cal:35,  pro:1.8,  fat:1.5, carb:4.0,srv:250, srvName:'כוס קפה עם חלב',
   keys:['קפה עם חלב','קפה הפוך','הפוך','לאטה','קפוצ׳ינו','latte','cappuccino','coffee with milk']},
  {id:'smoothie',       cal:100, pro:2,  fat:1.0, carb:22.0,  srv:300, srvName:'שייק פירות',
   keys:['שייק','שייק פירות','smoothie','fruit smoothie']},

  /* ──── SAUCES & CONDIMENTS ──── */
  {id:'ketchup',        cal:112, pro:1.6,  fat:0.1, carb:27.0,srv:15,  srvName:'כף קטשופ',
   keys:['קטשופ','ketchup','catsup']},
  {id:'mustard',        cal:66,  pro:4,  fat:4.0, carb:5.7,  srv:10,  srvName:'כפית חרדל',
   keys:['חרדל','mustard']},
  {id:'hot_sauce',      cal:30,  pro:1,  fat:0.5, carb:4.0,  srv:15,  srvName:'כף חריף',
   keys:['חריף','רוטב חריף','hot sauce','sriracha','סריראצ׳ה']},
  {id:'soy_sauce',      cal:53,  pro:8,  fat:0.1, carb:5.6,  srv:15,  srvName:'כף סויה',
   keys:['סויה','רוטב סויה','soy sauce','tamari']},

  /* ──── PERSONAL PRESETS ──── */
  {id:'salad_tahini', cal:285, pro:9.4, fat:18.7, carb:25.6, srv:100, srvName:'סלט ירקות עם טחינה (10 עגבניות שרי, 2 מלפפון, פלפל, 2כפות טחינה)',
   keys:['סלט ירקות עם טחינה','סלט עם טחינה','salad tahini','סלט ירקות']},
  {id:'yogurt_apple_honey_walnuts', cal:384, pro:22.5, fat:13.6, carb:45.5, srv:100, srvName:'יוגורט דנונה פרו 20 + תפוח + 4 אגוזי מלך + 2כפות דבש',
   keys:['יוגורט תפוח דבש אגוזי מלך','יוגורט עם תפוח דבש ואגוזי מלך','יוגורט תפוח דבש','yogurt apple honey walnuts']},
  {id:'hafuch_gadol_halash', cal:170, pro:9.0, fat:8.5, carb:12.0, srv:100, srvName:'הפוך גדול חלש',
   keys:['הפוך גדול חלש','הפוך גדול','הפוך חלש','latte large weak','hafuch']},

  {id:'two_eggs_hard', cal:170, pro:14.4, fat:11.4, carb:1.0, srv:50, srvName:'2 ביצים קשות',
   keys:['2 ביצים קשות','שתי ביצים קשות','ביצים קשות','two hard boiled eggs','2 ביצים']},

];

/* ═══════════════════════════════════
   UNIT CONVERSION TABLE
   maps Hebrew/English units → grams
═══════════════════════════════════ */
var UNITS = [
  // grams / ml
  {p:/(\d+(?:\.\d+)?)\s*(?:g|gr|gram|grams|גרם|גר)/i,           mul:1},
  {p:/(\d+(?:\.\d+)?)\s*(?:kg|קג|קילו)/i,                        mul:1000},
  {p:/(\d+(?:\.\d+)?)\s*(?:ml|מל|מ"ל)/i,                        mul:1},
  // cups
  {p:/(\d+(?:\.\d+)?)\s*(?:cup|cups|כוס|כוסות)/i,               mul:240},
  {p:/(?:כוס|cup)\s*(?:אחת|one)?/i,                              mul:240, num:1},
  // tablespoons
  {p:/(\d+(?:\.\d+)?)\s*(?:tbsp|tablespoon|כף|כפות)/i,          mul:15},
  {p:/(?:כף|כפה)\s*(?:אחת|one)?/i,                              mul:15, num:1},
  // teaspoons
  {p:/(\d+(?:\.\d+)?)\s*(?:tsp|teaspoon|כפית|כפיות)/i,          mul:5},
  // slices
  {p:/(\d+)\s*(?:slice|slices|pita|פרוסה|פרוסות|פיתה)/i,        mul:null, unit:'slice'},
  // pieces / count — plain number before food name
  {p:/^(\d+)\s+/,                                                  mul:null, unit:'count'},
];

/* ═══════════════════════════════════
   LOOKUP FUNCTION
   Returns {cal, pro, name, srv, found}
═══════════════════════════════════ */
window.lookupFood = function lookupFood(rawText) {
  if(!rawText || !rawText.trim()) return null;
  const text = rawText.trim();
  const lower = text.toLowerCase();

  /* 1. find best matching food */
  let best = null, bestScore = 0;
  for(const food of FOOD_DB){
    for(const key of food.keys){
      if(lower === key.toLowerCase()){
        const score = 100 + key.length; // exact match wins
        if(score > bestScore){ best=food; bestScore=score; }
      } else if(lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower.replace(/\d+\s*/g,'').trim())){
        const score = key.length;
        if(score > bestScore){ best=food; bestScore=score; }
      }
    }
  }
  if(!best) return null;

  /* 2. extract quantity/unit */
  let grams = best.srv; // default = one serving
  let matched_unit = false;

  for(const u of UNITS){
    const m = text.match(u.p);
    if(m){
      const num = u.num !== undefined ? u.num : parseFloat(m[1]);
      if(u.mul !== null){
        grams = num * u.mul;
        matched_unit = true;
        break;
      } else if(u.unit === 'count'){
        grams = num * best.srv;
        matched_unit = true;
        break;
      } else if(u.unit === 'slice'){
        grams = num * best.srv;
        matched_unit = true;
        break;
      }
    }
  }

  /* 3. calculate */
  const cal  = Math.round(best.cal  * grams / 100);
  const pro  = Math.round((best.pro  || 0) * grams / 100 * 10) / 10;
  const fat  = Math.round((best.fat  || 0) * grams / 100 * 10) / 10;
  const carb = Math.round((best.carb || 0) * grams / 100 * 10) / 10;

  return {
    cal,
    pro,
    fat,
    carb,
    name:    best.srvName,
    grams:   Math.round(grams),
    found:   true,
    id:      best.id,
  };
};