<?php
    $sRTL = '';
    $lang = '';
    $hRTL = '';

    if (isset($_GET['lang'])) {
        $lang = $_GET['lang'];
        
    }
    else {
        $lang = 'fr';
        
    }
    if (isset($_GET['RTL'])) {
        $sRTL = '_rtl'; // for the css path. Either "base.css" or "base_rtl.css" (inc/head.inc.php)
        $hRTL = ' lang="ar" dir="rtl"'; // arabic or hebrew are written from right to left. Never had to manage hebrew yet ...
        
    }
    else if (!isset($_GET['RTL']) && isset($_GET['lang'])){
        $hRTL = ' lang="'.$lang.'"';
        
    }
    else {
        $hRTL = ' lang="fr"';
        
    }
?>
<!DOCTYPE html>
<!--[if IE 6]><html class="msie msie6" <?php echo $hRTL; ?>><![endif]-->
<!--[if IE 7]><html class="msie msie7" <?php echo $hRTL; ?>><![endif]-->
<!--[if IE 8]><html class="msie msie8" <?php echo $hRTL; ?>><![endif]-->
<!--[if IE 9]><html class="msie msie9" <?php echo $hRTL; ?>><![endif]-->
<!--[if !IE]><!--><html <?php echo $hRTL; ?>><!-- <![endif]-->