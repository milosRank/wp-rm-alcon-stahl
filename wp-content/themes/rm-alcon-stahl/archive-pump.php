<?php
    require_once 'pump/pump_types.php';
    use function Pump\get_pump_types;
?>

<?php get_header(); ?>

    <!-- Main start -->
    <main>

        <!-- Elements list start -->
        <section class="elements-list pumps">
            <div class="container-fluid">
                <div class="wrapper">
                    <div class="container">

                        <!-- Elements list inner start -->
                        <div class="elements-list__inner">

                            <div class="title">
                                <h2>Allweiler</h2>
                            </div>
                            <div class="subtitle">
                                <p>RM Alkon Stahl u ponudi ima sledeće tipove pumpi nemačkog proizvođača ALLWEILER</p>
                                <div class="line-decoration"></div>
                            </div>

                            <div class="elements-holder items-auto">

                            <?php

                                // Get all pumps
                                $result = get_pump_types();

                                while ($row = $result->fetch_assoc()) : ?>

                                    <!-- Element start -->
                                    <div class="element">
                                        <div class="element__inner">
                                            <div class="image-box shadow">
                                                <img src="<?= $row['image']; ?>" alt="<?= $row['name']; ?>" width="<?= $row['image']; ?>" width="240" height="240">
                                            </div>
                                            <div class="title">
                                                <p><?= $row['name']; ?></p>
                                            </div>
                                            <div class="description">
                                                <p><?= $row['description']; ?></p>
                                            </div>
                                            <div class="cta-wrapper">
                                                <a
                                                    class="button button-diagonal-arrow-down"
                                                    href="./type.php?id=<?= $row['id']; ?>">
                                                        Detaljnije
                                                </a>
                                            </div>
                                        </div>
                                    </div> <!-- Element end -->

                                <?php endwhile; ?>

                            </div>

                        </div> <!-- Elements list inner end -->

                    </div>
                </div>
            </div>
        </section> <!-- Elements list end -->

    </main> <!-- Main end -->

<?php get_footer(); ?>