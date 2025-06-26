document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Set default as-of date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('as-of-date').value = today;
    
    // Calculate button click event
    document.getElementById('calculate-btn').addEventListener('click', calculateAge);
    
    // Also calculate when Enter key is pressed in date fields
    document.getElementById('birthdate').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateAge();
    });
    
    document.getElementById('as-of-date').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateAge();
    });
});

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const asOfDateInput = document.getElementById('as-of-date');
    
    const birthdate = new Date(birthdateInput.value);
    const asOfDate = asOfDateInput.value ? new Date(asOfDateInput.value) : new Date();
    
    // Validate inputs
    if (!birthdateInput.value) {
        alert('Please enter your date of birth');
        return;
    }
    
    if (birthdate > asOfDate) {
        alert('Birth date cannot be in the future');
        return;
    }
    
    // Calculate age
    const age = getAge(birthdate, asOfDate);
    
    // Display results
    document.getElementById('years').textContent = age.years;
    document.getElementById('months').textContent = age.months;
    document.getElementById('days').textContent = age.days;
    
    // Display additional results
    document.getElementById('total-months').textContent = age.totalMonths;
    document.getElementById('total-weeks').textContent = Math.floor(age.totalDays / 7);
    document.getElementById('total-days').textContent = age.totalDays;
}

function getAge(birthdate, asOfDate) {
    // Calculate total difference in milliseconds
    const diff = asOfDate - birthdate;
    
    // Calculate total days
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    // Calculate years
    const birthYear = birthdate.getFullYear();
    const asOfYear = asOfDate.getFullYear();
    let years = asOfYear - birthYear;
    
    // Check if birthday has occurred this year
    const birthMonth = birthdate.getMonth();
    const asOfMonth = asOfDate.getMonth();
    const birthDay = birthdate.getDate();
    const asOfDay = asOfDate.getDate();
    
    if (asOfMonth < birthMonth || (asOfMonth === birthMonth && asOfDay < birthDay)) {
        years--;
    }
    
    // Calculate months
    let months;
    if (asOfMonth >= birthMonth) {
        months = asOfMonth - birthMonth;
        if (asOfDay < birthDay) {
            months--;
        }
    } else {
        months = 12 - (birthMonth - asOfMonth);
        if (asOfDay < birthDay) {
            months--;
        }
    }
    
    // Calculate days
    let days;
    if (asOfDay >= birthDay) {
        days = asOfDay - birthDay;
    } else {
        const lastMonth = new Date(asOfDate.getFullYear(), asOfDate.getMonth() - 1, birthDay);
        days = Math.floor((asOfDate - lastMonth) / (1000 * 60 * 60 * 24));
    }
    
    // Calculate total months
    const totalMonths = years * 12 + months;
    
    return {
        years: years,
        months: months,
        days: days,
        totalDays: totalDays,
        totalMonths: totalMonths
    };
}