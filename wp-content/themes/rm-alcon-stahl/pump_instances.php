<?php
require_once 'pump/pump_types.php';
use function Pump\get_pump_types;
use function Pump\get_subtypes_by_type;
use function Pump\get_pumps_by_type;

get_header();

$type_id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($type_id) {

    // Get subtypes or pumps based on type
    $subtypes = get_subtypes_by_type($type_id); // Get subtypes
    $pumps = get_pumps_by_type($type_id); // Get pumps directly if no subtypes

    if ($subtypes && $subtypes->num_rows > 0) {
        // Display subtypes
        ?>
        <main>
            <section class="elements-list subtypes">
                <div class="container-fluid">
                    <div class="wrapper">
                        <div class="container">
                            <div class="elements-list__inner">
                                <div class="title">
                                    <h2>Subtypes for Pump Type</h2>
                                </div>
                                <?php while ($row = $subtypes->fetch_assoc()) : ?>
                                    <div class="element">
                                        <div class="element__inner">
                                            <div class="title">
                                                <p><?= $row['name']; ?></p>
                                            </div>
                                            <div class="cta-wrapper">
                                                <a
                                                    class="button button-diagonal-arrow-down"
                                                    href="subtype.php?id=<?= $row['id']; ?>">
                                                        View Pumps
                                                </a>
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
    } elseif ($pumps && $pumps->num_rows > 0) {
        // Display pumps if no subtypes
        ?>
        <main>
            <section class="elements-list pumps">
                <div class="container-fluid">
                    <div class="wrapper">
                        <div class="container">
                            <div class="elements-list__inner">
                                <div class="title">
                                    <h2>Pumps of Type</h2>
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
            echo "<p>Invalid type ID.</p>";
    }

get_footer();
