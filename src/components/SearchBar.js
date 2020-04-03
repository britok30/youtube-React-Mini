import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div
                className="search-bar ui segment"
                style={{ background: "#000", border: "1px solid #fff" }}
            >
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label
                            style={{
                                color: "#fff",
                                fontSize: "20px"
                            }}
                        >
                            Video Search
                        </label>
                        <input
                            type="text"
                            style={{
                                background: "#333",
                                color: "#fff",
                                outline: "none"
                            }}
                            placeholder="Search"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
