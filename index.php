<?php include('inc/html.inc.php'); ?>
<head>
    <?php include('inc/head.inc.php'); ?>
</head>

<body>

    <div class="content">
        <?php for ($i = 1; $i <= 100; $i++) { ?>
            <br/>
        <?php } ?>
    </div>


    <div class="player"></div>

    <div class="columns-container">
        <div class="column column-left">
            <div class="text top">TOP</div>
            <div class="text bottom">BOTTOM</div>
        </div>


        <div class="column column-right">
            <div class="text top">TOP</div>
            <div class="text bottom">BOTTOM</div>
        </div>
    </div>


    <?php include('inc/scripts.inc.php'); ?>
</body>
</html>