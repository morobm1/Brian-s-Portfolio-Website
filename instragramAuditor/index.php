<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Instragram auditor</title>
    </head>
    <body>
                <?php
                require_once('audit.php');

                $params = array(
                        'get_code' => isset( $_GET['code']) ? $_GET['code'] : '');

                        $ig = new instagram_basic_display_api( $params);
                ?>
                <h1>Instragram Basic Display API</h1>
                <a href="<?php echo $ig->authorizationUrl; ?>">
                        Authoriz w/ Instragram
                </a>    

</body>
</html>
