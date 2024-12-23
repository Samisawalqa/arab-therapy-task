    function openPopup() {
        document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function validateInputs() {
        const lastname = document.getElementById('lastname').value.trim();
        const firstname = document.getElementById('firstname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const companySize = document.getElementById('companySize').value.trim();



        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailRegex.test(email) && lastname && firstname && phoneNumber && companyName && companySize) {
            document.getElementById('submit-request').disabled = false; 
        } else {
            document.getElementById('submit-request').disabled = true; 
        }
    }

    document.getElementById('lastname').addEventListener('input', validateInputs);
    document.getElementById('firstname').addEventListener('input', validateInputs);
    document.getElementById('email').addEventListener('input', validateInputs);
    document.getElementById('phoneNumber').addEventListener('input', validateInputs);
    document.getElementById('companyName').addEventListener('input', validateInputs);
    document.getElementById('companySize').addEventListener('input', validateInputs);

    function submitForm() {
        const lastname = document.getElementById('lastname').value.trim();
        const firstname = document.getElementById('firstname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const companyName = document.getElementById('companyName').value.trim();
        const companySize = document.getElementById('companySize').value.trim();

        const data = {
            email: email,
            first_name: firstname,
            last_name: lastname,
            mobile: phoneNumber,
            organization_name: companyName,
            company_size: companySize
        };

        console.log(data);
        

        fetch('https://stg.arabtherapy.com/api/v1/forms/submit/9', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('تم إرسال البيانات بنجاح');
            closePopup();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('حدث خطأ، يرجى المحاولة مرة أخرى');
        });
    }

    document.getElementById('submit-request').addEventListener('click', submitForm);
