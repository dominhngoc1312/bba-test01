buổi 3: 

VS code: console.log(“Hello world!”);

Terminal VS code: node [tên file].js
cách comment code: cmd /

Biến và Hằng

KHai báo biến: let <tên biến> = <giá trị>;

Hằng = hàm số, dùng 1 lần, ko thay đổi, khai báo các giá trị sẽ ko thay đổi suốt chương trình. 


=> 
- mặc định dùng const (hằng) cho an toàn, code an toàn, dễ đọc
- chỉ dùng let khi chắc chắn cần gán lại giá trị


Kiểu dữ liệu: loại dữ liệu mà biến đang mang: 
+ Kiểu nguyên thuỷ:  number, string, boolean, undefined, null, symbol, BigInt

+ Kiểu 


Kieemr tra Kieu du lieu cua bien:

const str = "OK";
const age = 18;
const isBeautiful = true;

console.log(typeof str);

— 
Toán tử so sánh
So sánh bằng: ===

— 
toán từ logic: 
kết hợp AND, OR, trả về boolean
&& (AND) 
|| (OR)

—
toán tử 1 ngôi

Prefix: ++x, - -x
Postfix: x++, x- -
—
++x tương đương với x = x+1
let x = 10; 
x = x+1;


—
Buổi 3: Javascript basic

Convention: 

Format code: Option + Shift + F

—
Buổi 4: Git - undo things

- Undo commit từ Staging về Working directory: 
git restore --staged file3.txt

- Undo commit từ Reporitory về Working directory:
git reset HEAD~<số_lượng_commit>
ví dụ: git reset HEAD~1

=> Lưu ý: ko thể revert commit đầu tiên, nếu muốn rết thì phải xoá thư mục .git đi rồi init lại

Ví dụ: 

- Undo commit từ Reporitory về Staging: 
git reset --soft HEAD~<so luong commit>
Vi du: git reset --soft HEAD~1


- Đổi tên commit cuối cùng: git commit —amend -m”Commit so 2” => commit cuối cùng trên vùng Repo được đổi tên thành “Commit so 2”

—

GIT branching (nhánh)
- Kiểm tra xem đang có bao nhiêu nhánh: git branch

- Tạo nhánh mới: git branch <ten_nhanh>

- Đang làm việc ở nhánh 1, muốn chuyển sang làm việc ở nhánh 2: có 2 cách: + git checkout <tên_nhánh> + git switch <tên_nhánh>

ví dụ: git checkout nhanh2
git switch nhanh2

- Tạo nhánh mới và chuyển sang nhánh này để làm việc luôn:  git checkout -b <tên_nhánh>

- Xoá nhánh: đầu tiên cần về nhánh main, hoặc sang nhánh 1, sau đó mới xoá được nhánh 2:
git branch -D <tên_nhánh>
ví dụ: git branch -D nhanh2


- Đưa nhánh lên remote: git push origin <tên_nhánh>

- Xoá nhánh trên remote: git push -D origin <tên_nhánh>



——
GIT Ignore

- có 1 file: .gitignore.txt => lưu các file hoặc folder cần bỏ qua

- bỏ qua file hoặc folder
- nếu là file: viết tên file
ví dụ: file10.txt
- nếu là folder: tên folder/
ví dụ: folder1/
