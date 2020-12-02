<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Json, Covid-19</title>
</head>
<body>
    <?php
      $covid ='';

      $api_covid = file_get_contents("https://covid19.mathdro.id/api/");

      echo "<br>";
      echo "Array";
      print_r($api_covid);
      echo "<br>";
      var_dump(json_decode($api_covid, true));
    ?>
</body>
</html>
