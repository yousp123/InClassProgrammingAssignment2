function toggleResult(letter) {
    const result = document.getElementById(`result${letter}`);
    const isHidden = result.style.display === 'none' || result.style.display === '';
    result.style.display = isHidden ? 'block' : 'none';
}
