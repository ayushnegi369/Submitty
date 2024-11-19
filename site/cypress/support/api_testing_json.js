export const gradeable_json = {
    "title": "API Testing",
    "type": "Electronic File",
    "id": "api_testing",
    "instructions_url": "",
    "syllabus_bucket": "homework",
    "autograding_config_path": "\/usr\/local\/submitty\/more_autograding_examples\/python_simple_homework\/config",
    "bulk_upload": false,
    "team_gradeable": {
        "team_size_max": 3,
        "inherit_from": ""
    },
    "ta_grading": true,
    "grade_inquiries": true,
    "dates": {
        "ta_view_start_date": "1970-01-01 23:59:59",
        "grade_start_date": "9997-12-31 23:59:59",
        "grade_due_date": "9998-12-31 23:59:59",
        "grade_released_date": "9998-12-31 23:59:59",
        "team_lock_date": "9996-12-31 23:59:59",
        "submission_open_date": "1971-01-01 23:59:59",
        "submission_due_date": "9996-12-31 23:59:59",
        "grade_inquiry_start_date": "9999-01-01 23:59:59",
        "grade_inquiry_due_date": "9999-01-06 23:59:59",
        "has_due_date": true,
        "has_release_date": true,
        "late_submission_allowed": true,
        "late_days": 1
    },
    "rubric": [
        {
            "title": "Read Me",
            "ta_comment": "Deduct points if student makes use of builtin functions.",
            "student_comment": "Code should be organized into logical and intuitive functions.",
            "lower_clamp": 0,
            "default": 2,
            "max_value": 2,
            "upper_clamp": 2,
            "text": false,
            "peer_component": false,
            "page": 0,
            "is_itempool_linked": false,
            "itempool": "",
            "marks": [
                {
                    "points": 0,
                    "title": "Full Credit",
                    "publish": false
                },
                {
                    "points": -1,
                    "title": "Minor errors in Read Me",
                    "publish": false
                },
                {
                    "points": -2,
                    "title": "Major errors in Read Me or Read Me missing",
                    "publish": false
                }
            ]
        },
        {
            "title": "Coding Style",
            "ta_comment": "Reward student for properly using divide and conquer in code.",
            "student_comment": "Code should include a readme(block comments) section at the top.",
            "lower_clamp": 0,
            "default": 5,
            "max_value": 5,
            "upper_clamp": 5,
            "text": false,
            "peer_component": false,
            "page": 0,
            "is_itempool_linked": false,
            "itempool": "",
            "marks": [
                {
                    "points": 0,
                    "title": "Full Credit",
                    "publish": false
                },
                {
                    "points": -5,
                    "title": "Code is unreadable",
                    "publish": false
                },
                {
                    "points": -3,
                    "title": "Code is very difficult to understand",
                    "publish": false
                },
                {
                    "points": -1,
                    "title": "Code is difficult to understand",
                    "publish": false
                }
            ]
        },
        {
            "title": "Documentation",
            "ta_comment": "Reward student for including docstrings.",
            "student_comment": "Code may make use of classes and methods or just a bunch of functions.",
            "lower_clamp": 0,
            "default": 5,
            "max_value": 5,
            "upper_clamp": 5,
            "text": false,
            "peer_component": false,
            "page": 0,
            "is_itempool_linked": false,
            "itempool": "",
            "marks": [
                {
                    "points": 0,
                    "title": "Full Credit",
                    "publish": false
                },
                {
                    "points": -5,
                    "title": "No documentation",
                    "publish": false
                },
                {
                    "points": -3,
                    "title": "Very little documentation or documentation makes no sense",
                    "publish": false
                },
                {
                    "points": -1,
                    "title": "Way too much documentation and\/or documentation makes no sense",
                    "publish": false
                }
            ]
        },
        {
            "title": "Extra Credit",
            "ta_comment": "Code should be properly indented and readable.",
            "student_comment": "Code should include a readme(block comments) section at the top.",
            "lower_clamp": 0,
            "default": 0,
            "max_value": 0,
            "upper_clamp": 5,
            "text": false,
            "peer_component": false,
            "page": 0,
            "is_itempool_linked": false,
            "itempool": "",
            "marks": [
                {
                    "points": 0,
                    "title": "No Credit",
                    "publish": false
                },
                {
                    "points": 2,
                    "title": "Extra credit done poorly",
                    "publish": false
                },
                {
                    "points": 5,
                    "title": "Extra credit is acceptable",
                    "publish": false
                }
            ]
        }
    ]
}

export const rubric = [
    {
        "title": "Read Me",
        "ta_comment": "Deduct points if student makes use of builtin functions.",
        "student_comment": "Code should be organized into logical and intuitive functions.",
        "lower_clamp": 0,
        "default": 2,
        "max_value": 2,
        "upper_clamp": 2,
        "text": false,
        "peer_component": false,
        "page": 0,
        "is_itempool_linked": false,
        "itempool": "",
        "marks": [
            {
                "points": 0,
                "title": "Full Credit",
                "publish": false
            },
            {
                "points": -1,
                "title": "Minor errors in Read Me",
                "publish": false
            },
            {
                "points": -2,
                "title": "Major errors in Read Me or Read Me missing",
                "publish": false
            }
        ]
    },
    {
        "title": "Coding Style",
        "ta_comment": "Reward student for properly using divide and conquer in code.",
        "student_comment": "Code should include a readme(block comments) section at the top.",
        "lower_clamp": 0,
        "default": 5,
        "max_value": 5,
        "upper_clamp": 5,
        "text": false,
        "peer_component": false,
        "page": 0,
        "is_itempool_linked": false,
        "itempool": "",
        "marks": [
            {
                "points": 0,
                "title": "Full Credit",
                "publish": false
            },
            {
                "points": -5,
                "title": "Code is unreadable",
                "publish": false
            },
            {
                "points": -3,
                "title": "Code is very difficult to understand",
                "publish": false
            },
            {
                "points": -1,
                "title": "Code is difficult to understand",
                "publish": false
            }
        ]
    },
    {
        "title": "Documentation",
        "ta_comment": "Reward student for including docstrings.",
        "student_comment": "Code may make use of classes and methods or just a bunch of functions.",
        "lower_clamp": 0,
        "default": 5,
        "max_value": 5,
        "upper_clamp": 5,
        "text": false,
        "peer_component": false,
        "page": 0,
        "is_itempool_linked": false,
        "itempool": "",
        "marks": [
            {
                "points": 0,
                "title": "Full Credit",
                "publish": false
            },
            {
                "points": -5,
                "title": "No documentation",
                "publish": false
            },
            {
                "points": -3,
                "title": "Very little documentation or documentation makes no sense",
                "publish": false
            },
            {
                "points": -1,
                "title": "Way too much documentation and\/or documentation makes no sense",
                "publish": false
            }
        ]
    },
    {
        "title": "Extra Credit",
        "ta_comment": "Code should be properly indented and readable.",
        "student_comment": "Code should include a readme(block comments) section at the top.",
        "lower_clamp": 0,
        "default": 0,
        "max_value": 0,
        "upper_clamp": 5,
        "text": false,
        "peer_component": false,
        "page": 0,
        "is_itempool_linked": false,
        "itempool": "",
        "marks": [
            {
                "points": 0,
                "title": "No Credit",
                "publish": false
            },
            {
                "points": 2,
                "title": "Extra credit done poorly",
                "publish": false
            },
            {
                "points": 5,
                "title": "Extra credit is acceptable",
                "publish": false
            }
        ]
    }
]