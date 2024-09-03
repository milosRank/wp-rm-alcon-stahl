<?php
    use function Pump\get_pumps_by_subtype;

    get_header();

    $subtype_id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    var_dump($subtype_id);

        if ($subtype_id) {

            // Get pumps by subtype
            $pumps = get_pumps_by_subtype($subtype_id);

            if ($pumps && $pumps->num_rows > 0) {
?>
        <main>
            <section class="elements-list pumps">
                <div class="container-fluid">
                    <div class="wrapper">
                        <div class="container">
                            <div class="elements-list__inner">
                                <div class="title">
                                    <h2>Pumps of Subtype</h2>
                                </div>
                                <?php while ($row = $pumps->fetch_assoc()) : ?>
                                    <div class="element">
                                        <div class="element__inner">
                                            <div class="image-box shadow">
                                                <img src="<?= $row['image']; ?>" alt="<?= $row['name']; ?>" width="240" height="240">
                                            </div>
                                            <div class="title">
                                                <p><?= $row['name']; ?></p>
                                            </div>
                                            <div class="description">
                                                <p><?= $row['description']; ?></p>
                                            </div>
                                        </div>
                                    </div>
                                <?php endwhile; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <?php
            } else {
                echo "<p>No results found.</p>";
            }
        } else {
            echo "<p>Invalid subtype ID.</p>";
    }

get_footer();
