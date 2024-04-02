import "./styles.css";
import React, { useState, useEffect } from "react";

// export default function App() {
//   return (
//     <div className="app">
//       <div className="app-bar">
//         <div className="menu-item">
//           Products
//           <div className="sub-menu">
//             <div className="sub-menu-item">
//               Product 1
//               <div className="sub-sub-menu">
//                 <div>Subcategory 1</div>
//                 <div>Subcategory 2</div>
//               </div>
//             </div>
//             <div className="sub-menu-item">
//               Product 2
//               <div className="sub-sub-menu">
//                 <div>Subcategory 1</div>
//                 <div>Subcategory 2</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="menu-item">
//           Services
//           <div className="sub-menu">
//             <div className="sub-menu-item">
//               Service 1
//               <div className="sub-sub-menu">
//                 <div>Subcategory 1</div>
//                 <div>Subcategory 2</div>
//               </div>
//             </div>
//             <div className="sub-menu-item">
//               Service 2
//               <div className="sub-sub-menu">
//                 <div>d 1</div>
//                 <div>dd 2</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function AppBar() {
  // Sample dynamic data
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu data from API
    // Example fetch call:
    // fetch('your-api-endpoint')
    //   .then(response => response.json())
    //   .then(data => setMenuItems(data))
    //   .catch(error => console.error('Error fetching menu data:', error));

    // Simulated dynamic data
    const data = [
      {
        id: 1,
        name: "Products",
        categories: [
          {
            id: 11,
            name: "Electronics",
            subcategories: ["Mobiles", "Laptops"],
          },
          {
            id: 12,
            name: "Clothing",
            subcategories: ["Men", "Women"],
          },
          // Add more categories with subcategories as needed
        ],
      },
      {
        id: 2,
        name: "Services",
        categories: [
          {
            id: 21,
            name: "Consulting",
            subcategories: ["IT Consulting", "Management Consulting"],
          },
          {
            id: 22,
            name: "Maintenance",
            subcategories: ["Home Maintenance", "Vehicle Maintenance"],
          },
          // Add more categories with subcategories as needed
        ],
      },
      // Add more menu items as needed
    ];
    setMenuItems(data);
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="app">
      <div className="app-bar">
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            className="menu-item"
            onMouseEnter={() => setActiveMenu(menuItem)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menuItem.name}
            {activeMenu === menuItem && (
              <div
                className="sub-menu"
                style={{
                  // width: "100%",
                  // width: 'calc(100vw - 6rem)',
                  overflowX: "hidden",
                  // background: "red",
                  // width: "100vw",
                  height: "80vh",
                  zIndex: 999,
                  display: "flex",
                  justifyContent: "space-between",
                  minWidth: "90vw"
                }}
              >
                {/* {menuItem.categories.map((category) => (
                  <div key={category.id} className="sub-menu-item">
                    {category.name}
                    {category.subcategories && (
                      <div className="sub-sub-menu">
                        {category.subcategories.map((subcategory, index) => (
                          <div key={index}>{subcategory}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))} */}
                <div>
                  hello
                </div>
                <div>
                  hello
                </div>
                <div>
                  hello
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppBar;
