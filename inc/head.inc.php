<meta charset="utf-8">
<link rel="stylesheet" href="css/base<?php echo $sRTL; ?>.css" type="text/css">
<?php
	// if param lang is set (http://mywebproject.com?lang=fr)
    if (isset($_GET['lang'])) {
        $css_file = 'css/lang_'.$_GET['lang'].'.css';
        if (file_exists($css_file)) {
        	
            echo '<link rel="stylesheet" href="'.$css_file.'" type="text/css">';
            
        }   
    }
?>

<?php 
//get current file name and print it in the <title>
$currentFile = $_SERVER["SCRIPT_NAME"];
$parts = Explode('/', $currentFile);
$currentFile = $parts[count($parts) - 1];
?>
<title><?php echo $currentFile; ?> | My project title</title>
<script>
    var hasJS = function() {
        var htmlTag = document.getElementsByTagName('html')[0];
        htmlTag.className = (htmlTag.className + ' ' || '') + 'hasJS';
    }();
</script>
