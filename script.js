function getSelectedMuscleGroup() {
    var dropdown = document.getElementById("muscleGroup");
    var selectedMuscleGroup = dropdown.options[dropdown.selectedIndex].text;

    var displayDiv = document.getElementById("selectedMuscleGroup");
    displayDiv.textContent = "You selected: " + selectedMuscleGroup;
}
