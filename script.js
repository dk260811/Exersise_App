let selectedMuscles = [];

function toggleMuscle(muscle) {
    const index = selectedMuscles.indexOf(muscle);

    if (index === -1) {
        selectedMuscles.push(muscle);
    } else {
        selectedMuscles.splice(index, 1);
    }

    updateSelectedMuscles();
}

function updateSelectedMuscles() {
    const selectedMuscleGroup = document.getElementById('selectedMuscleGroup');
    selectedMuscleGroup.innerHTML = `Selected Muscle Groups: ${selectedMuscles.join(', ')}`;

    // Remove bold class from all toggle-items
    const toggleItems = document.querySelectorAll('.toggle-item');
    toggleItems.forEach(item => {
        item.classList.remove('bold');
    });

    // Add bold class to selected muscles
    selectedMuscles.forEach(muscle => {
        const element = document.querySelector(`.toggle-item[data-muscle="${muscle}"]`);
        if (element) {
            element.classList.add('bold');
        }
    });
}

function generateExercises() {
    const selectedMusclesString = selectedMuscles.join(', ');

    if (selectedMuscles.length > 0) {
        // Store selectedMuscles in sessionStorage (optional)
        sessionStorage.setItem('selectedMuscles', JSON.stringify(selectedMuscles));

        // Redirect to exercises.html with selected muscles in the query parameter
        window.location.href = `exercises.html?muscles=${selectedMusclesString}`;
    } else {
        alert(`Please select at least one muscle group.`);
    }
}
