var arrlang={
    "en":{
        "home":"HOME",
        "about":"ABOUT",
        "pages":"PAGES",
        "projects":"PROJECTS",
        "blogg":"BLOG",
        "contact":"CONTACT US",
        "main-header":"We care about your business ",
        "main-para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla ",
        "main-btn":"ABOUT US",
        "stats1-h":"456",
        "stat1-p":"HAPPY CLIENTS",
        "stats2-h":"56",
        "stat2-p":"PROJECTS",
        "stats3-h":"456",
        "stat3-p":"HAPPY CLIENTS",
        "stats4-h":"456",
        "stat4-p":"HAPPY CLIENTS",
        "get-in-totch":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        "location":"84 Street, City, State 24813",
        "About Us":"About Us",
        "blog":"FROM BLOG",
        "RECENT-PROJECTS":"RECENT PROJECTS",
        "Nibh Ridiculus p":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes nascetur",
        "Nibh Ridiculus":"Nibh Ridiculus ",
        "get-in-touch":"GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!",
        "related-links":"Related Links ",
        "NEWS&MEDIA":"NEWS&MEDIA",
        "touch":"Get in touch",
        "big-para":"Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting >Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text...",
        "media-heading":"Media heading",
        "LATEST PROJECTS":"LATEST PROJECTS",
        "BLOG CATEGORIES":"BLOG CATEGORIES",
        "Building":"Building",
        "company":"company",
        "Design":"Design",
        "press":"press",
        "Tips":"Tips",
        "date":"Mon - Sat: 7:00 - 17:00"


        
    },
    "ar":{
        "home":"الرأيسية",
        "about":"ماذا عنا",
        "pages":"الصفحات",
        "projects":"المشاريع",
        "blogg":"البلوج",
        "contact":"اتصل بنا",
        "main-header":"نحن حريصون علي مشروعك",
        "main-para":"نحن نوفر لك كل السبل من اجل ان تتم مشروعك بنجاح وتوفيق ",
        "main-btn":"معومات تهمك",
        "stats1-h":"٤٥٦",
        "stat1-p":"الزبائن السعداء",
        "stats2-h":"٥٦",
        "stat2-p":"المشاريع",
        "stats3-h":"٤٥٦",
        "stat3-p":"الزبائن السعداء",
        "stats4-h":"٤٥٦",
        "stat4-p":"الزبائن السعداء",
        "main-para":"نحن نوفر لك كل السبل من اجل ان تتم مشروعك بنجاح وتوفيق ",
        "get-in-totch":" تواصل معنا",
        "location":"84 شارع  محطه مصر",
        "About Us":"عنا",
        "blog":"مدونه",
        "RECENT-PROJECTS": "المشاريع الحاليه",
        "Nibh Ridiculus p":"نحن نوفر لك كل السبل من اجل ان تتم مشروعك بنجاح وتوفيق ",
        "Nibh Ridiculus":"الزبائن السعداء",
        "get-in-touch":"  نحن نوفر لك كل السبل من اجل ان تتم مشروعك بنجاح وتوفيق  ",
        "related-links":"الروابط المتعلقه ",
        "NEWS&MEDIA":"الاخبار والاعلام ",
        "touch":"تواصل معنا",
        "big-para":"لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبورأنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس أيا كوممودو كونسيكيوات . ديواسأيوتي أريري دولار إن ريبريهينديرأيت فوليوبتاتي فيلايت أيسسي كايلليوم دولار أيو فيجايت",
        "media-heading":"رئيس الاعلام",
        "LATEST PROJECTS":"اخر المشاريع",
        "BLOG CATEGORIES":"تقسيمات المدونه",
        "Building":"المبانى",
        "company":"الشركه",
        "Design":"التصميم",
        "press":"الصحافه",
        "Tips":"نصائح",
        "date":"الاتنين-السبت  7.00-17.00"




    }

};

$(function(){
   
    var x=localStorage.getItem("langu");

    if(x=="ar"){

       
       
        $(".lang").each(function(index,element){
        $(this).text(arrlang[x][$(this).attr('key')]);
        })}
    else if(x=="en"){

     
        $(".lang").each(function(index,element){
        $(this).text(arrlang[x][$(this).attr('key')]);
    })}
    $('.translate').click(function(){
        var lang=$(this).attr("id");
        localStorage.setItem("langu",lang);
        console.log(localStorage.getItem("langu"));
        $(".lang").each(function(index,element){
            $(this).text(arrlang[lang][$(this).attr('key')]);
        })
      
  
})});

