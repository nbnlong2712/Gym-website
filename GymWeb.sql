create database if not exists GymWeb;
use GymWeb;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- --- USER TABLE --- --
DROP TABLE IF EXISTS Users;
CREATE TABLE Users (  -- users có "s"
  User_ID int(11) unsigned not null AUTO_INCREMENT,
  User_name varchar(50) COLLATE utf8_unicode_ci not null,
  User_password longtext collate utf8_unicode_ci not null,
  User_email varchar(30)  collate utf8_unicode_ci not null,
  PRIMARY KEY (User_ID)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
BEGIN; 
INSERT INTO Users VALUES (1, 'NguyenA123','123456', 'longlongvip5@gmail.com');
INSERT INTO Users VALUES (2, 'LeB123','123456', 'longlongvip10@gmail.com');
INSERT INTO Users VALUES (3, 'LeD123','123456', 'longlongvipfo3@gmail.com');
INSERT INTO Users VALUES (4, 'NguyenF123','123456','nhatlonghn1203@gmail.com');
INSERT INTO Users VALUES (5, 'NguyenBaNhatLong','123456','18127135@student.hcmus.edu.vn');
COMMIT;

-- --- COURSE & SUUPLEMENT TABLE --- --
-- COURSE
Drop table if exists Course;
CREATE TABLE Course (
  Cou_ID int(5) unsigned NOT NULL AUTO_INCREMENT,
  Cou_name varchar(50) collate utf8_unicode_ci not null,
  Cou_des text collate utf8_unicode_ci not null,
  Cou_price int(11) NOT NULL,
  PRIMARY KEY (Cou_ID)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
BEGIN; 
INSERT INTO Course VALUES (1, 'Khoa hoc PT 1','Được dẫn dắt bởi những con người đầu ngành, có chuyên môn cao, đạt được nhiều chứng chỉ có uy tín ở các quốc gia hàng đầu về fitness & lifestyle, cam kết đầu ra.',2000000);
INSERT INTO Course VALUES (2, 'Khoa hoc PT 2','Vẫn được dẫn dắt bởi những con người đầu ngành, có chuyên môn cao, đạt được nhiều chứng chỉ có uy tín ở các quốc gia hàng đầu về fitness & lifestyle, cam kết đầu ra.','10000000');
INSERT INTO Course VALUES (3, 'Huan luyen ca nhan 1-1','Cam kết sau 1 tháng bạn có body 6 múi bao người mơ ước','50000000');
COMMIT;
-- SUPPLEMENT
Drop table if exists Supplement;
CREATE TABLE Supplement (
  Sup_ID int(5) unsigned NOT NULL AUTO_INCREMENT,
  Sup_name varchar(50) collate utf8_unicode_ci not null,
  Sup_price int(11) NOT NULL,
  PRIMARY KEY (Sup_ID)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
BEGIN; 
INSERT INTO Supplement VALUES (1, 'Lean body',2000000);
INSERT INTO Supplement VALUES (2, 'Whey protein','1500000');
INSERT INTO Supplement VALUES (3, 'BCAA','2500000');
INSERT INTO Supplement VALUES (4, 'Mass gainer','1000000');
INSERT INTO Supplement VALUES (5, 'Test booster','500000000');
INSERT INTO Supplement VALUES (6, 'Pre-workout','2000000');
COMMIT;

-- --- USER ARTICLES --- --
DROP TABLE IF EXISTS Article;
CREATE TABLE Article (
  Author_ID int(11) unsigned not null, -- người đăng bài
  Ar_ID int(10) unsigned not null, -- ID bài đăng
  Ar_caption varchar(200) COLLATE utf8_unicode_ci not null, -- caption bài đăng
  Ar_content text collate utf8_unicode_ci not null, -- nội dung bài đăng
  PRIMARY KEY (Ar_ID)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE Article ADD FOREIGN KEY(Author_ID) REFERENCES Users(User_ID);
BEGIN; 
INSERT INTO Article VALUES (1, 1, 'Nên tập tạ nặng hay nhẹ thì tăng cơ tốt hơn?','Trong một nghiên cứu mới của Đại học McMaster, các nhà nghiên cứu cho những người tập gym kỳ
 cựu tập một chế độ cố định trong 12 tuần. Họ đều tập các bài tập như nhau gồm đẩy ngực nằm, 
 cuốn tay trước, đẩy chân và giãn đầu gối cùng một số bài tập khác.

Một nửa số tình nguyện được cho dùng tạ rất nặng (từ 75% cho tới 90% độ nặng tối đa họ có thể
 nâng được trong 1 nhịp) và một hiệp sẽ kéo dài cho đến khi họ hết nâng nổi thì ngừng. Đa số 
 họ có thể thực hiện được từ 8 đến 12 nhịp.

Nửa còn lại chỉ phải nâng 30% cho tới 50% khối lượng tạ tối đa. Khi đó, họ vẫn thực hiện như 
nhóm trên, tức thực hiện cho đến khi mệt thì thôi. Số nhịp có thể thực hiện của nhóm này nằm
 vào khoảng 20 đến 25.
 Kết quả thu được cho thấy trung bình khối lượng cơ tăng lên của cả 2 nhóm sau 12 tuần đều 
 bằng nhau, tức khoảng 1kg cơ. Thông qua việc đo lường, các nhà nghiên cứu cũng chỉ ra rằng
 không có sự khác biệt nào đáng kể về kích thước sợi cơ của hai nhóm tình nguyện viên. Dù 
 vậy, để có được kết quả này, điều kiện tiên quyết là các tình nguyện viên phải tập hết sức có thể.');
INSERT INTO Article VALUES (2, 2, '1 tuần nên tập gym mấy lần?','Không phải ngẫu nhiên có quy định các công ty chỉ được để nhân viên làm việc tối đa 6 ngày một tuần. Tập gym cũng
 như thế. Cơ thể cần ít nhất một ngày trong tuần để được nghỉ ngơi. Việc luyện tập liên tục 
 trong thời gian dài khiến cơ thể mệt mỏi và kiệt sức.

Thêm vào đó, việc nghỉ ngơi giữa các ngày tập giúp cơ thể được thư giãn, tái tạo năng lượng 
và bắt đầu những ngày tập tiếp theo hào hứng và hiệu quả hơn.Theo các nghiên cứu khoa học, 
mô cơ bị phân hủy khi luyện tập. Khi cơ thể ở trạng thái nghỉ ngơi, các mô cơ sẽ được hoàn 
thiện và sửa chữa. Chính vì vậy, việc luyện tập thời gian quá dài với cường độ cao sẽ khiến
 cơ không có thời gian để sửa chữa. Hậu quả là tập gym nhưng không khiến lên cơ và nâng cao
 sức khỏe mà cơ còn bị yếu đi. ');
INSERT INTO Article VALUES (1, 3, 'Calories là gì?','Cơ thể cần năng lượng cho mọi hoạt động sống, năng lượng đó được đo bằng  Calo (Cal), là yếu tố quan trọng cho mọi hoạt động
 sống từ tế bào đến cơ thể (bao gồm các hoạt động cơ bắp, các vận động nội tạng, các chuyển 
 hóa trong cơ thể, các hoạt động trí não, quá trình sinh nhiệt).

– Nhu cầu năng lượng khác nhau ở mỗi người, phụ thuộc vào cân nặng, tuổi, giới tính, tình 
trạng sức khoẻ và bệnh tật, tính chất lao động…

– Nhìn chung, trung bình một người trưởng thành cần khoảng 1.200 – 2.200 Kcal/ngày.

– Chúng ta cần phân biệt năng lượng cung cấp (calo vào) được cung cấp qua thức ăn, nước 
uống và năng lượng tiêu hao cho các hoạt động sống của cơ thể (calo tiêu thụ).

– Khi lượng calories đưa vào từ thực phẩm hàng ngày bằng lượng calories tiêu thụ trong 
ngày, chúng ta sẽ đạt được trạng thái cân bằng calo.

– Khi lượng calories đưa vào từ thức ăn nhiều hơn lượng calories tiêu thụ, chúng ta sẽ bị
 dư thừa calo, hậu quả có thể gây thừa cân, béo phì…do quátrình tích mỡ.

– Ngược lại, nếu lượng calories đưa vào từ thức ăn ít hơn calo tiêu thụ chúng ta sẽ rơi 
vào trạng thái thiếu (đói) calo.

– Những loại thực phẩm giầu calo bao gồm: Mỡ, đường, ngũ cốc, thịt, thức ăn chế biến sẵn,
 thức ăn nhanh (fast foods)… – Những thực phẩm ít calo bao gồm: rau xanh, trái cây ớt 
 ngọt, thức ăn chế biến đơn giản.');
INSERT INTO Article VALUES (3, 4, 'Thời gian nghỉ ngơi để phục hồi cơ bắp là bao lâu?','Khi bạn tác động lực vào cơ bắp nghĩa là bạn đang tạo ra các ion axit lactic và hydro.
 Các chất này không gây hại cho cơ thể ở liều lượng nhỏ nhưng sẽ có một lượng lớn các chất 
 này được hình thành trong một buổi tập. Và một khi các chất này tăng lên thì sẽ ngăn chặn 
 cơ bắp sản sinh đủ lực và gây ra mệt mỏi. Nói một cách dễ hiểu hơn là nó có thể làm bạn 
 cảm thấy rất mệt mà không thực sự tạo nên một hiệu quả tăng cơ nào. Tệ hơn, việc cung cấp 
 protein thích hợp cho cơ bắp tăng trưởng và phát triển có thể bị cản trở do ion axit lactic 
 và hydro tăng lên. Ngoài ra thì bản chất của quá trình xây dựng cơ bắp về cơ bản khi tập luyện
 sẽ gây thương tích nhỏ trong các mô. Sau đó, thời gian nghỉ ngơi sẽ giúp cơ thể có thời gian 
 để sửa chữa cơ bắp và làm cho chúng mạnh mẽ hơn. Nếu như không nghỉ ngơi hoặc không có thời 
 gian nghỉ hợp lý thì sẽ làm tổn thương cơ thể mà cơ bắp cũng không thể phát triển như ý.
 
 Thời gian nghỉ ngơi hợp lý là khoảng 48h cho mỗi nhóm cơ bắp. Điều này có nghĩa là, một nhóm 
 cơ bắp khó có thể đáp ứng 3 lần tập trong 1 tuần. Thực tế, thời gian nghỉ ngơi nên từ 2-4 
 ngày cho mỗi nhóm cơ bắp.');
INSERT INTO Article VALUES (2, 5, 'Tập gym có nên dùng thực phẩm bổ sung để tăng cơ bắp?','Thực phẩm bổ sung dưỡng chất tốt cho người tập gym, tuy nhiên không nên lạm dụng.

Thực phẩm bổ sung cung cấp các khoáng chất, protein, vitamin, dầu cá... cho cơ thể. Đây đều 
là những chất cơ thể dễ hấp thu, phù hợp với những người tập gym, vận động mạnh cần tăng cơ 
bắp. Tuy nhiên, cần kết hợp giữa tập luyện và sử dụng thực phẩm bổ sung để có hiệu quả.

Vận động viên thể hình Tạ Đình Thái, Top 5 lực sĩ đẹp châu Á 2013, khuyến nghị nam giới nên 
dùng thực phẩm bổ sung trong quá trình tập luyện, nhất là đối với những người bận rộn không 
có nhiều thời gian quan tâm đến chế độ dinh dưỡng. Tùy theo thể trạng và mục đích tập luyện 
để tăng cơ, tăng cân hay đốt mỡ để lựa chọn thực phẩm phù hợp.

"Mặt khác, cần kiên trì bổ sung thực phẩm lâu dài để cơ thể có thời gian hấp thụ. Thường dùng
 2-3 tháng trở lên mới đem lại hiệu quả", anh Thái chia sẻ kinh nghiệm.

Anh Nguyễn Xuân Tứ, huấn luyện viên tại một trung tâm thể hình ở Hà Nội cũng nhìn nhận thực 
phẩm bổ sung cung cấp dinh dưỡng giúp cơ thể người tập gym phục hồi và phát triển cơ nhanh. 
Tuy nhiên, anh Tứ khuyên mọi người cần cân nhắc khi lựa chọn sản phẩm. "Thực phẩm bổ sung phải
 có nguồn gốc xuất xứ rõ ràng, uy tín thì đảm bảo an toàn cho người dùng", huấn luyện viên cho biết.');
COMMIT;

-- --- USER ADVERTISE --- --
DROP TABLE IF EXISTS Advertise;
CREATE TABLE Advertise (
  Author_ID int(11) unsigned not null, -- người đăng quảng cáo
  Ad_ID int(10) unsigned not null, -- Id của ảnh quảng cáo
  Ad_url text not null, -- URL của ảnh
  PRIMARY KEY (Ad_ID)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
ALTER TABLE Advertise ADD FOREIGN KEY(Author_ID) REFERENCES Users(User_ID);
BEGIN; 
INSERT INTO Advertise VALUES (5, 1, 'https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fwww.gympik.com%2Farticles%2Fpowerworld-370x370-nov2017-1%2F&psig=AOvVaw26FqU_FRrO72Ln80RaU8mj&ust=1607428267338000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjBmYnnu-0CFQAAAAAdAAAAABAJ');
INSERT INTO Advertise VALUES (2, 2, 'https://www.google.com.vn/url?sa=i&url=https%3A%2F%2Fpressat.co.uk%2Freleases%2Ffizzup-is-here-to-keep-you-fit-at-home-073d7ef9539e9bd2137154072a480a5f%2F&psig=AOvVaw26FqU_FRrO72Ln80RaU8mj&ust=1607428267338000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjBmYnnu-0CFQAAAAAdAAAAABAP');
INSERT INTO Advertise VALUES (1, 3, 'https://www.google.com.vn/url?sa=i&url=http%3A%2F%2Fwww.losarquerosgolf.com%2Fmarbella-fitness-center%2F&psig=AOvVaw26FqU_FRrO72Ln80RaU8mj&ust=1607428267338000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjBmYnnu-0CFQAAAAAdAAAAABAV');
COMMIT;