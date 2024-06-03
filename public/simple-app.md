بالتأكيد، سأساعدك خطوة بخطوة لبناء تطبيق ويب بسيط بإستخدام HTML، CSS، JavaScript، يتضمن نظام جرد (Inventory System) مع عمليات CRUD (إنشاء، قراءة، تحديث، حذف) بالإضافة إلى إضافة مصادقة بسيطة من خلال نموذج.

### الخطوة 1: إنشاء هيكل المشروع

1. أنشئ مجلد جديد لمشروعك، وليكن اسمه `inventory-app`.
2. داخل هذا المجلد، أنشئ الملفات التالية:
   - `index.html`
   - `styles.css`
   - `script.js`

### الخطوة 2: إعداد ملف HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ar">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>نظام الجرد</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="container">
      <h1>نظام الجرد</h1>

      <!-- نموذج تسجيل الدخول -->
      <div id="login-form">
        <h2>تسجيل الدخول</h2>
        <input type="text" id="username" placeholder="اسم المستخدم" />
        <input type="password" id="password" placeholder="كلمة المرور" />
        <button onclick="login()">تسجيل الدخول</button>
      </div>

      <!-- نظام الجرد -->
      <div id="inventory-system" style="display: none;">
        <h2>إدارة الجرد</h2>
        <button onclick="showAddItemForm()">إضافة عنصر جديد</button>
        <div id="add-item-form" style="display: none;">
          <input type="text" id="item-name" placeholder="اسم العنصر" />
          <input type="number" id="item-quantity" placeholder="الكمية" />
          <button onclick="addItem()">إضافة</button>
        </div>
        <ul id="inventory-list"></ul>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

### الخطوة 3: إعداد ملف CSS

```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  text-align: center;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}

#inventory-list {
  list-style-type: none;
  padding: 0;
}

#inventory-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
```

### الخطوة 4: إعداد ملف JavaScript

```javascript
// script.js

// عمليات المصادقة البسيطة
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // تحقق بسيط من صحة تسجيل الدخول
  if (username === "admin" && password === "admin") {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("inventory-system").style.display = "block";
  } else {
    alert("اسم المستخدم أو كلمة المرور غير صحيحة");
  }
}

// إظهار نموذج إضافة عنصر جديد
function showAddItemForm() {
  document.getElementById("add-item-form").style.display = "block";
}

// إضافة عنصر جديد إلى الجرد
function addItem() {
  const itemName = document.getElementById("item-name").value;
  const itemQuantity = document.getElementById("item-quantity").value;

  if (itemName && itemQuantity) {
    const inventoryList = document.getElementById("inventory-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${itemName} - الكمية: ${itemQuantity}`;
    inventoryList.appendChild(listItem);

    // إعادة تعيين الحقول
    document.getElementById("item-name").value = "";
    document.getElementById("item-quantity").value = "";
    document.getElementById("add-item-form").style.display = "none";
  } else {
    alert("يرجى ملء جميع الحقول");
  }
}
```

### الخطوة 5: إضافة عمليات CRUD باستخدام API

الآن بعد أن حصلنا على واجهة أساسية، سنضيف عمليات CRUD باستخدام API:

#### إضافة عمليات CRUD إلى script.js

```javascript
// script.js

const apiUrl = "https://my-api.com/items";

async function fetchItems() {
  try {
    const response = await fetch(apiUrl);
    const items = await response.json();
    displayItems(items);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}

function displayItems(items) {
  const inventoryList = document.getElementById("inventory-list");
  inventoryList.innerHTML = "";
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - الكمية: ${item.quantity}`;
    inventoryList.appendChild(listItem);
  });
}

async function addItem() {
  const itemName = document.getElementById("item-name").value;
  const itemQuantity = document.getElementById("item-quantity").value;

  if (itemName && itemQuantity) {
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      const item = await response.json();
      fetchItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }

    // إعادة تعيين الحقول
    document.getElementById("item-name").value = "";
    document.getElementById("item-quantity").value = "";
    document.getElementById("add-item-form").style.display = "none";
  } else {
    alert("يرجى ملء جميع الحقول");
  }
}

async function deleteItem(itemId) {
  try {
    await fetch(`${apiUrl}/${itemId}`, {
      method: "DELETE",
    });
    fetchItems();
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchItems);
```

### الخطوة 6: التحقق من عمل التطبيق

الآن قم بفتح `index.html` في متصفحك وتأكد من أن التطبيق يعمل بشكل صحيح. إذا كان لديك أي أسئلة أو تحتاج إلى مزيد من المساعدة، لا تتردد في طرحها.
