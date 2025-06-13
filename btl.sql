-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 20, 2024 lúc 02:38 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `btl`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `btl_cart`
--

CREATE TABLE `btl_cart` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `btl_cart`
--

INSERT INTO `btl_cart` (`cart_id`, `user_id`, `product_id`, `name`, `price`, `image`, `quantity`, `total_price`) VALUES
(175, 18, 103, 'PENFOLDS KOONUNGA HILL', 400000, 'Penfolds-Koonunga-Hill-Shiraz-Cabernet.webp', 1, 400000),
(176, 1, 205, 'GIN CHEERS LONDON DRY', 390000, 'Cheers-London-Dry-Gin.png', 1, 390000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `btl_catalog`
--

CREATE TABLE `btl_catalog` (
  `catalog_id` int(11) NOT NULL,
  `catalog_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `btl_catalog`
--

INSERT INTO `btl_catalog` (`catalog_id`, `catalog_name`) VALUES
(1, 'Vang'),
(2, 'Gin'),
(3, 'Chivas'),
(4, 'Whisky'),
(5, 'Vodka');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `btl_comment`
--

CREATE TABLE `btl_comment` (
  `cmt_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `cmt_content` varchar(500) NOT NULL,
  `cmt_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `btl_comment`
--

INSERT INTO `btl_comment` (`cmt_id`, `user_id`, `product_id`, `user_name`, `cmt_content`, `cmt_time`) VALUES
(11, 1, 101, '', 'tôi cho 5 sao\r\n', '2024-05-19 16:39:22'),
(12, 1, 402, '1', 'hí lô\r\n', '2024-05-20 06:30:38'),
(13, 1, 205, '1', 'sản phẩm 5 sao', '2024-05-20 11:59:04'),
(14, 2, 205, '2', '10 điểm', '2024-05-20 12:02:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `btl_order`
--

CREATE TABLE `btl_order` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fullname` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneNumber` int(11) NOT NULL,
  `address` varchar(200) NOT NULL,
  `note` varchar(200) NOT NULL,
  `total_price` float NOT NULL,
  `receive` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `btl_order`
--

INSERT INTO `btl_order` (`order_id`, `user_id`, `fullname`, `email`, `phoneNumber`, `address`, `note`, `total_price`, `receive`) VALUES
(5, 1, '1', '1@gm.com', 1, '', '', 5865000, 'store'),
(6, 1, '1', '1@gm.com', 1, '', '', 665000, 'store'),
(7, 1, '1', '1@gm.com', 1, '', '', 15000, 'store'),
(8, 1, '1', '1@gm.com', 1, '1', '1', 15000, 'home'),
(9, 1, '1', '1@gm.com', 1, '1', '1', 15000, 'home'),
(10, 1, '1', '1@gm.com', 1, '', '', 15000, 'store'),
(11, 1, '1', '1@gm.com', 1, '', '', 2115000, 'store'),
(12, 1, '1', '1@gm.com', 1, '', '', 2115000, 'store'),
(13, 1, '1', '1@gm.com', 1, '', '123', 6505000, 'store'),
(14, 1, '1', '1@gm.com', 1, '', '', 10165000, 'store'),
(15, 1, '1', '1@gm.com', 1, '', '', 45915000, 'store'),
(16, 1, '1', '1@gm.com', 1, '', '', 5145010000, 'store');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `btl_product`
--

CREATE TABLE `btl_product` (
  `product_id` int(11) NOT NULL,
  `catalog_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `catalog_name` varchar(200) NOT NULL,
  `product_price` double NOT NULL,
  `product_amount` int(11) NOT NULL,
  `product_ capacity` int(11) NOT NULL,
  `product_ABV` varchar(10) NOT NULL,
  `product_place` varchar(200) NOT NULL,
  `product_description` varchar(200) NOT NULL,
  `product_img` varchar(200) NOT NULL,
  `product_new_price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `btl_product`
--

INSERT INTO `btl_product` (`product_id`, `catalog_id`, `product_name`, `catalog_name`, `product_price`, `product_amount`, `product_ capacity`, `product_ABV`, `product_place`, `product_description`, `product_img`, `product_new_price`) VALUES
(101, 1, 'CLOUDY BAY SAUVIGNON BLANC', 'Vang', 1000000, 0, 750, '13.5', 'New Zealand', 'Rượu Vang Cloudy Bay Sauvignon Blanc có hương thơm nồng nàn và rực rỡ, với hương cam quýt mọng nước và chanh dây và đi sau nó là hương đào, ổi nhiệt đới nhẹ nhàng cân bằng ở phía sau.Niên vụ: 2016 đ', 'Cloudy-Bay-Sauvignon-Blanc.webp', 800000),
(102, 1, 'PENFOLDS BIN 2', 'Vang', 650000, 6, 750, '14.5', 'Australia', 'Rượu vang Penfolds Bin 2 Shiraz Mataro (hay Mourvèdre), Penfolds là thương hiệu rượu vang hàng đầu nước Úc và vang danh toàn cầu. Penfolds Bin 2 niên vụ đầu tiên 1960, rượu được phối trộn theo phong c', 'ruou-vang-penfolds-bin-2.webp', 450000),
(103, 1, 'PENFOLDS KOONUNGA HILL', 'Vang', 400000, 6, 750, '14.5', 'Australia', 'Rượu vang Úc Penfolds Koonunga Hill Shiraz Cabernet, được phối trộn từ 2 giống nho Cabernet Sauvignon và nho Shiraz (nước Úc là nơi làm cho giống nho Shiraz được thăng hoa cho ra những chai vang ngon ', 'Penfolds-Koonunga-Hill-Shiraz-Cabernet.webp', 350000),
(106, 1, 'BEND CABERNET SAUVIGNON', 'Vang', 370000, 3, 750, '13', 'America', 'Rượu vang đỏ Bend Cabernet Sauvignon - được làm từ nho Cabernet Sauvignon, California, Mỹ. Bend Cabernet Sauvignon với hương vị của quả mâm xôi đen (Blackberry) và quả cherry chín đen.', 'Bend-Cabernet-Sauvignon.webp', 200000),
(107, 1, 'CARMEN GRAN RESERVA CABERNET SAUVIGNON', 'Vang', 710000, 9, 750, '13.5', 'Chile', 'Rượu vang đỏ Chile Carmen Gran Reserva Cabernet Sauvignon được chọn từ trái nho ngon từ thung lũng Maipo, Chile. Nhắc đến rượu vang Chile, nhất định phải kể về Viña Carmen hay còn gọi là Carmen, nhà s', 'ruou-vang-carmen-gran-reserva-cabernet-sauvignon.webp', 0),
(201, 1, 'GIN WIDGES', 'Vang', 970000, 5, 700, '41.5', 'UK', 'Rượu gin Widges - London Dry Gin.', 'Widges.png', 0),
(202, 1, 'GIN ZAFIRO ORANGE', 'Vang', 400000, 9, 700, '37.5', 'Spain', 'Rượu gin Zafiro Orange - Tây Ban Nha.', 'Zafiro-Orange.png', 0),
(203, 1, 'GIN WHITLEY NEILL LEMONGRASS & GINGER', 'Vang', 850000, 2, 700, '43', 'UK', 'Rượu gin Whitley Neill Lemongrass & Ginger - Handcrafted Gin, Anh Quốc.', 'Whitley-Neill-Lemongrass-Ginger.png', 0),
(204, 1, 'GIN CHEERS PINK STRAWBERRY', 'Vang', 390000, 4, 750, '40', 'Việt Nam', 'Rượu gin Cheers Pink Strawberry - dòng gin với hương vị dâu tây địa phương nghẹ nhàng ngọt. Rượu được chưng cất bằng tỉnh đồng rèn thủ công với hệ thống lò nhiệt điện để chưng cất. Rượu trải qua 5 lần', 'Cheers-Pink-Strawberry.png', 0),
(205, 2, 'GIN CHEERS LONDON DRY', 'Gin', 390000, 2, 750, '40', 'Việt Nam', 'Rượu gin Cheers London Dry Gin - dòng gin theo phong cách London Dry Gin truyền thống hòa quyện với dấu ấn thảo mộc Việt Nam. Rượu được chưng cất bằng tỉnh đồng rèn thủ công với hệ thống lò nhiệt điện', 'Cheers-London-Dry-Gin.png', 0),
(206, 2, 'KI NO TEA KYOTO DRY GIN', '', 2100000, 5, 700, '45.1', 'Japan', 'Rượu gin Ki No Tea Kyoto Dry Gin - Nhật.', 'Ki-No-Tea-Kyoto-Dry-Gin.png', 0),
(301, 1, 'CHIVAS 25 NĂM', 'Vang', 5650000, 4, 700, '40', 'Scotland', 'Chivas 25 năm - huyền thoại của nó bắt đầu năm 1909, lần đầu tiên được phát hành cũng là chai whisky sang trọng nhất thế giới lúc bấy giờ. Và Chivas 25 nhanh chóng làm bão trên thị trường New York.', 'chivas-25.png', 0),
(302, 3, 'ROYAL SALUTE 24 NĂM - HỘP QUÀ TẾT 2024', '', 5100000, 0, 700, '40', 'Scotland', 'Rượu Royal Salute 24 năm/Chivas 24 sứ - set hộp quà phát hành giới hạn cho Tết Giáp Thìn năm 2024. Chủ đề thiết kế của Royal Salute 24 thể hiện sự cổ điển, bí ẩn và tinh tế tựa như kiến thức quý giá t', 'Royal-Salute-24-hop-qua-tet-2024.png', 0),
(303, 1, 'ROYAL SALUTE CORONATION OF KING CHARLES III EDITION', 'Vang', 735000000, 0, 700, '52.3', 'Scotland', 'Rượu Royal Salute Coronation of King Charles III Edition - Kể từ khi thành lập, Royal Salute đã tôn vinh Chế độ quân chủ Anh và đánh dấu những cột mốc quan trọng bằng những chai rượu độc đáo để thể hi', 'Royal-Salute-Coronation-of-King-Charles-III-Edition.png', 731000000),
(304, 3, 'ROYAL SALUTE 52 NĂM', '', 850000000, 3, 700, '44.8', 'Scotland', 'Rượu Royal Salute 52 năm - phiên bản phát hành giới hạn đặc biệt trong Time Series. Các thành phần được phối trộn với nhau và ủ trong 1 thùng 14 năm trước khi đóng chai, tổng 106 chai được phát hành n', 'Royal-Salute-52.png', 0),
(305, 1, 'CHIVAS 12 NĂM', 'Vang', 800000, 6, 700, '40', 'Scotland', 'Rượu Chivas 12 năm - Set hộp quà Tết Giáp Thìn năm 2024, bao gồm Chivas 12/XII Year Old, ly rock uống whisky, túi xách đi kèm và hộp được thiết kế cho tết Nguyên đán năm Giáp Thìn năm 2024. Màu sắc ch', 'Chivas-12.png', 0),
(306, 3, 'CHIVAS 18 NĂM', '', 1300000, 4, 700, '40', 'Scotland', 'Chivas 18 năm - dòng Whisky phối trộn xuất sắc đến từ Scotland. Đây cũng là chai whisky được ưa chuộng nhất VN hiện nay. Sự xuất sắc của nó đến từ hương vị và sự mượt mà của tuổi 18. Theo luật Scotlan', 'chivas-18-year-old-Chivas Regal-18-gold.png', 0),
(401, 4, 'SPRINGBANK 30 NĂM', '', 105000000, 8, 700, '46', 'Scotland', 'Rượu Springbank 30 năm - whisky single malt khan hiếm đến từ vùng Cambeltown, Scotland.', 'Springbank-30.jpg', 0),
(402, 4, 'CRAIGELLACHIE 23 NĂM', '', 10000000, 2, 700, '46', 'Scotland', 'Rượu Craigellachie 23 năm - là chai whisky được đóng chai tuổi cao nhất của nhà chưng cất, ta mắt lần đầu năm 2014.', 'Craigellachie-23.png', 0),
(403, 1, 'BALVENIE 17 NĂM - WEEK OF PEAT', 'Vang', 4300000, 25, 700, '49.4', 'Scotland', 'Rượu Balvenie 17 năm Week of Peat - là một phần trong bộ sưu tập Balvenie Stories, rượu có vị ngọt và khói. Nhà chưng cất giành ra 1 tuần trong 1 năm để chưng cất rượu whisky khói từ mạch nha than bùn', 'Balvenie-17-Week-of-Peat.png', 0),
(404, 4, 'PORT ELLEN 1981 - 42 NĂM G&M', '', 320000000, 8, 700, '52.5', 'Scotland', 'Rượu Port Ellen 1981 - 2023/42 năm, được đóng chai bởi nhà đóng chai độc lập Gordon & MacPhail trong series Private Collection. Rượu chưng cất năm 1981, ủ trong thùng Refill Sherry Butt và được đóng c', 'Port-Ellen-1981-42-GM.png', 0),
(405, 4, 'BANFF 1976 - 46 NĂM G&M', '', 136000000, 7, 700, '50.4', 'Highland', 'Rượu Banff 1976 -2023/46 năm, được đóng chai bởi nhà đóng chai độc lập Gordon & MacPhail trong series Private Collection. Rượu chưng cất năm 1976, ủ trong thùng Refill Sherry Butt và được đóng chai nă', 'Banff-1976-46-GM.png', 0),
(501, 5, 'VODKA TRIED AND TRUE', '', 980000, 5, 700, '44', 'Pháp', 'Rượu vodka Tried and True - Pháp.', 'Tried-and-True.png', 0),
(502, 1, 'VODKA KEYS & BRICKS PREMIUM', 'Vang', 1600000, 2, 720, '40', 'Japan', 'Rượu Keys & Bricks Premium Vodka - Vodka thủ công Nhật Bản. Lên men và chưng cất ở Nhật Bản với gạo sake hảo hạng và nước suối nguyên chất từ những ngọn núi thấm dần xuống dưới mặt đất tại Fukui.', 'Keys-Bricks-Premium.png', 0),
(503, 1, 'VODKA CHEERS LIME & MINT', 'Vang', 350000, 7, 750, '40', 'Việt Nam', 'Vodka mùi Cheers Lime & Mint - là loại vodka mùi thơm ngon phù hợp cho pha chế cocktail như cocktail Mojito. Rượu được chưng cất bằng tỉnh đồng rèn thủ công với hệ thống lò nhiệt điện để chưng cất. Rư', 'Cheers-Lime-Mint.png', 0),
(504, 1, 'VODKA BELUGA 1.75L', 'Vang', 1350000, 5, 1750, '40', 'Russia', 'Rượu Vodka Nga Beluga Noble 1.75 lít là dòng rượu vodka cao cấp của Nga mẻ đầu tiên vào năm 2002, là dòng rượu vodka ngon và tinh khiết do được làm từ mạch nha và nguồn nước tinh khiết từ Siberia nó l', 'Beluga-1-75L.png', 0),
(505, 5, 'VODKA ABSOLUT PEPPAR', '', 370000, 2, 700, '40', 'Sweden', 'Rượu vodka mùi Absolut Peppar - Thụy Điển.', 'Absolut-Peppar.png', 0),
(506, 1, 'VODKA ABSOLUT LIME 1L', 'Vang', 430000, 4, 1000, '40', 'Sweden', 'Rượu Vodka mùi Absolut Lime 1 lít - Thụy Điển.', 'Absolut-Lime-1L.png', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_table`
--

CREATE TABLE `user_table` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_userName` varchar(100) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_phone` varchar(20) NOT NULL,
  `user_pass` varchar(255) NOT NULL,
  `user_gender` varchar(20) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_table`
--

INSERT INTO `user_table` (`user_id`, `user_name`, `user_userName`, `user_email`, `user_phone`, `user_pass`, `user_gender`, `role`) VALUES
(1, '1', '1', '1', '1', '1', '1', 0),
(2, '2', '2', '2', '2', '2', '2', 0),
(3, '2', '3', '2', '3', '3', 'Nam', 1),
(5, 'Nguyễn Văn A', 'Admin', 'dangop0203@gmail.com', '3', '123', 'Nam', 0),
(10, '9', '9', '9', '9', '9', 'Nam', 0),
(17, 'TRẦN QUANG HUY', '1@gmail.com', '1@gmail.com', '123', '1', 'Nam', 1),
(18, 'TRẦN QUANG HUY', '123@gmail.com', '2@gmail.com', '123', '1', 'Nữ', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `btl_cart`
--
ALTER TABLE `btl_cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `Cart_user_id` (`user_id`),
  ADD KEY `Cart_product_id` (`product_id`);

--
-- Chỉ mục cho bảng `btl_catalog`
--
ALTER TABLE `btl_catalog`
  ADD PRIMARY KEY (`catalog_id`);

--
-- Chỉ mục cho bảng `btl_comment`
--
ALTER TABLE `btl_comment`
  ADD PRIMARY KEY (`cmt_id`),
  ADD KEY `Comment_user_id` (`user_id`),
  ADD KEY `Comment_product_id` (`product_id`);

--
-- Chỉ mục cho bảng `btl_order`
--
ALTER TABLE `btl_order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `User_id` (`user_id`);

--
-- Chỉ mục cho bảng `btl_product`
--
ALTER TABLE `btl_product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `Catalog_ID` (`catalog_id`);

--
-- Chỉ mục cho bảng `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `btl_cart`
--
ALTER TABLE `btl_cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT cho bảng `btl_catalog`
--
ALTER TABLE `btl_catalog`
  MODIFY `catalog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `btl_comment`
--
ALTER TABLE `btl_comment`
  MODIFY `cmt_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `btl_order`
--
ALTER TABLE `btl_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `btl_product`
--
ALTER TABLE `btl_product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=507;

--
-- AUTO_INCREMENT cho bảng `user_table`
--
ALTER TABLE `user_table`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `btl_cart`
--
ALTER TABLE `btl_cart`
  ADD CONSTRAINT `Cart_product_id` FOREIGN KEY (`product_id`) REFERENCES `btl_product` (`product_id`),
  ADD CONSTRAINT `Cart_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`user_id`);

--
-- Các ràng buộc cho bảng `btl_comment`
--
ALTER TABLE `btl_comment`
  ADD CONSTRAINT `Comment_product_id` FOREIGN KEY (`product_id`) REFERENCES `btl_product` (`product_id`),
  ADD CONSTRAINT `Comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`user_id`);

--
-- Các ràng buộc cho bảng `btl_order`
--
ALTER TABLE `btl_order`
  ADD CONSTRAINT `User_id` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`user_id`);

--
-- Các ràng buộc cho bảng `btl_product`
--
ALTER TABLE `btl_product`
  ADD CONSTRAINT `Catalog_ID` FOREIGN KEY (`catalog_id`) REFERENCES `btl_catalog` (`catalog_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
