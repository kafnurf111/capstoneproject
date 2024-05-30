
//--------- Popup Tugas ---------//
let popupTasks = document.getElementById("popup-tasks");
let navbar = document.getElementsByClassName("nav-navbar")[0];
let sidebar = document.getElementsByClassName("sidebars")[0];
let popupTask = document.getElementsByClassName("popup-tasks")[0];
let overlayTask = document.getElementsByClassName("overlay")[0];
let iconDelete = document.getElementById("delete-icon");
let iconEdit = document.getElementById("edit-icon");
let iconClose = document.getElementById("close-icon");
let iconBackToPopupEvent = document.getElementById("back-arrow-circle");
let iconCloseEvent = document.getElementById("close-icon-event");

let isEditMode = false;
let currentTaskId = null;

function openPopupTasks() {
    popupTasks.classList.add("open-popup-tasks");
    navbar.style.zIndex = "-1";
    popupTask.style.zIndex = "1020";
    overlayTask.style.zIndex = "1020";
}

function closePopupTasks() {
    popupTasks.classList.remove("open-popup-tasks");
    navbar.style.zIndex = "1020";
    popupTask.style.zIndex = "";
    overlayTask.style.zIndex = "";
}

function openPopupTasksEvent(event = null) {
    // Reset form
    document.querySelector('.taskForm').reset();
    isEditMode = false;
    toggleEditMode(false);

    if (event) {
        // Menampilkan display pada span atau text
        document.getElementById('taskNameDisplay').style.display = 'inline-block';
        document.getElementById('taskStartDisplay').style.display = 'inline-block';
        document.getElementById('taskFinishDisplay').style.display = 'inline-block';
        document.getElementById('taskDetailDisplay').style.display = 'inline-block';
        document.getElementById('taskPersonDisplay').style.display = 'inline-block';

        // Menampilkan data dalam bentuk text
        document.getElementById('taskId').innerText = event.id || '';
        document.getElementById('taskNameDisplay').innerText = event.title || '';
        document.getElementById('taskStartDisplay').innerText = event.start ? event.start.toISOString().slice(0, 10) + "  " + event.start.toISOString().slice(11, 16) : '';
        document.getElementById('taskFinishDisplay').innerText = event.end ? event.end.toISOString().slice(0, 10) + " " + event.end.toISOString().slice(11, 16) : '';
        document.getElementById('taskDetailDisplay').innerText = event.extendedProps.detail || '';
        document.getElementById('taskPersonDisplay').innerText = event.extendedProps.person || '';

        document.getElementById('taskId').value = event.id || '';
        document.getElementById('taskName').value = event.title || '';
        document.getElementById('taskStart').value = event.start ? event.start.toISOString().slice(0, 16) : '';
        document.getElementById('taskFinish').value = event.end ? event.end.toISOString().slice(0, 16) : '';
        document.getElementById('taskDetail').value = event.extendedProps.detail || '';
        document.getElementById('taskPerson').value = event.extendedProps.person || '';

        // Menghilangkan Display pada input dan textarea
        document.getElementById('taskName').style.display = 'none';
        document.getElementById('taskStart').style.display = 'none';
        document.getElementById('taskFinish').style.display = 'none';
        document.getElementById('taskDetail').style.display = 'none';
        document.getElementById('taskPerson').style.display = 'none';


        document.getElementById('submitBtn').style.display = isEditMode ? 'inline-block' : 'none';
        document.getElementById('finishBtn').style.display = isEditMode ? 'none' : 'inline-block';


        // Menampilkan ikon hapus
        iconDelete.style.display = 'inline-block';
        iconEdit.style.display = 'inline-block';
        iconCloseEvent.style.display = 'inline-block';
        iconClose.style.display = 'none';
        iconBackToPopupEvent.style.display = 'none';

    } else {
        // Sembunyikan ikon hapus saat menambah tugas baru
        iconDelete.style.display = 'none';
        iconEdit.style.display = 'none';
        iconCloseEvent.style.display = 'none';
        iconClose.style.display = 'inline-block';
        iconBackToPopupEvent.style.display = 'inline-block';
    }
    popupTasks.classList.add("open-popup-tasks");
    navbar.style.zIndex = "-1";
    popupTask.style.zIndex = "1020";
    overlayTask.style.zIndex = "1020";
}

function closePopupTasksEvent() {
    // Menghilangkan display pada span atau text
    document.getElementById('taskNameDisplay').style.display = 'none';
    document.getElementById('taskStartDisplay').style.display = 'none';
    document.getElementById('taskFinishDisplay').style.display = 'none';
    document.getElementById('taskDetailDisplay').style.display = 'none';
    document.getElementById('taskPersonDisplay').style.display = 'none';

    // Menampilkan Display pada input dan textarea
    document.querySelector('input[name="name"]').style.display = 'inline-block';
    document.querySelector('input[name="start"]').style.display = 'inline-block';
    document.querySelector('input[name="finish"]').style.display = 'inline-block';
    document.querySelector('input[name="detail"]').style.display = 'inline-block';
    document.querySelector('textarea[name="person"]').style.display = 'inline-block';


    document.getElementById('submitBtn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('finishBtn').style.display = isEditMode ? 'inline-block' : 'none';

    document.getElementById('taskId').value = '';
    document.getElementById('taskName').value = '';
    document.getElementById('taskStart').value = '';
    document.getElementById('taskFinish').value = '';
    document.getElementById('taskDetail').value = '';
    document.getElementById('taskPerson').value = '';


    // Menghilangkan display ikon
    iconDelete.style.display = 'none';
    iconEdit.style.display = 'none';
    iconBackToPopupEvent.style.display = 'none';
    iconCloseEvent.style.display = 'none';
    iconClose.style.display = 'inline-block';

    popupTasks.classList.remove("open-popup-tasks");
    navbar.style.zIndex = "1020";
    popupTask.style.zIndex = "";
    overlayTask.style.zIndex = "";
}

function backToPopupTaskEvent() {
    // Menampilkan elemen-elemen dalam mode non-edit
    document.getElementById('taskNameDisplay').style.display = 'inline-block';
    document.getElementById('taskStartDisplay').style.display = 'inline-block';
    document.getElementById('taskFinishDisplay').style.display = 'inline-block';
    document.getElementById('taskDetailDisplay').style.display = 'inline-block';
    document.getElementById('taskPersonDisplay').style.display = 'inline-block';

    // Menyembunyikan elemen input
    document.getElementById('taskName').style.display = 'none';
    document.getElementById('taskStart').style.display = 'none';
    document.getElementById('taskFinish').style.display = 'none';
    document.getElementById('taskDetail').style.display = 'none';
    document.getElementById('taskPerson').style.display = 'none';

    // Menampilkan atau menyembunyikan tombol sesuai mode non-edit
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'none';
    document.getElementById('finishBtn').style.display = 'inline-block';
    iconDelete.style.display = 'inline-block';
    Array.from(iconEdit).forEach(element => element.style.display = 'inline-block');
    iconCloseEvent.style.display = 'inline-block';
    iconClose.style.display = 'none';
    iconBackToPopupEvent.style.display = 'none';
}

function toggleEditMode(enable = !isEditMode, taskId = null) {
    isEditMode = enable;

    const displayStyle = isEditMode ? 'none' : 'inline-block';
    const inputStyle = isEditMode ? 'inline-block' : 'none';

    // Tampilkan atau sembunyikan elemen yang sesuai berdasarkan mode edit
    document.getElementById('taskNameDisplay').style.display = displayStyle;
    document.getElementById('taskStartDisplay').style.display = displayStyle;
    document.getElementById('taskFinishDisplay').style.display = displayStyle;
    document.getElementById('taskDetailDisplay').style.display = displayStyle;
    document.getElementById('taskPersonDisplay').style.display = displayStyle;

    document.getElementById('taskName').style.display = inputStyle;
    document.getElementById('taskStart').style.display = inputStyle;
    document.getElementById('taskFinish').style.display = inputStyle;
    document.getElementById('taskDetail').style.display = inputStyle;
    document.getElementById('taskPerson').style.display = inputStyle;

    // Tampilkan atau sembunyikan tombol sesuai mode edit
    document.getElementById('submitBtn').style.display = isEditMode ? 'none' : 'inline-block';
    document.getElementById('saveBtn').style.display = isEditMode ? 'inline-block' : 'none';
    document.getElementById('finishBtn').style.display = isEditMode ? 'none' : 'inline-block';
    iconDelete.style.display = isEditMode ? 'none' : 'inline-block';
    iconBackToPopupEvent.style.display = isEditMode ? 'inline-block' : 'none';

    if (enable && taskId) {
        // Lakukan fetch untuk mendapatkan data tugas berdasarkan ID
        fetch(`http://127.0.0.1:8000/get-task/${taskId}`)
            .then(response => response.json())
            .then(data => {
                // Memasukkan data tugas ke dalam input dan textarea
                document.getElementById('taskName').value = data.title || '';
                document.getElementById('taskStart').value = data.start || '';
                document.getElementById('taskFinish').value = data.end || '';
                document.getElementById('taskDetail').value = data.detail || '';
                document.getElementById('taskPerson').value = data.person || '';
            })
            .catch(error => {
                console.error('Gagal mendapatkan data tugas:', error);
            });
    }
}

function deleteTask(taskId) {
    fetch(`http://127.0.0.1:8000/api/tasks/delete-task/${taskId}`, {
        method: 'DELETE',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Task created successfully') {
                closePopupTasks();
            }
        });
}


document.getElementById('delete-icon').addEventListener('click', function () {
    const taskId = document.getElementById('taskId').value; // Pastikan Anda mendapatkan taskId dari suatu elemen di halaman
    if (confirm('Are you sure you want to delete this task?')) {
        deleteTask(taskId);
        location.reload();
    } else {
        throw new Error('Failed to delete task.');
    }
});




// JavaScript

document.getElementById('toggleMember').addEventListener('click', function () {
    var memberList = document.getElementById('MemberList');
    var memberNames = memberList.getElementsByClassName('member-name');

    var namaAnggota = ["Akbar Firmansyah", "Fredrinnn", "Alice Sulastri", "Charlot Geogry", "David Beckham"];

    // Apakah nama anggota sudah ditambahkan sebelumnya
    var namesAdded = memberNames.length > 0;

    // Tambahkan properti CSS flexDirection dan justifyContent saat tombol "Lihat Semua" diklik
    if (!namesAdded) {
        memberList.style.flexDirection = 'column';
        memberList.style.justifyContent = 'flex-start';

        // Tambahkan nama anggota jika belum ditambahkan sebelumnya
        var memberProfiles = memberList.getElementsByClassName('member-profile');
        for (var i = 0; i < memberProfiles.length; i++) {
            var memberProfile = memberProfiles[i];
            var memberName = document.createElement('span');
            memberName.className = 'member-name';

            // Menentukan nama anggota berdasarkan indeks i
            if (i < namaAnggota.length) {
                memberName.textContent = namaAnggota[i];
            } else {
                memberName.textContent = 'Nama Anggota ' + (i + 1);
            }

            // Menambahkan nama anggota ke dalam div member-profile
            memberProfile.appendChild(memberName);

            // Menambahkan gaya CSS untuk menyesuaikan nama anggota dalam bentuk kolom
            memberList.style.display = 'flex';


            memberProfile.style.display = 'flex';
            memberProfile.style.paddingBottom = '1rem';
            memberProfile.style.alignItems = 'center';

            // Menambahkan gaya CSS untuk menempatkan nama anggota di sebelah kanan profil
            memberName.style.marginLeft = '1rem';
        }
    }

    // Hapus nama anggota jika sudah ditambahkan sebelumnya
    if (namesAdded) {
        while (memberNames.length > 0) {
            memberNames[0].remove();
        }

        // Hapus properti CSS flexDirection dan justifyContent saat tombol "Sembunyikan" diklik
        memberList.style.removeProperty('flex-direction');
        memberList.style.removeProperty('justify-content');
    }


    // Mengubah teks tombol menjadi "Sembunyikan" atau "Lihat Semua"
    this.textContent = (namesAdded) ? 'Lihat Semua' : 'Lihat Sedikit';
});



document.addEventListener("DOMContentLoaded", function () {
    // Periksa apakah ada elemen yang memiliki kelas 'active'
    var activeElement = document.querySelector('.a-btn-hackathon.active');

    // Periksa apakah ada elemen yang memiliki kelas 'collapse' yang terhubung dengan elemen yang aktif
    var activeCollapse = activeElement.getAttribute('data-bs-target');

    // Periksa apakah elemen yang sesuai dengan 'activeCollapse' ada
    if (activeCollapse) {
        var collapseElement = document.querySelector(activeCollapse);

        // Periksa apakah elemen yang sesuai dengan 'activeCollapse' adalah elemen yang valid
        if (collapseElement) {
            collapseElement.classList.add('show');
        }
    }
});


// Discussion JS
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageList = document.getElementById('message-list');

    // Handle form submission
    messageForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        const messageText = messageInput.value.trim();

        if (messageText === '') {
            return; // Do not send empty messages
        }

        // Create message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <div class="message-content">
                <p>${messageText}</p>
            </div>
            <div class="message-reply">
                <button class="btn-reply">Reply</button>
            </div>
        `;

        // Append message to message list
        messageList.appendChild(messageElement);

        // Clear input
        messageInput.value = '';

        // Scroll to the latest message
        messageList.scrollTop = messageList.scrollHeight;

        // Handle reply button click
        const replyButton = messageElement.querySelector('.btn-reply');
        replyButton.addEventListener('click', function () {
            const replyInput = document.createElement('textarea');
            replyInput.classList.add('form-control', 'reply-input');
            replyInput.rows = 2;
            replyInput.placeholder = 'Write your reply...';

            const replySendButton = document.createElement('button');
            replySendButton.classList.add('ui', 'primary', 'button', 'btn-send-reply');
            replySendButton.textContent = 'Send';

            const replyForm = document.createElement('div');
            replyForm.classList.add('reply-form');
            replyForm.appendChild(replyInput);
            replyForm.appendChild(replySendButton);

            messageElement.appendChild(replyForm);

            replySendButton.addEventListener('click', function () {
                const replyText = replyInput.value.trim();

                if (replyText === '') {
                    return; // Do not send empty replies
                }

                // Create reply element
                const replyElement = document.createElement('div');
                replyElement.classList.add('reply');
                replyElement.innerHTML = `
                <div class="reply-content">
                <p>${replyText}</p>
                </div>
                `;

                // Append reply to message element
                messageElement.insertBefore(replyElement, replyForm);

                // Remove reply form after sending
                messageElement.removeChild(replyForm);
            });
        });
    });
});


document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch('{{ route(tasks.store) }}', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Task created successfully') {
                closePopupTasks();
                fetchTasks();
            }
        });
});


document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch('{{ route(tasks.store2) }}', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Task created successfully') {
                closePopupTasks();
                fetchTasks();
            }
        });
});


document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch('{{ route(tasks.store3) }}', {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        },
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Task created successfully') {
                closePopupTasks();
                fetchTasks();
            }
        });
});


// function saveTaskChanges(event) {
//     event.preventDefault();

//     const taskId = document.getElementById('taskId').value;
//     const taskName = document.getElementById('taskName').value;
//     const taskStart = document.getElementById('taskStart').value;
//     const taskFinish = document.getElementById('taskFinish').value;
//     const taskDetail = document.getElementById('taskDetail').value;
//     const taskPerson = document.getElementById('taskPerson').value;

//     const formData = {
//         name: taskName,
//         start: taskStart,
//         finish: taskFinish,
//         detail: taskDetail,
//         person: taskPerson
//     };

//     const method = taskId ? 'PUT' : 'POST';
//     const url = taskId ? `{{ route('tasks.update', ['id' => '']) }}${taskId}` : `{{ route('tasks.store') }}`;

//     fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//             'X-CSRF-TOKEN': '{{ csrf_token() }}'
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (data.message === 'Task updated successfully' || data.message === 'Task created successfully') {
//                 location.reload();
//             } else {
//                 console.error('Failed to update task:', data);
//             }
//         })
//         .catch(error => {
//             console.error('An error occurred:', error);
//         });
// }


// Function to fetch task data from server
function fetchTaskData(taskId) {
    fetch(`http://127.0.0.1:8000/api/tasks/${taskId}`)
        .then(response => response.json())
        .then(task => {
            document.getElementById('taskNameDisplay').innerText = task.title;
            document.getElementById('taskStartText').innerText = task.start;
            document.getElementById('taskEndText').innerText = task.end;
            document.getElementById('taskDetailText').innerText = task.detail;
            document.getElementById('taskPersonText').innerText = task.person;
        })
        .catch(error => console.error('Error fetching task data:', error));
}

// Function to save task changes
function saveTaskChanges(taskId) {
    const formData = {
        title: document.getElementById('taskName').value,
        start: document.getElementById('taskStart').value,
        end: document.getElementById('taskFinish').value,
        detail: document.getElementById('taskDetail').value,
        person: document.getElementById('taskPerson').value
    };

    fetch(`http://127.0.0.1:8000/api/tasks/update-task/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': '{{ csrf_token() }}'
        }
    })
        .then(response => {
            if (response.ok) {
                // Refresh task details
                fetchTaskData(taskId);
                closeEditModal();
                console.log('Task updated successfully!');
            } else {
                console.error('Failed to update task.');
            }
        })
        .catch(error => {
            console.error('Error updating task:', error);
        });
}

// function saveTaskChanges(taskId) {

//     const formData = {
//         title: document.getElementById('taskName').value,
//         start: document.getElementById('taskStart').value,
//         end: document.getElementById('taskFinish').value,
//         detail: document.getElementById('taskDetail').value,
//         person: document.getElementById('taskPerson').value
//     };

//     fetch(`http://127.0.0.1:8000/api/tasks/update-task/${taskId}`, {
//         method: 'PUT',
//         headers: {
//             'X-CSRF-TOKEN': '{{ csrf_token() }}'
//         },
//         body: JSON.stringify(formData)
//     })
//         .then(response => {
//             if (response.ok) {
//                 // Tugas berhasil diperbarui
//                 console.log('Perubahan pada tugas berhasil disimpan!');
//                 location.reload();
//             } else {
//                 // Ada kesalahan saat memperbarui tugas
//                 console.error('Gagal memperbarui tugas.');
//             }
//         })
//         .catch(error => {
//             console.error('Terjadi kesalahan:', error);
//         });
// }

document.getElementById('saveBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const taskId = document.getElementById('taskId').value;
    if (taskId) {
        saveTaskChanges();
    }
});