3 states: working - staging - repository
1. git init - khởi tạo vùng working directory từ thư mục được quản lý bởi git
2. Tao repo Github và liên kết tới repo local: git remote add origin <url>
3. Thêm file vào staging: git add <ten file1> <ten file2> …. (Hoac add toàn bộ: git add .)
4. Commit file: git commit -m “phien ban 1” 
  5. Push code: git push origin main

===> Cấu hình: 2 loại: 
++ mặc định (Global)
++ Theo từng thư mục cụ thể

+++ global: 
config user name, email
git config —global user.name “minh ngoc”
git config —global user.email “ngoc@gmail.com”


+++ thư mục cụ thể: 
git config user.name “minh ngoc”
git config user.email “ngoc@gmail.com”

===> git status: xem trạng thái file
+ file màu xanh: file đang ở vùng staging
+ file màu đỏ: file đang ở vùng working directory


===> tạo file bằng terminal: touch a.txt => tạo file a.txt




—
Git
Quy ước về “vùng local”
Ở trong bài học, ta đã tìm hiểu về 3 vùng: working directory, staging area và
repository. Để có thể làm bài dễ hơn, hãy quy ước một vùng mới: vùng local.
Vùng local là vùng khi một thư mục chưa được khởi tạo git (chưa gõ lệnh git init). Lúc này,
tất cả các file sẽ nằm ở trong vùng local. Sau khi init, file sẽ di chuyển từ vùng local vào vùng
working directory.
Quy ước này chỉ có phạm vi trong lớp học của chúng ta thôi bạn nhé ^^



———> Git  - commit convention
<type>: <short_description> 

+ type: loại commit: 
++ chore: sửa nhỏ lẻ, xoá file ko dùng, 
++ feat: thêm tính năng mới, test case mới 
++ fix: sửa lỗi 


+++ description: mô tả ngắn gọn


===> Git - simple workflow: 

+ Ko dùng global config: 
init => config => add => commit => push

+ Dùng global config: 
init => add => commit => push