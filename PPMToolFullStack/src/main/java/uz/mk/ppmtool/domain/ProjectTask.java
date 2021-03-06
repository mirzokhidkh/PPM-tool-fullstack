package uz.mk.ppmtool.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ProjectTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(updatable = false,unique = true)
    private String projectSequence;
    @NotBlank(message = "Please include a project summary")
    private String summary;
    private String acceptanceCriteria;
    private String status;
    private Integer priority;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dueDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "backlog_id", nullable = false, updatable = false)
    @JsonIgnore
    private Backlog backlog;

    @Column(updatable = false)
    private String projectIdentifier;


    @JsonFormat(pattern = "yyyy-MM-dd")
    @CreationTimestamp
    @Column(updatable = false)
    private Date createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @UpdateTimestamp
    private Date updatedAt;


}
