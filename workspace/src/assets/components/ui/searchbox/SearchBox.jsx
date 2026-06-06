import React, { useState, useRef } from "react";
import { Button } from "../../common/button/Button";
import { Icon } from "../../icons/Icon";

export default function SearchBox({
  className = "",
  placeholder = "무엇이든 질문해보세요.",
  onSubmit,
}) {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const resizeTextarea = (textarea) => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    resizeTextarea(e.target);
  };

  const handleClear = () => {
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = value.trim();
    if (!question) return;

    if (onSubmit) {
      onSubmit(question);
    }
    setValue("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return (
    <form className={`search-box ${className}`} onSubmit={handleSubmit}>
      <div className="search-area">
        <textarea
          ref={textareaRef}
          value={value}
          rows={1}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>

      <div className="btn-area">
        {value && (
          <Button
            className="btn-clear"
            variant="normal"
            type="button"
            onClick={handleClear}
            aria-label="입력 내용 삭제"
          >
            <Icon name="ic_btn_clear" size="md" strokeColor="none" />
          </Button>
        )}

        <Button
          className="btn-submit"
          variant="normal"
          type="submit"
          size="large"
          disabled={!value.trim()}
          aria-label="질문 전송"
        >
          <Icon name="ic_btn_submit" size="xl" strokeColor="none" />
        </Button>
      </div>
    </form>
  );
}
