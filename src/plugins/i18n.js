import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        
        // ui
       Shop : "MOTORBIKES RENTAL ",
       Home : "HOME",
       About : "ABOUT US",
       Rental: " CAR RENTAL",
       Contact : "CONTACT",
        // poster
       H2Post1 : "NEW AND SAFE VEHICLES",
       PPost1 :"We provide new motorbikes and passenger cars",

       H2Post2:"SIMPLE PROCEDURES",
       PPost2:"Just ID card and driving license",


       H2Post3:"VEHICLE DELIVERY",
       PPost3:"Car delivery at the hotel, train station, airport, bus station...",


       H2Post4:"MAXIMUM SUPPORT",
       PPost4:"Supports helmets, raincoats, maps and troubleshooting",

    //    product

    H1Product : "Motorcycle Directory",

    H5Card : "Click to see detail",

    H2Name : "Motor Name",
    Price : "Price",
    H4Day : "By Day",
    H4Week : " By Week",
    H4Month : "By Month",

    // procedure

    H1Process :"RENTAL PROCESS",

    H3Process1: "Choose a car and give us a call",
    PProcess1: "See the car and choose your favorite car on the page, contact 0943.696.818 - 0827.659.829",

    H3Process2: "PROCEDURES FOR RECEIVING VEHICLES",
    PProcess2: " Proof of identity and driver's license. Then we will keep your ID card or passport, you can store your driver's license, pay the rental fee and pick up the car for use.",

    H3Process3: "ENJOY THE RIDE",
    PProcess3: " Refer to the route and destinations according to local traffic laws. Drive legally and safely, enjoy and experience Da Nang travel on motorbikes.",

    H3Process4: "RETURN THE RENTAL CAR",
    PProcess4: "  Contact 0943.696.818 - 0827.659.829 for staff to come pick up the car (7:30 - 19:00 daily) or you can bring the car to pay at 1b Vu Dinh Long - Tho Quang - Son Tra - Da Nang (Open: 24/24)",

    // Why choose

    H1Why : "WHY CHOOSE US",
    P1Why :"Lowest price Only from 80k to have a very good car",
    P2Why : "Support for helmets, raincoats, maps and emergency handling",
    P3Why : "Simple, fast and effective procedure",
    P4Why : "Friendly staff, helping guests throughout the car rental process",
    P5Why : "Fixed price table",

    // Contact

    H1Contact : "CONTACT US",
    H3Contact :"Contact us to get the best support from us!",

    // About

    H1About: "ABOUT US",
    P1About:"Car rental very cheap",
    P2About:"Car rental with a new car model, a variety of vehicles",
    P3About:"Car rental customers always receive a lot of special support",
    P4About:"Affordable car rental, commitment to clearly list rent in the  car rental contract",
    P5About:"Customers will always feel satisfied and happy by the enthusiastic and friendly staff",

    

        
    },
    'vi': {
        
        Shop : "Cho Thuê Xe Máy ",
        Home : "Trang Chủ",
        About : "Về Chúng Tôi",
        Rental : " Cho Thuê Xe",
        Contact : "Liên Hệ ",

        // poster

        H2Post1:"PHƯƠNG TIỆN MỚI VÀ AN TOÀN",
        PPost1:"Chúng tôi cung cấp các loại xe máy, xe du lịch đời mới",

        H2Post2:"CÁC THỦ TỤC ĐƠN GIẢN",
        PPost2:"Chỉ cần chứng minh thư và giấy phép lái xe",
 
 
        H2Post3:"GIAO XE TẬN NƠI",
        PPost3:"Giao xe tận nơi tại khách sạn, ga tàu, sân bay, bến xe ...",
 
 
        H2Post4:"HỖ TRỢ TỐI ĐA",
        PPost4:"Hỗ trợ mũ bảo hiểm, áo mưa, bản đồ và xử lý sự cố",
        
        // product

        H1Product :"Danh Mục Xe Máy ",

        H5Card :" Click để xem chi tiết ",

        H2Name : "Tên Xe ",
        Price:" Giá",
        H4Day : "Theo Ngày ",
        H4Week : " Theo Tuần ",
        H4Month : "Theo Tháng ",

        // procedure

    H1Process :"QUY TRÌNH CHO THUÊ",

    H3Process1: "CHỌN XE VÀ GỌI XE ",
    PProcess1: "Xem xe và chọn xe ưu thích trên trang, liên hệ 0943.696.818 - 0827.659.829",

    H3Process2: "THỦ TỤC NHẬN XE ",
    PProcess2: "Trình chứng minh nhân dân và giấy phép lái xe. Sau đó chúng tôi sẽ giữ cmnd hoặc hộ chiếu, quý khách cất lại gplx, thanh toán tiền thuê xe và nhận xe để sử dụng",

    H3Process3: "TẬN HƯỞNG CHUYẾN ĐI",
    PProcess3: "Tham khảo lộ trình và các điểm đến luật lệ giao thông sở tại. Điều khiển xe đúng luật và an toàn, tận hưởng và trải nghiệm du lịch Đà Nẵng trên xe máy.",

    H3Process4: "TRẢ XE ĐÃ THUÊ",
    PProcess4: "Liên hệ 0943.696.818 - 0827.659.829 để nhân viên đến nhận xe (7h30 - 19h00 hằng ngày) hoặc quý khách tự mang xe đến trả tại 1b Vũ Đình Long - Thọ Quang - Sơn Trà - Đà Nẵng (Mở cửa: 24/24 )",

    // Why Choose

    H1Why : "TẠI SAO CHỌN CHÚNG TÔI",
    P1Why :"Giá thấp nhất Chỉ từ 80k là có một chiếc xe cực tốt",
    P2Why : "Hỗ mũ bảo hiểm, áo mưa, bản đồ và xử lý khẩn cấp",
    P3Why : "Thủ tục đơn giản, nhanh chóng, hiệu quả",
    P4Why : "Nhân viên thân thiện, hỗ trợ khách suốt quá trình thuê xe",
    P5Why : "Bảng giá niêm yết cố định",

     // Contact

     H1Contact : "LIÊN HỆ VỚI CHÚNG TÔI",
     H3Contact :"Liên hệ để nhận được sự hỗ trợ tốt nhất từ chúng tôi!",
     
         // About

    H1About: "VỀ CHÚNG TÔI",
    P1About:"Cho thuê xe giá rất rẻ",
    P2About:"Cho thuê xe máy với các dòng xe đời mới, đa dạng các chủng loại xe",
    P3About:"Du khách thuê xe luôn nhận được rất nhiều hỗ trợ đặc biệt",
    P4About:"Giá thuê xe phải chăng, cam kết niêm yết tiền thuê rõ ràng trong hợp đồng thuê xe",
    P5About:"Khách hàng sẽ luôn cảm thấy hài lòng, vui vẻ bởi đội đội ngũ nhân viên nhiệt tình, thân thiện",

        
      
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;