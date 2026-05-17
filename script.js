function generateLabels() {
    const container = document.getElementById('labels-container');
    const text = document.getElementById('text-input').value;
    
    // تفريغ الحاوية قبل التوليد الجديد
    container.innerHTML = '';

    if (!text) {
        alert('الرجاء إدخال نص أولاً');
        return;
    }

    // لنفترض أننا نريد توليد 24 ملصقاً كمثال لملء صفحة A4
    const numberOfLabels = 24;

    for (let i = 0; i < numberOfLabels; i++) {
        // إنشاء عنصر الملصق
        const card = document.createElement('div');
        card.className = 'card';

        // إنشاء عنصر فرعي لكود الـ QR
        const qrDiv = document.createElement('div');
        card.appendChild(qrDiv);
        container.appendChild(card);

        // توليد كود الـ QR داخل العنصر
        new QRCode(qrDiv, {
            text: text,
            width: 100,
            height: 100,
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}