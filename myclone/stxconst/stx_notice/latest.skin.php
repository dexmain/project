<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
$list_count = (is_array($list) && $list) ? count($list) : 0;
?>

<?php for ($i=0; $i<$list_count; $i++) {  ?>
<li>
    <?php           
        echo "<a href=\"".get_pretty_url($bo_table, $list[$i]['wr_id'])."\"> ";
            echo "<span class=news-board-txt>";
            echo $list[$i]['subject'];
            echo "</span>";
            echo "<span class=news-board-more></span>";
        echo "</a>";
    ?>    
</li>
<?php }?>