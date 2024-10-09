document.addEventListener('DOMContentLoaded', () => {
    const water = document.getElementById('water');
    const levelRange = document.getElementById('levelRange');
    const levelLabel = document.getElementById('levelLabel');
    const levelInput = document.getElementById('levelInput');

    function setWaterLevel(level) {
        const heightPercentage = level + '%';
        water.style.height = heightPercentage;
        levelLabel.textContent = heightPercentage;
        levelRange.value = level;
        levelInput.value = level;
    }

    levelRange.addEventListener('input', (event) => {
        const level = event.target.value;
        setWaterLevel(level);
    });

    levelInput.addEventListener('input', (event) => {
        const level = event.target.value;
        if (level >= 0 && level <= 100) {
            setWaterLevel(level);
        }
    });
    // Inicializa com o valor padrão
    setWaterLevel(levelRange.value);
});