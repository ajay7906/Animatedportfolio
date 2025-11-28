 // file select handler with validation + preview
  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      setFilePreview(null);
      return;
    }

    // type check
    if (!ALLOWED_IMAGE_TYPES.includes(f.type)) {
      setErrors((s) => ({ ...s, file: "Unsupported image type" }));
      setFile(null);
      return;
    }

    // size check
    if (f.size > MAX_IMAGE_SIZE) {
      setErrors((s) => ({ ...s, file: "Image exceeds 10MB limit" }));
      setFile(null);
      return;
    }

    setErrors((s) => ({ ...s, file: null }));
    setFile(f);

    // create preview
    try {
      const url = URL.createObjectURL(f);
      setFilePreview(url);
    } catch (err) {
      setFilePreview(null);
    }
  };