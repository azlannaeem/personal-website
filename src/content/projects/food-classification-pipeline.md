---
title: "Food Classification ML Pipeline"
description: "End-to-end ML pipeline comparing logistic regression, decision trees, neural networks, and Random Forest for food preference classification — 83.3% test accuracy."
category: "ml"
stack: ["Python", "TensorFlow", "scikit-learn", "pandas", "NumPy", "Keras"]
repoUrl: "https://github.com/azlannaeem"
featured: true
date: 2025-04-01
---

## Overview

Built an end-to-end machine learning pipeline for classifying food preferences
from mixed-format survey data, comparing logistic regression, decision trees,
neural networks, and Random Forest models. The final Random Forest model
achieved 83.3% test accuracy.

## Highlights

- Engineered preprocessing for mixed-format survey responses using
  one-hot/multi-hot encoding, ordinal mappings, and imputation.
- Evaluated models with 5-fold stratified cross-validation, precision,
  recall, and F1-score to guard against overfitting on imbalanced classes.
- Shipped a production-ready inference script with consistent preprocessing
  so predictions on new data match training-time behavior exactly.
