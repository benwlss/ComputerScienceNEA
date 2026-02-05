// all languages

const translations = {
  English: {
    select_language: 'Select Your Language',
    accessibility_options: 'Accessibility Options',
    accessibility_instructions: 'Select Any Accessibility Features:',
    large_text: 'Large Text',
    high_contrast: 'High Contrast',
    audio_assist: 'Audio Assistance',
    repeat_audio: 'Repeat Audio',
    continue: 'Continue',
    back: 'Back',
    welcome: 'Welcome To Hasty Hotel',
    current_language: 'You Selected:',
    start_checkin: 'Start Check-In',
    check_out: 'Check-Out',
    view_rooms: 'View Rooms',
    assistance: 'Assistance',
    reservation_question: 'Do You Have A Reservation?',
    yes: 'Yes',
    no: 'No',
    enter_res_code: 'Enter Your Reservation Code',
    reservation_placeholder: 'Reservation Code',
    days_placeholder: 'How Many Days Do You Want To Spend Here?',
    available_rooms: 'Available Rooms',
    select_dates: 'Select Your Room Type.',
    standard_room: 'Standard Room - £80',
    deluxe_room: 'Deluxe Room - £120',
    suite_room: 'Suite Room - £200',
    see_room_options: 'See Room Options',
    room_options: 'Room Options',
    addons: 'Add-ons',
    breakfast: 'Breakfast - £15',
    spa: 'Spa Access - £30',
    pool: 'Pool Pass - £10',
    view_cart: 'View Cart',
    your_cart: 'Your Cart',
    total: 'Total',
    proceed_payment: 'Proceed To Payment',
    add_room: 'Add Room',
    payment: 'Payment',
    select_payment: 'Select Your Payment Method:',
    card: 'Card',
    mobile_wallet: 'Mobile Wallet',
    qr: 'QR Code',
    crypto: 'Crypto',
    thank_you: 'Thank You',
    receipt: 'Would You Like A Receipt?',
    email_receipt: 'Email Receipt',
    print_receipt: 'Print Receipt',
    recommend: 'Would You Like Tourist Recommendations?',
    send: 'Send',
    finish: 'No Thanks',
    assistance_wait: 'Someone Will Come To Help You Shortly.',
    request_assistance: 'Request Assistance',
    receipt_sent: 'Receipt Sent',
    printed: 'Printed',
    recommend_sent: 'Recommendations Emailed',
    enter_room_number: 'Please Enter Your Room Number:',
    room_number: 'Room Number',
    complete_checkout: 'Complete Check-Out',
    checkout_success: 'Check-out Successful Thank You For staying with us.',
    valid_room: 'Please enter a valid room number.',
    lower_buttons: 'Lower Buttons',
    days_invalid: 'Please enter a valid number of days (1-14).',
    days_too_low: 'Minimum stay is 1 day.',
    days_too_high: 'Maximum stay is 14 days.',
    days_required: 'Please enter the number of days you want to stay.',
    edit_addons: 'Edit Add-ons',
    days_label: 'days',
    select_room: 'Please select a room first.',
    edit_room_btn: 'Edit Room',
    added: 'Added',
    enter_reservation_code: 'Enter Reservation Code',
    reservation_found: 'Reservation Found',
    payment_success: 'Payment Success',
    audio_assist_enabled: 'Audio Assistance Enabled',
    audio_assist_disabled: 'Audio Assistance Disabled',
  },

  Español: {
    select_language: 'Selecciona tu idioma',
    accessibility_options: 'Opciones de accesibilidad',
    accessibility_instructions:
      'Selecciona las funciones de accesibilidad que necesites:',
    large_text: 'Texto grande',
    high_contrast: 'Alto contraste',
    audio_assist: 'Asistencia de audio',
    repeat_audio: 'Repetir Audio',
    continue: 'Continuar',
    back: 'Atrás',
    welcome: 'Bienvenido a Hasty Hotel',
    current_language: 'Tu idioma seleccionado:',
    start_checkin: 'Iniciar registro',
    check_out: 'Salida',
    view_rooms: 'Ver Habitaciones',
    assistance: 'Asistencia',
    reservation_question: '¿Tienes una reserva?',
    yes: 'Sí',
    no: 'No',
    enter_res_code: 'Introduce tu código de reserva',
    reservation_placeholder: 'Código de reserva',
    days_placeholder: '¿Cuantos días quieres pasar aquí?',
    available_rooms: 'Habitaciones disponibles',
    select_dates: 'Selecciona tus fechas y tipo de habitación.',
    standard_room: 'Habitación estándar - €95 - £80',
    deluxe_room: 'Habitación de lujo - €140 - £120',
    suite_room: 'Habitación Suite - €230 - £200',
    see_room_options: 'Ver opciones de habitación',
    room_options: 'Opciones de habitación',
    addons: 'Complementos',
    breakfast: 'Desayuno - €17/£15',
    spa: 'Acceso al spa - €34/£30',
    pool: 'Acceso a la piscina - €11/£10',
    view_cart: 'Ver carrito',
    your_cart: 'Tu carrito',
    total: 'Total',
    proceed_payment: 'Ir al pago',
    add_room: 'Proceder al pago',
    payment: 'Pago',
    select_payment: 'Selecciona tu método de pago:',
    card: 'Tarjeta',
    mobile_wallet: 'Cartera móvil',
    qr: 'Código QR',
    crypto: 'Cripto',
    thank_you: '¡Gracias!',
    want_receipt: '¿Deseas un recibo?',
    email_receipt: 'Enviar recibo por correo',
    print_receipt: 'Imprimir recibo',
    want_recommend: '¿Deseas recomendaciones turísticas?',
    send: 'Enviar',
    finish: 'No, gracias',
    assistance_wait: 'Alguien vendrá a ayudarte en breve.',
    request_assistance: 'Solicitar asistencia',
    receipt_sent: '¡Recibo enviado!',
    printed: '¡Impreso!',
    recommend_sent: '¡Recomendaciones enviadas!',
    enter_room_number: 'Por favor ingrese su número de habitación:',
    room_number_placeholder: 'Número de habitación',
    complete_checkout: 'Completar salida',
    checkout_success: '¡Salida exitosa! Gracias por hospedarse con nosotros.',
    enter_valid_room: 'Por favor ingrese un número de habitación válido.',
    lower_buttons: 'Bajar Botones',
    days_invalid: 'Por favor ingrese un número válido de días (1-14).',
    days_too_low: 'La estancia mínima es de 1 día.',
    days_too_high: 'La estancia máxima es de 14 días.',
    days_required: 'Por favor ingrese el número de días que desea quedarse.',
    edit_addons: 'Editar Complementos',
    days_label: 'días',
    select_room: 'Por favor seleccione una habitación primero.',
    edit_room_btn: 'Editar Complementos',
    enter_reservation_code: 'Ingrese el código de reserva',
    payment_success: 'Pago exitoso',
    audio_assist_enabled: 'Asistencia de audio habilitada',
    audio_assist_disabled: 'Asistencia de audio deshabilitada',
  },

  Français: {
    select_language: 'Sélectionnez votre langue',
    accessibility_options: "Options d'accessibilité",
    accessibility_instructions:
      "Sélectionnez les fonctions d'accessibilité dont vous avez besoin:",
    large_text: 'Grand texte',
    high_contrast: 'Haut contraste',
    audio_assist: 'Assistance audio',
    repeat_audio: "Répéter L'audio",
    continue: 'Continuer',
    back: 'Retour',
    welcome: 'Bienvenue au Hasty Hotel',
    current_language: 'Langue sélectionnée:',
    start_checkin: "Commencer l'enregistrement",
    check_out: 'Départ',
    view_rooms: 'Voir les chambres',
    assistance: 'Assistance',
    reservation_question: 'Avez-vous une réservation?',
    yes: 'Oui',
    no: 'Non',
    enter_res_code: 'Entrez votre code de réservation',
    reservation_placeholder: 'Code de réservation',
    days_placeholder: 'Combien de jours souhaitez-vous passer ici ?',
    available_rooms: 'Chambres disponibles',
    select_dates: 'Sélectionnez vos dates et le type de chambre.',
    standard_room: 'Chambre standard - €95 - £80',
    deluxe_room: 'Chambre de luxe - €140 - £120',
    suite_room: 'Chambre Suite - €230 - £200',
    see_room_options: 'Voir les options de chambre',
    room_options: 'Options de chambre',
    addons: 'Suppléments',
    breakfast: 'Petit déjeuner - €17/£15 ',
    spa: 'Accès au spa - €34/£30',
    pool: 'Accès piscine - €11/£10',
    view_cart: 'Voir le panier',
    your_cart: 'Votre panier',
    total: 'Total',
    proceed_payment: 'Passer au paiement',
    add_room: 'Procéder au paiement',
    payment: 'Paiement',
    select_payment: 'Sélectionnez votre méthode de paiement:',
    card: 'Carte',
    mobile_wallet: 'Portefeuille mobile',
    qr: 'Code QR',
    crypto: 'Crypto',
    thank_you: 'Merci!',
    want_receipt: 'Souhaitez-vous un reçu?',
    email_receipt: 'Envoyer le reçu',
    print_receipt: 'Imprimer le reçu',
    want_recommend: 'Souhaitez-vous des recommandations touristiques?',
    send: 'Envoyer',
    finish: 'Non merci',
    assistance_wait: "Quelqu'un viendra vous aider sous peu.",
    request_assistance: "Demander de l'assistance",
    receipt_sent: 'Reçu envoyé!',
    printed: 'Imprimé!',
    recommend_sent: 'Recommandations envoyées!',
    enter_room_number: 'Veuillez entrer votre numéro de chambre:',
    room_number_placeholder: 'Numéro de chambre',
    complete_checkout: 'Terminer le départ',
    checkout_success: 'Départ réussi! Merci de votre séjour.',
    enter_valid_room: 'Veuillez entrer un numéro de chambre valide.',
    lower_buttons: 'Abaisser les Boutons',
    days_invalid: 'Veuillez entrer un nombre de jours valide (1-14).',
    days_too_low: 'Le séjour minimum est de 1 jour.',
    days_too_high: 'Le séjour maximum est de 14 jours.',
    days_required: 'Veuillez entrer le nombre de jours de votre séjour.',
    edit_addons: 'Modifier Suppléments',
    days_label: 'jours',
    select_room: "Veuillez d'abord sélectionner une chambre.",
    edit_room_btn: 'Modifier la chambre',
    enter_reservation_code: 'Entrez le code de réservation',
    payment_success: 'Paiement réussi',
    audio_assist_enabled: 'Assistance audio activée',
    audio_assist_disabled: 'Assistance audio désactivée\n',
  },

  中文: {
    select_language: '选择你的语言',
    accessibility_options: '辅助选项',
    accessibility_instructions: '请选择您需要的辅助功能：',
    large_text: '大字体',
    high_contrast: '高对比度',
    audio_assist: '语音辅助',
    repeat_audio: '重复音频',
    continue: '继续',
    back: '返回',
    welcome: '欢迎来到 Hasty Hotel',
    current_language: '您选择的语言：',
    start_checkin: '开始办理入住',
    check_out: '退房',
    view_rooms: '查看房间',
    assistance: '帮助',
    reservation_question: '您有预订吗？',
    yes: '是',
    no: '否',
    enter_res_code: '输入您的预订代码',
    reservation_placeholder: '预订代码',
    days_placeholder: '你想在这里待几天？',
    available_rooms: '可用房间',
    select_dates: '选择日期和房型。',
    standard_room: '标准间 - ¥750 - £80',
    deluxe_room: '豪华房 - ¥1130 - £120',
    suite_room: '套房 - ¥1880 - £200',
    see_room_options: '查看房型选项',
    room_options: '房型选项',
    addons: '附加服务',
    breakfast: '早餐 - ¥140/£15',
    spa: '水疗 - ¥240/£30',
    pool: '泳池通行证 - ¥95/£10',
    view_cart: '查看购物车',
    your_cart: '您的购物车',
    total: '总计',
    proceed_payment: '前往支付',
    add_room: '继续付款',
    payment: '支付',
    select_payment: '选择您的支付方式：',
    card: '卡',
    mobile_wallet: '移动钱包',
    qr: '二维码',
    crypto: '加密货币',
    thank_you: '感谢您！',
    want_receipt: '您需要收据吗？',
    email_receipt: '发送收据',
    print_receipt: '打印收据',
    want_recommend: '您想要旅游推荐吗？',
    send: '发送',
    finish: '不，谢谢',
    assistance_wait: '工作人员会尽快来帮助您。',
    request_assistance: '请求帮助',
    receipt_sent: '收据已发送！',
    printed: '已打印！',
    recommend_sent: '推荐已发送！',
    enter_room_number: '请输入您的房间号：',
    room_number_placeholder: '房间号',
    complete_checkout: '完成退房',
    checkout_success: '退房成功！感谢您的入住。',
    enter_valid_room: '请输入有效的房间号。',
    lower_buttons: '降低按钮',
    days_invalid: '请输入有效的天数（1-14天）。',
    days_too_low: '最少入住1天。',
    days_too_high: '最多入住14天。',
    days_required: '请输入您想入住的天数。',
    edit_addons: '编辑附加服务',
    days_label: '天',
    select_room: '请先选择房间。',
    edit_room_btn: '编辑房间',
    enter_reservation_code: '输入预订代码',
    payment_success: '付款成功',
    audio_assist_enabled: '已启用音频辅助',
    audio_assist_disabled: '音频辅助已禁用',
  },
};

//as most stakeholders are english it starts in english
let language = "English";

let cart = []
let historyStack = [];
let audioEnabled = false;
let selectedRoom = null;
let roomLocked = false;
let selectedDays = null;
let currentRoomIndex = null;


//translates all the page into the selected language so its understandable for a wide range of people
function translatePage() {
    //data keys where used for translations as it is easy to add
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    const text = translations[language] && translations[language][key] ? translations[language][key] : key;
    el.innerText = text;
  });

  //this part is similar to the one above but it gets the data keys for the placeholders
  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    const text = translations[language] && translations[language][key] ? translations[language][key] : "";
    el.placeholder = text;
  });

  const currentEl = document.getElementById("current-language");
  if (currentEl) currentEl.innerText = language;
}

//hides all the screens so that the user will only see the part that they are working on
function hideAll() {
  document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
}

function goTo(screenId, push = true) {
  if (push) {
    const visible = document.querySelector(".screen:not(.hidden)");
    if (visible && visible.id) historyStack.push(visible.id);
  }
  hideAll();

  const el = document.getElementById(screenId);
  if (el) el.classList.remove("hidden");

  translatePage();
  if (audioEnabled) readCurrentScreen();
  if (screenId === "screen-cart") updateCartDisplay();
}

//goes back to the last page the user was on incase of an accidental click
function goBack() {

    const prev = historyStack.pop();
    if (!prev) return;

    hideAll();
    document.getElementById(prev).classList.remove("hidden");

    if (prev === "screen-room-options") {
        const lastRoomIndex = cart.findIndex((item, index) => {
            for (let i = cart.length - 1; i >= 0; i--) {
                if (cart[i].isRoom || cart[i].type === "room") return i === index;
            }
            return false;
        });

        if (lastRoomIndex !== -1) {
            cart.splice(lastRoomIndex, 1);
        }

        roomLocked = false;
        selectedRoom = null;
        selectedDays = null;
        currentRoomIndex = null;
        document.getElementById("days").value = "";
        document.querySelectorAll("#screen-room-options .menu button").forEach(b => b.classList.remove("selected"));
    }

    if (prev === "screen-room-add-ons") {
        // Find the last room in the cart to edit
        for (let i = cart.length - 1; i >= 0; i--) {
            if (cart[i].type === "room") {
                currentRoomIndex = i;
                break;
            }
        }

        const room = cart[currentRoomIndex];
        document.querySelectorAll("#screen-room-add-ons .menu button").forEach(b => b.classList.remove("selected"));

        if (room && room.addons && room.addons.length > 0) {
            room.addons.forEach(addon => {
                let buttonId = '';
                if (addon.name === 'Breakfast') buttonId = 'addon-breakfast';
                else if (addon.name === 'Spa Access') buttonId = 'addon-spa';
                else if (addon.name === 'Pool Pass') buttonId = 'addon-pool';

                const button = document.getElementById(buttonId);
                if (button) button.classList.add("selected");
            });
        }
    }

    translatePage();
}

//starts the app after a language is selected
function startApp(selectedLang) {
  language = selectedLang;
  translatePage();
  historyStack = ["screen-language"];
  goTo("screen-accessibility", false);
}

//makes the text bigger and easier to see for people with eyesight issues
function toggleLargeText() {
  document.body.classList.toggle("large-text");
}

//makes the colors high contrast for people who are colour blind
function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}

//lowers the text and buttons to make it easier to reach
function toggleLowered() {
    const checked = document.getElementById("lowerButtonsToggle").checked;
    if (checked) document.body.classList.add("lowered");
    else document.body.classList.remove("lowered");
}

//anything on the screen will be read out loud for people who may struggle to see
function toggleAudio() {
    audioEnabled = !audioEnabled;

    if (audioEnabled) {
        alertTranslated("audio_assist_enabled");
        readCurrentScreen();

        //repeat audio button will appear
        showRepeatAudioButton();
    } else {
        alertTranslated("audio_assist_disabled");
        speechSynthesis.cancel();
        hideRepeatAudioButton();
    }
}

//shows the repat audio button incase the person listening misses something
function showRepeatAudioButton() {
  const btn = document.getElementById("repeat-audio");
  if (btn) btn.style.display = "block";
}

//hides the repeat audio button so it doesnt take up unnecessairy space
function hideRepeatAudioButton() {
  const btn = document.getElementById("repeat-audio");
  if (btn) btn.style.display = "none";
}

//checks if the reservation code works
function validateReservation() {
    const code = document.getElementById("reservationCode").value || "";

    if (code.trim() === "") {
        alertTranslated("enter_reservation_code");
        return;
    }

    //this part is a placeholder so that the addons are able to be added
    cart.push({
        type: "room",
        nameKey: "reservation",
        price: 0,
        days: 0,
        addons: []
    });
    currentRoomIndex = 0;

    document.querySelectorAll("#screen-room-add-ons .menu button").forEach(b => b.classList.remove("selected"));

    goTo("screen-room-add-ons");
}

//goes to the addons page to increase spending
function goToAddOns() {
  if (!selectedRoom) {
    alertTranslated("select_room");
    return;
  }

  //this gets the number of days the user has put in to calculate price later
  const daysInput = document.getElementById("days");

  //makes sure that the entered amount of days is valid
    const days = Number(daysInput.value);

    if (!Number.isInteger(days) || days < 1 || days > 14) {
        alertTranslated("days_invalid");
        return;
    }


  //calculates room price timesed by the amount of days
  const totalPrice = selectedRoom.price * days;


  if (currentRoomIndex !== null && currentRoomIndex < cart.length && cart[currentRoomIndex].type === "room") {
    cart[currentRoomIndex].nameKey = selectedRoom.nameKey;
    cart[currentRoomIndex].price = totalPrice;
    cart[currentRoomIndex].days = days;

    roomLocked = true;
    selectedRoom = null;

    goToCart();
    return;
  } else {
    cart.push({
      type: "room",
      nameKey: selectedRoom.nameKey,
      price: totalPrice,
      days: days,
      addons: []
    });
    currentRoomIndex = cart.length - 1;
  }

  roomLocked = true;
  selectedRoom = null;

  document.querySelectorAll("#screen-room-add-ons .menu button").forEach(b => b.classList.remove("selected"));

  goTo("screen-room-add-ons");
}


//takes the user to the assistance page for if they need help
function showAssistance() {
  const visible = document.querySelector(".screen:not(.hidden)");
  if (visible && visible.id) historyStack.push(visible.id);
  translatePage();
  goTo("screen-assistance", false);
    if (audioEnabled) {
        const visible = document.querySelector(".screen:not(.hidden)");
        const heading = visible?.querySelector("h1");
        if (heading) speak(heading.innerText);
    }
}

//this is the part that allows for the speech
function speak(text) {
  if (!audioEnabled) return;

  //settings for how quick the speech is and the pitch for if it is too quick for most people
  const utter = new SpeechSynthesisUtterance(text);
  utter.voice = getVoiceForLanguage();
  utter.rate = 1;
  utter.pitch = 1;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function readCurrentScreen() {
    if (!audioEnabled) return;

    //finds the visible page so that it can read what is on the screen as otherwise it would read the wrong page out loud
    const visible = document.querySelector(".screen:not(.hidden)");
    if (!visible) return;

    const elements = visible.querySelectorAll("h1, h2, h3, p, button, label, span");
    let collected = "";
    elements.forEach(el => {
        if (el.innerText.trim() !== "") {
            collected += el.innerText + ". ";
        }
    });
    speak(collected);
}

//tells the user that someone will come and help them and would be used to send a notifcation to the staff
function confirmAssistance() {
  alertTranslated("assistance_wait");
  const msg = document.getElementById("assistance-message");
  if (msg) msg.innerText = translations[language]["assistance_wait"] || msg.innerText;
}

//toggles each addon when pressed and the addons can be unselected
function toggleAddon(name, price) {
    if (currentRoomIndex === null) return;

    const room = cart[currentRoomIndex];

    let nameKey = '';
    if (name === 'Breakfast') nameKey = 'breakfast';
    else if (name === 'Spa Access') nameKey = 'spa';
    else if (name === 'Pool Pass') nameKey = 'pool';

    //this checks wether the addon is already selected
    const existingIndex = room.addons.findIndex(addon => addon.name === name);

    let buttonId = '';
    if (name === 'Breakfast') buttonId = 'addon-breakfast';
    else if (name === 'Spa Access') buttonId = 'addon-spa';
    else if (name === 'Pool Pass') buttonId = 'addon-pool';

    const button = document.getElementById(buttonId);

    //if the addon already is selected then it will be unselected
    if (existingIndex !== -1) {
        room.addons.splice(existingIndex, 1);

        if (button) button.classList.remove("selected");

        //if the addon isnt selected it will select it
    } else {
        room.addons.push({
            name,
            nameKey,
            price
        });
        if (button) button.classList.add("selected");
    }
}


//updates the cart display and adds whatever has been chosen
function updateCartDisplay() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  let total = 0;

  //loops through each item in the cart
  cart.forEach((room, roomIndex) => {
    if (room.type === "room") {

        //translates rooms name
      const roomName = translations[language][room.nameKey] || room.nameKey;

      //translates word for days
      const daysLabel = translations[language]["days_label"] || "days";

      //creates rooms display
      const roomP = document.createElement("p");
      const roomLeft = document.createElement("span");

      //sets the room with the name number of days and the price
      roomLeft.innerText = `${roomName} (${room.days} ${daysLabel}) - £${room.price}`;

      //this is used for the edit rooms button
      const editRoomBtn = document.createElement("button");
      editRoomBtn.innerText = translations[language]["edit_room_btn"] || "Edit Room";
      editRoomBtn.onclick = () => { editRoom(roomIndex); };
      editRoomBtn.style.marginLeft = "10px";

      //used for the edit addons button
      const editAddonsBtn = document.createElement("button");
      editAddonsBtn.innerText = translations[language]["edit_addons"] || "Edit Add-ons";
      editAddonsBtn.onclick = () => { editRoomAddons(roomIndex); };
      editAddonsBtn.style.marginLeft = "10px";

      //this is for removing the room
      const roomBtn = document.createElement("button");
      roomBtn.innerText = "X";
      roomBtn.onclick = () => { removeRoom(roomIndex); };

      roomP.appendChild(roomLeft);
      roomP.appendChild(editRoomBtn);
      roomP.appendChild(editAddonsBtn);
      roomP.appendChild(roomBtn);
      container.appendChild(roomP);

      total += Number(room.price);

      //shows the addons under the room it is with
      if (room.addons && room.addons.length > 0) {
        room.addons.forEach((addon, addonIndex) => {
          const addonName = translations[language][addon.nameKey] || addon.nameKey;

          const addonP = document.createElement("p");
          addonP.style.marginLeft = "30px";
          addonP.style.fontSize = "0.9em";

          const addonLeft = document.createElement("span");
          addonLeft.innerText = `+ ${addonName} - £${addon.price}`;

          //makes the remove button for the addons
          const addonBtn = document.createElement("button");
          addonBtn.innerText = "X";
          addonBtn.onclick = () => { removeAddon(roomIndex, addonIndex); };

          addonP.appendChild(addonLeft);
          addonP.appendChild(addonBtn);
          container.appendChild(addonP);

          total += Number(addon.price);
        });
      }
    }
  });

  document.getElementById("cart-total").innerText = total;
}

//takes the user to the cart screen
function goToCart() {
  const visible = document.querySelector(".screen:not(.hidden)");
  if (visible && visible.id === "screen-room-add-ons") {
    currentRoomIndex = null;
  }

  if (visible && visible.id) {
    historyStack.push(visible.id);
  }

  hideAll();
  document.getElementById("screen-cart").classList.remove("hidden");
  translatePage();
  updateCartDisplay();

  currentRoomIndex = null;
}

//tells the user there payment was successful and takes them to the last page
function finishPayment() {
  alertTranslated("payment_success");
  cart = [];
  updateCartDisplay();
  goTo("screen-end");
}

//this is what allows the popups to appear for the user
function alertTranslated(key) {
  const text = translations[language] && translations[language][key] ? translations[language][key] : key;

  showPopup(text);

  if(audioEnabled) {
    speak(text);
  }
}

//gets the right voice for the languages this had to be done as chinese wasnt able to be read and i decided it was better to add it for all
function getVoiceForLanguage() {
  const voices = speechSynthesis.getVoices();

  if (language === "中文") {
    return voices.find(v => v.lang.startsWith("zh")) || voices[0];
  }

  if (language === "Français") {
    return voices.find(v => v.lang.startsWith("fr")) || voices[0];
  }

  if (language === "Español") {
    return voices.find(v => v.lang.startsWith("es")) || voices[0];
  }
  return voices.find(v => v.lang.startsWith("en")) || voices[0];
}

//allows from the choice of the three rooms
function selectRoom(name, price) {

    //if the room is locked as a room is already selected show an error message to stop someone from adding two rooms before reaching the cart
    if (roomLocked) {
        alertTranslated("room_already_added");
        return;
    }

    let nameKey = '';
    if (name === 'Standard Room') nameKey = 'standard_room';
    else if (name === 'Deluxe Room') nameKey = 'deluxe_room';
    else if (name === 'Suite') nameKey = 'suite_room';

    selectedRoom = { name, price, nameKey };

    document
        .querySelectorAll("#screen-room-options .menu button")
        .forEach(b => b.classList.remove("selected"));

    event.target.classList.add("selected");
}

//allows the user to book more than one room
function addAnotherRoom() {

    roomLocked = false;
    selectedRoom = null;
    selectedDays = null;
    currentRoomIndex = null;

    //gets what is put into the amount of days area
    const daysInput = document.getElementById("days");
    if (daysInput) daysInput.value = "";

    document.querySelectorAll("#screen-room-options .menu button").forEach(b => b.classList.remove("selected"));

    goTo("screen-room-options");
}

function showPopup(message) {
  const popup = document.getElementById("custom-popup");

  popup.innerText = message;

  popup.classList.add("show");

  //amount of time the popup will be on the screen for
  setTimeout(function() {
    popup.classList.remove("show");
  }, 2000);
}

//allows the user to checkout from the hotel
function processCheckout() {
    //gets the user to enter the room they were staying in
    const roomNum = document.getElementById("roomNumber").value;

    if (!roomNum || roomNum < 1) {
        alertTranslated("enter_valid_room");
        return;
    }

    alertTranslated("checkout_success");

    location.reload();
}

//removes a room from the cart
function removeRoom(roomIndex) {
    if (roomIndex >= 0 && roomIndex < cart.length) {
        //removes room from the cart array
        cart.splice(roomIndex, 1);
        updateCartDisplay();
    }
}

//removes an addon from the cart
function removeAddon(roomIndex, addonIndex) {
    if (roomIndex >= 0 && roomIndex < cart.length) {
        const room = cart[roomIndex];
        if (room.addons && addonIndex >= 0 && addonIndex < room.addons.length) {
            //removes room from the cart array
            room.addons.splice(addonIndex, 1);
            updateCartDisplay();
        }
    }
}

//allows the user to change the room that is in their cart
function editRoom(roomIndex) {
  currentRoomIndex = roomIndex;

  const room = cart[roomIndex];

  roomLocked = false;

  //calculates the new price
  let perNightPrice = 80;
  if (room.nameKey === 'standard_room') perNightPrice = 80;
  else if (room.nameKey === 'deluxe_room') perNightPrice = 120;
  else if (room.nameKey === 'suite_room') perNightPrice = 200;

  let roomName = 'Standard Room';
  if (room.nameKey === 'standard_room') roomName = 'Standard Room';
  else if (room.nameKey === 'deluxe_room') roomName = 'Deluxe Room';
  else if (room.nameKey === 'suite_room') roomName = 'Suite';

  selectedRoom = {
    name: roomName,
    price: perNightPrice,
    nameKey: room.nameKey
  };

  goTo("screen-room-options");

  //gets what was put into the days box
  const daysInput = document.getElementById("days");
  if (daysInput) {
    daysInput.value = room.days;
  }

  //gets the room button that was clicked
  document.querySelectorAll("#screen-room-options .menu button").forEach(button => {
    const onclick = button.getAttribute('onclick');

    if (onclick &&
      ((room.nameKey === 'standard_room' && onclick.includes("'Standard Room', 80")) ||
        (room.nameKey === 'deluxe_room' && onclick.includes("'Deluxe Room', 120")) ||
        (room.nameKey === 'suite_room' && onclick.includes("'Suite', 200")))) {

      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

//allows the user to edit any of the addons that have chosen whether it is to remove or add
function editRoomAddons(roomIndex) {

    //picks what room we are editing the addons for
  currentRoomIndex = roomIndex;

  const room = cart[roomIndex];

  goTo("screen-room-add-ons");

  document.querySelectorAll("#screen-room-add-ons .menu button").forEach(b => b.classList.remove("selected"));

  //reselects the addons that where on that room before
  if (room.addons && room.addons.length > 0) {
    room.addons.forEach(addon => {
      let buttonId = '';
      if (addon.name === 'Breakfast') buttonId = 'addon-breakfast';
      else if (addon.name === 'Spa Access') buttonId = 'addon-spa';
      else if (addon.name === 'Pool Pass') buttonId = 'addon-pool';

      const button = document.getElementById(buttonId);
      if (button) button.classList.add("selected");
    });
  }
}

goTo("screen-language", false);
translatePage();