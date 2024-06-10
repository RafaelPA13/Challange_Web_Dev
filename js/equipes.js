document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.teams-content-box .label')

    accordionItems.forEach(label => {
        label.addEventListener('click', () => {
            accordionItems.forEach(otherLabel => {
                if (otherLabel !== label) {
                    otherLabel.classList.remove('active')
                }
            })

            label.classList.toggle('active')
        })
    })
})

