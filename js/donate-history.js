document.getElementById('donate-noakhali')
    .addEventListener('click', function () {
        const addNoakhali = getInputFieldValueById('input-noakhali');

        if (isNaN(addNoakhali) || addNoakhali < 0 || addNoakhali === '') {
            alert('Invalid Donation amount.');
            return;
        }

        else {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - addNoakhali;
            document.getElementById('account-balance').innerText = newBalance;
            const noakhaliBalance = getTextFieldValueById('noakhali-balance');
            const newNoakhaliBalance = noakhaliBalance + addNoakhali;
            document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;

            // add to history
            document.getElementById('input-noakhali').value = valueNoakhaliAmount;
            const date = new Date();
            const currentDate = date.toString();
            const div = document.createElement('div');
            div.classList.add('border rounded-2xl');
            div.innerHTML = `
   <h2 class ="text-xl font-bold">${valueNoakhaliAmount} Taka is Donate for Flood at Noakhali, Bangladesh<h2>
   <p class = "bg-base-200 rounded-3xl">Date: ${currentDate}</p>
   `
            document.getElementById('history-container').appendChild(div);
        }
        document.getElementById('input-noakhali').value = '';

    });
document.getElementById('donate-feni')
    .addEventListener('click', function () {
        const addFeni = getInputFieldValueById('input-feni');

        if (isNaN(addFeni) || addFeni < 0 || addFeni === '') {
            alert('Invalid Donation amount.');
            return;
        }

        else {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - addFeni;
            document.getElementById('account-balance').innerText = newBalance;

            const feniBalance = getTextFieldValueById('feni-balance');
            const newFeniBalance = feniBalance + addFeni;
            document.getElementById('feni-balance').innerText = newFeniBalance;

            // add to history
            document.getElementById('input-feni').value = valueFeniAmount;
            const date = new Date();
            const currentDate = date.toString();
            const div = document.createElement('div');
            div.classList.add('border rounded-2xl');
            div.innerHTML = `
   <h2 class ="text-xl font-bold">${valueFeniAmount} Taka is Donate for Flood Relief in Feni,Bangladesh<h2>
   <p class = "bg-base-200 rounded-3xl">Date: ${currentDate}</p>
   `
            document.getElementById('history-container').appendChild(div);
        }
        document.getElementById('input-feni').value = '';

    });
document.getElementById('donate-quota')
    .addEventListener('click', function () {
        const addQuota = getInputFieldValueById('input-quota');

        if (isNaN(addQuota) || addQuota < 0 || addQuota === '') {
            alert('Invalid Donation amount.');
            return;
        }

        else {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - addQuota;
            document.getElementById('account-balance').innerText = newBalance;

            const quotaBalance = getTextFieldValueById('quota-balance');
            const newQuotaBalance = quotaBalance + addQuota;
            document.getElementById('quota-balance').innerText = newQuotaBalance;

            // add to history
            document.getElementById('input-quota').value = valueQuotaAmount;
            const date = new Date();
            const currentDate = date.toString();
            const div = document.createElement('div');
            div.classList.add('border rounded-2xl');
            div.innerHTML = `
   <h2 class ="text-xl font-bold">${valueQuotaAmount} Taka is Aid for Injured in the Quota Movement<h2>
   <p class = "bg-base-200 rounded-3xl">Date: ${currentDate}</p>
   `
            document.getElementById('history-container').appendChild(div);
        }
        document.getElementById('input-quota').value = '';

    });