<?php

namespace app\models\notebook;

use app\libraries\Core;
use app\models\notebook\AbstractNotebookInput;

/**
 * @method bool getAllowMultiple()
 * @method bool getRandomizeOrder()
 * @method array getChoices()
 */
class SubmissionMultipleChoice extends AbstractNotebookInput {
    /** @var bool Whether or not the MC is multiselect */
    protected $allow_multiple;
    /** @var bool Whether or not the options inside MC will be Randomized */
    protected $randomize_order;
    /** @var array The collection of options for the MC */
    protected $choices;

    public function __construct(Core $core, array $details) {
        parent::__construct($core, $details);

        if ($details["allow_multiple"] == true) {
            $this->allow_multiple = true;
        }
        else {
            $this->allow_multiple = false;
        }
        if (isset($details["randomize_order"]) && $details["randomize_order"] == true) {
            $this->randomize_order = true;
        }
        else {
            $this->randomize_order = false;
        }
        $this->choices = $details["choices"];
    }
}
