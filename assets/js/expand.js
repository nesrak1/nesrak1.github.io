document.addEventListener('DOMContentLoaded', function() {
  var codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach(function(codeBlock) {
    var expandButton = codeBlock.querySelector('.expand-button');
    var content = codeBlock.querySelector('pre');
    var isExpanded = false;
	
	// for noscript users
    codeBlock.classList.remove('expanded');
	expandButton.style.display = 'inline';
	
    if (content.clientHeight <= 300) {
      expandButton.style.display = 'none';
      codeBlock.classList.add('expanded');
    } else {
      expandButton.addEventListener('click', function() {
        if (isExpanded) {
          codeBlock.classList.remove('expanded');
          expandButton.innerText = 'Expand';
        } else {
          codeBlock.classList.add('expanded');
          expandButton.innerText = 'Collapse';
        }
	  
        isExpanded = !isExpanded;
      });
	}

  });
});