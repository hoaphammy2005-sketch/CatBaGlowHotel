
    // Giả lập dữ liệu phòng (sau này thay bằng fetch API hoặc getDocs từ Firestore)
    const roomsData = [
        {
            id: 1,
            name: "Deluxe Mountain View",
            bedType: "Giường đôi",
            capacity: "2 người",
            area: "33 m²",
            imageUrl: "../img/bia2.jpg"
        },
    
    ];

    function renderRooms() {
        const container = document.getElementById("room-list-container");
        let htmlContent = "";

        roomsData.forEach(room => {
            htmlContent += `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <a href="room-detail.html?id=${room.id}" class="room-card">
                        <div class="room-img-wrapper">
                            <img src="${room.imageUrl}" alt="${room.name}">
                            
                            <div class="room-overlay-bottom">
                                <span><i class="fa-regular fa-user"></i> ${room.capacity}</span>
                                <span><i class="fa-solid fa-sun"></i> ${room.area}</span>
                            </div>

                            <div class="room-hover-action">
                                <button class="btn-room-book">ĐẶT PHÒNG</button>
                            </div>
                        </div>
                        
                        <div class="room-info">
                            <h3 class="room-title">${room.name}</h3>
                            <p class="room-bed-type">${room.bedType}</p>
                        </div>
                    </a>
                </div>
            `;
        });

        container.innerHTML = htmlContent;
    }

    // Chạy hàm render khi trang web tải xong
    document.addEventListener("DOMContentLoaded", renderRooms);
